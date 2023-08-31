import Settings from "../config";

function HYPERIONheld() {
  const heldItem = Player.getHeldItem().getNBT().getCompoundTag("tag").getCompoundTag("ExtraAttributes").getString("id");
  const witherBlades = ["HYPERION", "ASTRAEA", "SCYLLA", "VALKYRIE", "NECRON_BLADE_UNREFINED"];

  return witherBlades.includes(heldItem);
}



function getExtraAttributes() {
  return Player.getHeldItem().getNBT().getCompoundTag("tag").getCompoundTag("ExtraAttributes");
}

let oldxp = 0;
let oldkill = 0;

register("entityDeath", () => {
  if(Settings.hypebr == false || !HYPERIONheld()) return;

  const ExtraAttributes = getExtraAttributes();
  const killCounter = ExtraAttributes.getInteger("stats_book");
  const newXp = ExtraAttributes.getDouble("champion_combat_xp");

  if(oldkill != killCounter){
    if(newXp == oldxp){
      ChatLib.chat("§c"+ Settings.hypeMessage);
    }
  }
 

  oldxp = newXp;
  oldkill = killCounter;
});

register("command", () =>{
  if(!HYPERIONheld()) return;
  const ExtraAttributes = getExtraAttributes();
  ChatLib.chat("kill: "+ ExtraAttributes.getInteger("stats_book"));
  ChatLib.chat("xp: " + ExtraAttributes.getDouble("champion_combat_xp"))
} ).setName("hyp");
