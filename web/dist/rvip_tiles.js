// RVIP: draws the tile map the game publishes as window.rvipMap
// (lib/src/ui/rvip_tiles.dart) on a canvas over the Malison stage panel.
// Dumb on purpose: slots and flags come from Dart; this only scales, scrolls,
// dims and draws. Tile set stored by name via rvipPut (IndexedDB, rvip_page.js).
(function () {
  var SETS = [['tiles-dawn.png', 'DawnLike']];   // then None (text)
  var TILE = 16;
  var cur = -1, img = null, gen = 0, canvas = null, button = null;

  function label() { if (button) button.textContent = 'Tiles: ' + (cur < 0 ? 'None' : SETS[cur][1]); }
  // Map cell height in CSS px (the Malison font), for the tile zoom.
  var ZOOM = 2;

  function use(i, save) {
    cur = i; gen++; label();
    if (save) window.rvipPut('tiles', i < 0 ? 'None' : SETS[i][1]);
    window.rvipTiles = false; img = null;
    if (i >= 0) {
      var g = gen, im = new Image();
      im.onload = function () {
        if (g !== gen) return;   // a later switch (or None) wins
        img = im; window.rvipTiles = true;
        if (window.rvipRedraw) window.rvipRedraw();
      };
      im.src = SETS[i][0];
    }
    window.rvipDraw();
    if (window.rvipRedraw) window.rvipRedraw();
  }

  window.rvipDraw = function () {
    var m = window.rvipMap, game = document.getElementById('map');
    var term = game && game.querySelector('canvas:not(.rvip-tiles)');
    if (!canvas) {
      if (!game) return;
      canvas = document.createElement('canvas');
      canvas.className = 'rvip-tiles';
      canvas.style.cssText = 'position:absolute;image-rendering:pixelated;background:#000';
      game.appendChild(canvas);
    }
    if (!img || !m || !m.shown || !term) { canvas.style.display = 'none'; return; }
    // Inside the map body's scroll area, over the Malison canvas.
    var x0 = term.offsetLeft + term.clientLeft, y0 = term.offsetTop + term.clientTop;
    var W = term.clientWidth, H = term.clientHeight, r = m.rect;
    // Tile zoom follows the map's A-/A+ (the Malison cell height): 8 px -> 1x, 12-16 -> 2x, 20 -> 3x.
    ZOOM = Math.max(1, Math.round(H / m.rows / 8));
    var cw = Math.round(r[2] * W), ch = Math.round(r[3] * H);
    canvas.style.display = '';
    canvas.style.left = Math.round(x0 + r[0] * W) + 'px';
    canvas.style.top = Math.round(y0 + r[1] * H) + 'px';
    if (canvas.width !== cw || canvas.height !== ch) { canvas.width = cw; canvas.height = ch; }
    var c = canvas.getContext('2d');
    c.imageSmoothingEnabled = false;
    c.fillStyle = '#000';
    c.fillRect(0, 0, cw, ch);

    var ts = TILE * ZOOM, cols = Math.ceil(cw / ts), rows = Math.ceil(ch / ts);
    // Centre on the hero; clamp to the stage (stage smaller than view: centre it).
    function origin(h, n, size, px) {
      if (n * ts <= px) return { o: 0, off: Math.floor((px - n * ts) / 2) };
      return { o: Math.max(0, Math.min(n - size, h - (size >> 1))), off: 0 };
    }
    var ox = origin(m.hx, m.w, Math.floor(cw / ts), cw), oy = origin(m.hy, m.h, Math.floor(ch / ts), ch);
    var cells = m.cells, per = img.width / TILE;
    function blit(slot, dx, dy) {
      if (slot) c.drawImage(img, slot % per * TILE, Math.floor(slot / per) * TILE, TILE, TILE, dx, dy, ts, ts);
    }
    for (var y = 0; y <= rows; y++) {
      for (var x = 0; x <= cols; x++) {
        var sx = ox.o + x, sy = oy.o + y;
        if (sx >= m.w || sy >= m.h) continue;
        var i = (sy * m.w + sx) * 3, f = cells[i + 2];
        if (!(f & 1)) continue;
        var dx = ox.off + x * ts, dy = oy.off + y * ts;
        blit(cells[i], dx, dy);
        blit(cells[i + 1], dx, dy);
        if (!(f & 2)) { c.fillStyle = 'rgba(0,0,0,0.5)'; c.fillRect(dx, dy, ts, ts); }
        if (f & 4) { c.strokeStyle = '#fff'; c.lineWidth = ZOOM; c.strokeRect(dx + 1, dy + 1, ts - 2, ts - 2); }
      }
    }
    // Effects and fire: the game's own glyphs as text over the tiles.
    var t = m.text;
    c.font = 'bold ' + Math.round(ts * 0.8) + 'px monospace';
    c.textAlign = 'center'; c.textBaseline = 'middle';
    for (var k = 0; k + 3 < t.length; k += 4) {
      var tx = t[k] - ox.o, ty = t[k + 1] - oy.o;
      if (tx < 0 || ty < 0 || tx > cols || ty > rows) continue;
      c.fillStyle = t[k + 3];
      c.fillText(String.fromCodePoint(t[k + 2]), ox.off + tx * ts + ts / 2, oy.off + ty * ts + ts / 2);
    }
  };

  // Called by rvip_page.js once the stored set name is read (no default-sheet flash).
  window.rvipTilesInit = function () {
    button = document.getElementById('btn-tiles');
    button.addEventListener('mousedown', function (e) { e.preventDefault(); });
    button.onclick = function () { use(cur + 1 < SETS.length ? cur + 1 : -1, true); };
    var name = window.rvipStore.tiles, i = 0;
    if (name === 'None') i = -1;
    else SETS.forEach(function (e, j) { if (e[1] === name) i = j; });
    use(i, false);
  };
})();
