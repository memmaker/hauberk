import '../../../engine.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class MeltStoneSpell extends Spell with ActionAbility {
  @override
  String get name => "Melt Stone";

  @override
  String get description => "TODO";

  @override
  final List<Arcanum> arcana = [Arcanum.earthshaping];

  @override
  int get arcanumLevel => 3; // TODO.

  @override
  int onGetFocusCost(HeroSave hero) => 24; // TODO.

  @override
  Action onGetAction(Game game) {
    // TODO: Turns stone tiles into floor.
    throw UnimplementedError();
  }
}
