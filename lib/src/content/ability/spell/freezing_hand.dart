import '../../../engine.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class FreezingHandSpell extends Spell with ActionAbility {
  @override
  String get name => "Freezing Hand";

  @override
  String get description => "TODO";

  @override
  final List<Arcanum> arcana = [Arcanum.icewinding];

  @override
  int get arcanumLevel => 4; // TODO.

  @override
  int onGetFocusCost(HeroSave hero) => 24; // TODO.

  @override
  Action onGetAction(Game game) {
    // TODO: Hurts and freezes adjacent monster.
    throw UnimplementedError();
  }
}
