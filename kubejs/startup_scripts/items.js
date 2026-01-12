StartupEvents.registry("item", (event) => {

    event.create('cartography_knowledge_note')
    .tooltip(Component.translate('item.kubejs.cartography_knowledge_note.description'))
    .texture('rololo:item/cartography_knowledge_note')
    .displayName('item.kubejs.cartography_knowledge_note')
    .maxStackSize(1)
  
    event.create('magnifier_knowledge')
    .tooltip(Component.translate('item.kubejs.magnifier_knowledge.description'))
    .displayName('item.kubejs.magnifier_knowledge')
    .texture('rololo:item/magnifier_knowledge')
    .maxStackSize(1)

    event.create('knowledge_stew_bowl')
    .tooltip(Component.translate('item.kubejs.knowledge_stew_bowl.description'))
    .displayName('item.kubejs.knowledge_stew_bowl')
    .texture('rololo:item/knowledge_stew_bowl')
    .maxStackSize(1)
    .useAnimation('drink')
    .food(food => {
      food.effect('minecraft:nausea', 600, 0, 1)
      food.eaten(event => {
        event.player.stages.add("appleskin_stage")
        event.player.give('minecraft:bowl')
      })})

      event.create('rough_wrought_iron')
      .tooltip(Component.translate('item.kubejs.rough_wrought_iron.description'))
      .displayName('item.kubejs.rough_wrought_iron')
      .texture('rololo:item/rough_wrought_iron')
});
