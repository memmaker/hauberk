import '../../../engine.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class WindRideSpell extends Spell with ActionAbility {
  @override
  String get name => "Wind Ride";

  @override
  String get description => "TODO";

  @override
  final List<Arcanum> arcana = [Arcanum.windchasing];

  @override
  int get arcanumLevel => 3; // TODO.

  @override
  int onGetFocusCost(HeroSave hero) => 16; // TODO.

  @override
  Action onGetAction(Game game) {
    // TODO: Teleports the hero a short random distance in a chosen direction.
    throw UnimplementedError();
  }
}
