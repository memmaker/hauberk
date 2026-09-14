import 'package:malison/malison.dart';

import '../../engine.dart';
import '../../hues.dart';
import 'effect.dart';

class HealEffect implements Effect {
  final int _x;
  final int _y;
  int _frame = 0;

  HealEffect(this._x, this._y);

  @override
  bool update(Game game) {
    return _frame++ < 24;
  }

  @override
  void render(Game game, DrawGlyph drawGlyph) {
    if (game.stage.get(_x, _y).isOccluded) return;

    var back = [darkerCoolGray, aqua, lightBlue, lightAqua][(_frame ~/ 4) % 4];

    drawGlyph(_x - 1, _y, Glyph('-', back));
    drawGlyph(_x + 1, _y, Glyph('-', back));
    drawGlyph(_x, _y - 1, Glyph('|', back));
    drawGlyph(_x, _y + 1, Glyph('|', back));
  }
}
