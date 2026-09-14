import 'package:piecemeal/piecemeal.dart';

import 'actor.dart';
import 'element.dart';

/// Describes a single "interesting" thing that occurred during a call to
/// [Game.update()]. In general, events correspond to things that a UI is likely
/// to want to display visually in some form.
class Event {
  final EventType type;
  // TODO: Having these all be nullable leads to a lot of "!" in effects.
  // Consider a better way to model this.
  final Actor? actor;
  final Element element;
  final Object? other;
  final Vec? pos;
  final Direction? dir;

  Event(this.type, this.actor, this.element, this.pos, this.dir, this.other);
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
