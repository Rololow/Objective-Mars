ServerEvents.recipes(event => {
event.custom({
    type: "industrialforegoing:laser_drill_ore",
    output: {
        item: "create:raw_zinc"
    },
    catalyst: {
        item: "industrialforegoing:laser_lens9"
    },
    rarity: [
        {
            blacklist: {
                type: "minecraft:worldgen/biome",
                values: [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            depth_max: 16,
            depth_min: 5,
            weight: 4,
            whitelist: {}
        },
        {
            blacklist: {
                type: "minecraft:worldgen/biome",
                values: [
                    "minecraft:the_end",
                    "minecraft:the_void",
                    "minecraft:small_end_islands",
                    "minecraft:end_barrens",
                    "minecraft:end_highlands",
                    "minecraft:end_midlands"
                ]
            },
            depth_max: 255,
            depth_min: 0,
            weight: 1,
            whitelist: {}
        }
    ]
})
})