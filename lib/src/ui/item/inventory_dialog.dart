import 'package:malison/malison.dart';
import 'package:malison/malison_web.dart';

import '../../engine.dart';
import '../input.dart';
import '../rvip_menu.dart';
import 'drop_dialog.dart';
import 'equip_dialog.dart';
import 'item_dialog.dart';
import 'pick_up_dialog.dart';
import 'toss_dialog.dart';
import 'use_dialog.dart';

/// RVIP: inventory list with a cursor. Letter = main action (use, equip,
/// else inspect), Shift+letter drops, Ctrl+letter inspects, Enter opens a menu
/// of every action that fits. Actions run through the game's own item dialogs
/// (`ui.goTo(dialog)` + [ItemDialog.rvipChoose]), so each keeps its checks,
/// count and target prompts.
class InventoryDialog extends ItemDialog {
  Item? _menuItem;

  InventoryDialog(super.gameScreen);

  @override
  bool get needsCount => false;

  @override
  String get helpVerb => "Choose";

  @override
  String get shiftQuery => "Drop which item?";

  @override
  String query(ItemLocation location) => switch (location) {
    ItemLocation.equipment => "Equipment",
    ItemLocation.onGround => "On the ground",
    _ => "Inventory",
  };

  @override
  bool canSelect(Item item) => true;

  @override
  void selectItem(Item item, int count, ItemLocation location) {}

  /// Every action that fits [item] here: (key, key code, name, dialog).
  /// A null dialog means inspect.
  List<(String, int, String, ItemDialog Function()?)> _actions(Item item) => [
    if (item.canUse) ("u", KeyCode.u, "Use", () => UseDialog(gameScreen)),
    if (item.canEquip)
      (
        "e",
        KeyCode.e,
        location == ItemLocation.equipment ? "Unequip" : "Equip",
        () => EquipDialog(gameScreen),
      ),
    if (item.canToss) ("t", KeyCode.t, "Throw", () => TossDialog(gameScreen)),
    if (location != ItemLocation.onGround)
      ("d", KeyCode.d, "Drop", () => DropDialog(gameScreen)),
    if (location == ItemLocation.onGround)
      ("g", KeyCode.g, "Pick up", () => PickUpDialog(gameScreen)),
    ("i", KeyCode.i, "Inspect", null),
  ];

  void _run(ItemDialog Function()? make, Item item) {
    if (make == null) return rvipInspect(item);
    var dialog = make();
    var at = location;
    gameScreen.rvipReopenInventory = true;
    ui.goTo(dialog);
    dialog.rvipChoose(item, at);
  }

  @override
  void rvipMain(Item item) =>
      _run(item.canUse || item.canEquip ? _actions(item).first.$4 : null, item);

  @override
  void rvipShiftLetter(Item item) => rvipDrop(item);

  @override
  void rvipDrop(Item item) {
    if (location != ItemLocation.onGround) {
      _run(() => DropDialog(gameScreen), item);
    }
  }

  @override
  void rvipMenu(Item item) {
    _menuItem = item;
    ui.push(
      RvipMenu(item.noun.short, [
        for (var (key, code, name, make) in _actions(item))
          RvipEntry(key, name, make ?? "inspect", keyCode: code),
      ]),
    );
  }

  @override
  void activate(Screen<Input> popped, Object? result) {
    var item = _menuItem;
    _menuItem = null;
    if (item == null || result == null) return;
    _run(result is ItemDialog Function() ? result : null, item);
  }
}
