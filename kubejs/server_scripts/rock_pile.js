BlockEvents.rightClicked('spelunkers_charm:rock_pile_1', event => {
  if (event.player.mainHandItem.id == 'spelunkers_charm:rock') return
  event.block.popItem('spelunkers_charm:rock')
  event.block.set('minecraft:air')
})

BlockEvents.rightClicked('spelunkers_charm:rock_pile_2', event => {
  if (event.player.mainHandItem.id == 'spelunkers_charm:rock') return
  event.block.popItem('2x spelunkers_charm:rock')
  event.block.set('minecraft:air')
})

BlockEvents.rightClicked('spelunkers_charm:rock_pile_3', event => {
  if (event.player.mainHandItem.id == 'spelunkers_charm:rock') return
  event.block.popItem('3x spelunkers_charm:rock')
  event.block.set('minecraft:air')
})
