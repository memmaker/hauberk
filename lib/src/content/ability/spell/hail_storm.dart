import '../../../engine.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class HailStormSpell extends Spell with ActionAbility {
  @override
  String get name => "Hail Storm";

  @override
  String get description => "TODO";

  @override
  final List<Arcanum> arcana = [Arcanum.icewinding, Arcanum.windchasing];

  @override
  int get arcanumLevel => 8; // TODO.

  @override
  int onGetFocusCost(HeroSave hero) => 24; // TODO.

  @override
  Action onGetAction(Game game) {
    // TODO: Hits a random set of tiles around the hero.
    throw UnimplementedError();
  }
}
