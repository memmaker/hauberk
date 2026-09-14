import 'dart:math' as math;

import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

import '../../engine.dart';
import 'effect.dart';

class ParticleEffect implements Effect {
  double _x;
  double _y;
  double _h;
  double _v;
  int _life;
  final Color _color;

  factory ParticleEffect(int x, int y, Color color) {
    var theta = rng.range(628) / 100;
    var radius = rng.range(30, 40) / 100;

    var h = math.cos(theta) * radius;
    var v = math.sin(theta) * radius;
    var life = rng.range(7, 15);
    return ParticleEffect._(x.toDouble(), y.toDouble(), h, v, life, color);
  }

  ParticleEffect._(this._x, this._y, this._h, this._v, this._life, this._color);

  @override
  bool update(Game game) {
    _x += _h;
    _y += _v;

    var pos = Vec(_x.toInt(), _y.toInt());
    if (!game.stage.bounds.contains(pos)) return false;
    if (!game.stage[pos].isFlyable) return false;

    return _life-- > 0;
  }

  @override
  void render(Game game, DrawGlyph drawGlyph) {
    drawGlyph(_x.toInt(), _y.toInt(), Glyph('•', _color));
  }
}
