// RVIP: auto-explore and stairs walk.
import 'dart:collection';

import 'package:piecemeal/piecemeal.dart';

import '../action/action.dart';
import '../action/walk.dart';
import '../core/game.dart';
import '../item/item.dart';
import '../monster/monster.dart';
import '../stage/stage.dart';
import 'behavior.dart';
import 'hero.dart';

/// Per-level memory: cells the hero stood on, items already noticed.
final _visited = Expando<Set<Vec>>();
final _seenItems = Expando<Set<Item>>();

/// Walks one step per turn over the explored map toward the nearest frontier
/// (or unvisited item). With [goal], walks to the nearest cell matching it
/// instead (stairs) and stops there.
class ExploreBehavior extends Behavior {
  final bool Function(Vec pos)? goal;

  /// Whether the goal is entered by stepping onto it (town portals): then stop
  /// next to it unless this is the first step of the press.
  final bool stepIntoGoal;

  Direction? _dir;
  late Game _game;
  Vec? _last;
  bool _door = false;
  int _messages = 0;
  int? _monstersAtStart;

  ExploreBehavior({this.goal, this.stepIntoGoal = false});

  @override
  bool canPerform(Game game, Hero hero) {
    _game = game;
    if (_dir != null) return true;

    var stage = game.stage;
    var visited = _visited[stage] ??= {};
    var seenItems = _seenItems[stage] ??= {};
    visited.add(hero.pos);

    var first = _last == null;
    if (!first) {
      // A step that didn't move (silent attack, bump) or any new message.
      if (hero.pos == _last && !_door) return false;
      if (!_door && game.log.total != _messages) return false;
    }
    _door = false;

    var monsters = [
      for (var actor in stage.actors)
        if (actor is Monster && game.heroCanPerceive(actor)) actor,
    ];
    if (goal == null) {
      if (monsters.isNotEmpty) {
        game.log.message("In view: {1}.", monsters.first);
        return false;
      }
    } else {
      _monstersAtStart ??= monsters.length;
      if (monsters.length > _monstersAtStart!) {
        game.log.message("In view: {1}.", monsters.last);
        return false;
      }
    }

    if (goal == null) {
      Item? newItem;
      stage.forEachItem((item, pos) {
        if (stage[pos].isVisible && seenItems.add(item) && !first) {
          newItem ??= item;
        }
      });
      if (newItem != null) {
        game.log.message("You see {1}.", newItem);
        return false;
      }
    }

    var isGoal =
        goal ??
        (Vec pos) =>
            !visited.contains(pos) &&
            stage[pos].portal == null &&
            (stage.itemsAt(pos).isNotEmpty ||
                pos.neighbors.any(
                  (n) => stage.bounds.contains(n) && !stage[n].isExplored,
                ));

    if (goal != null && goal!(hero.pos)) {
      if (!stepIntoGoal) {
        game.log.message("You are on the stairs. Press again to take them.");
      }
      return false;
    }

    var path = _firstStep(game, hero, isGoal);
    if (path == null) {
      game.log.message(
        goal != null
            ? "You don't know where the stairs are."
            : !stage[hero.pos].isVisible
            ? "It is too dark to explore. Light a light source."
            : "Nothing left to explore. Try searching for secret doors.",
      );
      return false;
    }

    var (dir, length) = path;
    if (stepIntoGoal && length == 1 && !first) {
      game.log.message("Press again to enter.");
      return false;
    }

    _dir = dir;
    return true;
  }

  @override
  Action getAction(Hero hero) {
    var dir = _dir!;
    _dir = null;
    _last = hero.pos;
    _messages = _game.log.total;
    _door = _game.stage[hero.pos + dir].isClosedDoor;
    return WalkAction(dir);
  }

  /// BFS over explored, enterable cells. Returns the first step and the path
  /// length to the nearest cell matching [isGoal].
  (Direction, int)? _firstStep(
    Game game,
    Hero hero,
    bool Function(Vec) isGoal,
  ) {
    Stage stage = game.stage;
    var firstDir = <Vec, (Direction, int)>{};
    var queue = Queue<Vec>();
    for (var dir in Direction.all) {
      var pos = hero.pos + dir;
      if (_passable(game, pos, isGoal)) {
        firstDir[pos] = (dir, 1);
        queue.add(pos);
      }
    }

    while (queue.isNotEmpty) {
      var pos = queue.removeFirst();
      var (dir, length) = firstDir[pos]!;
      if (isGoal(pos)) return (dir, length);
      // Don't walk through portals (shops etc.) on the way.
      if (stage[pos].portal != null) continue;
      for (var step in Direction.all) {
        var next = pos + step;
        if (next == hero.pos || firstDir.containsKey(next)) continue;
        if (!_passable(game, next, isGoal)) continue;
        firstDir[next] = (dir, length + 1);
        queue.add(next);
      }
    }
    return null;
  }

  bool _passable(Game game, Vec pos, bool Function(Vec) isGoal) {
    var stage = game.stage;
    if (!stage.bounds.contains(pos)) return false;
    var tile = stage[pos];
    if (!tile.isExplored || !tile.isTraversable) return false;
    // Avoid harmful substances (fire, poison gas).
    if (tile.substance > 0) return false;
    // Portals only as the goal.
    if (tile.portal != null && !isGoal(pos)) return false;
    // Path around visible monsters.
    var actor = stage.actorAt(pos);
    if (actor != null && tile.isVisible) return false;
    return true;
  }
}
