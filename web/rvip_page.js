// RVIP: Hauberk's page. Windows via ../rvip-wm.js, saves/help via ../rvip-app.js.
// Every value (heroes, layout, text font, tile set) lives in the game's own
// IndexedDB database (RvipApp.dir), read before the game starts. Window
// contents come from Dart (lib/src/ui/rvip_web.dart); this only places them.
(function () {
  'use strict';
  function $(id) { return document.getElementById(id); }
  var DB = RvipApp.dir, store = window.rvipStore = {}, db = null, pending = Promise.resolve();

  /* ---- IndexedDB key/value store ---- */
  function tx(mode) { return db.transaction('kv', mode).objectStore('kv'); }
  window.rvipPut = function (k, v) {
    store[k] = v;
    if (!db) return;
    pending = pending.then(function () {
      return new Promise(function (ok) {
        var t = db.transaction('kv', 'readwrite');   /* one put = atomic */
        if (v === null) t.objectStore('kv').delete(k); else t.objectStore('kv').put(v, k);
        t.oncomplete = ok;
        t.onerror = t.onabort = function () { app.status('Saving to browser storage (IndexedDB) failed. Use "Export save" to keep a copy.', true); ok(); };
      });
    });
    return pending;
  };
  function open(done) {
    try {
      var r = indexedDB.open(DB, 1);
      r.onupgradeneeded = function () { r.result.createObjectStore('kv'); };
      r.onerror = function () { done(); };
      r.onsuccess = function () {
        db = r.result;
        var q = tx('readonly').openCursor();
        q.onsuccess = function () { var c = q.result; if (c) { store[c.key] = c.value; c.continue(); } else done(); };
        q.onerror = function () { done(); };
      };
    } catch (e) { done(); }
  }

  /* ---- app: saves, help, crashes ---- */
  var app = RvipApp({
    name: 'hauberk',
    save: function () { return store.heroes ? 'hauberk-heroes.json' : null; },
    read: function () { return new TextEncoder().encode(store.heroes); },
    clear: function () { return window.rvipPut('heroes', null); },
    put: function (f, data) {
      var t = new TextDecoder().decode(data);
      try { if (!JSON.parse(t).heroes) throw 0; } catch (e) { return 'That file is not a Hauberk save (hauberk-heroes.json).'; }
      return window.rvipPut('heroes', t);
    },
    sync: function (cb) { pending.then(function () { cb(); }); },
    noSave: 'There is no saved hero yet.',
    newGame: function () {
      if (window.rvipInGame && !confirm('Leave this hero (progress since the last save in town is lost) and go back to the hero list?')) return;
      window.rvipInGame = false; location.reload();
    }
  });
  RvipWM.dropdown($('btn-file'), $('menu-file'));
  ['btn-file', 'btn-help', 'btn-layout'].forEach(function (id) { $(id).addEventListener('mousedown', function (e) { e.preventDefault(); }); });
  window.addEventListener('beforeunload', function (e) { if (window.rvipInGame && app.running) { e.preventDefault(); e.returnValue = ''; } });

  /* ---- window contents (sent by Dart) ---- */
  var cache = {}, visKey = null;
  window.rvipPane = function (id, html) {
    if (cache[id] === html) return;
    cache[id] = html; $('pane-' + id).innerHTML = html;
  };
  /* pop-up over the map: the game's dialogs as HTML (empty = closed); text follows Messages' size */
  var popHtml = '';
  function placePop() {
    var pop = $('pop'); if (pop.hidden) return;
    pop.style.fontSize = RvipWM.fontSize('msg') + 'px';
    RvipWM.popup(pop, { center: true });
  }
  window.rvipPopup = function (html) {
    if (html === popHtml) return;
    var pop = $('pop'), was = !pop.hidden;
    popHtml = html; pop.firstChild.innerHTML = html; pop.hidden = !html;
    if (!was) pop.scrollTop = 0;
    placePop();
  };
  window.rvipMessages = function (lines) { RvipWM.setLog($('msg'), lines); };
  function icon(t) {
    if (!t || !window.rvipTiles) return null;
    var d = document.createElement('div'); d.className = 'wm-ic';
    d.style.backgroundPosition = -(t % 16) * 16 + 'px ' + -Math.floor(t / 16) * 16 + 'px';
    return d;
  }
  window.rvipVisible = function (s) {
    var k = s + (window.rvipTiles ? '\u0001' : '');
    if (k === visKey) return;
    visKey = k; $('vis')._vis = null; RvipWM.visible($('vis'), s, icon);
  };
  /* characters that fit window id's body (its own font size and face) */
  window.rvipCols = function (id) {
    var b = $('pane-' + id), sp = document.createElement('span');
    sp.style.cssText = 'position:absolute;visibility:hidden'; sp.textContent = 'MMMMMMMMMM';
    b.appendChild(sp); var cw = sp.getBoundingClientRect().width / 10; sp.remove();
    return Math.floor((b.parentNode.clientWidth - 16) / (cw || 8));
  };
  function redraw() { if (window.rvipRedraw) window.rvipRedraw(); }

  /* ---- text font (top bar): every window but the map ---- */
  var sel = $('sel-font');
  RvipWM.fontOptions(sel);
  sel.addEventListener('keydown', function (e) { e.stopPropagation(); });
  function face(n) {
    var css = $('face-css') || document.head.appendChild(Object.assign(document.createElement('style'), { id: 'face-css' }));
    css.textContent = n ? '.win:not(#t-map) .body, .win:not(#t-map) .txt { font-family: "' + n + '", ui-monospace, monospace !important; }' : '';
    if (!n) return redraw();
    new FontFace(n, 'url(../fonts/' + n + '.woff)').load().then(function (f) { document.fonts.add(f); redraw(); }, redraw);
  }
  sel.onchange = function () { window.rvipPut('face', sel.value); face(sel.value); sel.blur(); };

  /* ---- windows ---- */
  var wm;
  // Map A-/A+ = Malison font: WM size 8..17 = font 0..9 (6x8 .. 16x20), default 9x12.
  window.rvipMapFont = function () { return RvipWM.fontSize('map') - 8; };
  /* ---- audio: the game names events at game actions (rvipSoundHook in the
   * Dart engine), web/mksounds.py synthesizes one wav per event, rvip-sound.js
   * plays them. Off by default; sounds.json is fetched only when on. No music. */
  var snd = { on: false, cfg: null, loading: false, played: 0 };
  window.rvipAudio = function () { return snd; };
  /* RVIP stage 9: run report (query built by the game) through the rvip-wm outbox. */
  window.rvipReport = function (q) {
    try {
      if (window.RvipWM && RvipWM.report) RvipWM.report(q);
      else fetch('/roguelikes/beacon?' + q, { keepalive: true, mode: 'no-cors' }).catch(function () {});
    } catch (e) {}
  };
  window.rvipSound = function (name) {
    if (!snd.on) return;
    if (!snd.cfg) {
      if (!snd.loading) {
        snd.loading = true;
        fetch('sound/sounds.json').then(function (r) { return r.json(); })
          .then(function (c) { snd.cfg = c; }).catch(function () { snd.loading = false; });
      }
      return;
    }
    var f = snd.cfg[name];
    if (!f) return;
    snd.played++;
    RVIPSound.play([f], 0.6);
  };
  RvipWM.dropdown($('btn-audio'), $('menu-audio'));
  $('btn-audio').addEventListener('mousedown', function (e) { e.preventDefault(); });
  $('chk-sound').onchange = function () {
    snd.on = this.checked; window.rvipPut('sound', snd.on); window.rvipSound(''); this.blur();
  };

  function start() {
    snd.on = $('chk-sound').checked = store.sound === true;
    window.rvipSound('');   /* sound saved on: load sounds.json now, not on the first event */
    var multi = { d: 'h', r: 0.2, a: { d: 'v', r: 0.6, a: 'status', b: 'vis' },
      b: { d: 'h', r: 0.72, a: { d: 'v', r: 0.18, a: 'msg', b: 'map' }, b: 'inv' } };
    wm = RvipWM({
      area: $('game'), menu: $('btn-layout'),
      wins: [{ id: 'map', title: 'Map' }, { id: 'status', title: 'Hero' }, { id: 'msg', title: 'Log messages' },
        { id: 'inv', title: 'Inventory' }, { id: 'equip', title: 'Equipment' }, { id: 'vis', title: 'Visible' }],
      multi: multi, single: 'map',
      state: store.layout ? JSON.parse(store.layout) : null,
      save: function (s) { window.rvipPut('layout', JSON.stringify(s)); },
      size: { map: function () { return 12; } },
      fontMax: { map: 17 },
      zoom: { map: function (size) { if (window.rvipFont) window.rvipFont(size - 8); },
        status: redraw, inv: redraw, equip: redraw, msg: function () { placePop(); } },
      layout: function () {
        window.rvipMulti = wm.mode() === 'multi';
        if (window.rvipResize) window.rvipResize(); else redraw();
        if (window.rvipDraw) window.rvipDraw();
        placePop();
      }
    });
    window.rvipMulti = wm.mode() === 'multi';
    if (store.face) { sel.value = store.face; face(store.face); }
    window.rvipTilesInit();
    var s = document.createElement('script');
    s.src = 'hauberk-core.js';
    s.onload = function () { app.running = true; app.status(''); wm.apply(); };
    s.onerror = function () { app.status('Could not load the game (hauberk-core.js).', true); };
    document.body.appendChild(s);
  }
  open(start);
})();
