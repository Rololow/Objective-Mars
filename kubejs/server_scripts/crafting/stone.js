// Author: Rololo
// priority: 0

ServerEvents.recipes(event => {

  // Wooden tools

  event.remove({id: 'minecraft:wooden_axe'})
    event.shaped('minecraft:wooden_axe', [
      ' BB',
      ' SB',
      ' S '
    ], {
      B: 'tough_beginnings:tough_block_of_wood',
      S: 'minecraft:stick'
    })
    event.remove({id: 'minecraft:wooden_pickaxe'})
    event.shaped('minecraft:wooden_pickaxe', [
      'BBB',
      ' S ',
      ' S '
    ], {
      B: 'tough_beginnings:tough_block_of_wood',
      S: 'minecraft:stick'
    })
    event.remove({id: 'minecraft:wooden_shovel'})
    event.shaped('minecraft:wooden_shovel', [
      'B',
      'S',
      'S'
    ], {
      B: 'tough_beginnings:tough_block_of_wood',
      S: 'minecraft:stick'
    })
    event.remove({id: 'minecraft:wooden_hoe'})
    event.shaped('minecraft:wooden_hoe', [
      'BB',
      ' S',
      ' S'
    ], {
      B: 'tough_beginnings:tough_block_of_wood',
      S: 'minecraft:stick'
    })
    event.shaped('minecraft:wooden_hoe', [
      'BB',
      'S ',
      'S '
    ], {
      B: 'tough_beginnings:tough_block_of_wood',
      S: 'minecraft:stick'
    })
    event.remove({id: 'minecraft:wooden_sword'})
    event.shaped('minecraft:wooden_sword', [
      'B',
      'B',
      'S'
    ], {
      B: 'tough_beginnings:tough_block_of_wood',
      S: 'minecraft:stick'
    })

  // Stone tools

  event.remove({output: 'minecraft:stone_axe'})
    event.shaped('minecraft:stone_axe', [
      ' BR',
      ' SR',
      ' S '
    ], {
      B: 'tough_beginnings:tough_block_of_wood',
      S: 'minecraft:stick',
      R: {tag : 'rololo:rock'}
    })

    event.remove({output: 'minecraft:stone_pickaxe'})
    event.shaped('minecraft:stone_pickaxe', [
      'RBR',
      ' S ',
      ' S '
    ], {
      B: 'tough_beginnings:tough_block_of_wood',
      S: 'minecraft:stick',
      R: {tag : 'rololo:rock'}
    })

    event.remove({output: 'minecraft:stone_shovel'})
    event.shaped('minecraft:stone_shovel', [
      'R',
      'B',
      'S'
    ], {
      B: 'tough_beginnings:tough_block_of_wood',
      S: 'minecraft:stick',
      R: {tag : 'rololo:rock'}
    })

    event.remove({output: 'minecraft:stone_hoe'})
    event.shaped('minecraft:stone_hoe', [
      'BR',
      'S ',
      'S '
    ], {
      B: 'tough_beginnings:tough_block_of_wood',
      S: 'minecraft:stick',
      R: {tag : 'rololo:rock'}
    })

    event.remove({output: 'minecraft:stone_sword'})
    event.shaped('minecraft:stone_sword', [
      ' R ',
      'BRB',
      ' S '
    ], {
      B: 'tough_beginnings:tough_block_of_wood',
      S: 'minecraft:stick',
      R: {tag : 'rololo:rock'}
    })

    // Stone rocks

    event.shaped('minecraft:cobblestone', [
      'RR',
      'RR'
    ], {
      R: 'spelunkers_charm:rock'
    })
    
    event.shaped('minecraft:deepslate', [
      'RR',
      'RR'
    ], {
      R: 'spelunkers_charm:deepslate_rock'
    })

    event.shaped('minecraft:dripstone_block', [
      'RR',
      'RR'
    ], {
      R: 'spelunkers_charm:dripstone_rock'
    })

    event.shaped('minecraft:basalt', [
      'RR',
      'RR'
    ], {
      R: 'spelunkers_charm:basalt_rock'
    })

    event.remove({id : 'spelunkers_charm:rocks_to_cobblestone'})

    // Furnaces

    event.remove({id: 'minecraft:blast_furnace'})
    event.shaped('minecraft:blast_furnace', [
      'III',
      'IfI',
      'sss'
    ], {
      I: 'kubejs:rough_wrought_iron',
      f: 'minecraft:furnace',
      s: 'minecraft:smooth_stone'
    })

    event.remove({id: 'minecraft:furnace'})
    event.shaped('minecraft:furnace', [
      'ccc',
      'I I',
      'ccc'
    ], {
      c: 'minecraft:cobblestone',
      I: 'kubejs:rough_wrought_iron'
    })

    // Bloomery furnace

    event.shaped('mm:bloomery_furnace', 
      [
        'MMM',
        'M M',
        'sss'
      ], 
      {
        M: 'minecraft:mud_bricks',
        s: 'minecraft:mud_brick_slab'
      }
    )

    event.shaped('mm:bloomery_furnace_item_input', 
      [
        'MMM',
        '  M',
        'M M'
      ], 
      {
        M: 'minecraft:mud_bricks'
      }
    )

    event.shaped('mm:bloomery_furnace_item_output', 
      [
        'MMM',
        'M  ',
        'M M'
      ], 
      {
        M: 'minecraft:mud_bricks'
      }
    )

    // Bronze

    event.remove({id: 'metal_works:bronze_ingot'})

});