import '../../engine.dart';
import '../races.dart';

class FlitterAbility extends Ability with ActionAbility {
  @override
  String get name => "Flitter";

  @override
  String get description => "TODO";

  @override
  Requirement get requirement => RaceRequirement(Races.fae);

  @override
  Action onGetAction(Game game) => FlyAction();
}

class FlyAction extends Action {
  @override
  ActionResult onPerform() {
    var hero = game.hero;

    // TODO: Should this spend focus? Can they immediately perform it again
    // when it ends or is there a cooldown?
    if (hero.flying.isActive) {
      hero.flying.cancel();
    } else {
      var duration = lerpInt(hero.strength.value, 0, Stat.modifiedMax, 3, 20);
      hero.flying.activate(duration);
      log("{1} unfold your wings and take flight.", actor);
    }

    return ActionResult.success;
  }
}
