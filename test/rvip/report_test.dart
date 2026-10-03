// RVIP stage 9: the run report (beacon) fires from the game's own end paths.
import 'package:hauberk/src/content.dart';
import 'package:hauberk/src/engine.dart';
import 'package:test/test.dart';

void main() {
  late Game game;
  var sent = <String>[];
  var content = createContent();

  setUp(() {
    sent.clear();
    rvipReportHook = sent.add;
    game = Game(
      content,
      100,
      content.createHero("Win Test"),
      width: 60,
      height: 34,
    );
    for (var _ in game.generate()) {}
  });

  Monster spawn(String name) {
    var breed = game.content.tryFindBreed(name)!;
    var pos = game.hero.pos.neighbors.firstWhere(
      (p) =>
          game.stage[p].isWalkable &&
          game.stage.actorAt(p) == null,
    );
    var m = breed.spawn(pos);
    game.stage.addActor(m);
    return m;
  }

  test('killing the Nameless Unmaker sends ev=win', () {
    var boss = spawn("Nameless Unmaker");
    var action = AttackAction(boss)..bind(game, game.hero);
    boss.takeDamage(action, boss.health + 1, game.hero, game.hero);
    expect(sent, ['g=hauberk&ev=win&name=Win+Test&depth=100']);
  });

  test('hero death records the killer breed', () {
    var m = spawn("Nameless Unmaker");
    var action = AttackAction(game.hero)..bind(game, m);
    game.hero.takeDamage(action, game.hero.health + 1, m, m);
    rvipReport('death', game.hero.save.name, game.depth);
    expect(
      sent.single,
      'g=hauberk&ev=death&name=Win+Test&depth=100&killer=Nameless+Unmaker',
    );
  });
}
