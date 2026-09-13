import 'package:hauberk/src/content/ability/spell/lava_flow.dart'
    show LavaFlowSpell;

import '../../engine.dart';
import 'fairy_dust.dart';
import 'flitter.dart';
import 'spell/ball_lightning.dart';
import 'spell/chain_lightning.dart';
import 'spell/crystallize.dart';
import 'spell/earthwork.dart';
import 'spell/fire_barrier.dart';
import 'spell/firelight.dart';
import 'spell/freezing_hand.dart';
import 'spell/gust.dart';
import 'spell/hail_storm.dart';
import 'spell/icicle.dart';
import 'spell/immolation.dart';
import 'spell/lightning_bolt.dart';
import 'spell/melt_stone.dart';
import 'spell/quicksand.dart';
import 'spell/sandstorm.dart';
import 'spell/sparks.dart';
import 'spell/tidal_wave.dart';
import 'spell/wind_ride.dart';
import 'spell/windstorm.dart';
import 'weapon/axe_sweep.dart';
import 'weapon/club_bash.dart';
import 'weapon/spear_stab.dart';
import 'weapon/whip_crack.dart';

class Abilities {
  /// All of the abilities in the game.
  static final List<Ability> all = [
    FairyDustAbility(),
    FlitterAbility(),
    AxeSweepAbility(),
    ClubBashAbility(),
    SpearStabAbility(),
    WhipCrackAbility(),

    // Spells.
    BallLightningSpell(),
    ChainLightningSpell(),
    CrystallizeSpell(),
    EarthworkSpell(),
    FireBarrierSpell(),
    FirelightSpell(),
    FreezingHandSpell(),
    GustSpell(),
    HailStormSpell(),
    IcicleSpell(),
    ImmolationSpell(),
    LavaFlowSpell(),
    LightningBoltSpell(),
    MeltStoneSpell(),
    QuicksandSpell(),
    SandstormSpell(),
    SparksSpell(),
    TidalWaveSpell(),
    WindRideSpell(),
    WindstormSpell(),
  ];
}
