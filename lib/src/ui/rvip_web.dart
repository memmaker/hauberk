// RVIP: the page's side windows (rvip-wm.js). The game's own panels render
// into an HTML terminal, so every window's text and colours come from Dart;
// the page (web/rvip_page.js) only puts the HTML into the window bodies.
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:malison/malison.dart';
// ignore: implementation_imports
import 'package:malison/src/unicode_map.dart';
import 'package:piecemeal/piecemeal.dart';

import '../engine.dart';
import '../hues.dart';
import 'game/game_screen.dart';
import 'item/item_renderer.dart';
import 'panel/sidebar_panel.dart';

/// The screen stack, mirrored by `RvipUI` in web/main.dart.
final List<Object> rvipScreens = [];

/// Multi-window mode: the Malison terminal is the map only, the side panels
/// are rvip-wm windows. Set by the page (`window.rvipMulti`).
bool get rvipMulti => globalContext['rvipMulti']?.dartify() == true;

/// Width in characters of window [id]'s body (the page measures it).
int _cols(String id) {
  if (!globalContext.has('rvipCols')) return 30;
  var n = globalContext.callMethod<JSNumber>('rvipCols'.toJS, id.toJS);
  return n.toDartInt.clamp(10, 200);
}

/// The page's value store (IndexedDB, read before the game starts).
String? rvipGet(String key) =>
    (globalContext['rvipStore'] as JSObject?)?[key]?.dartify() as String?;

void rvipPut(String key, String value) {
  globalContext.callMethod('rvipPut'.toJS, key.toJS, value.toJS);
}

/// A terminal that keeps glyphs and turns them into `<pre>` HTML.
class RvipHtmlTerminal extends Terminal {
  @override
  final int width;
  @override
  final int height;
  final List<Glyph> _cells;

  RvipHtmlTerminal(this.width, this.height)
    : _cells = List.filled(width * height, Glyph.clear);

  @override
  Vec get size => Vec(width, height);

  @override
  void drawGlyph(int x, int y, Glyph glyph) {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    _cells[y * width + x] = glyph;
  }

  bool _blank(Glyph g) => g.char == 0x20 && g.back == Color.black;

  /// Rows without trailing blanks, no empty rows at the bottom (W0 rule 5).
  /// [crop]: also drop blank rows at the top and blank columns at the left
  /// (a dialog drawn somewhere on a whole-screen terminal).
  String toHtml({bool crop = false}) {
    var rows = <String>[];
    var left = 0, top = 0;
    if (crop) {
      left = width;
      top = height;
      for (var i = 0; i < _cells.length; i++) {
        if (_blank(_cells[i])) continue;
        left = left < i % width ? left : i % width;
        top = top < i ~/ width ? top : i ~/ width;
      }
    }
    for (var y = top; y < height; y++) {
      var end = width;
      while (end > 0 && _blank(_cells[y * width + end - 1])) {
        end--;
      }
      var row = StringBuffer();
      String? style;
      var run = StringBuffer();
      void flush() {
        if (run.isEmpty) return;
        row.write('<span style="$style">$run</span>');
        run.clear();
      }

      for (var x = left; x < end; x++) {
        var g = _cells[y * width + x];
        var s = 'color:${g.fore.cssColor}';
        if (g.back != Color.black) s += ';background:${g.back.cssColor}';
        if (s != style) {
          flush();
          style = s;
        }
        // Non-ASCII glyphs are Hauberk's own art at that font-sheet slot (a
        // Unicode letter drawn as an item icon): show the sheet cell, not the
        // letter. Box drawing (U+2500..259F) stays text so borders join.
        var code = g.char;
        if (code > 0x7e && (code < 0x2500 || code > 0x259f)) {
          var slot = unicodeMap[code] ?? code;
          flush();
          style = null;
          row.write(
            '<span class="gl" style="background:${g.fore.cssColor};'
            '--gx:${slot % 32};--gy:${slot ~/ 32}"> </span>',
          );
          continue;
        }
        var c = String.fromCharCode(code);
        run.write(switch (c) {
          '<' => '&lt;',
          '>' => '&gt;',
          '&' => '&amp;',
          _ => c,
        });
      }
      flush();
      rows.add(row.toString());
    }
    // Help boxes run off the screen's bottom edge on the canvas: close them.
    if (crop) {
      var y = height - 1, row = StringBuffer(), open = -1, col = left;
      for (var x = left; x < width; x++) {
        var g = _cells[y * width + x];
        if (g.char != CharCode.boxDrawingsLightVertical) continue;
        if (open < 0) {
          row.write(' ' * (x - col));
          open = x;
        } else {
          row.write(
            '<span style="color:${g.fore.cssColor}">└${'─' * (x - open - 1)}┘'
            '</span>',
          );
          open = -1;
          col = x + 1;
        }
      }
      if (row.isNotEmpty) rows.add(row.toString());
    }
    while (rows.isNotEmpty && rows.last.isEmpty) {
      rows.removeLast();
    }
    // A dialog and its key help drawn far apart: close long blank gaps.
    if (crop) {
      for (var i = rows.length - 1; i >= 3; i--) {
        if (rows[i].isEmpty && rows[i - 1].isEmpty && rows[i - 2].isEmpty) {
          rows.removeAt(i);
        }
      }
    }
    return rows.join('\n');
  }
}

/// The page pop-up over the map (`RvipWM.popup`); empty hides it.
void rvipPopup(String html) {
  if (globalContext.has('rvipPopup')) {
    globalContext.callMethod('rvipPopup'.toJS, html.toJS);
  }
}

/// Empties every side window (back on the title screens, no hero).
void rvipClearPanes() {
  if (!globalContext.has('rvipPane')) return;
  for (var id in ['status', 'equip', 'inv']) {
    _pane(id, '');
  }
  globalContext.callMethod('rvipVisible'.toJS, ''.toJS);
  globalContext.callMethod('rvipMessages'.toJS, <JSAny?>[].toJS);
  _logOf = null;
}

void _pane(String id, String html) {
  globalContext.callMethod('rvipPane'.toJS, id.toJS, html.toJS);
}

/// Sends every side window its content (multi-window mode only).
void rvipPanes(GameScreen screen, SidebarPanel sidebar) {
  if (!rvipMulti || !globalContext.has('rvipPane')) return;
  var game = screen.game;
  var hero = game.hero;

  // Status: the game's own sidebar (stats, then nearby monsters).
  var monsters = screen.stagePanel.visibleMonsters.length.clamp(0, 10);
  var t = RvipHtmlTerminal(_cols('status'), 23 + monsters * 2);
  sidebar.renderPanel(t);
  _pane('status', t.toHtml());

  void items(String id, List<(ItemCollection, int)> lists) {
    var height = lists.fold(0, (h, l) => h + l.$2 + 2);
    var t = RvipHtmlTerminal(_cols(id), height);
    var top = 0;
    for (var (items, slots) in lists) {
      renderItems(
        t,
        items,
        left: 0,
        top: top,
        width: t.width,
        itemSlotCount: slots,
        save: hero.save,
        showLetters: false,
        canSelectAny: false,
      );
      top += slots + 2;
    }
    _pane(id, t.toHtml());
  }

  items('equip', [(hero.equipment, hero.equipment.capacity)]);
  var ground = game.stage.itemsAt(hero.pos);
  items('inv', [
    (hero.inventory, hero.inventory.capacity),
    if (ground.isNotEmpty) (ground, ground.length),
  ]);

  // Visible: "M<glyph><name>\t<css>" lines (RvipWM.visible).
  var lines = <String>[];
  for (var m in screen.stagePanel.visibleMonsters) {
    var g = m.appearance as Glyph;
    lines.add(
      'M${String.fromCharCode(g.char)}${m.breed.name}\t${g.fore.cssColor}',
    );
  }
  for (var pos in game.stage.bounds) {
    var tile = game.stage[pos];
    if (!tile.isVisible) continue;
    for (var item in game.stage.itemsAt(pos)) {
      var g = item.appearance as Glyph;
      lines.add(
        'I${String.fromCharCode(g.char)}${item.noun.short}\t${g.fore.cssColor}',
      );
    }
  }
  globalContext.callMethod('rvipVisible'.toJS, lines.join('\n').toJS);

  rvipLog(game.log);
}

/// Messages: the log as coloured lines, folded repeats as the game counts them.
int _logSent = -1;
Log? _logOf;
void rvipLog(Log log) {
  if (identical(log, _logOf) && log.total == _logSent) return;
  _logOf = log;
  _logSent = log.total;
  var out = <JSAny?>[];
  for (var message in log.messages) {
    var color = switch (message.type) {
      LogType.message => UIHue.text,
      LogType.error => red,
      LogType.quest => purple,
      LogType.gain => gold,
      LogType.help => peaGreen,
      LogType.debug => aqua,
    };
    var text = message.text;
    if (message.count > 1) text = '$text (x${message.count})';
    out.add({'t': text, 'color': color.cssColor}.jsify());
  }
  globalContext.callMethod('rvipMessages'.toJS, out.toJS);
}
