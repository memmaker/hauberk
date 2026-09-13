import '../../../engine.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class QuicksandSpell extends Spell with ActionAbility {
  @override
  String get name => "Quicksand";

  @override
  String get description => "TODO";

  @override
  final List<Arcanum> arcana = [Arcanum.earthshaping];

  @override
  int get arcanumLevel => 8; // TODO.

  @override
  int onGetFocusCost(HeroSave hero) => 24; // TODO.

  @override
  Action onGetAction(Game game) {
    // TODO: Creates a field of quicksand that swallows monsters and items.
    // They disappear but aren't killed (i.e. no experience for hero, uniques
    // are still unkilled). Maybe the quicksand remains.
    throw UnimplementedError();
  }
}
