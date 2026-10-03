// RVIP: dumps the game's own ids for web/mkdawn.py (breeds, item types).
// dart run tool/rvip_ids.dart > web/rvip_ids.tsv
import 'package:hauberk/src/content.dart';
import 'package:hauberk/src/content/item/items.dart';
import 'package:hauberk/src/content/monster/monsters.dart';
import 'package:malison/malison.dart';

void main() {
  createContent();
  String ch(Object a) => String.fromCharCode((a as Glyph).char);
  for (var b in Monsters.breeds.all) {
    print('breed\t${b.name}\t${ch(b.appearance)}\t${b.groups.join(",")}');
  }
  for (var t in Items.types.all) {
    print(
      'item\t${t.name}\t${ch(t.appearance)}\t${t.equipSlot ?? ""}/${t.weaponType ?? ""}',
    );
  }
}
