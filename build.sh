#!/bin/sh
# RVIP: web build into web/dist (dart compile js, no build_runner needed).
set -e
cd "$(dirname "$0")"
export PATH="${DART_SDK:-$HOME/Games/dart-sdk}/bin:$PATH"
dart pub get
rm -rf web/dist && mkdir -p web/dist
cp -R web/*.html web/*.css web/*.png web/rvip_tiles.js web/dist/
dart compile js -O2 -o web/dist/main.dart.js web/main.dart
rm -f web/dist/main.dart.js.deps web/dist/main.dart.js.map
