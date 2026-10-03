#!/bin/sh
# RVIP: web build into web/dist (dart compile js, no build_runner needed).
set -e
cd "$(dirname "$0")"
export PATH="${DART_SDK:-$HOME/Games/dart-sdk}/bin:$PATH"
dart pub get
rm -rf web/dist && mkdir -p web/dist
cp -R web/*.html web/*.css web/*.png web/rvip_page.js web/dist/
python3 web/make-help.py web/dist/help.html
python3 web/mksounds.py web/dist/sound
dart compile js -O2 -o web/dist/hauberk-core.js web/main.dart
rm -f web/dist/hauberk-core.js.deps web/dist/hauberk-core.js.map
