import 'package:piecemeal/piecemeal.dart';

import '../item/item.dart';
import 'actor.dart';
import 'element.dart';

/// Describes a single "interesting" thing that occurred during a call to
/// [Game.update()]. In general, events correspond to things that a UI is likely
/// to want to display visually in some form.
/// RVIP: web sound hook, set by the web frontend (null elsewhere). Called at
/// game actions with an event name; the page maps it to a sound file.
void Function(String name)? rvipSoundHook;
void rvipSound(String name) => rvipSoundHook?.call(name);

/// RVIP: run report (beacon query, sent by the page's RvipWM.report).
void Function(String query)? rvipReportHook;

/// RVIP: breed name of the monster that last dealt the hero a killing blow.
String? rvipKiller;

void rvipReport(String ev, String name, int depth) {
  var q =
      'g=hauberk&ev=$ev&name=${Uri.encodeQueryComponent(name)}&depth=$depth';
  if (ev == 'death' && rvipKiller != null) {
    q += '&killer=${Uri.encodeQueryComponent(rvipKiller!)}';
  }
  rvipKiller = null;
  rvipReportHook?.call(q);
}

class Event {
  final EventType type;
  // TODO: Having these all be nullable leads to a lot of "!" in effects.
  // Consider a better way to model this.
  final Vec pos;
  final Direction dir;
  final Element element;
  final Actor? actor;
  final Item? item;
  final int amount;

  Event(
    this.type,
    this.element,
    this.pos,
    this.dir,
    this.actor,
    this.item,
    this.amount,
  );
}

// TODO: Move to content.
/// A kind of [Event] that has occurred.
class EventType {
  /// An [Actor] wakes up.
  static const awaken = EventType("awaken");

  /// An [Actor] died.
  static const die = EventType("die");

  /// An [Actor] becomes afraid.
  static const frighten = EventType("frighten");

  /// The hero picks up gold worth [Event.other].
  static const gold = EventType("gold");

  /// An [Actor] was hit.
  static const hit = EventType("hit");

  /// A thrown item in flight.
  static const toss = EventType("toss");

  final String _name;

  const EventType(this._name);

  @override
  String toString() => _name;
}
