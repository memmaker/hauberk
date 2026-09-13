import '../../../engine.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class ChainLightningSpell extends Spell with ActionAbility {
  @override
  String get name => "Chain Lightning";

  @override
  String get description => "TODO";

  @override
  final List<Arcanum> arcana = [Arcanum.arcing];

  @override
  int get arcanumLevel => 6; // TODO.

  @override
  int onGetFocusCost(HeroSave hero) => 24; // TODO.

  @override
  Action onGetAction(Game game) {
    // TODO: Arcs to nearby monsters and then from them to others.
    throw UnimplementedError();
  }
}
