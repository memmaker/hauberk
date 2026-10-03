// RVIP: Hauberk's page. The whole GUI is the game's own Malison canvas
// (web/main.dart); ../rvip-wm.js only for dropdowns and the run report,
// saves/help via ../rvip-app.js. Every value (heroes, glyph sheet, sound)
// lives in the game's own IndexedDB database (RvipApp.dir), read before
// the game starts.
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
  ['btn-file', 'btn-help', 'btn-smaller', 'btn-larger'].forEach(function (id) { $(id).addEventListener('mousedown', function (e) { e.preventDefault(); }); });
  window.addEventListener('beforeunload', function (e) { if (window.rvipInGame && app.running) { e.preventDefault(); e.returnValue = ''; } });

  /* ---- A-/A+: the game's glyph sheet (Dart steps and stores it) ---- */
  $('btn-smaller').onclick = function () { if (window.rvipFont) window.rvipFont(-1); };
  $('btn-larger').onclick = function () { if (window.rvipFont) window.rvipFont(1); };

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
    var s = document.createElement('script');
    s.src = 'hauberk-core.js';
    s.onload = function () { app.running = true; app.status(''); };
    s.onerror = function () { app.status('Could not load the game (hauberk-core.js).', true); };
    document.body.appendChild(s);
  }
  open(start);
})();
