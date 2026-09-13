import '../../../engine.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class SandstormSpell extends Spell with ActionAbility {
  @override
  String get name => "Sandstorm";

  @override
  String get description => "TODO";

  @override
  final List<Arcanum> arcana = [Arcanum.earthshaping, Arcanum.windchasing];

  @override
  int get arcanumLevel => 8; // TODO.

  @override
  int onGetFocusCost(HeroSave hero) => 24; // TODO.

  @override
  Action onGetAction(Game game) {
    // TODO: A wind/earch area attack of some kind.
    throw UnimplementedError();
  }
}
