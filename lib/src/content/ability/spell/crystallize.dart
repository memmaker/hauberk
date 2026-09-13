import '../../../engine.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class CrystallizeSpell extends Spell with ActionAbility {
  @override
  String get name => "Crystallize";

  @override
  String get description => "TODO";

  @override
  final List<Arcanum> arcana = [Arcanum.icewinding];

  @override
  int get arcanumLevel => 6; // TODO.

  @override
  int onGetFocusCost(HeroSave hero) => 24; // TODO.

  @override
  Action onGetAction(Game game) {
    // TODO: Hurts and freezes nearby monsters. Any that die explode in ice
    // shards that hit nearby foes.
    throw UnimplementedError();
  }
}
