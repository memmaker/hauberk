import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

import '../../engine.dart';
import 'effect.dart';

/// Floats a treasure item upward.
class TreasureEffect implements Effect {
  final int _x;
  int _y;
  final Glyph _glyph;
  int _life = 8;

  TreasureEffect(Vec pos, Item item)
    : _x = pos.x,
      _y = pos.y,
      _glyph = item.appearance as Glyph;

  @override
  bool update(Game game) {
    if (_life.isEven) {
      _y--;
      if (_y < 0) return false;
    }

    return --_life >= 0;
  }

  @override
  void render(Game game, DrawGlyph drawGlyph) {
    drawGlyph(_x, _y, _glyph);
  }
}
