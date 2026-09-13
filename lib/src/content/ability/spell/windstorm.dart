import '../../../engine.dart';
import '../../action/flow.dart';
import '../../elements.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class WindstormSpell extends Spell with ActionAbility {
  @override
  String get name => "Windstorm";

  @override
  String get description =>
      "Summons a blast of air, spreading out from the sorceror.";

  @override
  final List<Arcanum> arcana = [Arcanum.windchasing];

  @override
  int get arcanumLevel => 3;

  @override
  int onGetFocusCost(HeroSave hero) => 36;

  @override
  Action onGetAction(Game game) {
    var power = spellPower(game.hero.save);
    var attack = Attack(
      Prop("wind"),
      "blast",
      10 + power * 2,
      range: 6 + power ~/ 3,
      element: Elements.air,
    );
    return FlowAction(game.hero.pos, attack.createHit(), Motility.flyAndWalk);
  }
}
