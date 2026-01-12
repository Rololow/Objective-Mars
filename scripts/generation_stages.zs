#priority 1

import mods.generationstages.GenerationStages;
import crafttweaker.api.resource.ResourceLocation;

val base_structures as ResourceLocation[] = [

    <resource:idas:animal_den/forest_den>,
    <resource:idas:animal_den/foxhound_den>,
    <resource:idas:animal_den/polar_bear_den>

];

val ironage_structures as ResourceLocation[] = [
    <resource:letsdoaddon-structures:illager_mine>,
    <resource:minecraft:swamp_hut>,
    <resource:bakery:bakery>,
    <resource:idas:ancient_portal/nether_ancient_portal>,
    <resource:minecraft:ruined_portal_jungle>,
    <resource:minecraft:ruined_portal_swamp>,
    <resource:minecraft:ruined_portal_desert>,
    <resource:minecraft:ruined_portal_ocean>,
    <resource:minecraft:ruined_portal_nether>,
    <resource:minecolonies:ship>,
    <resource:idas:witches_treestump>,
    <resource:minecraft:monument>,
    <resource:minecraft:trail_ruins>,
    <resource:meadow:chapel>,
    <resource:minecraft:pillager_outpost>,
    <resource:minecraft:shipwreck>,
    <resource:minecraft:ocean_ruin_cold>,
    <resource:brewery:brewfest_tent>,
    <resource:idas:ancient_portal/ancient_portal>,
    <resource:idas:ancient_statue/ancient_statue_desert>,
    <resource:idas:ancient_statue/ancient_statue_jungle>,
    <resource:idas:ancient_statue/ancient_statue_plains>,
    <resource:idas:desert_camp/desert_camp>,
    <resource:idas:desert_camp/desert_camp_bygwindswept>,
    <resource:idas:desert_camp/desert_camp_orange>,
    <resource:idas:desert_camp/desert_camp_red>,
    <resource:idas:lumber_camp/lumber_camp_acacia>,
    <resource:idas:lumber_camp/lumber_camp_birch>,
    <resource:idas:lumber_camp/lumber_camp_bopmahogany>,
    <resource:idas:lumber_camp/lumber_camp_bopredwood>,
    <resource:idas:lumber_camp/lumber_camp_bygmahogany>,
    <resource:idas:lumber_camp/lumber_camp_bygredwood>,
    <resource:idas:lumber_camp/lumber_camp_dark_oak>,
    <resource:idas:lumber_camp/lumber_camp_jungle>,
    <resource:idas:lumber_camp/lumber_camp_oak>,
    <resource:idas:lumber_camp/lumber_camp_spruce>,
    <resource:letsdoaddon-structures:barn>,
    <resource:letsdoaddon-structures:bear_den_tree>,
    <resource:letsdoaddon-structures:crimson_vinery>,
    <resource:letsdoaddon-structures:illager_camp>,
    <resource:letsdoaddon-structures:mangrove_hut>,
    <resource:letsdoaddon-structures:mangrove_outpost>,
    <resource:letsdoaddon-structures:mangrove_pond>,
    <resource:letsdoaddon-structures:meadow_pillager_outpost>,
    <resource:letsdoaddon-structures:swamp_well>,
    <resource:letsdoaddon-structures:vinery>,
    <resource:letsdoaddon-structures:warped_vinery>,
    <resource:meadow:bench>,
    <resource:meadow:chalet>,
    <resource:meadow:logging_camp>,
    <resource:meadow:monument>,
    <resource:meadow:observation_post>,
    <resource:supplementaries:way_sign>,
    <resource:tetra:extractor_ruin>,
    <resource:tetra:regular_ruin>,
    <resource:minecolonies:amazon_camp>,
    <resource:minecolonies:asian_colony>,
    <resource:minecolonies:barbarian_camp>,
    <resource:minecolonies:caledonia_colony>,
    <resource:minecolonies:colonial_colony>,
    <resource:minecolonies:desert_camp>,
    <resource:minecolonies:desertoasis_colony>,
    <resource:minecolonies:incan_colony>,
    <resource:minecolonies:lostmesacity_colony>,
    <resource:minecolonies:medieval_birch_colony>,
    <resource:minecolonies:medieval_dark_oak_colony>,
    <resource:minecolonies:medieval_oak_colony>,
    <resource:minecolonies:medieval_spruce_colony>,
    <resource:minecolonies:shire_colony>,
    <resource:minecolonies:warpednetherlands_colony>,
    <resource:minecraft:jungle_pyramid>,
    <resource:minecraft:mineshaft>,
    <resource:minecraft:mineshaft_mesa>,
    <resource:minecraft:ocean_ruin_warm>,
    <resource:minecraft:ruined_portal>,
    <resource:minecraft:shipwreck_beached>,
    <resource:minecraft:ancient_city>,
    <resource:minecraft:buried_treasure>,
    <resource:minecraft:igloo>,
    <resource:idas:cottage>

];

val middleage_features as ResourceLocation[] = [
    <resource:iceandfire:cyclops_cave>,
    <resource:iceandfire:fire_dragon_cave>,
    <resource:iceandfire:fire_dragon_roost>,
    <resource:iceandfire:ice_dragon_cave>,
    <resource:iceandfire:ice_dragon_roost>,
    <resource:iceandfire:lightning_dragon_cave>,
    <resource:iceandfire:lightning_dragon_roost>,
    <resource:iceandfire:fire_lily>,
    <resource:iceandfire:frost_lily>,
    <resource:iceandfire:lightning_lily>,
    <resource:iceandfire:pixie_village>,
    <resource:iceandfire:hydra_cave>,
    <resource:iceandfire:myrmex_hive_desert>,
    <resource:iceandfire:myrmex_hive_jungle>,
    <resource:iceandfire:siren_island>,
    <resource:iceandfire:spawn_hippocampus>,
    <resource:iceandfire:spawn_sea_serpent>,
    <resource:iceandfire:spawn_stymphalian_bird>,
    <resource:iceandfire:spawn_death_worm>,
    <resource:iceandfire:spawn_wandering_cyclops>
];

val middleage_structures as ResourceLocation[] = [
    <resource:idas:castle>,
    <resource:idas:iceandfire/dread_citadel>,
    <resource:idas:haunted_manor>,
    <resource:idas:labyrinth>,
    <resource:idas:tinkers_workshop>,
    <resource:idas:tinkers_citadel>,
    <resource:idas:pillager_fortress>,
    <resource:idas:beekeepers_house>,
    <resource:minecraft:mansion>,
    <resource:integrated_villages:tavern_village>,
    <resource:integrated_villages:kutcha_village>,
    <resource:integrated_villages:mossy_mounds>,
    <resource:integrated_villages:marketstead_village>,
    <resource:integrated_villages:oasis_village>,
    <resource:integrated_villages:quark/minka_village>,
    <resource:integrated_villages:pirate_village>,
    <resource:integrated_villages:mediterranean_village>,
    <resource:integrated_villages:cabin_village>,
    <resource:hexerei:nature_coven>,
    <resource:hexerei:witch_hut>,
    <resource:hexerei:dark_coven>,
    <resource:hexerei:owl_post_office>,
    <resource:hexerei:witch_hut>,
    <resource:hexerei:baba_yaga_hut>,
    <resource:idas:redhorn_guild>,
    <resource:idas:ancient_mines>,
    <resource:idas:abandonedhouse>,
    <resource:idas:apothecary_abode>,
    <resource:idas:bazaar>,
    <resource:idas:brickhouse>,
    <resource:idas:castle>,
    <resource:idas:desert_market/desert_market>,
    <resource:idas:desert_market/desert_market_orange>,
    <resource:idas:desert_market/desert_market_red>,
    <resource:idas:desert_pyramid>,
    <resource:idas:bearclaw_inn>,
    <resource:idas:enchantingtower>,
    <resource:idas:farmhouse>,
    <resource:idas:fishermans_lodge>,
    <resource:idas:frozen_crypt>,
    <resource:idas:hermits_hollow>,
    <resource:idas:hunters_cabin>,
    <resource:integrated_stronghold:stronghold>,
    <resource:idas:dig_site/dig_site>,
    <resource:idas:dig_site/dig_site_desert>,
    <resource:idas:necromancers_spire>,
    <resource:idas:nexus>,
    <resource:idas:pillager_camp>,
    <resource:idas:ruins_of_the_deep>,
    <resource:idas:snifferhenge>,
    <resource:idas:sunken_ship/sunken_ship>,
    <resource:idas:sunken_ship/sunken_ship_coral>,
    <resource:idas:sunken_ship/sunken_ship_ruins>,
    <resource:idas:tree_of_wisdom>,
    <resource:idas:treetop_tavern>,
    <resource:idas:underground_camp/underground_camp>,
    <resource:idas:underground_camp/underground_camp_deep>,
    <resource:idas:washing_camp>,
    <resource:idas:winter_wagon>,
    <resource:idas:wizard_tower>

];

val industry_features as ResourceLocation[] = [
    <resource:tfmg:oil_deposit>,
    <resource:pneumaticcraft:oil_lake>,
    <resource:integrated_village:airship_village>,
    <resource:idas:train_ruins>,
    <resource:idas:abandoned_lighthouse>

];

val modern_structures as ResourceLocation[] = [
        <resource:tacz_npc:duty_checkpoint>
];

val future_structures as ResourceLocation[] = [
    <resource:spore:biomass_tower>,
    <resource:spore:cathedral>,
    <resource:spore:church>,
    <resource:spore:hospital>,
    <resource:spore:iceberg_mines>,
    <resource:spore:mines>
];

GenerationStages.addStructureStage ("base", base_structures);

GenerationStages.addStructureStage ("ironage", ironage_structures);

GenerationStages.addFeatureStages ("middleage", middleage_features);

GenerationStages.addStructureStage ("middleage", middleage_structures);

GenerationStages.addFeatureStages ("industry", industry_features);

GenerationStages.addStructureStage ("modern", modern_structures);

GenerationStages.addStructureStage ("future", future_structures);