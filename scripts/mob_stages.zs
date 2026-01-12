#priority 1

import mods.mobstages.MobStages;

val ironage_mobs = [
    <entitytype:minecraft:creeper>,
    <entitytype:minecraft:zombie>,
    <entitytype:minecraft:skeleton>,
    <entitytype:minecraft:enderman>,
    <entitytype:minecraft:zombie_villager>,
    <entitytype:minecraft:husk>,
    <entitytype:minecraft:drowned>,
    <entitytype:minecraft:stray>,
    <entitytype:minecraft:phantom>
];

val middleage_mobs = [
    <entitytype:iceandfire:hippogryph>,
    <entitytype:iceandfire:stymphalian_bird>,
    <entitytype:iceandfire:sea_serpent>,
    <entitytype:iceandfire:gorgon>,
    <entitytype:iceandfire:cyclops>,
    <entitytype:iceandfire:siren>,
    <entitytype:iceandfire:hippocampus>,
    <entitytype:iceandfire:deathworm>,
    <entitytype:iceandfire:cockatrice>,
    <entitytype:iceandfire:troll>,
    <entitytype:iceandfire:myrmex_worker>,
    <entitytype:iceandfire:myrmex_soldier>,
    <entitytype:iceandfire:myrmex_queen>,
    <entitytype:iceandfire:myrmex_sentinel>,
    <entitytype:iceandfire:myrmex_royal>,
    <entitytype:iceandfire:amphithere>,
    <entitytype:iceandfire:dread_thrall>,
    <entitytype:iceandfire:dread_lich>,
    <entitytype:iceandfire:dread_beast>,
    <entitytype:iceandfire:dread_ghoul>,
    <entitytype:iceandfire:dread_scuttler>,
    <entitytype:iceandfire:dread_lich>,
    <entitytype:iceandfire:dread_knight>,
    <entitytype:iceandfire:dread_horse>,
    <entitytype:iceandfire:hydra>,
    <entitytype:iceandfire:ghost>
];
val future_mobs = [
    <entitytype:spore:inf_human>,
    <entitytype:spore:inf_husk>,
    <entitytype:spore:inf_player>,
    <entitytype:spore:knight>,
    <entitytype:spore:griefer>,
    <entitytype:spore:braiomil>,
    <entitytype:spore:inf_villager>,
    <entitytype:spore:inf_wanderer>,
    <entitytype:spore:inf_witch>,
    <entitytype:spore:leaper>,
    <entitytype:spore:slasher>,
    <entitytype:spore:spitter>,
    <entitytype:spore:scamper>,
    <entitytype:spore:inf_pillager>,
    <entitytype:spore:inf_vindicator>,
    <entitytype:spore:inf_evoker>,
    <entitytype:spore:howler>,
    <entitytype:spore:stalker>,
    <entitytype:spore:brute>,
    <entitytype:spore:scavenger>,
    <entitytype:spore:bloater>,
    <entitytype:spore:ogre>,
    <entitytype:spore:inf_contruct>,
    <entitytype:spore:busser>,
    <entitytype:spore:volatile>,
    <entitytype:spore:inf_drowned>,
    <entitytype:spore:claw>,
    <entitytype:spore:mound>,
    <entitytype:spore:reconstructor>,
    <entitytype:spore:proto>,
    <entitytype:spore:vigil>,
    <entitytype:spore:umarmed>,
    <entitytype:spore:usurper>,
    <entitytype:spore:braurei>,
    <entitytype:spore:sieger>,
    <entitytype:spore:gazenbreacher>,
    <entitytype:spore:hindenburg>,
    <entitytype:spore:licker>,
    <entitytype:spore:verva>,
    <entitytype:spore:delusioner>,
    <entitytype:spore:wendigo>,
    <entitytype:spore:brot>,
    <entitytype:spore:inquisitor>,
    <entitytype:spore:plagued>,
    <entitytype:spore:lacerator>,
    <entitytype:spore:gastgaber>,
    <entitytype:spore:howitzer>,
    <entitytype:spore:thorn>,
    <entitytype:spore:specter>,
    <entitytype:spore:jagd>
];

val blocked_mobs = [
    <entitytype:zoe:cyborg>,
    <entitytype:zoe:cycrawler>,
    <entitytype:zoe:fyber>
];

MobStages.addStage("ironage", ironage_mobs);

MobStages.addStage("middleage", middleage_mobs);

MobStages.addStage("future", future_mobs);

MobStages.addStage("blocked", blocked_mobs);