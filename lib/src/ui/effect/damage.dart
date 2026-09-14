import 'dart:math' as math;

import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

import '../../engine.dart';
import '../../hues.dart';
import 'effect.dart';

class DamageEffect implements Effect {
  final Vec _pos;
  final Glyph _glyph;
  final int _blinks;
  int _frame = 0;

  DamageEffect(Actor actor, Element element, int damage)
    : _pos = actor.pos,
      _glyph = Glyph("*", elementColor(element)),
      _blinks = math.sqrt(damage / 5).ceil();

  @override
  bool update(Game game) => ++_frame < _blinks * _framesPerBlink;

  @override
  void render(Game game, DrawGlyph drawGlyph) {
    var frame = _frame % _framesPerBlink;
    if (frame < _framesPerBlink ~/ 2) {
      drawGlyph(_pos.x, _pos.y, _glyph);
    }
  }

  /// Blink faster as the number of blinks increases so that the effect doesn't
  /// get gratuitously long.
  int get _framesPerBlink => lerpInt(_blinks, 1, 10, 16, 8);
}
