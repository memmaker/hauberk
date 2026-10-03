# Hauberk RVIP handover

## RVIP progress

- Stage 1 (Get + build) done; next: stage 2 (explore + stairs).
- Folder `~/Games/hauberk`, branch `rvip-port`, base upstream `master` @ 6c5c684c (other branches: `areas` 2016, `skills-reboot` 2025, `temp-chain-lightning` WIP; master is newest complete). Upstream commit untouched = pristine commit.
- Case O: Dart game on the Malison canvas terminal (own panels: hero, equipment, inventory, on-ground, log). Frontend: `web/main.dart`, `web/index.html`, UI in `lib/src/ui/`.
- Build: `./build.sh` → `web/dist` (`dart pub get`, `dart compile js -O2 web/main.dart`, copies html/css/fonts). Dart SDK 3.13.5 at `~/Games/dart-sdk` (override with `DART_SDK`).
- ASan stand-in: `dart test` → 102 tests pass.
- Tested in the browser pane: title screen, new hero, moved in town.
- Quirks: saves in localStorage key `heroes` (rule: must move to IndexedDB later); several font_*.png sizes (Malison glyph sheets); upstream `make build` uses build_runner + gh-pages clone (not used).
- Open: none for stage 1.
