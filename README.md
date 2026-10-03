> **Web port (RVIP).** This is [Hauberk](https://github.com/munificent/hauberk) by Bob Nystrom at upstream commit
> [`6c5c684c`](https://github.com/munificent/hauberk/tree/6c5c684c) (master, 2026-09-14), ported to the browser.
> Our changes: [compare 6c5c684c...rvip-port](https://github.com/memmaker/hauberk/compare/6c5c684c...rvip-port).
> Play: https://ruzzoli.de/roguelikes/hauberk/

![Splash screen][splash]

Hauberk is a [roguelike][], an ASCII-art based procedurally-generated dungeon
crawl game. It's written in [Dart] and runs in your browser.

Behold it in all of its glory:

![Dungeon][]

## Running it

To get it up and running locally, you'll need to have the Dart SDK installed.
I use the latest dev channel release of Dart, which you can get from
[here][sdk].

Once you have Dart installed and its `bin/` directory on your `PATH`, then:

1. Clone this repo.
2. From the root directory of it, run: `$ make serve`
3. In your browser, open: `http://localhost:8080`

This runs a development server that automatically compiles the Dart source to
JavaScript on the fly as you work on it.

## Contributions

One of the things I enjoy most about open source is collaborating with other
people, and I'd love to have more contributions. But, the reality of my life
right now is that my [other main open source project][wren] already has more
activity than I can handle given that I am also [writing a book][book] and have
a wife, kids, pets, and full-time job.

[wren]: https://github.com/munificent/wren
[book]: http://www.craftinginterpreters.com/

So, for my sanity's sake, this project is mostly "read-only". You are welcome to
file bug reports for issues you notice, but I probably won't have the time to
take many pull requests.

I'd be delighted if you used this codebase as a springboard for your own game.
Feel free to fork and make it into your own thing in any way you choose. It uses
a very permissive [MIT license][], so you can do pretty much whatever you want
with it.

Thanks for understanding.

[roguelike]: http://en.wikipedia.org/wiki/Roguelike
[dart]: http://dartlang.org
[splash]: https://i.imgur.com/qBRLNU5.png
[dungeon]: https://i.imgur.com/AbaPbvU.png
[sdk]: https://webdev.dartlang.org/tools/sdk
[mit license]: https://github.com/munificent/hauberk/blob/master/COPYRIGHT

## Web port (RVIP)

Branch `rvip-port` of [memmaker/hauberk](https://github.com/memmaker/hauberk), played at
https://ruzzoli.de/roguelikes/hauberk/ . Text only (the game's own glyphs). Sound effects are synthesized at build time (`web/mksounds.py`).
