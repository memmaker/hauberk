import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

import '../../engine.dart';
import '../../hues.dart';
import 'effect.dart';

class HowlEffect implements Effect {
  static final bang = Glyph("!", aqua);
  static final slash = Glyph("/", lightAqua);
  static final backslash = Glyph("\\", lightAqua);
  static final dash = Glyph("-", aqua);
  static final less = Glyph("<", aqua);
  static final greater = Glyph(">", aqua);

  final Vec _pos;
  int _age = 0;

  HowlEffect(this._pos);

  @override
  bool update(Game game) {
    return ++_age < 24;
  }

  @override
  void render(Game game, DrawGlyph drawGlyph) {
    if ((_age ~/ 6).isEven) {
      drawGlyph(_pos.x, _pos.y, bang);
      drawGlyph(_pos.x - 1, _pos.y, greater);
      drawGlyph(_pos.x + 1, _pos.y, less);
    } else {
      drawGlyph(_pos.x - 1, _pos.y - 1, backslash);
      drawGlyph(_pos.x - 1, _pos.y + 1, slash);
      drawGlyph(_pos.x + 1, _pos.y - 1, slash);
      drawGlyph(_pos.x + 1, _pos.y + 1, backslash);
      drawGlyph(_pos.x - 1, _pos.y, dash);
      drawGlyph(_pos.x + 1, _pos.y, dash);
    }
  }
}
