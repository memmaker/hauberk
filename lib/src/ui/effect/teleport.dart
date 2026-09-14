import 'dart:math' as math;

import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

import '../../engine.dart';
import '../../hues.dart';
import 'effect.dart';

/// A particle that starts with a random initial velocity and arcs towards a
/// target.
class TeleportEffect implements Effect {
  num x;
  num y;
  num h;
  num v;
  int age = 0;
  final Vec target;

  static final _colors = [lightAqua, lightBlue, lilac, lighterCoolGray];

  factory TeleportEffect(Vec from, Vec target) {
    var x = from.x;
    var y = from.y;

    var theta = rng.range(628) / 100;
    var radius = rng.range(10, 80) / 100;

    var h = math.cos(theta) * radius;
    var v = math.sin(theta) * radius;

    return TeleportEffect._(x, y, h, v, target);
  }

  TeleportEffect._(this.x, this.y, this.h, this.v, this.target);

  @override
  bool update(Game game) {
    var friction = 1.0 - age * 0.015;
    h *= friction;
    v *= friction;

    var pull = age * 0.003;
    h += (target.x - x) * pull;
    v += (target.y - y) * pull;

    x += h;
    y += v;

    age++;
    return (Vec(x.toInt(), y.toInt()) - target) > 1;
  }

  @override
  void render(Game game, DrawGlyph drawGlyph) {
    var pos = Vec(x.toInt(), y.toInt());
    if (!game.stage.bounds.contains(pos)) return;

    var char = _getChar(h, v);
    var color = rng.item(_colors);

    drawGlyph(pos.x, pos.y, Glyph.fromCharCode(char, color));
  }

  /// Chooses a "line" character based on the vector [x], [y]. It will try to
  /// pick a line that follows the vector.
  int _getChar(num x, num y) {
    var velocity = Vec((x * 10).toInt(), (y * 10).toInt());
    if (velocity < 5) return CharCode.bullet;

    var angle = math.atan2(x, y) / (math.pi * 2) * 16 + 8;
    return r"|\\--//||\\--//||".codeUnitAt(angle.floor());
  }
}
