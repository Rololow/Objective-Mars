ServerEvents.recipes(event => {

  event.recipes.create.mechanical_crafting('2x create:crushing_wheel', [
    ' aaa ',
    'aabaa',
    'absba',
    'aabaa',
    ' aaa '
  ], {
    a: 'create:andesite_alloy',
    b: '#handcrafted:boards',
    s: '#forge:stone'
  })

  event.remove({id : 'create:mechanical_crafting/crushing_wheel'})

})