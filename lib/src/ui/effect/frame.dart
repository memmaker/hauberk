import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

import '../../engine.dart';
import 'effect.dart';

/// Draws a single glyph for a number of frames.
class FrameEffect implements Effect {
  final Vec _pos;
  final Glyph _glyph;
  int _life;

  FrameEffect(this._pos, String char, Color color, {int life = 4})
    : _life = life,
      _glyph = Glyph(char, color);

  @override
  bool update(Game game) {
    if (!game.stage[_pos].isVisible) return false;
    return --_life >= 0;
  }

  @override
  void render(Game game, DrawGlyph drawGlyph) {
    drawGlyph(_pos.x, _pos.y, _glyph);
  }
}
