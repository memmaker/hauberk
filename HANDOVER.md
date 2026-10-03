# Hauberk RVIP handover

## RVIP progress

- Stage 1 (Get + build) done.
- Stage 2 (Explore + stairs) done.
- Stage 3 (Enter menu + inventory) done; next: stage 4 (tiles).
- Folder `~/Games/hauberk`, branch `rvip-port`, base upstream `master` @ 6c5c684c (other branches: `areas` 2016, `skills-reboot` 2025, `temp-chain-lightning` WIP; master is newest complete). Upstream commit untouched = pristine commit.
- Case O: Dart game on the Malison canvas terminal (own panels: hero, equipment, inventory, on-ground, log). Frontend: `web/main.dart`, `web/index.html`, UI in `lib/src/ui/`.
- Build: `./build.sh` → `web/dist` (`dart pub get`, `dart compile js -O2 web/main.dart`, copies html/css/fonts). Dart SDK 3.13.5 at `~/Games/dart-sdk` (override with `DART_SDK`).
- ASan stand-in: `dart test` → 102 tests pass.
- Tested in the browser pane: title screen, new hero, moved in town.
- Quirks: saves in localStorage key `heroes` (rule: must move to IndexedDB later); several font_*.png sizes (Malison glyph sheets); upstream `make build` uses build_runner + gh-pages clone (not used).
- Open: none for stage 1.
- Explore: `Shift-H` (`Input.explore`), `ExploreBehavior` in `lib/src/engine/hero/explore.dart` (a hero `Behavior` like Run/Rest: one step per game turn; `hero.explore()`, `hero.isExploring`, stopped by `disturb()`). Main-loop hook: `GameScreen.update()` sets `_pause = 2` per step (~50 ms paint); any key stops (`GameScreen.keyDown` + top of `handleInput`). Message stop: `Log.total` counter. Per-level visited/seen-item sets via `Expando` on `Stage`. Stop messages are logged from `canPerform`, so `update()` dirties on `Log.total` change.
- Stairs: Hauberk has one kind (`TilePortals.exit`, taken with `q` → ExitPopup); town has the dungeon entrance portal (entered by stepping on it). `q` off the stairs walks to the nearest known exit (town: stops next to the entrance, next `q` steps in). `<`/`>` NOT bound: Shift+`,`/`.` are the laptop run SW/S keys.
- No `--More--` exists in Hauberk (log panel only): nothing to do.
- Known-grid test: `dart test test/rvip` (real depth-1 level, monsters removed, lit; every step lands on an explored cell, ends with "Nothing left", then stairs walk ends on the exit).
- Browser test: town `q` walk + `q` enter + depth popup work; dungeon explore not watched in the pane (pane hidden → Malison rAF loop frozen), covered by the Dart test.
- Open: `<`/`>` binding vs laptop run keys (user choice); hero 'n' created in stage-1/2 tests lost its starting items after reload (save before items? check in stage 3/5.10); dungeon without a lit candle: explore says "too dark".
- Stage 3 files: `lib/src/ui/rvip_menu.dart` (`RvipMenu`/`RvipEntry`: floating cursor menu sized to content, pops with the entry value), `lib/src/ui/item/inventory_dialog.dart` (`InventoryDialog`, key `b`), cursor + numpad + hooks in `lib/src/ui/item/item_dialog.dart` (`rvipMain/rvipMenu/rvipShiftLetter/rvipDrop/rvipInspect/rvipChoose`), cursor background in `item_renderer.dart`, raw-key globals `rvipKeyCode`/`rvipCtrl` in `lib/src/ui/input.dart` (capture-phase keydown listener in `web/main.dart`).
- Enter menu: `GameScreen._commands` (static table, Hauberk has one keyset; keys hard-coded labels). Enter is still bound to `Input.ok`; GameScreen opens the menu when `rvipEnterKey` (raw key 13, not numpad) so `l`/numpad 5 still wait and dialogs still take Enter as OK. Chosen `Input` is replayed via `GameScreen.activate` → `handleInput`.
- Item actions: run through the game's own dialogs: `ui.goTo(UseDialog(..))` then `dialog.rvipChoose(item, location)` (preselect; count prompts for drop/pick up, target prompt for throw stay). `rvipReopenInventory` flag → `GameScreen.update()` pushes the inventory again when the hero needs input and `stagePanel.visibleMonsters` is empty. Main action: use > equip/unequip > inspect.
- Every item prompt (use/equip/drop/throw/pick up/shops' ItemDialogs) has the cursor: arrows/numpad 8/2 move, 4/6 switch list, 5/Enter choose, + main, - drop (inventory only), * inspect, numpad 0/. close. Letters bound to directions (i,o,p,k,l) stay item letters (`rvipLetterKey` guard). No mouse (Malison has none).
- Fixed (upstream bug): new hero was saved by `Storage.add()` before `GameScreen.town` gave the starting items; now saves again after (`newHero`). Old test hero `n` in localhost localStorage still has none.
- Open: Ctrl+W/T/N can't be caught (browser); synthetic `KeyboardEvent`s carry `keyCode` 0, Malison ignores them: test with real `key` actions.
