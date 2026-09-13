import 'dart:math' as math;

import 'package:malison/malison.dart';
import 'package:malison/malison_web.dart';

import '../../engine.dart';
import '../../hues.dart';
import '../input.dart';
import '../widget/draw.dart';
import 'game_screen.dart';

/// Selects an [Ability] to perform.
class UseAbilityDialog extends Screen<Input> {
  final GameScreen _gameScreen;
  final List<Ability> _abilities;

  // TODO: Have a way to bind number keys to abilities to use them more easily.

  @override
  bool get isTransparent => true;

  UseAbilityDialog(this._gameScreen)
    : _abilities = [
        for (var ability in _gameScreen.game.content.abilities)
          if (ability.canUse(_gameScreen.game)) ability,
      ];

  @override
  bool handleInput(Input input) {
    if (input == Input.cancel) {
      ui.pop();
      return true;
    }

    return false;
  }

  @override
  bool keyDown(int keyCode, {required bool shift, required bool alt}) {
    if (shift || alt) return false;

    if (keyCode >= KeyCode.a && keyCode <= KeyCode.z) {
      _useAbility(keyCode - KeyCode.a);
      return true;
    }

    // TODO: Quick keys.
    return false;
  }

  void _useAbility(int index) {
    if (index >= _abilities.length) return;
    ui.pop(_abilities[index]);
  }

  @override
  void render(Terminal terminal) {
    Draw.helpKeys(terminal, {
      "A-Z": "Select ability",
      // "1-9": "Bind quick key",
      "`": "Exit",
    });

    const width = 40;
    var height = math.max(_abilities.length + 2, 3);
    terminal = terminal.rect(terminal.width - width, 0, width, height);

    // Draw a box for the contents.
    Draw.frame(
      terminal,
      height: height,
      label: "Use which ability?",
      selected: true,
    );

    terminal.writeAt(terminal.width - 9, 0, ' Focus ', UIHue.highlight);

    terminal = terminal.rect(1, 1, terminal.width - 2, terminal.height - 2);

    if (_abilities.isEmpty) {
      terminal.writeAt(0, 0, "(You don't have any abilities)", UIHue.disabled);
      return;
    }

    // TODO: Handle this being taller than the screen.
    var hero = _gameScreen.game.hero;
    for (var y = 0; y < _abilities.length; y++) {
      var ability = _abilities[y];
      var focusCost = ability.focusCost(hero.save);

      if (hero.focus < focusCost) {
        terminal.writeAt(3, y, ability.name, UIHue.disabled);
        terminal.writeAt(terminal.width - 5, y, focusCost.fmt(w: 3), Color.red);
      } else {
        terminal.writeAt(0, y, " )   ", UIHue.disabled);
        terminal.writeAt(
          0,
          y,
          "abcdefghijklmnopqrstuvwxyz"[y],
          UIHue.highlight,
        );
        terminal.writeAt(3, y, ability.name, UIHue.selectable);
        terminal.writeAt(
          terminal.width - 5,
          y,
          focusCost.fmt(w: 3),
          UIHue.text,
        );
      }
    }
  }
}
