ServerEvents.tags('item', event => {

    event.add('forge:dusts/sulfur', 'createindustry:sulfur_powder')

    event.add('forge:dusts/saltpeter', 'createindustry:saltpeter')

    event.add('forge:storage_blocks/aluminum', 'createindustry:aluminum_block')

    event.add('forge:liquid/oil', 'createindustry:crude_oil_fluid')
    event.add('forge:liquid/oil', 'pneumaticcraft:oil')
    event.add('forge:liquid/oil', 'ad_astra:oil')

    event.add('forge:plastic', 'createindustry:plastic_sheet')
    event.add('pneumaticcraft:plastic_sheets', 'createindustry:plastic_sheet')

    event.add('forge:liquid/plastic', 'createindustry:liquid_plastic')
    event.add('forge:buckets/plastic', 'pneumaticcraft:plastic_bucket')

    event.add('forge:dusts/sulfur', 'createindustry:sulfur_dust')

    event.add('forge:oil', 'createindustry:crude_oil_fluid')

    event.add('rololo:rock', 'spelunkers_charm:rock')
    event.add('rololo:rock', 'spelunkers_charm:deepslate_rock')
    event.add('rololo:rock', 'spelunkers_charm:dripstone_rock')
    event.add('rololo:rock', 'spelunkers_charm:basalt_rock')

})

ServerEvents.tags("block", (event) => {
    event.remove("minecraft:needs_stone_tool", "minecraft:iron_ore")
    event.add("minecraft:needs_bronze_tool", "minecraft:iron_ore")
    event.remove("minecraft:needs_stone_tool", "minecraft:iron_block")
    event.add("minecraft:needs_bronze_tool", "minecraft:iron_block")
    event.remove("minecraft:needs_stone_tool", "minecraft:raw_iron_block")
    event.add("minecraft:needs_bronze_tool", "minecraft:raw_iron_block")
});