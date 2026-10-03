#!/bin/sh
# Upload web/dist to https://ruzzoli.de/roguelikes/hauberk/ (RVIP.md stage 5).
# Run after ./build.sh, from a clean, pushed tree.
set -e
cd "$(dirname "$0")/.."
git fetch -q memmaker && [ -z "$(git status --porcelain)" ] && [ "$(git rev-parse @)" = "$(git rev-parse @{u})" ] || { echo "commit + push first"; exit 1; }
[ -f web/dist/hauberk-core.js ] || { echo "deploy: build first (./build.sh)" >&2; exit 1; }
ssh ruzzoli.de 'sudo mkdir -p /var/www/ruzzoli.de/roguelikes/hauberk && sudo chown -R felix:www-data /var/www/ruzzoli.de/roguelikes/hauberk'
rsync -rtz --delete web/dist/ ruzzoli.de:/var/www/ruzzoli.de/roguelikes/hauberk/
