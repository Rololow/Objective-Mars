// Author: Rololo
// priority: 0

ServerEvents.recipes(event => {

    event.remove({id : 'chemlib:aluminum_ingot_to_block'})

    event.remove({id : 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})
    
    event.remove({id: 'ad_astra:recipes/desh_engine'})
    event.shaped('ad_astra:desh_engine', [
      'DDD',
      'GEG',
      ' F '
    ], {
      D: 'ad_astra:desh_plate',
      E: 'ad_astra:engine_frame',
      F: 'ad_astra:engine_fan',
      G: 'mekanism:module_gravitational_modulating_unit'
    })

});