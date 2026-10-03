// RVIP: the town stairs walk (q) goes all the way to the dungeon entrance.
import 'package:hauberk/src/content.dart';
import 'package:hauberk/src/content/tiles.dart';
import 'package:hauberk/src/engine.dart';
import 'package:test/test.dart';

void main() {
  test('town q walk stops next to the entrance in one press', () {
    var content = createContent();
    var game = Game(
      content,
      0,
      content.createHero("Test"),
      width: 60,
      height: 34,
    );
    for (var _ in game.generate()) {}
    bool goal(p) => game.stage[p].portal == TilePortals.dungeon;
    game.hero.explore(goal: goal, stepIntoGoal: true);
    var steps = 0;
    while (game.update() is! WaitingUpdateResult) {
      steps++;
      if (steps > 2000) break;
    }
    expect(game.hero.pos.neighbors.any(goal), isTrue);
  });
}
