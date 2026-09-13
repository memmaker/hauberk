import '../../../engine.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class ImmolationSpell extends Spell with ActionAbility {
  @override
  String get name => "Immolation";

  @override
  String get description => "TODO";

  @override
  final List<Arcanum> arcana = [Arcanum.fireweaving];

  @override
  int get arcanumLevel => 6; // TODO.

  @override
  int onGetFocusCost(HeroSave hero) => 24; // TODO.

  @override
  Action onGetAction(Game game) {
    // TODO: Does fire damage to a single monster in range. If the monster dies,
    // it explodes, doing area damage.
    throw UnimplementedError();
  }
}
