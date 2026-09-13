import 'package:piecemeal/piecemeal.dart';

import '../../../engine.dart';
import '../../action/barrier.dart';
import '../../elements.dart';
import '../../skill/arcana.dart';
import 'spell.dart';

class FireBarrierSpell extends Spell with TargetAbility {
  @override
  String get name => "Fire Barrier";

  @override
  String get description => "Creates a wall of fire.";

  @override
  final List<Arcanum> arcana = [Arcanum.fireweaving];

  @override
  int get arcanumLevel => 4;

  @override
  int onGetFocusCost(HeroSave hero) => 45;

  @override
  Action onGetTargetAction(Game game, Vec target) {
    var attack = Attack(
      Prop("fire"),
      "burn",
      10 + spellPower(game.hero.save) * 3,
      range: getRange(game),
      element: Elements.fire,
    );
    return BarrierAction(game.hero.pos, target, attack.createHit());
  }

  @override
  int getRange(Game game) => 8;
}
