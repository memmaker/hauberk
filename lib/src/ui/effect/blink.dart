import 'package:malison/malison.dart';

import '../../engine.dart';
import 'effect.dart';

class BlinkEffect implements Effect {
  static const int _blinkFrames = 12;

  final Actor _actor;
  final Glyph _glyph;
  final int _blinks;

  int _age = 0;

  BlinkEffect(this._actor, this._glyph, this._blinks);

  @override
  bool update(Game game) {
    if (!game.stage[_actor.pos].isVisible) return false;

    return ++_age < _blinkFrames * 2 * _blinks;
  }

  @override
  void render(Game game, DrawGlyph drawGlyph) {
    var pos = _actor.pos;

    if ((_age ~/ _blinkFrames).isOdd) {
      drawGlyph(pos.x, pos.y, _glyph);
    }
  }
}
