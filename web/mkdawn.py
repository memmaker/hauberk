#!/usr/bin/env python3
"""DawnLike tiles for Hauberk (DragonDePlatino, palette DawnBringer, CC BY 4.0).

Reads the game's own ids: web/rvip_ids.tsv (breed / item type resource ids,
dumped by `dart run tool/rvip_ids.dart > web/rvip_ids.tsv`), race ids and the
`Tiles.<field>` TileTypes of lib/src/content/tiles.dart. Picks a DawnLike
sprite per id by hand table (names from rvip-tools/tilesets/dawnlike_names.tsv),
asserts every id has one, and writes

  web/tiles-dawn.png              16x16 sprites, 16 per row, original size
  lib/src/ui/rvip_tiles_gen.dart  id -> slot tables

Terrain: floor styles and wall styles take 16 slots (by mask n=8 s=4 w=2 e=1:
floor bordered / wall joined on that side). Run from the repo root."""
import json, os, re, sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TS = os.environ.get('RVIP_TILESETS') or os.path.expanduser('~/Games/rvip-tools/tilesets')
sys.path.insert(0, TS)
from dawnlike_preview import pos, sprite

ids = [l.split('\t') for l in open(os.path.join(ROOT, 'web/rvip_ids.tsv')).read().split('\n') if l]
breeds = [f[1] for f in ids if f[0] == 'breed']
items = [f[1] for f in ids if f[0] == 'item']
races = re.findall(r'Race\(\s*"(\w+)"', open(os.path.join(ROOT, 'lib/src/content/races.dart')).read())
fields = re.findall(r'static final (\w+) = (?:Tiles\.)?(?:tile|multi)\(', open(os.path.join(ROOT, 'lib/src/content/tiles.dart')).read())

DRAGON = {'forest': 'glendrake', 'brown': 'sanddrake', 'blue': 'stormwyrm', 'white': 'icewyrm',
          'purple': 'dreadwyrm', 'green': 'bogwyrm', 'silver': 'sheenwyrm', 'red': 'firedrake',
          'gold': 'kingwyrm', 'black': 'darkwyrm', 'ethereal': 'lightwyrm'}
ADULT = {'stormwyrm': 'storrmwyrm'}   # misspelt in the atlas
BREED = {
 'little brown spider': 'cave spider', 'gray spider': 'phase spider', 'spiderling': 'giant tick',
 'giant spider': 'giant spider', 'brown bat': 'baby bat', 'giant bat': 'giant bat', 'cave bat': 'vampire bat',
 'mangy cur': 'jackal', 'wild dog': 'dingo', 'mongrel': 'hound', 'wolf': 'wolf', 'varg': 'warg',
 'Skoll': 'winter wolf', 'Hati': 'rabid wolf', 'Fenrir': 'hell hound',
 'lazy eye': 'floating eye', 'mad eye': 'evil eye', 'floating eye': 'floating eye', 'baleful eye': 'evil eye',
 'malevolent eye': 'eye tyrant', 'murderous eye': 'eye tyrant', 'watcher': 'evil eye',
 'stray cat': 'barn cat',
 'goblin peon': 'ordinary goblin', 'goblin archer': 'goblin', 'goblin fighter': 'goblin',
 'goblin warrior': 'hobgoblin', 'goblin mage': 'orc shaman', 'goblin ranger': 'bugbear',
 'Erlkonig, the Goblin Prince': 'goblin prince',
 'giant cockroach': 'giant beetle', 'giant centipede': 'centipede', 'firefly': 'firefly',
 'green jelly': 'spotted jelly', 'green slime': 'green slime', 'frosty slime': 'blue slime',
 'mud slime': 'brown pudding', 'smoking slime': 'black pudding', 'sparkling slime': 'quivering blob',
 'caustic slime': 'acid blob', 'virulent slime': 'green mold', 'ectoplasm': 'gray ooze',
 'scurrilous imp': 'imp', 'vexing imp': 'homunculus', 'kobold': 'kobold', 'kobold shaman': 'kobold shaman',
 'kobold trickster': 'kobold rogue', 'kobold priest': 'kobold priest', 'imp incanter': 'quasit',
 'imp warlock': 'uranium imp', 'Feng': 'kobold lord',
 'lizard guard': 'lizard', 'lizard protector': 'iguana', 'armored lizard': 'gila monster',
 'scaled guardian': 'komodo dragon', 'saurian': 'crocodile',
 'orc': 'orc', 'orc brute': 'uruk', 'orc soldier': 'hill orc', 'orc chieftain': 'orc king',
 'Harold the Misfortunate': 'brute', 'hapless adventurer': 'tourist', 'simpering knave': 'thief',
 'decrepit mage': 'wizard', 'unlucky ranger': 'ranger', 'drunken priest': 'priest',
 'mouse': 'rock mole', 'sewer rat': 'sewer rat', 'sickly rat': 'rabid rat', 'plague rat': 'wererat',
 'giant rat': 'giant rat', 'The Rat King': 'rodent of unusual size',
 'giant slug': 'giant slug', 'suppurating slug': 'giant snail', 'acidic slug': 'baby slug',
 'choker': 'devil snare', 'nightshade': 'evil shrub', 'creeper': 'swamp fern', 'strangler': 'demon shrub',
 'blood worm': 'leech', 'fire worm': 'dung worm', 'giant earthworm': 'long worm', 'giant cave worm': 'purple worm',
 'bony hand': 'magic bones', 'bony arm': 'bones', 'severed skull': 'magic skull',
 'decapitated skeleton': 'shadow skeleton', 'armless skeleton': 'plague skeleton',
 'one-armed skeleton': 'fire skeleton', 'skeleton': 'skeleton', 'skeleton warrior': 'barrow wight',
 'robed skeleton': 'lich', 'crow': 'nighthawk', 'raven': 'condor',
 'forest sprite': 'forest sprite', 'house sprite': 'mountain sprite', 'mischievous sprite': 'forest fairy',
 'Tink': 'mountain fairy', 'harpy': 'gold wings', 'griffin': 'griffon', 'Nameless Unmaker': 'cthulhu',
 'frog': 'frog', 'juvenile salamander': 'newt', 'salamander': 'salamander',
 'three-headed salamander': 'hydra', 'water snake': 'water moccasin', 'brown snake': 'snake', 'cave snake': 'asp',
}
for c, w in DRAGON.items():
    BREED['juvenile %s dragon' % c] = 'baby ' + w
    for age in ('', 'elder ', 'ancient '):   # elder/ancient: same-set stand-in (adult)
        BREED['%s%s dragon' % (age, c)] = ADULT.get(w, w)
STANDIN = {'elder', 'ancient'}

GEM = {'Amethyst': 'violet', 'Sapphire': 'blue', 'Emerald': 'green', 'Ruby': 'red', 'Diamond': 'white'}
ITEM = {
 'Rock': 'rock', 'Skull': 'skull', 'Copper Coin': 'copper coin', 'Bronze Coin': 'pile of copper coins',
 'Silver Coin': 'silver coin', 'Electrum Coin': 'pile of silver coins', 'Gold Coin': 'gold coin',
 'Platinum Coin': 'pile of gold coins', 'Copper Bar': 'blob of melted metal', 'Bronze Bar': 'lead foil',
 'Silver Bar': 'silvery metal stone', 'Electrum Bar': 'gold foil', 'Gold Bar': 'molten gold',
 'Platinum Bar': 'unknown metal tube', 'Insect Wing': 'eucalyptus leaf', 'Feather': 'thorn',
 'Stale Biscuit': 'pancake', 'Loaf of Bread': 'loaf of bread', 'Chunk of Meat': 'marbled cut of meat',
 'Piece of Jerky': 'strip of meat', 'Tallow Candle': 'tallow candle', 'Wax Candle': 'wax candle',
 'Oil Lamp': 'lamp', 'Torch': 'candelabrum', 'Lantern': 'brass lantern',
 'Soothing Balm': 'milky potion', 'Mending Salve': 'pink potion', 'Healing Poultice': 'ruby potion',
 'Potion of Amelioration': 'sanguine potion', 'Potion of Rejuvenation': 'radiant potion',
 'Antidote': 'emerald potion', 'Salve of Heat Resistance': 'orange potion',
 'Salve of Cold Resistance': 'sky blue potion', 'Salve of Light Resistance': 'golden potion',
 'Salve of Wind Resistance': 'cloudy potion', 'Salve of Lightning Resistance': 'yellow potion',
 'Salve of Darkness Resistance': 'dark potion', 'Salve of Earth Resistance': 'brown potion',
 'Salve of Water Resistance': 'brilliant blue potion', 'Salve of Acid Resistance': 'dark green potion',
 'Salve of Poison Resistance': 'puce potion', 'Salve of Death Resistance': 'black potion',
 'Potion of Quickness': 'fizzy potion', 'Potion of Alacrity': 'effervescent potion',
 'Potion of Speed': 'winged potion', 'Bottled Wind': 'smoky potion', 'Bottled Ice': 'white potion',
 'Bottled Fire': 'purple red potion', 'Bottled Ocean': 'cyan potion', 'Bottled Poison': 'murky potion',
 'Bottled Earth': 'sloshing potion', 'Bottled Lightning': 'sparkly potion', 'Bottled Acid': 'bubbly potion',
 'Bottled Shadow': 'sinister potion', 'Bottled Radiance': 'clear potion', 'Bottled Spirit': 'swirly potion',
 'Scroll of Sidestepping': 'blue scroll', 'Scroll of Phasing': 'cyan scroll',
 'Scroll of Teleportation': 'dusty blue scroll', 'Scroll of Disappearing': 'ancient blue scroll',
 'Scroll of Find Nearby Escape': 'green scroll', 'Scroll of Locate Escape': 'dusty green scroll',
 'Scroll of Find Nearby Items': 'yellow scroll', 'Scroll of Item Detection': 'dusty yellow scroll',
 'Scroll of Detect Nearby': 'orange scroll', 'Scroll of Detection': 'dusty orange scroll',
 'Scroll of Sense Nearby Monsters': 'red scroll', 'Scroll of Sense Monsters': 'dusty red scroll',
 'Scroll of Perceive Monsters': 'ancient red scroll', 'Scroll of Telepathy': 'mystery red scroll',
 "Adventurer's Map": 'long scroll', "Explorer's Map": 'atlas', "Cartographer's Map": 'navigation guide',
 "Wizard's Map": 'field guide', 'Ring of Wisdom': 'sapphire ring',
 'Stick': 'aklys', 'Cudgel': 'club', 'Club': 'club', 'Walking Stick': 'quarterstaff', 'Staff': 'quarterstaff',
 'Quarterstaff': 'quarterstaff', 'Hammer': 'hammer', 'Mattock': 'mattock', 'War Hammer': 'war hammer',
 'Morningstar': 'morning star', 'Mace': 'mace', 'Whip': 'bullwhip', 'Chain Whip': 'nunchaku', 'Flail': 'flail',
 'Knife': 'knife', 'Dagger': 'dagger', 'Dirk': 'elven dagger', 'Stiletto': 'stiletto', 'Rondel': 'orcish dagger',
 'Baselard': 'athame', 'Mercygiver': 'silver dagger', 'Rapier': 'silver saber', 'Shortsword': 'short sword',
 'Scimitar': 'scimitar', 'Cutlass': 'orcish short sword', 'Falchion': 'elven short sword',
 'Pointed Stick': 'elven spear', 'Spear': 'spear', 'Angon': 'dwarvish spear', 'Lance': 'lance',
 'Partisan': 'hilted polearm', 'Hatchet': 'axe', 'Axe': 'axe', 'Valaska': 'battle axe', 'Battleaxe': 'battle axe',
 'Short Bow': 'shortbow', 'Longbow': 'longbow', 'Crossbow': 'crossbow',
 'Leather Cap': 'elven leather helm', 'Chainmail Coif': 'orcish helm', 'Steel Cap': 'dented pot',
 'Visored Helm': 'visored helm', 'Great Helm': 'crested helm', 'Robe': 'monk robes', 'Lined Robe': 'peasant robes',
 'Cloth Shirt': 'stealth outfit', 'Leather Shirt': 'animal hide', 'Jerkin': 'royal outfit',
 'Leather Armor': 'lacquered armor', 'Padded Armor': 'frost garb', 'Studded Armor': 'iron armor',
 'Mail Hauberk': 'chain shirt', 'Scale Mail': 'scale armor', 'Plated Mail': 'banded mail',
 'Brigandine': 'bronze armor', 'Breastplate': 'breastplate', 'Plate Armor': 'full plate',
 'Cloak': 'hill cloak', 'Fur Cloak': 'desert cloak', 'Spidersilk Cloak': 'spidersilk cape',
 'Gloves': 'leather glove', 'Bracers': 'clumsy mitt', 'Gauntlets': 'iron gauntlet',
 'Buckler': 'small shield', 'Leather Shield': 'elven shield', 'Targe': 'orcish shield',
 'Roundel': 'polished silver shield', 'Steel Shield': 'large shield', 'Kite Shield': 'white handed shield',
 'Lantern Shield': 'dwarvish shield', 'Sandals': 'leather shoes', 'Shoes': 'buckled shoes',
 'Boots': 'leather boots', 'Plated Boots': 'mountaineer boots', 'Greaves': 'exquisite boots',
}
for g, c in GEM.items():
    ITEM[g + ' Shard'] = 'dull %s gem' % c
    ITEM['Uncut ' + g] = 'dull %s gem' % c          # same-set stand-in
    ITEM['Faceted ' + g] = 'gleaming %s gem' % c
RACE = {'Fae': 'green wings', 'Dwarf': 'ordinary dwarf', 'Elf': 'wood elf', 'Gnome': 'gnome', 'Human': 'fighter'}

# Tiles.<field> -> (floor style, wall style, sprite). Floors/walls autotile.
F, W = 'night stone', 'lit rock'
TERRAIN = {
 'unformed': (F, None, None), 'unformedWet': (None, None, 'shallow water tile'), 'open': (F, None, None),
 'solid': (None, W, None), 'passage': (F, None, None), 'doorway': (F, None, None),
 'solidWet': (None, None, 'deep water tile'), 'passageWet': (None, None, 'shallow water tile'),
 'flagstoneWall': (None, 'lit brick', None), 'graniteWall': (None, W, None),
 'granite1': (None, W, None), 'granite2': (None, 'dim rock', None), 'granite3': (None, 'dark rock', None),
 'flagstoneFloor': ('dusk brick', None, None), 'graniteFloor': (F, None, None),
 'openDoor': (F, None, 'open wooden door front'), 'closedDoor': (F, None, 'closed wooden door front'),
 'openSquareDoor': (F, None, 'open stone door front'), 'closedSquareDoor': (F, None, 'closed stone door front'),
 'openBarredDoor': (F, None, 'open iron portcullis front'),
 'closedBarredDoor': (F, None, 'closed iron portcullis front'),
 'burntFloor': ('night dirt', None, None), 'burntFloor2': ('night dirt', None, 'small rotting plant'),
 'lowWall': (F, None, 'stone fence left right'), 'stairs': (F, None, 'small stairs down'),
 'bridge': (None, None, 'deep water tile+bridge e w'), 'glowingMoss': ('night grass', None, None),
 'water': (None, None, 'deep water tile'), 'steppingStone': (None, None, 'shallow water tile+pebble'),
 'dirt': ('day dirt', None, None), 'dirt2': ('day dirt', None, 'sparse brown pebbles'),
 'grass': ('day grass', None, None), 'tallGrass': ('day grass', None, 'green grass'),
 'tree': ('day grass', None, 'light oak dense'), 'treeAlt1': ('day grass', None, 'light pine dense'),
 'treeAlt2': ('day grass', None, 'dark oak dense'),
 'openChest': (F, None, 'open chest'), 'closedChest': (F, None, 'closed chest'),
 'closedBarrel': (F, None, 'closed barrel'), 'openBarrel': (F, None, 'open barrel'),
 'candle': (F, None, 'candle'), 'wallTorch': (None, 'lit brick', 'ornate candle'),
 'braziers': (F, None, 'sacrificial candelabra'), 'statue': (F, None, 'statue'),
 'chair': (F, None, 'wooden chair left'),
 'brownJellyStain': (F, None, 'red liquid spatter'), 'grayJellyStain': (F, None, 'blue liquid drizzle'),
 'greenJellyStain': (F, None, 'green liquid spatter'), 'redJellyStain': (F, None, 'red liquid drizzle'),
 'violetJellyStain': (F, None, 'blue liquid spatter'), 'whiteJellyStain': (F, None, 'green liquid drizzle'),
 'spiderweb': (F, None, 'webbing a'), 'dungeonEntrance': ('day dirt', None, 'large stairs down'),
 'home': ('day dirt', None, 'home sign'), 'shop1': ('day dirt', None, 'sign a'),
 'shop2': ('day dirt', None, 'smithy sign'), 'shop3': ('day dirt', None, 'spooky sign'),
 'shop4': ('day dirt', None, 'armory sign'), 'shop5': ('day dirt', None, 'sign b'),
 'shop6': ('day dirt', None, 'sign c'), 'shop7': ('day dirt', None, 'empty shop sign'),
 'shop8': ('day dirt', None, 'empty shop sign'), 'shop9': ('day dirt', None, 'empty shop sign'),
}
for f in ('tableTopLeft', 'tableTop', 'tableTopRight', 'tableSide', 'tableCenter', 'tableBottomLeft',
          'tableBottom', 'tableBottomRight', 'tableLegLeft', 'tableLeg', 'tableLegRight'):
    TERRAIN[f] = (F, None, 'wooden table')

WJOIN = {0: 'center', 8: 'up down', 4: 'up down', 12: 'up down', 2: 'left right', 1: 'left right',
         3: 'left right', 10: 'left up', 9: 'right up', 6: 'left down', 5: 'right down',
         14: 'left up down', 13: 'right up down', 11: 'left right up', 7: 'left right down',
         15: 'left right up down'}
def sides(m): return ''.join(c for c, b in zip('nswe', (8, 4, 2, 1)) if m & b) or 'c'

slots, index = [None], {}   # slot 0 = nothing
def slot(name):
    assert all(n in pos for n in name.split('+')), 'not in DawnLike: ' + name
    if name not in index:
        index[name] = len(slots); slots.append(name)
    return index[name]
def style(names):   # 16 consecutive slots
    base = len(slots)
    for n in names: assert n in pos, 'not in DawnLike: ' + n
    slots.extend(names); return base

missing = [b for b in breeds if b not in BREED] + [i for i in items if i not in ITEM] + \
          [r for r in races if r not in RACE] + [f for f in fields if f not in TERRAIN]
assert not missing, 'no tile for: %s' % missing
floors, walls = {}, {}
for t in TERRAIN.values():
    if t[0] and t[0] not in floors: floors[t[0]] = style(['%s floor %s' % (t[0], sides(m)) for m in range(16)])
    if t[1] and t[1] not in walls: walls[t[1]] = style(['%s wall %s' % (t[1], WJOIN[m]) for m in range(16)])

out = ["// Generated by web/mkdawn.py: DawnLike slots in web/tiles-dawn.png. Do not edit.",
       "import '../content/tiles.dart';", "import '../engine.dart';", ""]
def table(name, keys, m):
    out.append('const %s = <String, int>{' % name)
    for k in keys: out.append('  %s: %d,' % (json.dumps(k), slot(m[k])))
    out.append('};\n')
table('rvipBreedTile', breeds, BREED)
table('rvipItemTile', items, ITEM)
table('rvipRaceTile', races, RACE)
# (floor base or 0, wall base or 0, sprite slot or 0)
out.append('final rvipTerrainTile = <TileType, (int, int, int)>{')
for f in fields:
    fl, wl, sp = TERRAIN[f]
    v = '(%d, %d, %d)' % (floors.get(fl, 0), walls.get(wl, 0), slot(sp) if sp else 0)
    out.append('  for (var t in Tiles.braziers) t: %s,' % v if f == 'braziers' else '  Tiles.%s: %s,' % (f, v))
out.append('};')
open(os.path.join(ROOT, 'lib/src/ui/rvip_tiles_gen.dart'), 'w').write('\n'.join(out) + '\n')

def img(name):
    parts = name.split('+'); im = sprite(parts[0])
    for p in parts[1:]: s = sprite(p); im.alpha_composite(s)
    return im
sheet = Image.new('RGBA', (256, (len(slots) + 15) // 16 * 16), (0, 0, 0, 0))
for i, n in enumerate(slots):
    if n: sheet.paste(img(n), (i % 16 * 16, i // 16 * 16))
sheet.save(os.path.join(ROOT, 'web/tiles-dawn.png'))

# Coverage: an id counts as dedicated unless it shares its sprite with another id
# of the same table or is a marked stand-in.
def cov(label, keys, m, standin=lambda k: False):
    used = {}
    for k in keys: used[m[k]] = used.get(m[k], 0) + 1
    own = sum(1 for k in keys if used[m[k]] == 1 and not standin(k))
    print('%-8s %3d/%3d tiled (100%%), %3d own sprite, %3d same-set stand-ins' % (label, len(keys), len(keys), own, len(keys) - own))
cov('breeds', breeds, BREED, lambda k: k.split()[0] in STANDIN)
cov('items', items, ITEM, lambda k: k.startswith('Uncut'))
cov('races', races, RACE)
cov('terrain', fields, {f: str(TERRAIN[f]) for f in fields})
print('%d slots' % (len(slots) - 1))
