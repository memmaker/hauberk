import 'dart:math' as math;

import 'package:malison/malison.dart';
import 'package:malison/malison_web.dart';

import '../hues.dart';
import 'input.dart';
import 'widget/draw.dart';

/// RVIP: one menu line. A null [value] makes a group header.
class RvipEntry {
  final String key;
  final String text;
  final Object? value;

  /// Key that picks this entry inside the menu (key code + shift), if any.
  final int keyCode;
  final bool shift;

  const RvipEntry(
    this.key,
    this.text,
    this.value, {
    this.keyCode = 0,
    this.shift = false,
  });
  const RvipEntry.header(this.text)
    : key = "",
      value = null,
      keyCode = 0,
      shift = false;
}

/// RVIP: floating menu with a cursor, sized to its content. Pops with the
/// chosen entry's value (or null on cancel). Arrows / numpad 8/2 move, Enter /
/// numpad 5 / numpad 6 / + choose, the entry's own key chooses, Escape /
/// numpad 4 / 0 / . close.
class RvipMenu extends Screen<Input> {
  final String title;
  final List<RvipEntry> entries;
  int _cursor;
  int _scroll = 0;

  RvipMenu(this.title, this.entries)
    : _cursor = entries.indexWhere((e) => e.value != null);

  @override
  bool get isTransparent => true;

  void _move(int d) {
    var i = _cursor;
    do {
      i = (i + d + entries.length) % entries.length;
    } while (entries[i].value == null);
    _cursor = i;
    dirty();
  }

  @override
  bool handleInput(Input input) {
    // Letters go to keyDown so entry keys win over bound direction letters.
    if (rvipLetterKey) return false;
    switch (input) {
      case Input.n:
        _move(-1);
      case Input.s:
        _move(1);
      case Input.ok || Input.e:
        ui.pop(entries[_cursor].value);
      case Input.cancel || Input.w:
        ui.pop();
      default:
        return false;
    }
    return true;
  }

  @override
  bool keyDown(int keyCode, {required bool shift, required bool alt}) {
    if (alt || keyCode == KeyCode.shift) return false;
    switch (keyCode) {
      case KeyCode.numpad0 || KeyCode.numpadDecimal:
        ui.pop();
        return true;
      case KeyCode.numpadAdd:
        ui.pop(entries[_cursor].value);
        return true;
    }
    for (var e in entries) {
      if (e.value != null && e.keyCode == keyCode && e.shift == shift) {
        ui.pop(e.value);
        return true;
      }
    }
    return false;
  }

  @override
  void render(Terminal terminal) {
    var keyWidth = entries.fold(0, (w, e) => math.max(w, e.key.length));
    var lines = [
      for (var e in entries)
        e.value == null ? e.text : "${e.key.padRight(keyWidth)} ${e.text}",
    ];
    var width = lines.fold(title.length + 2, (w, l) => math.max(w, l.length));
    var rows = math.min(lines.length, terminal.height - 2);
    if (_cursor < _scroll) _scroll = _cursor;
    if (_cursor >= _scroll + rows) _scroll = _cursor - rows + 1;

    var left = math.max(0, (terminal.width - width - 2) ~/ 2);
    var top = math.max(0, (terminal.height - rows - 2) ~/ 3);
    Draw.frame(
      terminal,
      x: left,
      y: top,
      width: width + 2,
      height: rows + 2,
      label: title,
      selected: true,
    );
    for (var r = 0; r < rows; r++) {
      var i = r + _scroll;
      var e = entries[i];
      var color = e.value == null
          ? UIHue.header
          : i == _cursor
          ? UIHue.highlight
          : UIHue.selectable;
      terminal.writeAt(
        left + 1,
        top + 1 + r,
        lines[i].padRight(width),
        color,
        i == _cursor ? darkerCoolGray : null,
      );
    }
  }
}
