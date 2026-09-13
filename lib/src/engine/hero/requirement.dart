import '../core/game.dart';
import 'race.dart';
import 'skill.dart';

/// A condition that must be met before an [Ability] can be used.
abstract class Requirement {
  /// Describes the requirement to the user.
  String get description;

  /// If the requirement is met, returns `null`. Otherwise returns a string
  /// describing why it is not met.
  String? check(Game game);
}

class RaceRequirement extends Requirement {
  final Race _race;

  RaceRequirement(this._race);

  @override
  String? check(Game game) {
    if (game.hero.save.race != _race) return "Not a ${_race.name}";

    return null;
  }

  @override
  String get description => "You must be a ${_race.name}";
}

class SkillLevelRequirement extends Requirement {
  final Skill skill;
  final int level;

  SkillLevelRequirement(this.skill, this.level);

  @override
  String get description =>
      "You must be at level $level or higher in ${skill.name}.";

  @override
  String? check(Game game) {
    if (game.hero.skills.level(skill) >= level) return null;
    return "Not enough ${skill.name}";
  }
}

class IntellectRequirement extends Requirement {
  final int _intellect;

  IntellectRequirement(this._intellect);

  @override
  String get description => "You need at least $_intellect intellect.";

  @override
  String? check(Game game) {
    if (game.hero.save.intellect.value >= _intellect) return null;
    return "You aren't smart enough.";
  }
}
