import 'dart:collection';

import 'package:piecemeal/piecemeal.dart';

import '../action/action.dart';
import '../hero/hero.dart';
import '../hero/hero_save.dart';
import '../stage/stage.dart';
import 'actor.dart';
import 'content.dart';
import 'energy.dart';
import 'event.dart';
import 'log.dart';

/// Root class for the game engine. All game state is contained within this.
class Game {
  final Content content;

  Log get log => hero.save.log;

  final _actions = Queue<Action>();
  final _reactions = <Action>[];

  /// The events that have occurred since the last call to [update()].
  final _events = <Event>[];

  /// The energy that tracks when the substances are ready to update.
  final _substanceEnergy = Energy();

  /// Substances work like a cellular automata. A normal cellular automata
  /// updates all cells simultaneously using double buffering. That wouldn't
  /// play nice with the game's action system, which likes to process each
  /// single action and its consequences to completion before moving to the
  /// next one.
  ///
  /// To handle that, we instead update substance cells one at a time. To avoid
  /// visible skew and artifacts from updating sequentially through the dungeon,
  /// we shuffle the cells and update them in random order. This is that order.
  final List<Vec> _substanceUpdateOrder = [];

  /// While the game is processing substance tiles, this is the index of the
  /// current tile's position in [_substanceUpdateOrder]. Otherwise, this is
  /// `null`.
  int? _substanceIndex;

  final int depth;

  Stage get stage => _stage;
  late final Stage _stage;

  final Hero hero;

  Game(this.content, this.depth, HeroSave save, {int? width, int? height})
    : hero = Hero(Vec.zero, save) {
    // TODO: Vary size?
    _stage = Stage(width ?? 100, height ?? 80, this);

    _stage.addActor(hero);

    _substanceUpdateOrder.addAll(_stage.bounds.inflate(-1));
    rng.shuffle(_substanceUpdateOrder);
  }

  Iterable<String> generate() sync* {
    // TODO: Do something useful with depth.
    late Vec heroPos;
    yield* content.buildStage(hero.save.lore, _stage, depth, (pos) {
      heroPos = pos;
    });

    yield "Calculating visibility";
    initHero(heroPos);
  }

  void initHero(Vec heroPos) {
    hero.setPosition(this, heroPos);
    _stage.refreshView();
  }

  UpdateResult update() {
    var madeProgress = false;

    while (true) {
      // Process any ongoing or pending actions.
      while (_actions.isNotEmpty) {
        var action = _actions.first;
        var result = action.perform();

        // We processed some action, so even if no events are created by it,
        // the game state still advanced.
        madeProgress = true;

        // Cascade through the alternates until we hit bottom.
        while (result.alternative != null) {
          _actions.removeFirst();
          action = result.alternative!;
          _actions.addFirst(action);
          result = action.perform();
        }

        // If there are reactions, process them before other pending actions.
        while (_reactions.isNotEmpty) {
          var reaction = _reactions.removeLast();
          var result = reaction.perform();

          // Cascade through the alternates until we hit bottom.
          while (result.alternative != null) {
            reaction = result.alternative!;
            result = reaction.perform();
          }

          assert(result.succeeded, "Reactions should never fail.");
        }

        stage.refreshView();

        if (result.done) {
          _actions.removeFirst();
          if (result.succeeded && action.consumesEnergy) {
            action.actor!.finishTurn(action);
            stage.advanceActor();
          }
        }

        // Return to the UI so that it can refresh the view when:
        // - The action isn't done yet, so it must be animating something.
        // - The hero takes a turn so that every step is visible even if
        //   nothing else is happening than walking or resting. We don't do
        //   this for other actors so that all monsters can take steps in
        //   "parallel".
        // - There are any other visible events to show.
        if (!result.done || action.actor == hero || _events.isNotEmpty) {
          return _madeProgress();
        }
      }

      // If we are in the middle of updating substances, keep working through
      // them.
      if (_substanceIndex != null) _updateSubstances();

      // If we get here, all pending actions are done, so advance to the next
      // tick until an actor moves.
      while (_actions.isEmpty) {
        var actor = stage.currentActor;

        // If we are still waiting for input for the actor, just return (again).
        if (actor.energy.canTakeTurn && actor.needsInput(this)) {
          return _makeResult(madeProgress);
        }

        if (actor.energy.canTakeTurn || actor.energy.gain(actor.speed)) {
          // If the actor can move now, but needs input from the user, just
          // return so we can wait for it.
          if (actor.needsInput(this)) return _makeResult(madeProgress);

          _actions.add(actor.getAction(this));
        } else {
          // This actor doesn't have enough energy yet, so move on to the next.
          stage.advanceActor();
        }

        // Each time we wrap around, process "idle" things that are ongoing and
        // speed independent.
        if (actor == hero) {
          if (_substanceEnergy.gain(Energy.normalSpeed)) {
            _substanceEnergy.spend();
            _substanceIndex = 0;
            _updateSubstances();
          }
        }
      }
    }
  }

  UpdateResult _makeResult(bool madeProgress) {
    if (madeProgress) return _madeProgress();
    return const WaitingUpdateResult._();
  }

  UpdateResult _madeProgress() {
    var result = ProgressUpdateResult(_events);
    _events.clear();
    return result;
  }

  void addAction(Action action) {
    if (action.isImmediate) {
      _reactions.add(action);
    } else {
      _actions.add(action);
    }
  }

  void addEvent(Event event) {
    _events.add(event);
  }

  /// Whether the hero can currently perceive [actor].
  ///
  /// Takes into account both visibility and [perception].
  bool heroCanPerceive(Actor actor) {
    if (stage[actor.pos].isVisible) return true;
    if (hero.perception.isActive &&
        (hero.pos - actor.pos) < hero.perception.intensity) {
      return true;
    }

    return false;
  }

  void _updateSubstances() {
    while (_substanceIndex! < _substanceUpdateOrder.length) {
      var pos = _substanceUpdateOrder[_substanceIndex!];
      var action = content.updateSubstance(stage, pos);
      _substanceIndex = _substanceIndex! + 1;

      if (action != null) {
        action.bindPassive(this, pos);
        _actions.add(action);
        return;
      }
    }

    // If we reach the end, we are done with them for now.
    _substanceIndex = null;
  }

  // TODO: Decide if we want to keep this. Now that there is hunger forcing the
  // player to explore, it doesn't seem strictly necessary.
  /// Over time, new monsters will appear in unexplored areas of the dungeon.
  /// This is to encourage players to not waste time: the more they linger, the
  /// more dangerous the remaining areas become.
  //  void trySpawnMonster() {
  //    if (!rng.oneIn(Option.spawnMonsterChance)) return;
  //
  //    // Try to place a new monster in unexplored areas.
  //    Vec pos = rng.vecInRect(stage.bounds);
  //
  //    final tile = stage[pos];
  //    if (tile.visible || tile.isExplored || !tile.isPassable) return;
  //    if (stage.actorAt(pos) != null) return;
  //
  //    stage.spawnMonster(area.pickBreed(level), pos);
  //  }
}

sealed class UpdateResult {
  const UpdateResult();
}

/// The game is blocked waiting for user input and nothing has happened.
final class WaitingUpdateResult extends UpdateResult {
  const WaitingUpdateResult._();
}

/// The game was able to take some action and advance the game state.
///
/// The UI in turn needs to draw to show those changes to the player.
final class ProgressUpdateResult extends UpdateResult {
  /// The interesting events that occurred in this update.
  final List<Event> events;

  ProgressUpdateResult(final List<Event> events) : events = events.toList();
}
