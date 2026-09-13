import '../engine.dart';
import 'item/drops.dart';
import 'skill/skills.dart';

class Classes {
  // TODO: Better starting items?

  /// All of the known classes.
  static final List<HeroClass> all = [
    HeroClass(
      "Adventurer",
      "No special birthright, training, or inclination is needed to become "
          "an adventurer, simply the courage (or foolhardiness) to brave the "
          "wilds and live on one's wits. Adventurers are flexible and "
          "resourceful. They are masters of nothing, but able to learn a "
          "little of everything.",
      {
        Domains.archery: 5,
        Domains.body: 5,
        Domains.weaponry: 5,
        Domains.matter: 2,
      },
      [
        Foolhardy(),
        // TODO: Another.
      ],
      parseDrop("item"),
    ),

    HeroClass(
      "Barbarian",
      "It's not that barbarians are "
          "stupid. Many are, in fact, quite intelligent. It's just that they apply "
          "most of that intelligence towards deciding which weapon is best "
          "suited for splitting a monster's head open.\n\n"
          "Barbarians rely on the might of their bodies and the reassuring heft "
          "of their weapons. While they aren't above using a little magic "
          "here and there, they're most comfortable when those supernatural "
          "forces are safely ensconced in a piece of familiar gear.",
      {Domains.archery: 1, Domains.body: Skill.baseMax, Domains.weaponry: 5},
      [
        DualWield(),
        // TODO: Another class power.
      ],
      parseDrop("weapon"),
    ),

    HeroClass(
      "Sorceror",
      "While most rightly fear the awesome power and unpredictability of "
          "magic, sorcerors see it as a source of personal power and glory. "
          "Tapping magic in its raw elemental form, untethered to other "
          "objects or beings is the most dangerous form of spellcasting and "
          "most sorcerors have the scars to show for it. A small price to pay "
          "for those with the courage to tangle with the raw forces of the "
          "universe itself.",
      {Domains.body: 3, Domains.matter: Skill.baseMax},
      [
        // TODO: Class powers.
      ],
      parseDrop("item"),
    ),

    /*
    _class(
      "Warrior",
      parseDrop("weapon"),
      "It's not that warriors are "
          "stupid. Many are, in fact, quite intelligent. It's just that they "
          "tend to apply most of that intelligence towards deciding which "
          "weapon is best suited for splitting a monster's head open.\n\n"
          "Warriors rely on the might of their bodies and the reassuring heft "
          "of their equipment. While they aren't above using a little magic "
          "here and there, they're most comfortable when those supernatural "
          "forces are safely ensconced in a piece of familiar gear.",
      const [
        // TODO: Come up with class powers.
      ],
      {
        Domains.archery: Skill.baseMax,
        Domains.body: 2,
        Domains.weaponry: Skill.baseMax,
      },
    ),

    _class(
      "Mage",
      // TODO: If we bring back spellbooks, do one here.
      parseDrop("item"),
      "Where others rightly fear the awesome power and unpredictability of "
          "magic, mages see it as a source of personal power and glory. Magic "
          "demands great sacrifices of anyone who dares to wield it directly. "
          "Mages who have devoted their lives to it have little time to master "
          "other arts and skills. But the rewards in return can be great for "
          "anyone willing to dance with the raw forces of nature (as well as "
          "some less natural forces).",
      const [
        // TODO: Come up with class powers.
      ],
      {Domains.archery: 1, Domains.spell: Skill.baseMax},
    ),
    */

    // TODO: Rogues. Priests. Subclasses.
  ];
}

class DualWield extends Power {
  @override
  String get name => "Dual Wield";

  @override
  String get description =>
      "Attack with a weapon in each hand as effectively as lesser weaklings "
      "do with only a single weapon in their puny arms.";

  @override
  double modifyHeft(Hero hero, List<Item> weapons, double totalHeft) {
    if (weapons.isEmpty) return totalHeft;

    // If dual-wielding, take the average of their total heft.
    return totalHeft / weapons.length;
  }
}

class Foolhardy extends Power {
  @override
  String get name => "Foolhardy";

  @override
  String get description => "An aura of good luck makes you 10% harder to hit.";

  @override
  Iterable<Defense> defenses(Hero hero) => const [
    Defense(10, "Your luck protects you!"),
  ];
}
