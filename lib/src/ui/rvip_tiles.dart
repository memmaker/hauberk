// RVIP: DawnLike map tiles. Dart decides every cell from game data (TileType,
// breed id, item type id, race id) and hands JS finished slot arrays; JS
// (web/rvip_tiles.js) only scales, scrolls and draws them.
import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:typed_data';

import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

import '../engine.dart';
import 'rvip_tiles_gen.dart';

/// The screen stack, mirrored by `RvipUI` in web/main.dart.
final List<Object> rvipScreens = [];

/// Size of the whole Malison terminal (set by `GameScreen.resize`).
Vec rvipTermSize = Vec(1, 1);

/// Tiles on? Set by the page (`window.rvipTiles`).
bool get rvipTilesOn => globalContext['rvipTiles']?.dartify() == true;

/// Text drawn over the tiles this frame (effects, fire): x, y, char, css.
final List<Object> rvipText = [];

void rvipTextAt(int x, int y, Glyph glyph) {
  rvipText.addAll([x, y, glyph.char, glyph.fore.cssColor]);
}

(int, int, int) _terrain(TileType type) => rvipTerrainTile[type] ?? (0, 0, 0);

/// Publishes the whole stage as `window.rvipMap` and asks the page to draw.
/// [shown] is false while a screen covers the game screen.
void rvipPublish(
  Game game,
  bool shown,
  Rect panel, {
  required bool Function(Actor actor, Tile tile) showActor,
  Actor? target,
}) {
  var term = rvipTermSize;
  var stage = game.stage;
  var w = stage.width, h = stage.height;
  var cells = Int32List(w * h * 3);

  int floorAt(int x, int y) =>
      stage.bounds.contains(Vec(x, y)) ? _terrain(stage.get(x, y).type).$1 : 0;
  bool wallAt(int x, int y) =>
      !stage.bounds.contains(Vec(x, y)) ||
      _terrain(stage.get(x, y).type).$2 != 0;

  for (var pos in stage.bounds) {
    var tile = stage[pos];
    var x = pos.x, y = pos.y;
    var i = (y * w + x) * 3;
    var actor = stage.actorAt(pos);
    var shownActor = actor != null && showActor(actor, tile);
    if (!tile.isExplored && !shownActor) continue;
    var (floor, wall, sprite) = _terrain(tile.type);
    var bg = 0;
    if (wall != 0) {
      // Joined on each side whose neighbour is a wall (real level).
      var m =
          (wallAt(x, y - 1) ? 8 : 0) |
          (wallAt(x, y + 1) ? 4 : 0) |
          (wallAt(x - 1, y) ? 2 : 0) |
          (wallAt(x + 1, y) ? 1 : 0);
      bg = wall + m;
    } else if (floor != 0) {
      // Bordered on each side whose neighbour is not the same floor kind.
      var m =
          (floorAt(x, y - 1) != floor ? 8 : 0) |
          (floorAt(x, y + 1) != floor ? 4 : 0) |
          (floorAt(x - 1, y) != floor ? 2 : 0) |
          (floorAt(x + 1, y) != floor ? 1 : 0);
      bg = floor + m;
    }

    var fg = sprite;
    var items = stage.itemsAt(pos);
    if (items.isNotEmpty) fg = rvipItemTile[items.first.type.name] ?? fg;
    if (!tile.isExplored) bg = fg = 0; // a perceived monster in the dark

    var flags = 1 | (tile.isVisible ? 2 : 0);
    if (shownActor) {
      if (actor is Monster) {
        fg = rvipBreedTile[actor.breed.name] ?? fg;
      } else if (actor is Hero) {
        fg = rvipRaceTile[actor.save.race.name] ?? fg;
      }
      if (identical(actor, target)) flags |= 4;
    }

    cells[i] = bg;
    cells[i + 1] = fg;
    cells[i + 2] = flags;
  }

  var map = JSObject();
  map['w'] = w.toJS;
  map['h'] = h.toJS;
  map['hx'] = game.hero.pos.x.toJS;
  map['hy'] = game.hero.pos.y.toJS;
  map['cells'] = cells.toJS;
  map['text'] = rvipText.map((e) => e.jsify()).toList().toJS;
  map['shown'] = shown.toJS;
  map['rows'] = term.y.toJS;
  // Panel rect as fractions of the Malison canvas.
  map['rect'] = [
    panel.x / term.x,
    panel.y / term.y,
    panel.width / term.x,
    panel.height / term.y,
  ].jsify();
  globalContext['rvipMap'] = map;
  rvipText.clear();
  rvipDraw();
}

/// Hides the tile canvas until the game screen renders again.
void rvipHide() {
  var map = globalContext['rvipMap'];
  if (map != null) (map as JSObject)['shown'] = false.toJS;
  rvipDraw();
}

void rvipDraw() {
  if (globalContext.has('rvipDraw')) globalContext.callMethod('rvipDraw'.toJS);
}
