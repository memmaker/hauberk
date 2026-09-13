import '../../../engine.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class BallLightningSpell extends Spell with ActionAbility {
  @override
  String get name => "Ball Lightning";

  @override
  String get description => "TODO";

  @override
  final List<Arcanum> arcana = [Arcanum.arcing];

  @override
  int get arcanumLevel => 8; // TODO.

  @override
  int onGetFocusCost(HeroSave hero) => 24; // TODO.

  @override
  Action onGetAction(Game game) {
    // TODO: Sends out a slow-moving ball of lightning that goes through
    // monsters and hits several of them.
    throw UnimplementedError();
  }
}
