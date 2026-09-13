import '../../../engine.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class SparksSpell extends Spell with ActionAbility {
  @override
  String get name => "Sparks";

  @override
  String get description => "TODO";

  @override
  final List<Arcanum> arcana = [Arcanum.arcing];

  @override
  int get arcanumLevel => 1; // TODO.

  @override
  int onGetFocusCost(HeroSave hero) => 10; // TODO.

  @override
  Action onGetAction(Game game) {
    // TODO: Send out a shower of meandering sparks that do damage if they hit
    // a monster or spread illumination if they hit a wall.
    throw UnimplementedError();
  }
}
