// TODO: Design custom sprites for these.
import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

import '../../content.dart';
import '../../engine.dart';
import '../../hues.dart';
import 'effect.dart';

/// Draws a motionless particle for an [Element] that fades in intensity over
/// time.
class ElementEffect implements Effect {
  final Vec _pos;
  final List<List<Glyph>> _sequence;
  int _age = 0;

  ElementEffect(this._pos, Element element)
    : _sequence = _elementSequences[element]!;

  @override
  bool update(Game game) {
    if (rng.oneIn(_age + 2)) _age++;
    return _age < _sequence.length;
  }

  @override
  void render(Game game, DrawGlyph drawGlyph) {
    if (game.stage.get(_pos.x, _pos.x).isOccluded) return;

    drawGlyph(_pos.x, _pos.y, rng.item(_sequence[_age]));
  }
}

/// Creates a list of [Glyph]s for each combination of [chars] and [colors].
List<Glyph> _glyphs(String chars, List<Color> colors) {
  var results = <Glyph>[];
  for (var char in chars.codeUnits) {
    for (var color in colors) {
      results.add(Glyph.fromCharCode(char, color));
    }
  }

  return results;
}

final _elementSequences = <Element, List<List<Glyph>>>{
  Element.none: [
    _glyphs("•", [sandal]),
    _glyphs("•", [sandal]),
    _glyphs("•", [tan]),
  ],
  Elements.air: [
    _glyphs("Oo", [lighterCoolGray, lightAqua]),
    _glyphs(".", [lightAqua]),
    _glyphs(".", [lightBlue]),
  ],
  Elements.earth: [
    _glyphs("*%", [sandal, gold]),
    _glyphs("*%", [tan, brown]),
    _glyphs("•*", [tan]),
    _glyphs("•", [brown]),
  ],
  Elements.fire: [
    _glyphs("▲^", [gold, buttermilk]),
    _glyphs("*^", [carrot]),
    _glyphs("^", [red]),
    _glyphs("^", [brown, red]),
    _glyphs(".", [brown, red]),
  ],
  Elements.water: [
    _glyphs("Oo", [lightAqua, lightBlue]),
    _glyphs("o•^", [lightBlue, blue]),
    _glyphs("•^", [blue, darkBlue]),
    _glyphs("^~", [blue, darkBlue]),
    _glyphs("~", [darkBlue]),
    _glyphs(".", [darkBlue, violet]),
  ],
  Elements.acid: [
    _glyphs("Oo", [buttermilk, gold]),
    _glyphs("o•~", [lima, gold]),
    _glyphs(":,", [lima, olive]),
    _glyphs(".", [lima]),
  ],
  Elements.cold: [
    _glyphs("*", [lighterCoolGray]),
    _glyphs("+x", [lightAqua, lighterCoolGray]),
    _glyphs("+x", [lightBlue, lightCoolGray]),
    _glyphs(".", [coolGray, darkBlue]),
  ],
  Elements.lightning: [
    _glyphs("*", [lilac]),
    _glyphs(r"-|\/", [purple, lighterCoolGray]),
    _glyphs(".", [darkerCoolGray, darkerCoolGray, darkerCoolGray, lilac]),
  ],
  Elements.poison: [
    _glyphs("Oo", [mint, lima]),
    _glyphs("o•", [peaGreen, peaGreen, olive]),
    _glyphs("•", [sherwood, olive]),
    _glyphs(".", [sherwood]),
  ],
  Elements.dark: [
    _glyphs("*%", [darkerCoolGray, darkerCoolGray, darkCoolGray]),
    _glyphs("•", [darkerCoolGray, darkerCoolGray, lightCoolGray]),
    _glyphs(".", [darkerCoolGray]),
    _glyphs(".", [darkerCoolGray]),
  ],
  Elements.light: [
    _glyphs("*", [lighterCoolGray]),
    _glyphs("x+", [lighterCoolGray, buttermilk]),
    _glyphs(":;\"'`,", [buttermilk, gold]),
    _glyphs(".", [lightCoolGray, buttermilk]),
  ],
  Elements.spirit: [
    _glyphs("Oo*+", [lilac, lightCoolGray]),
    _glyphs("o+", [purple, peaGreen]),
    _glyphs("•.", [violet, sherwood, sherwood]),
  ],
};
