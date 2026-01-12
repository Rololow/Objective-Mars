StartupEvents.registry('block', event => {
  event.create('moon_fluorite_ore')
  .displayName('block.kubejs.moon_fluorite_ore')
  .hardness(1)
  .material('rock')
  .textureAll('rololo:block/moon_fluorite_ore')
  .stoneSoundType()
  .tagItem('forge:ores/fluorite')
  .tagItem('forge:ores')
  .tagBlock('minecraft:mineable/pickaxe')
  .tagBlock('minecraft:needs_iron_tool')
  .tagBlock('forge:minable/paxel')
  .tagBlock('forge:ore_rates/dense')
  .tagBlock('forge:ores/fluorite')
  .tagBlock('forge:ores_in_ground/moon_stone')
  .fullBlock(true)
  .requiresTool(true)
  
  event.create('moon_lead_ore')
  .displayName('block.kubejs.moon_lead_ore')
  .hardness(2)
  .material('rock')
  .textureAll('rololo:block/moon_lead_ore')
  .stoneSoundType()
  .tagItem('forge:ores/lead')
  .tagItem('forge:ores')
  .tagBlock('minecraft:mineable/pickaxe')
  .tagBlock('minecraft:needs_iron_tool')
  .tagBlock('forge:minable/paxel')
  .tagBlock('forge:ore_rates/singular')
  .tagBlock('forge:ores/lead')
  .tagBlock('forge:ores_in_ground/moon_stone')
  .fullBlock(true)
  .requiresTool(true)

  event.create('moon_uranium_ore')
  .displayName('block.kubejs.moon_uranium_ore')
  .hardness(2)
  .material('rock')
  .textureAll('rololo:block/moon_uranium_ore')
  .stoneSoundType()
  .tagItem('forge:ores/uranium')
  .tagItem('forge:ores')
  .tagBlock('minecraft:mineable/pickaxe')
  .tagBlock('minecraft:needs_iron_tool')
  .tagBlock('forge:minable/paxel')
  .tagBlock('forge:ore_rates/singular')
  .tagBlock('forge:ores/uranium')
  .tagBlock('forge:ores_in_ground/moon_stone')
  .fullBlock(true)
  .requiresTool(true)

  const flintPile1 = event.create('flint_pile_1')
  flintPile1.displayName('block.kubejs.flint_pile_1')
  flintPile1.hardness(0.2)
  flintPile1.material('rock')
  flintPile1.stoneSoundType()
  flintPile1.fullBlock(false)
  if (flintPile1.box) {
    flintPile1.box(6, -2, 5, 11, 3, 10)
  }
  if (flintPile1.noCollision) flintPile1.noCollision()
  if (flintPile1.notSolid) flintPile1.notSolid()
  if (flintPile1.noOcclusion) flintPile1.noOcclusion()
  if (flintPile1.opaque) flintPile1.opaque(false)
  if (flintPile1.renderType) flintPile1.renderType('cutout')

  const flintPile2 = event.create('flint_pile_2')
  flintPile2.displayName('block.kubejs.flint_pile_2')
  flintPile2.hardness(0.2)
  flintPile2.material('rock')
  flintPile2.stoneSoundType()
  flintPile2.fullBlock(false)
  if (flintPile2.box) {
    flintPile2.box(4, -2, 7, 9, 3, 12)
    flintPile2.box(7, 0, 3, 13, 6, 9)
  }
  if (flintPile2.noCollision) flintPile2.noCollision()
  if (flintPile2.notSolid) flintPile2.notSolid()
  if (flintPile2.noOcclusion) flintPile2.noOcclusion()
  if (flintPile2.opaque) flintPile2.opaque(false)
  if (flintPile2.renderType) flintPile2.renderType('cutout')

  const flintPile3 = event.create('flint_pile_3')
  flintPile3.displayName('block.kubejs.flint_pile_3')
  flintPile3.hardness(0.2)
  flintPile3.material('rock')
  flintPile3.stoneSoundType()
  flintPile3.fullBlock(false)
  if (flintPile3.box) {
    flintPile3.box(5, 0, 3, 10, 5, 8)
    flintPile3.box(7, 0, 8, 13, 6, 14)
    flintPile3.box(3, 0, 8, 6, 3, 11)
  }
  if (flintPile3.noCollision) flintPile3.noCollision()
  if (flintPile3.notSolid) flintPile3.notSolid()
  if (flintPile3.noOcclusion) flintPile3.noOcclusion()
  if (flintPile3.opaque) flintPile3.opaque(false)
  if (flintPile3.renderType) flintPile3.renderType('cutout')

  // Direction-specific variants for correct outline rotation.
  // The rendered model can rotate, but KubeJS BlockBuilder box() shapes do NOT auto-rotate with state.
  // So we provide 4 separate blocks per pile size with pre-rotated voxel shapes.
  const _dirs = ['north', 'east', 'south', 'west']
  const _rot = {
    north: (x, z) => [x, z],
    east: (x, z) => [16 - z, x],
    south: (x, z) => [16 - x, 16 - z],
    west: (x, z) => [z, 16 - x]
  }

  function _rotBox(box, dir) {
    const [x0, y0, z0, x1, y1, z1] = box
    const f = _rot[dir]
    const [rx0, rz0] = f(x0, z0)
    const [rx1, rz1] = f(x1, z1)
    return [Math.min(rx0, rx1), y0, Math.min(rz0, rz1), Math.max(rx0, rx1), y1, Math.max(rz0, rz1)]
  }

  function _makeVariant(baseId, boxes, dir) {
    const b = event.create(`${baseId}_${dir}`)
    b.noItem()
    b.hardness(0.2)
    b.material('rock')
    b.stoneSoundType()
    b.fullBlock(false)
    if (b.box) {
      for (const box of boxes) {
        const [x0, y0, z0, x1, y1, z1] = _rotBox(box, dir)
        b.box(x0, y0, z0, x1, y1, z1)
      }
    }
    if (b.noCollision) b.noCollision()
    if (b.notSolid) b.notSolid()
    if (b.noOcclusion) b.noOcclusion()
    if (b.opaque) b.opaque(false)
    if (b.renderType) b.renderType('cutout')
    return b
  }

  const _pile1Boxes = [
    [6, -2, 5, 11, 3, 10]
  ]
  const _pile2Boxes = [
    [4, -2, 7, 9, 3, 12],
    [7, 0, 3, 13, 6, 9]
  ]
  const _pile3Boxes = [
    [5, 0, 3, 10, 5, 8],
    [7, 0, 8, 13, 6, 14],
    [3, 0, 8, 6, 3, 11]
  ]

  for (const dir of _dirs) {
    _makeVariant('flint_pile_1', _pile1Boxes, dir)
    _makeVariant('flint_pile_2', _pile2Boxes, dir)
    _makeVariant('flint_pile_3', _pile3Boxes, dir)
  }
})