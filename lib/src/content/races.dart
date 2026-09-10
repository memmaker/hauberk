import '../engine.dart';

class Races {
  static final fae = Race(
    "Fae",
    "What can be said about the fae folk that is known to be true? "
        "Dimunitive and easily harmed, they survive by cloaking themselves "
        "in fables, tricks, and subterfuge. Quick to anger and quick to "
        "forgive, the fae live each moment as if it may be their last, "
        "bright-burning flames all too aware of how easily they may be "
        "snuffed out.",
    [FairyDust(), Flitter()],
    {
      Stat.strength: 0.6,
      Stat.agility: 1.6,
      Stat.vitality: 0.7,
      Stat.intellect: 1.1,
    },
  );

  /// All of the known races.
  static final List<Race> all = [
    Race(
      "Dwarf",
      "It takes a certain kind of person to be willing to spend their life "
          "deep under the Earth, toiling away in darkness. Dwarves aren't just "
          "willing, but delight in it. Solid, impenetrable and somewhat dim, "
          "dwarves have much in common with the mines they love.",
      const [
        // TODO: Come up with race powers.
      ],
      {
        Stat.strength: 1.3,
        Stat.agility: 0.6,
        Stat.vitality: 1.4,
        Stat.intellect: 0.7,
      },
    ),

    Race(
      "Elf",
      "There are few things elves are not good at, as any elf will be "
          "quick to inform you. Clever, quick on their feet, and surprisingly "
          "strong for how they look. Which is radiantly beautiful, naturally.",
      const [
        // TODO: Come up with race powers.
      ],
      {
        Stat.strength: 1.2,
        Stat.agility: 1.3,
        Stat.vitality: 1.0,
        Stat.intellect: 1.2,
      },
    ),
    fae,

    Race(
      "Gnome",
      "Gnomes are gentle, quiet folk, difficult to arouse to anger (unless "
          "you interrupt one while reading). Most live a life of the mind, "
          "seeking knowledge more than adventure. But this insatiable desire "
          "for the former, on many occasions, leads them into the jaws of the "
          "latter.",
      [
        SingleMinded(),
        // TODO: Another.
      ],
      {
        Stat.strength: 0.7,
        Stat.agility: 0.8,
        Stat.vitality: 1.0,
        Stat.intellect: 1.5,
      },
    ),

    Race(
      "Human",
      "Humans excel at nothing, but nor are they particularly weak in any "
          "area. Most other races consider humans sort of like mice: pesky "
          "creatures who seem do little but breed, which they do with "
          "great devotion.",
      [
        QuickStudy(),
        // TODO: Another.
      ],
      {
        Stat.strength: 1.0,
        Stat.agility: 1.0,
        Stat.vitality: 1.0,
        Stat.intellect: 1.0,
      },
    ),
  ];
}

/// This power doesn't actually do anything. Instead, the [FairyDustAbility] is
/// gated on the hero being a fae.
///
/// This is just here to show up in the new hero screen.
class FairyDust extends Power {
  @override
  String get name => "Fairy Dust";

  @override
  String get description =>
      "A sprinkle of glimmering magic dazzles all nearby foes.";
}

/// This power doesn't actually do anything. Instead, the [FlitterAbility] is
/// gated on the hero being a fae.
///
/// This is just here to show up in the new hero screen.
class Flitter extends Power {
  @override
  String get name => "Flitter";

  @override
  String get description =>
      "Take flight and soar over the ground, at least until you get tired.";
}

class QuickStudy extends Power {
  @override
  String get name => "Quick Study";

  @override
  String get description => "Gain 20% more experience when killing a monster.";

  @override
  double modifyExperienceGain(
    HeroSave hero,
    Monster monster,
    double experience,
  ) {
    return experience * 1.2;
  }
}

class SingleMinded extends Power {
  @override
  String get name => "Single-minded";

  @override
  String get description =>
      "Reduce the focus lost when performing an ability by 30%.";

  @override
  int modifyFocusCost(HeroSave hero, Ability ability, int focus) {
    if (focus == 0) return 0;

    // Round down so that it always reduces it at least a little, but don't
    // round down to nothing.
    focus = (focus * 0.7).floor();
    if (focus == 0) return 1;

    return focus;
  }
}
