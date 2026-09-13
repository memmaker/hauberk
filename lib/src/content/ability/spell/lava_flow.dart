import '../../../engine.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class LavaFlowSpell extends Spell with ActionAbility {
  @override
  String get name => "Lava Flow";

  @override
  String get description => "TODO";

  @override
  final List<Arcanum> arcana = [Arcanum.earthshaping, Arcanum.fireweaving];

  @override
  int get arcanumLevel => 8; // TODO.

  @override
  int onGetFocusCost(HeroSave hero) => 24; // TODO.

  @override
  Action onGetAction(Game game) {
    // TODO: Sends out a meandering beam of lava that burns enemies.
    throw UnimplementedError();
  }
}
