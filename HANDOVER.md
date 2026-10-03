# Hauberk RVIP handover

## RVIP progress

- Stage 1 (Get + build) done.
- Stage 2 (Explore + stairs) done; next: stage 3 (enter menu + inventory).
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
