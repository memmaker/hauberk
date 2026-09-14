import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

import '../../engine.dart';
import '../../hues.dart';
import 'effect.dart';

class DetectEffect implements Effect {
  static final _colors = [lighterCoolGray, buttermilk, gold, olive, darkOlive];

  final Vec _pos;
  int _life = 20;

  DetectEffect(this._pos);

  @override
  bool update(Game game) => --_life >= 0;

  @override
  void render(Game game, DrawGlyph drawGlyph) {
    var radius = _life ~/ 4;
    var glyph = Glyph("*", _colors[radius]);

    for (var pixel in Circle(_pos, radius).edge) {
      drawGlyph(pixel.x, pixel.y, glyph);
    }
  }
}
