import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

import '../../engine.dart';
import 'effect.dart';

/// Draws an [Item] as a given position. Used for thrown items.
class ItemEffect implements Effect {
  final Vec _pos;
  final Glyph _glyph;
  int _life = 2;

  ItemEffect(this._pos, Item item) : _glyph = item.appearance as Glyph;

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
