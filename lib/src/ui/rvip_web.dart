// RVIP: the page's value store (IndexedDB, web/rvip_page.js), read before
// the game starts.
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

String? rvipGet(String key) =>
    (globalContext['rvipStore'] as JSObject?)?[key]?.dartify() as String?;

void rvipPut(String key, String value) {
  globalContext.callMethod('rvipPut'.toJS, key.toJS, value.toJS);
}
