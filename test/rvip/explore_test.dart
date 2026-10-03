// RVIP: known-grid test for auto-explore and the stairs walk.
import 'package:hauberk/src/content.dart';
import 'package:hauberk/src/content/tiles.dart';
import 'package:hauberk/src/engine.dart';
import 'package:piecemeal/piecemeal.dart';
import 'package:test/test.dart';

void main() {
  test('explore walks only over known cells and finds the stairs', () {
    var content = createContent();
    var game = Game(content, 1, content.createHero("Test"));
    for (var _ in game.generate()) {}
    for (var m in game.stage.actors.whereType<Monster>().toList()) {
      game.stage.removeActor(m);
    }
    // Light the level so the hero sees (no candle needed for the test).
    for (var pos in game.stage.bounds) {
      game.stage[pos].addEmanation(255);
    }
    game.stage.floorEmanationChanged();
    game.stage.refreshView();

    int explored() =>
        game.stage.bounds.where((p) => game.stage[p].isExplored).length;
    var before = explored();

    String? last;
    for (var press = 0; press < 200; press++) {
      game.hero.explore();
      while (game.update() is! WaitingUpdateResult) {
        // Every cell the hero stands on was known before it walked there.
        expect(game.stage[game.hero.pos].isExplored, isTrue);
      }
      last = game.log.messages.last.text;
      if (last.startsWith("Nothing left")) break;
    }
    expect(last, startsWith("Nothing left"));
    expect(explored(), greaterThan(before));

    // Stairs walk: stops on the stairs.
    game.hero.explore(goal: (p) => game.stage[p].portal == TilePortals.exit);
    while (game.update() is! WaitingUpdateResult) {}
    expect(game.stage[game.hero.pos].portal, TilePortals.exit);
  });
}
