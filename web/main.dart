import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:math' as math;

import 'package:hauberk/src/content.dart';
import 'package:hauberk/src/debug.dart';
import 'package:hauberk/src/engine.dart';
import 'package:hauberk/src/ui/game/direction_dialog.dart';
import 'package:hauberk/src/ui/game/game_screen.dart';
import 'package:hauberk/src/ui/game/target_dialog.dart';
import 'package:hauberk/src/ui/input.dart';
import 'package:hauberk/src/ui/menu/main_menu_screen.dart';
import 'package:hauberk/src/ui/menu/new_hero_screen.dart';
import 'package:hauberk/src/ui/rvip_web.dart';
import 'package:malison/malison.dart';
import 'package:malison/malison_web.dart';
import 'package:piecemeal/piecemeal.dart';
import 'package:web/web.dart' as web;

final _fonts = <TerminalFont>[];
late final RvipUI _ui;
late TerminalFont _font;

final Set<Monster> _debugMonsters = {};

class TerminalFont {
  final String name;
  final web.HTMLCanvasElement canvas;
  RenderableTerminal terminal;
  final int charWidth;
  final int charHeight;

  TerminalFont(
    this.name,
    this.canvas,
    this.terminal, {
    required this.charWidth,
    required this.charHeight,
  });
}

void main() {
  var content = createContent();

  _addFont("6x8", 6, 8);
  _addFont("6x9", 6, 9);
  _addFont("8x8", 8);
  _addFont("8x10", 8, 10);
  _addFont("9x12", 9, 12);
  _addFont("10x12", 10, 12);
  _addFont("12x16", 12, 16);
  _addFont("12x18", 12, 18);
  _addFont("16x16", 16);
  _addFont("16x20", 16, 20);

  // RVIP: the map's A-/A+ (rvip-wm, kept in the page's IndexedDB layout)
  // picks the Malison font; the page calls rvipFont / rvipResize.
  _font = _fonts[_fontIndex()];
  web.document.querySelector("#map")!.append(_font.canvas);
  rvipSoundHook = (name) {
    if (globalContext.has('rvipSound')) {
      globalContext.callMethod('rvipSound'.toJS, name.toJS);
    }
  };
  rvipReportHook = (q) {
    if (globalContext.has('rvipReport')) {
      globalContext.callMethod('rvipReport'.toJS, q.toJS);
    }
  };
  globalContext['rvipFont'] = ((JSNumber i) => _setFont(i.toDartInt)).toJS;
  globalContext['rvipResize'] = (() {
    _resizeTerminal();
    // A mode switch keeps the size: re-lay out the panels anyway.
    for (var screen in rvipScreens) {
      (screen as Screen<Input>).resize(_font.terminal.size);
    }
    _ui.dirty();
  }).toJS;

  _ui = RvipUI(_font.terminal);
  globalContext['rvipRedraw'] = (() => _ui.dirty()).toJS;

  ///     Key Normal                  Shift
  ///     Q   Quit (forfeit)          -
  ///     W   -                       -
  ///     E   Equip (item)            Spend experience
  ///     R   -                       -
  ///     T   Throw (item)            -
  ///     Y   -                       -
  ///     U   Use (item)              -
  ///     I   Walk NW                 Run NW
  ///     O   Walk W                  Run W
  ///     P   Walk NE                 Run NE
  ///
  ///     [
  ///     ]
  ///     \
  ///     A   (Use) ability           About hero
  ///     S   (Cast) spell (unused)   View abilities
  ///     D   Drop                    -
  ///     F
  ///     G   Get (item)              -
  ///     H   Help                    -
  ///     J
  ///     K   Walk W                  Run W
  ///     L   OK                      Rest
  ///     ;   Walk E                  Run E
  ///     '
  ///
  ///     Z   -                       -
  ///     X   Swap (item)             -
  ///     C   Operate (door, chest)   -
  ///     V   -                       -
  ///     B   Inventory (RVIP)        -
  ///     N   -                       -
  ///     M   -                       -
  ///     ,   Walk SW                 Run SW
  ///     .   Walk S                  Run S
  ///     /   Walk SE                 Run SE

  // Set up the keyPress.
  _ui.keyPress.bind(Input.ok, KeyCode.enter);
  _ui.keyPress.bind(Input.cancel, KeyCode.escape);
  _ui.keyPress.bind(Input.inventory, KeyCode.b);

  // RVIP: record the raw key before Malison's body listener maps it.
  web.document.addEventListener(
    'keydown',
    ((web.KeyboardEvent e) {
      rvipKeyCode = e.location == 3 ? 0 : e.keyCode;
      rvipCtrl = e.ctrlKey;
    }).toJS,
    true.toJS,
  );
  _ui.keyPress.bind(Input.cancel, KeyCode.backtick);
  _ui.keyPress.bind(Input.forfeit, KeyCode.f, shift: true);
  _ui.keyPress.bind(Input.quit, KeyCode.q);

  _ui.keyPress.bind(Input.operate, KeyCode.c); // TODO: Better key?
  _ui.keyPress.bind(Input.drop, KeyCode.d);
  _ui.keyPress.bind(Input.use, KeyCode.u);
  _ui.keyPress.bind(Input.pickUp, KeyCode.g);
  _ui.keyPress.bind(Input.swap, KeyCode.x);
  _ui.keyPress.bind(Input.equip, KeyCode.e);
  _ui.keyPress.bind(Input.toss, KeyCode.t);
  _ui.keyPress.bind(Input.useAbility, KeyCode.a);
  _ui.keyPress.bind(Input.castSpell, KeyCode.s);
  _ui.keyPress.bind(Input.heroInfo, KeyCode.a, shift: true);
  // TODO: Better key.
  _ui.keyPress.bind(Input.editSpells, KeyCode.s, shift: true);
  _ui.keyPress.bind(Input.spendExperience, KeyCode.e, shift: true);
  _ui.keyPress.bind(Input.help, KeyCode.h);
  _ui.keyPress.bind(Input.explore, KeyCode.h, shift: true);

  // Laptop directions.
  _ui.keyPress.bind(Input.nw, KeyCode.i);
  _ui.keyPress.bind(Input.n, KeyCode.o);
  _ui.keyPress.bind(Input.ne, KeyCode.p);
  _ui.keyPress.bind(Input.w, KeyCode.k);
  _ui.keyPress.bind(Input.e, KeyCode.semicolon);
  _ui.keyPress.bind(Input.sw, KeyCode.comma);
  _ui.keyPress.bind(Input.s, KeyCode.period);
  _ui.keyPress.bind(Input.se, KeyCode.slash);
  _ui.keyPress.bind(Input.runNW, KeyCode.i, shift: true);
  _ui.keyPress.bind(Input.runN, KeyCode.o, shift: true);
  _ui.keyPress.bind(Input.runNE, KeyCode.p, shift: true);
  _ui.keyPress.bind(Input.runW, KeyCode.k, shift: true);
  _ui.keyPress.bind(Input.runE, KeyCode.semicolon, shift: true);
  _ui.keyPress.bind(Input.runSW, KeyCode.comma, shift: true);
  _ui.keyPress.bind(Input.runS, KeyCode.period, shift: true);
  _ui.keyPress.bind(Input.runSE, KeyCode.slash, shift: true);
  _ui.keyPress.bind(Input.fireNW, KeyCode.i, alt: true);
  _ui.keyPress.bind(Input.fireN, KeyCode.o, alt: true);
  _ui.keyPress.bind(Input.fireNE, KeyCode.p, alt: true);
  _ui.keyPress.bind(Input.fireW, KeyCode.k, alt: true);
  _ui.keyPress.bind(Input.fireE, KeyCode.semicolon, alt: true);
  _ui.keyPress.bind(Input.fireSW, KeyCode.comma, alt: true);
  _ui.keyPress.bind(Input.fireS, KeyCode.period, alt: true);
  _ui.keyPress.bind(Input.fireSE, KeyCode.slash, alt: true);

  _ui.keyPress.bind(Input.ok, KeyCode.l);
  _ui.keyPress.bind(Input.rest, KeyCode.l, shift: true);
  _ui.keyPress.bind(Input.fire, KeyCode.l, alt: true);

  // Arrow keys.
  _ui.keyPress.bind(Input.n, KeyCode.up);
  _ui.keyPress.bind(Input.w, KeyCode.left);
  _ui.keyPress.bind(Input.e, KeyCode.right);
  _ui.keyPress.bind(Input.s, KeyCode.down);
  _ui.keyPress.bind(Input.runN, KeyCode.up, shift: true);
  _ui.keyPress.bind(Input.runW, KeyCode.left, shift: true);
  _ui.keyPress.bind(Input.runE, KeyCode.right, shift: true);
  _ui.keyPress.bind(Input.runS, KeyCode.down, shift: true);
  _ui.keyPress.bind(Input.fireN, KeyCode.up, alt: true);
  _ui.keyPress.bind(Input.fireW, KeyCode.left, alt: true);
  _ui.keyPress.bind(Input.fireE, KeyCode.right, alt: true);
  _ui.keyPress.bind(Input.fireS, KeyCode.down, alt: true);

  // Numeric keypad.
  _ui.keyPress.bind(Input.nw, KeyCode.numpad7);
  _ui.keyPress.bind(Input.n, KeyCode.numpad8);
  _ui.keyPress.bind(Input.ne, KeyCode.numpad9);
  _ui.keyPress.bind(Input.w, KeyCode.numpad4);
  _ui.keyPress.bind(Input.e, KeyCode.numpad6);
  _ui.keyPress.bind(Input.sw, KeyCode.numpad1);
  _ui.keyPress.bind(Input.s, KeyCode.numpad2);
  _ui.keyPress.bind(Input.se, KeyCode.numpad3);
  _ui.keyPress.bind(Input.runNW, KeyCode.numpad7, shift: true);
  _ui.keyPress.bind(Input.runN, KeyCode.numpad8, shift: true);
  _ui.keyPress.bind(Input.runNE, KeyCode.numpad9, shift: true);
  _ui.keyPress.bind(Input.runW, KeyCode.numpad4, shift: true);
  _ui.keyPress.bind(Input.runE, KeyCode.numpad6, shift: true);
  _ui.keyPress.bind(Input.runSW, KeyCode.numpad1, shift: true);
  _ui.keyPress.bind(Input.runS, KeyCode.numpad2, shift: true);
  _ui.keyPress.bind(Input.runSE, KeyCode.numpad3, shift: true);

  _ui.keyPress.bind(Input.ok, KeyCode.numpad5);
  _ui.keyPress.bind(Input.ok, KeyCode.numpadEnter);
  _ui.keyPress.bind(Input.rest, KeyCode.numpad5, shift: true);
  _ui.keyPress.bind(Input.rest, KeyCode.numpadEnter, shift: true);
  _ui.keyPress.bind(Input.fire, KeyCode.numpad5, alt: true);

  _ui.keyPress.bind(Input.wizard, KeyCode.w, shift: true, alt: true);

  _ui.push(MainMenuScreen(content));

  _ui.handlingInput = true;
  _ui.running = true;

  if (Debug.enabled) {
    web.document.body!.onKeyDown.listen((_) {
      _refreshDebugBoxes();
    });
  }
}

void _addFont(String name, int charWidth, [int? charHeight]) {
  charHeight ??= charWidth;

  var canvas = web.HTMLCanvasElement();
  canvas.onDoubleClick.listen((_) {
    _fullscreen();
  });

  var terminal = _makeTerminal(canvas, charWidth, charHeight);
  _fonts.add(
    TerminalFont(
      name,
      canvas,
      terminal,
      charWidth: charWidth,
      charHeight: charHeight,
    ),
  );

  if (Debug.enabled) {
    // Clicking a monster toggles its debug pane.
    canvas.onClick.listen((event) {
      var gameScreen = Debug.gameScreen as GameScreen?;
      if (gameScreen == null) return;

      var pixel = Vec(event.offsetX.toInt(), event.offsetY.toInt());
      var pos = terminal.pixelToChar(pixel);

      var absolute = pos + gameScreen.cameraBounds.topLeft;
      if (!gameScreen.cameraBounds.contains(absolute)) return;

      var actor = gameScreen.game.stage.actorAt(absolute);
      if (actor is Monster) {
        if (_debugMonsters.contains(actor)) {
          _debugMonsters.remove(actor);
        } else {
          _debugMonsters.add(actor);
        }

        _refreshDebugBoxes();
      }
    });
  }
}

int _fontIndex() {
  var i = globalContext.has('rvipMapFont')
      ? globalContext.callMethod<JSNumber>('rvipMapFont'.toJS).toDartInt
      : 4;
  return i.clamp(0, _fonts.length - 1);
}

void _setFont(int index) {
  _font.canvas.remove();
  _font = _fonts[index.clamp(0, _fonts.length - 1)];
  web.document.querySelector("#map")!.append(_font.canvas);
  _resizeTerminal();
}

RetroTerminal _makeTerminal(
  web.HTMLCanvasElement canvas,
  int charWidth,
  int charHeight,
) {
  // RVIP: fill the Map window's body (whole-screen menus need 80x34).
  var body = web.document.querySelector("#map")!;
  var small = _heroInGame && rvipMulti;
  var width = math.max(body.clientWidth ~/ charWidth, small ? 40 : 80);
  var height = math.max(body.clientHeight ~/ charHeight, small ? 16 : 34);

  var scale = web.window.devicePixelRatio.toInt();
  var canvasWidth = charWidth * width;
  var canvasHeight = charHeight * height;
  canvas.width = canvasWidth * scale;
  canvas.height = canvasHeight * scale;
  canvas.style.width = "${canvasWidth}px";
  canvas.style.height = "${canvasHeight}px";

  // Make the terminal.
  var file = "font_$charWidth";
  if (charWidth != charHeight) file += "_$charHeight";
  return RetroTerminal(
    width,
    height,
    "$file.png",
    canvas: canvas,
    charWidth: charWidth,
    charHeight: charHeight,
    scale: web.window.devicePixelRatio.toInt(),
  );
}

/// Updates the character dimensions of the current terminal to fit the screen
/// size.
void _resizeTerminal() {
  var terminal = _makeTerminal(_font.canvas, _font.charWidth, _font.charHeight);

  _font.terminal = terminal;
  _ui.setTerminal(terminal);
}

/// See: https://stackoverflow.com/a/29715395/9457
void _fullscreen() {
  var div = web.document.querySelector("#map")!;
  var jsElement = div as JSObject;

  var methods = [
    "requestFullscreen",
    "mozRequestFullScreen",
    "webkitRequestFullscreen",
    "msRequestFullscreen",
  ];
  for (var method in methods) {
    if (jsElement.hasProperty(method.toJS).toDart) {
      jsElement.callMethod(method.toJS);
      return;
    }
  }
}

void _refreshDebugBoxes() {
  void refresh() {
    var debugBoxes = web.document.querySelectorAll(".debug");
    for (var i = 0; i < debugBoxes.length; i++) {
      web.document.body!.removeChild(debugBoxes.item(i)!);
    }

    var gameScreen = Debug.gameScreen as GameScreen?;
    if (gameScreen == null) return;

    _debugMonsters.removeWhere((monster) => !monster.isAlive);
    for (var monster in _debugMonsters) {
      if (gameScreen.cameraBounds.contains(monster.pos)) {
        var screenPos = monster.pos - gameScreen.cameraBounds.topLeft;

        var info = Debug.monsterInfo(monster);
        if (info == null) continue;

        var debugBox = web.HTMLPreElement.pre();
        debugBox.className = "debug";
        debugBox.style.display = "inline-block";

        var x =
            (screenPos.x + 1) * _font.charWidth +
            _font.canvas.offsetLeft.toInt() +
            4;
        var y =
            (screenPos.y) * _font.charHeight +
            _font.canvas.offsetTop.toInt() +
            2;
        debugBox.style.left = x.toString();
        debugBox.style.top = y.toString();
        debugBox.textContent = info;

        web.document.body!.children.add(debugBox);
      }
    }
  }

  // Hack: Give the engine a chance to update.
  web.window.requestAnimationFrame(refresh.toJS);
}

/// RVIP: mirrors the screen stack (`rvipScreens`) so the stage panel knows
/// whether the game screen is on top.
class RvipUI extends UserInterface<Input> {
  RvipUI(RenderableTerminal terminal) : super(terminal);

  bool _popDirty = true;

  @override
  void dirty() {
    _popDirty = true;
    super.dirty();
  }

  @override
  void refresh() {
    super.refresh();
    if (_popDirty) _popups();
  }

  /// RVIP: screens drawn on the map canvas; every screen above the topmost
  /// one is a page pop-up (W0 rules 1, 6), rendered by the game as HTML.
  static bool _onMap(Object s) =>
      s is GameScreen ||
      s is MainMenuScreen ||
      s is NewHeroScreen ||
      s is TargetDialog ||
      s is DirectionDialog;

  void _popups() {
    _popDirty = false;
    var k = rvipScreens.lastIndexWhere(_onMap);
    if (k == rvipScreens.length - 1) {
      rvipPopup('');
      return;
    }
    // Map canvas: the screens up to k only (Malison drew the dialogs too).
    var term = _font.terminal;
    term.clear();
    var j = k;
    while (j > 0 && (rvipScreens[j] as Screen<Input>).isTransparent) {
      j--;
    }
    for (var i = math.max(j, 0); i <= k; i++) {
      (rvipScreens[i] as Screen<Input>).render(term);
    }
    term.render();
    // Pop-up: the rest, at least the game's old 80x34 screen.
    var t = RvipHtmlTerminal(
      math.max(term.width, 80),
      math.max(term.height, 34),
    );
    for (var i = k + 1; i < rvipScreens.length; i++) {
      (rvipScreens[i] as Screen<Input>).render(t);
    }
    rvipPopup(t.toHtml(crop: true));
  }

  @override
  void push(Screen<Input> screen) {
    rvipScreens.add(screen);
    super.push(screen);
    _popups();
    _inGame();
  }

  @override
  void pop([Object? result]) {
    rvipScreens.removeLast();
    super.pop(result);
    _popups();
    _inGame();
  }

  @override
  void goTo(Screen<Input> screen) {
    rvipScreens.removeLast();
    rvipScreens.add(screen);
    super.goTo(screen);
    _popups();
    _inGame();
  }
}

/// RVIP: while a hero is in the game the page warns on leaving, and the
/// terminal may shrink to the Map window (title screens need 80x34).
bool _heroInGame = false;
void _inGame() {
  var now = rvipScreens.any((s) => s is GameScreen);
  globalContext['rvipInGame'] = now.toJS;
  if (now == _heroInGame) return;
  _heroInGame = now;
  if (!now) rvipClearPanes();
  _resizeTerminal();
}
