import 'dart:math' as math;

import 'package:malison/malison.dart';
import 'package:malison/malison_web.dart';

import '../../engine.dart';
import '../game/game_screen.dart';
import '../input.dart';
import '../panel/item_panel.dart';
import '../rvip_web.dart';
import '../widget/draw.dart';
import 'item_renderer.dart';

/// Modal dialog for letting the user perform an [Action] on an [Item]
/// accessible to the [Hero].
///
/// This overlays an item panel on the right side of the main screen and makes
/// it look like one of those panels has become active.
abstract class ItemDialog extends Screen<Input> {
  final GameScreen gameScreen;

  /// The current location being shown to the player.
  ItemLocation _location = ItemLocation.inventory;

  /// If the player needs to select a quantity for an item they have already
  /// chosen, this will be the index of the item.
  Item? _selectedItem;

  /// The number of items the player selected.
  int _count = -1;

  /// Whether the shift key is currently pressed.
  bool _shiftDown = false;

  /// The current item being inspected or `null` if there is none.
  Item? _inspected;

  /// RVIP: slot index of the cursor in the current list.
  int _cursor = 0;

  ItemLocation get location => _location;

  /// RVIP: query shown while Shift is held.
  String get shiftQuery => "Inspect which item?";

  @override
  bool get isTransparent => true;

  /// True if the item dialog supports tabbing between item lists.
  bool get canSwitchLocations => allowedLocations.length > 1;

  /// Locations of items that can be used with this command. When a command
  /// allows multiple locations, players can switch between them.
  List<ItemLocation> get allowedLocations => [
    ItemLocation.equipment,
    ItemLocation.inventory,
    if (gameScreen.game.stage.itemsAt(gameScreen.game.hero.pos).isNotEmpty)
      ItemLocation.onGround,
  ];

  /// If the player must select how many items in a stack, returns `true`.
  bool get needsCount;

  bool get showPrices => false;

  /// The verb to describe this command in the help bar.
  String get helpVerb;

  ItemDialog(this.gameScreen, [this._location = ItemLocation.inventory]);

  ItemCollection get items {
    var hero = gameScreen.game.hero;
    return switch (_location) {
      ItemLocation.inventory => hero.inventory,
      ItemLocation.equipment => hero.equipment,
      ItemLocation.onGround => gameScreen.game.stage.itemsAt(hero.pos),
      _ => throw StateError("Unexpected location."),
    };
  }

  /// The query shown to the user when selecting an item in this mode from the
  /// [ItemDialog].
  String query(ItemLocation location);

  /// The query shown to the user when selecting a quantity for an item in this
  /// mode from the [ItemDialog].
  String queryCount(ItemLocation location) => throw UnimplementedError();

  /// Returns `true` if [item] is a valid selection for this command.
  bool canSelect(Item item);

  /// Called when a valid item has been selected.
  void selectItem(Item item, int count, ItemLocation location);

  int getPrice(Item item) => item.price;

  void transfer(Item item, int count, ItemCollection destination) {
    if (!destination.canAdd(item)) {
      gameScreen.game.log.error("Not enough room for ${item.clone(count)}.");
      dirty();
      return;
    }

    if (count == item.count) {
      // Moving the entire stack.
      destination.tryAdd(item);
      items.remove(item);
    } else {
      // Splitting the stack.
      destination.tryAdd(item.splitStack(count));
      items.countChanged();
    }

    afterTransfer(item, count);
    ui.pop();
  }

  // TODO: Remove dialog param. Make override?
  void afterTransfer(Item item, int count) {}

  @override
  bool handleInput(Input input) {
    if (_selectedItem case var selected?) {
      switch (input) {
        case Input.ok:
          selectItem(selected, _count, _location);
          return true;

        case Input.cancel:
          // Go back to selecting an item.
          _selectedItem = null;
          dirty();
          return true;

        case Input.n when _count < selected.count:
          _count++;
          dirty();
          return true;

        case Input.s when _count > 1:
          _count--;
          dirty();
          return true;
      }
    } else if (input == Input.cancel) {
      ui.pop();
      return true;
    } else if (!rvipLetterKey) {
      // RVIP: cursor keys (letters bound to directions stay item letters).
      switch (input) {
        case Input.n:
          _moveCursor(-1);
          return true;
        case Input.s:
          _moveCursor(1);
          return true;
        case Input.w || Input.e when canSwitchLocations:
          _advanceLocation(input == Input.w ? -1 : 1);
          return true;
        case Input.ok:
          if (_cursorItem case var item?) rvipMenu(item);
          return true;
      }
    }

    return false;
  }

  @override
  bool keyDown(int keyCode, {required bool shift, required bool alt}) {
    if (keyCode == KeyCode.shift) {
      _shiftDown = true;
      dirty();
      return true;
    }

    if (alt) return false;

    if (_shiftDown && keyCode == KeyCode.escape) {
      _inspected = null;
      dirty();
      return true;
    }

    // Can't switch view or select an item while selecting a count.
    if (_selectedItem != null) return false;

    if (keyCode >= KeyCode.a && keyCode <= KeyCode.z) {
      _selectItem(keyCode - KeyCode.a, shift: shift);
      return true;
    }

    if (keyCode == KeyCode.tab && !_shiftDown && canSwitchLocations) {
      _advanceLocation(shift ? -1 : 1);
      return true;
    }

    // RVIP: numpad 0 / . close, + main action, - drop, * inspect.
    var item = _cursorItem;
    switch (keyCode) {
      case KeyCode.numpad0 || KeyCode.numpadDecimal:
        ui.pop();
        return true;
      case KeyCode.numpadAdd when item != null:
        rvipMain(item);
        return true;
      case KeyCode.numpadSubtract when item != null:
        rvipDrop(item);
        return true;
      case KeyCode.numpadMultiply when item != null:
        rvipInspect(item);
        return true;
    }

    return false;
  }

  @override
  bool keyUp(int keyCode, {required bool shift, required bool alt}) {
    if (keyCode == KeyCode.shift) {
      _shiftDown = false;
      dirty();
      return true;
    }

    return false;
  }

  @override
  void render(Terminal terminal) {
    var itemCount = switch (_location) {
      // RVIP: page pop-ups are trimmed to the items (W0 rule 5).
      ItemLocation.inventory when terminal is RvipHtmlTerminal => math.max(
        items.length,
        1,
      ),
      ItemLocation.inventory => ItemLocation.inventory.capacity,
      ItemLocation.equipment => gameScreen.game.hero.equipment.capacity,
      // On the rare chance that there are a ton of items on the ground, don't
      // overflow the panel.
      ItemLocation.onGround => math.min(items.length, 26),
      _ => throw StateError("Unexpected location."),
    };

    int itemsLeft;
    int itemsTop;
    int itemsWidth;
    if (gameScreen.itemPanel.isVisible) {
      itemsTop = switch (_location) {
        ItemLocation.inventory => gameScreen.itemPanel.inventoryTop,
        ItemLocation.equipment => gameScreen.itemPanel.equipmentTop,

        // If there are more items on the ground than fit in the panel, then
        // expand it upwards.
        ItemLocation.onGround
            when gameScreen.itemPanel.onGroundVisible &&
                itemCount > ItemPanel.groundPanelSize =>
          math.max(
            0,
            gameScreen.itemPanel.onGroundTop -
                itemCount +
                ItemPanel.groundPanelSize,
          ),

        // Show the on ground items over the panel.
        ItemLocation.onGround when gameScreen.itemPanel.onGroundVisible =>
          gameScreen.itemPanel.onGroundTop,

        // If the screen is too small to show the ground panel by default,
        // then just draw it at the top.
        ItemLocation.onGround => 0,
        _ => throw StateError("Unexpected location."),
      };

      // Always make it at least 2 wider than the item panel. That way, with
      // the letters, the items stay in the same position.
      itemsWidth = math.max(
        preferredItemListWidth,
        gameScreen.itemPanel.bounds.width + 2,
      );
      itemsLeft = terminal.width - itemsWidth;
    } else {
      itemsWidth = preferredItemListWidth;
      itemsLeft = gameScreen.stagePanel.bounds.right - itemsWidth;
      itemsTop = gameScreen.stagePanel.bounds.y;
    }

    renderItems(
      terminal,
      items,
      left: itemsLeft,
      top: itemsTop,
      width: itemsWidth,
      itemSlotCount: itemCount,
      save: gameScreen.game.hero.save,
      canSelectAny: true,
      capitalize: _selectedItem == null && _shiftDown,
      showPrices: showPrices,
      inspectedItem: _inspected,
      canSelect: _canSelect,
      cursorItem: _selectedItem == null ? _cursorItem : null,
      getPrice: getPrice,
    );

    String queryText;
    if (_selectedItem == null) {
      if (_shiftDown) {
        queryText = shiftQuery;
      } else {
        queryText = query(_location);
      }
    } else {
      queryText = "${queryCount(_location)} $_count";
    }

    _renderHelp(terminal, queryText);
  }

  void _renderHelp(Terminal terminal, String query) {
    Map<String, String> helpKeys;
    if (_selectedItem == null) {
      if (_shiftDown) {
        helpKeys = {
          "A-Z": "Inspect item",
          if (_inspected != null) "`": "Hide inspector",
        };
      } else {
        helpKeys = {
          "A-Z": "Select item",
          "Shift": "Inspect item",
          if (canSwitchLocations) "Tab": "Switch view",
        };
      }
    } else {
      helpKeys = {"OK": helpVerb, "↕": "Change quantity", "`": "Cancel"};
    }

    Draw.helpKeys(terminal, helpKeys, query);
  }

  bool _canSelect(Item item) {
    if (_shiftDown && _selectedItem == null) return true;

    if (_selectedItem != null) return item == _selectedItem;
    return canSelect(item);
  }

  void _selectItem(int index, {bool shift = false}) {
    var items = this.items.slots.toList();
    if (index >= items.length) return;

    // Can't select an empty equipment slot.
    var item = items[index];
    if (item == null) return;
    _cursor = index;

    if (rvipCtrl) {
      rvipInspect(item);
    } else if (_shiftDown || shift) {
      rvipShiftLetter(item);
    } else {
      rvipMain(item);
    }
  }

  /// RVIP: item hooks. Letter / numpad + = main action, Enter / numpad 5 =
  /// menu (the command itself here), Shift+letter / numpad - = drop.
  void rvipMain(Item item) => rvipChoose(item, _location);
  void rvipMenu(Item item) => rvipMain(item);
  void rvipShiftLetter(Item item) => rvipInspect(item);
  void rvipDrop(Item item) {}

  void rvipInspect(Item item) {
    _inspected = _inspected == item ? null : item;
    dirty();
  }

  /// RVIP: choose [item] at [location] as if its letter was typed (also used
  /// to preselect an item right after `ui.goTo(dialog)`).
  void rvipChoose(Item item, ItemLocation location) {
    _location = location;
    if (!canSelect(item)) return;

    if (item.count > 1 && needsCount) {
      _selectedItem = item;
      _inspected = null;
      _count = item.count;
      dirty();
    } else {
      // Either we don't need a count or there's only one item.
      selectItem(item, 1, _location);
    }
  }

  Item? get _cursorItem {
    var slots = items.slots.toList();
    return _cursor < slots.length ? slots[_cursor] : null;
  }

  void _moveCursor(int d) {
    var slots = items.slots.toList();
    for (var i = 1; i <= slots.length; i++) {
      var next = (_cursor + d * i) % slots.length;
      if (slots[next] != null) {
        _cursor = next;
        break;
      }
    }
    dirty();
  }

  /// Rotates through the viewable locations the player can select an item from.
  void _advanceLocation(int offset) {
    var index = allowedLocations.indexOf(_location);
    var count = allowedLocations.length;
    _location = allowedLocations[(index + count + offset) % count];
    _cursor = items.slots.toList().indexWhere((item) => item != null);
    if (_cursor < 0) _cursor = 0;
    dirty();
  }
}
