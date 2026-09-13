import 'package:hauberk/src/content.dart';
import 'package:hauberk/src/content/ability/spell/spell.dart';
import 'package:hauberk/src/engine.dart';

final arcana = {
  Arcanum.windchasing: "Air",
  Arcanum.icewinding: "Cold",
  Arcanum.earthshaping: "Earth",
  Arcanum.arcing: "Elec",
  Arcanum.fireweaving: "Fire",
  Arcanum.watercoursing: "Water",
};

void main() {
  var content = createContent();

  var spells = [
    for (var ability in content.abilities)
      if (ability is Spell) ability,
  ];

  _writeSpells("All spells", spells);

  for (var arcanum in arcana.keys) {
    var spellsInArcanum = spells
        .where((spell) => spell.arcana.contains(arcanum))
        .toList();
    _writeSpells("${arcana[arcanum]!} spells", spellsInArcanum);
  }
}

void _writeSpells(String label, List<Spell> spells) {
  _writeHeader(label);

  spells.sort((a, b) => a.arcanumLevel.compareTo(b.arcanumLevel));
  for (var spell in spells) {
    _writeSpell(spell);
  }
  print("");
}

void _writeHeader(String label) {
  var buffer = StringBuffer();
  buffer.write(label.fmt(w: 20));
  buffer.write("  ");
  buffer.write("Lvl");
  buffer.write("  ");

  for (var value in arcana.values) {
    buffer.write(value);
    buffer.write("  ");
  }

  print(buffer);
  print("--------------------  ---  ---  ----  -----  ----  ----  -----");
}

void _writeSpell(Spell spell) {
  var buffer = StringBuffer();
  buffer.write(spell.name.fmt(w: 20));
  buffer.write("  ");
  buffer.write(spell.arcanumLevel.fmt(w: 3));
  buffer.write("  ");

  for (var arcanum in arcana.keys) {
    if (spell.arcana.contains(arcanum)) {
      buffer.write(arcana[arcanum]);
    } else {
      buffer.write(" " * arcana[arcanum]!.length);
    }
    buffer.write("  ");
  }

  print(buffer);
}
