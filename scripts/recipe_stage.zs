#priority 1

import mods.recipestages.Recipes;

var base_item_mods as string[] = ["projectvibrantjourneys","minecraft","spelunkers_charm","tough_beginnings"];

var stoneage_item_mods as string[] = ["astikorcarts", "fishermens_trap"];

var ironage_item_mods as string[] = ["tombstone", "stonezone", "immersive_weathering","smallships","farm_and_charm","bakery","meadow","create","quark","supplementaries","sophisticatedstorage","sophisticatedbackpacks","tetra","naturescompass","explorerscompass","map_atlases", "metal_works"];

var middleage_item_mods as string[] = ["iceandfire","endrem","handcrafted","brewery","vinery","hexerei","domum_ornamentum","minecolonies","mcore","structurize","minecolonies_compatibility","everycomp","kubejs","create_crush_everything"];

var industry_item_mods as string[] = ["idas", "integrated_stronghold", "tfmg","exposure","createaddition","candlelight","immersive_aircraft","man_of_many_planes"];

var modern_item_mods as string[] = ["pneumaticcraft","ad_astra","ad_astra_giselle_addon","chemlib","marbledsarsenal","tacz","gundurability","computercraft","advancedperipherals","jaopca","patchouli","automobility","aviator_dream","tacz_npc"];

var future_item_mods as string[] = ["spore","mekanism","industrialforegoing","mekanismgenerators","unusualprehistory","ae2", "zoe", "expatternprovider"];

var blocked_item_mods as string[] = ["ftbquests","lootr","sereneseasons","multipiston", "ftbfiltersystem", "citadel", "moonlight", "sdm_bestiary", "patchouli"];

for mod in base_item_mods {
    Recipes.setRecipeStageByMod("base", mod);
}
for mod in stoneage_item_mods {
    Recipes.setRecipeStageByMod("stoneage", mod);
}

for mod in ironage_item_mods {
    Recipes.setRecipeStageByMod("ironage", mod);
}

for mod in middleage_item_mods {
    Recipes.setRecipeStageByMod("middleage", mod);
}

for mod in industry_item_mods {
    Recipes.setRecipeStageByMod("industry", mod);
}

for mod in modern_item_mods {
    Recipes.setRecipeStageByMod("modern", mod);
}

for mod in future_item_mods {
    Recipes.setRecipeStageByMod("future", mod);
}

for mod in blocked_item_mods {
    Recipes.setRecipeStageByMod("blocked", mod);
}