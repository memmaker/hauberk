import '../../../engine.dart';
import '../../action/flow.dart';
import '../../elements.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class TidalWaveSpell extends Spell with ActionAbility {
  @override
  String get name => "Tidal Wave";

  @override
  String get description => "Summons a giant tidal wave.";

  @override
  final List<Arcanum> arcana = [Arcanum.watercoursing];

  @override
  int get arcanumLevel => 5;

  @override
  int onGetFocusCost(HeroSave hero) => 70;

  @override
  Action onGetAction(Game game) {
    // TODO: Instead of just a flow attack, have it send out a barrier-like
    // wave that pushes monsters. Or maybe just a beam attack.
    var power = spellPower(game.hero.save);
    var attack = Attack(
      Prop("wave"),
      "inundate",
      50 + power * 15,
      range: 15 + power,
      element: Elements.water,
    );
    return FlowAction(
      game.hero.pos,
      attack.createHit(),
      Motility.walk | Motility.door | Motility.swim,
      slowness: 2,
    );
  }
}
