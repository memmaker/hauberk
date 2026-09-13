import '../../../engine.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class EarthworkSpell extends Spell with ActionAbility {
  @override
  String get name => "Earthwork";

  @override
  String get description => "TODO";

  @override
  final List<Arcanum> arcana = [Arcanum.earthshaping];

  @override
  int get arcanumLevel => 10; // TODO.

  @override
  int onGetFocusCost(HeroSave hero) => 24; // TODO.

  @override
  Action onGetAction(Game game) {
    // TODO: Makes a spreading ring of earth centered on the hero. It hits and
    // pushes out every monster it encounters. After a few tiles, it stops,
    // leaving an earthen barrier.
    throw UnimplementedError();
  }
}
