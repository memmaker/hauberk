import '../../../engine.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class FirelightSpell extends Spell with ActionAbility {
  @override
  String get name => "Firelight";

  @override
  String get description => "TODO";

  @override
  final List<Arcanum> arcana = [Arcanum.fireweaving];

  @override
  int get arcanumLevel => 1; // TODO.

  @override
  int onGetFocusCost(HeroSave hero) => 4; // TODO.

  @override
  Action onGetAction(Game game) {
    // TODO: Illuminates area.
    throw UnimplementedError();
  }
}
