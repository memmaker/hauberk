import '../../../engine.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class GustSpell extends Spell with ActionAbility {
  @override
  String get name => "Gust";

  @override
  String get description => "TODO";

  @override
  final List<Arcanum> arcana = [Arcanum.windchasing];

  @override
  int get arcanumLevel => 1; // TODO.

  @override
  int onGetFocusCost(HeroSave hero) => 4; // TODO.

  @override
  Action onGetAction(Game game) {
    // TODO: Does a cone attack that pushes back enemies it hits.
    throw UnimplementedError();
  }
}
