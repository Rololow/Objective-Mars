// Author: Rololo
// priority: 0

ServerEvents.recipes(event => {

    // Eyes

    event.remove({id: 'endrem:exotic_eye'})
    event.remove({id: 'endrem:undead_eye'})
    event.shapeless('endrem:undead_eye', ['endrem:undead_soul','minecraft:bone','minecraft:phantom_membrane', 'iceandfire:ectoplasm'])

    // Knowledge HUD

    event.shaped('kubejs:magnifier_knowledge', [
      ' n ',
      'ngn',
      'bn '
    ], {
      n: 'minecraft:gold_nugget',
      g: 'minecraft:glass_pane',
      b: 'minecraft:blaze_rod'
    })

    event.shaped('kubejs:cartography_knowledge_note', [
      'scg',
      'lmb',
      'nhw'
    ], {
      s : 'minecraft:sunflower',
      c : 'minecraft:cactus',
      g : 'minecraft:glow_berries',
      l : 'minecraft:lily_pad',
      m : 'minecraft:map',
      b : 'minecraft:brain_coral',
      n : 'minecraft:brown_mushroom',
      h : 'minecraft:snowball',
      w : 'minecraft:cocoa_beans'
    })

});