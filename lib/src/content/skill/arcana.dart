import '../../engine.dart';
import 'skills.dart';

/// A "spell school" skill that enables a certain category of spells and makes
/// them more powerful.
class Arcanum extends Skill {
  // TODO: Better descriptions.
  static final Arcanum arcing = Arcanum._(
    "Arcing",
    Domains.matter,
    "Cast spells of lightning.",
  );

  static final Arcanum earthshaping = Arcanum._(
    "Earthshaping",
    Domains.matter,
    "Cast spells of earth.",
  );

  static final Arcanum fireweaving = Arcanum._(
    "Fireweaving",
    Domains.matter,
    "Cast spells of fire.",
  );

  static final Arcanum icewinding = Arcanum._(
    "Icewinding",
    Domains.matter,
    "Cast spells of cold.",
  );

  static final Arcanum watercoursing = Arcanum._(
    "Watercoursing",
    Domains.matter,
    "Cast spells of water.",
  );

  static final Arcanum windchasing = Arcanum._(
    "Windchasing",
    Domains.matter,
    "Cast spells of air.",
  );

  @override
  final String name;

  @override
  final Domain domain;

  @override
  final String description;

  Arcanum._(this.name, this.domain, this.description);

  // TODO: Better description.
  @override
  String levelDescription(int level) => "Cast $name spells better.";
}
