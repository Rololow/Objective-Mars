#priority 1

import mods.itemstages.ItemStages;

var base_item_mods as string[] = ["projectvibrantjourneys","minecraft","spelunkers_charm","tough_beginnings", "kubejs"];

var stoneage_item_mods as string[] = ["astikorcarts", "fishermens_trap"];

var ironage_item_mods as string[] = ["tombstone", "stonezone", "immersive_weathering","smallships","farm_and_charm","bakery","meadow","create","quark","supplementaries","sophisticatedstorage","sophisticatedbackpacks","tetra","naturescompass","explorerscompass","map_atlases", "metal_works"];

var middleage_item_mods as string[] = ["iceandfire","endrem","handcrafted","brewery","vinery","hexerei","domum_ornamentum","minecolonies","mcore","structurize","minecolonies_compatibility","everycomp", "create_crush_everything"];

var industry_item_mods as string[] = ["tfmg","exposure","createaddition","candlelight","immersive_aircraft","man_of_many_planes"];

var modern_item_mods as string[] = ["gtceu", "pneumaticcraft","ad_astra","ad_astra_giselle_addon","chemlib","marbledsarsenal","tacz","gundurability","computercraft","advancedperipherals","jaopca","patchouli","automobility","aviator_dream","tacz_npc"];

var future_item_mods as string[] = ["spore","mekanism","industrialforegoing","mekanismgenerators","unusualprehistory","ae2", "zoe", "expatternprovider"];

var blocked_item_mods as string[] = ["idas","ftbquests","lootr","sereneseasons","multipiston", "ftbfiltersystem", "citadel", "moonlight", "sdm_bestiary", "patchouli"];

ItemStages.createModRestriction(base_item_mods, "base").preventInventory(false).preventPickup(false).preventUsing(false).setHiddenInJEI(true).preventAttacking(false);

ItemStages.restrict(<tag:items:rololo:base_items>, "base").preventInventory(false).preventPickup(false).preventUsing(false).setHiddenInJEI(true).preventAttacking(false);

ItemStages.createModRestriction(stoneage_item_mods, "stoneage").preventInventory(false).preventPickup(false).preventUsing(false).setHiddenInJEI(true).preventAttacking(false);

ItemStages.restrict(<tag:items:rololo:stoneage_items>, "stoneage").preventInventory(false).preventPickup(false).preventUsing(false).setHiddenInJEI(true).preventAttacking(false);

ItemStages.createModRestriction(ironage_item_mods, "ironage").preventInventory(false).preventPickup(false).preventUsing(false).setHiddenInJEI(true).preventAttacking(false);

ItemStages.restrict(<tag:items:rololo:ironage_items>, "ironage").preventInventory(false).preventPickup(false).preventUsing(false).setHiddenInJEI(true).preventAttacking(false);

ItemStages.createModRestriction(middleage_item_mods, "middleage").preventInventory(false).preventPickup(false).preventUsing(false).setHiddenInJEI(true).preventAttacking(false);

ItemStages.restrict(<tag:items:rololo:middleage_items>, "middleage").preventInventory(false).preventPickup(false).preventUsing(false).setHiddenInJEI(true).preventAttacking(false);

ItemStages.createModRestriction(industry_item_mods, "industry").preventInventory(false).preventPickup(false).preventUsing(false).setHiddenInJEI(true).preventAttacking(false);

ItemStages.restrict(<tag:items:rololo:industry_items>, "industry").preventInventory(false).preventPickup(false).preventUsing(false).setHiddenInJEI(true).preventAttacking(false);

ItemStages.createModRestriction(modern_item_mods, "modern").preventInventory(false).preventPickup(false).preventUsing(false).setHiddenInJEI(true).preventAttacking(false);

ItemStages.restrict(<tag:items:rololo:modern_items>, "modern").preventInventory(false).preventPickup(false).preventUsing(false).setHiddenInJEI(true).preventAttacking(false);

ItemStages.createModRestriction(future_item_mods, "future").preventInventory(false).preventPickup(false).preventUsing(false).setHiddenInJEI(true).preventAttacking(false);

ItemStages.restrict(<tag:items:rololo:future_items>, "future").preventInventory(false).preventPickup(false).preventUsing(false).setHiddenInJEI(true).preventAttacking(false);

ItemStages.createModRestriction(blocked_item_mods, "blocked").preventInventory(false).preventPickup(false).preventUsing(false).setHiddenInJEI(true).preventAttacking(false);