import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

import '../../engine.dart';
import '../../hues.dart';
import 'effect.dart';

class MapEffect implements Effect {
  final _maxLife = rng.range(10, 20);

  final Vec _pos;
  int _life = -1;

  MapEffect(this._pos) {
    _life = _maxLife;
  }

  @override
  bool update(Game game) => --_life >= 0;

  @override
  void render(Game game, DrawGlyph drawGlyph) {
    var glyph = game.stage[_pos].type.appearance as Glyph;

    glyph = Glyph.fromCharCode(
      glyph.char,
      glyph.fore.blend(gold, _life / _maxLife),
      glyph.back.blend(tan, _life / _maxLife),
    );

    drawGlyph(_pos.x, _pos.y, glyph);
  }
}
