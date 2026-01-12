ItemEvents.firstRightClicked((event) => {
    if (event.item.id == 'kubejs:cartography_knowledge_note') {
        event.player.stages.add("ftbchunks_mapping")
        event.item.count--
    }
    else if (event.item.id == 'kubejs:magnifier_knowledge') {
        event.player.stages.add("jade_stage")
        event.item.count--
    }
})