import '../../../engine.dart';
import '../../skill/arcana.dart';

// TODO: The player should have to spend experience to earn spell abilities.

abstract class Spell extends Ability {
  List<Arcanum> get arcana;

  /// The arcanum level needed to cast this spell.
  int get arcanumLevel;

  @override
  List<Requirement> get requirements => [
    ArcanaRequirement(arcana, arcanumLevel),
  ];

  /// Gets the effective power of the spell.
  ///
  /// Starts at zero when the spell is first made available and goes up as
  /// additional levels of related arcana are gained.
  int spellPower(HeroSave hero) {
    var power = 0;

    // Every level in every arcanum for the spell above the required level
    // increases the spell's power.
    for (var arcanum in arcana) {
      var level = hero.skills.level(arcanum);
      if (level >= arcanumLevel) power += level;
    }

    return power;
  }
}

/// Checks that the hero has at least [_level] in one of [_arcana].
class ArcanaRequirement extends Requirement {
  final List<Arcanum> _arcana;
  final int _level;

  ArcanaRequirement(this._arcana, this._level);

  @override
  String get description =>
      "You must be at level $_level or higher in ${_describeNames()}.";

  @override
  String? check(Game game) {
    for (var arcanum in _arcana) {
      if (game.hero.skills.level(arcanum) >= _level) return null;
    }

    return "Not enough ${_describeNames()}";
  }

  String _describeNames() => switch (_arcana) {
    [] => throw StateError("Should have at least one arcanum."),
    [var one] => one.name,
    [var one, var two] => "${one.name} or ${two.name}",
    [...var multiple, var last] =>
      "${multiple.map((arcanum) => arcanum.name).join(", ")}, "
          "or ${last.name}",
  };
}

// TODO: Bring this back when there is a class for it.
/*
TargetSpell(
  "Brilliant Beam",
  SpellSchool.sorcery,
  description: "Emits a blinding beam of radiance.",
  spellLevel: 2,
  focus: 24,
  range: 12,
  (spell, game, target) {
    var attack = Attack(
      Prop("light"),
      "sear",
      10,
      range: spell.range,
      element: Elements.light,
    );
    return RayAction.narrowCone(game.hero.pos, target, attack.createHit());
  },
),
*/

// TODO: Bring these back when there is a class for them.
// TODO: These spells are all kind of similar and boring. Might be good if
// they had some differences. Maybe some could try to teleport specifically
// far away from monsters, etc.
/*
ActionSpell(
  "Flee",
  SpellSchool.divination,
  description: "Teleports the hero a short distance away.",
  spellLevel: 1,
  focus: 16,
  (spell, game) => TeleportAction(8),
),
ActionSpell(
  "Escape",
  SpellSchool.divination,
  description: "Teleports the hero away.",
  spellLevel: 2,
  focus: 25,
  (spell, game) => TeleportAction(16),
),
ActionSpell(
  "Disappear",
  SpellSchool.divination,
  description: "Moves the hero across the dungeon.",
  spellLevel: 4,
  focus: 50,
  (spell, game) => TeleportAction(100),
),
ActionSpell(
  "Sense Items",
  SpellSchool.divination,
  description: "Detect nearby items.",
  spellLevel: 1,
  focus: 40,
  (spell, game) => DetectAction([DetectType.item], 20),
),
*/
