import '../../../engine.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class LightningBoltSpell extends Spell with ActionAbility {
  @override
  String get name => "Lightning Bolt";

  @override
  String get description => "TODO";

  @override
  final List<Arcanum> arcana = [Arcanum.arcing];

  @override
  int get arcanumLevel => 4; // TODO.

  @override
  int onGetFocusCost(HeroSave hero) => 24; // TODO.

  @override
  Action onGetAction(Game game) {
    // TODO: Sends out a forking bolt of lightning.
    throw UnimplementedError();
  }
}
