const DEBUG_FLINT_PILES = true

function _dbg(event, msg) {
  if (!DEBUG_FLINT_PILES) return
  try {
    event.player.tell(`[flint_piles] ${msg}`)
  } catch (e) {
    // fallback (some versions use sendSystemMessage)
    try {
      event.player.sendSystemMessage(`[flint_piles] ${msg}`)
    } catch (_) {}
  }
}

function _safeProps(block) {
  try {
    return block?.properties
  } catch (e) {
    return undefined
  }
}

function _safeHasTag(block, tag) {
  try {
    return !!(block?.hasTag && block.hasTag(tag))
  } catch (e) {
    return false
  }
}

function _safeString(v) {
  try {
    if (v === null || v === undefined) return String(v)
    return '' + v
  } catch (e) {
    return '<unprintable>'
  }
}

function _kjsFlintPileFacingFrom(block) {
  const props = _safeProps(block)
  const facing = props?.facing
  if (facing === 'north' || facing === 'east' || facing === 'south' || facing === 'west') return facing
  return 'north'
}

const _DIRS = ['north', 'east', 'south', 'west']

function _randomDir() {
  return _DIRS[Math.floor(Math.random() * _DIRS.length)]
}

function _dirFromPileId(id) {
  for (const d of _DIRS) {
    if (id.endsWith(`_${d}`)) return d
  }
  return null
}

function _pileVariantId(size, dir) {
  return `kubejs:flint_pile_${size}_${dir}`
}

function _isAnyFlintPileId(id) {
  return id === 'kubejs:flint_pile_1' || id === 'kubejs:flint_pile_2' || id === 'kubejs:flint_pile_3'
    || id.startsWith('kubejs:flint_pile_1_') || id.startsWith('kubejs:flint_pile_2_') || id.startsWith('kubejs:flint_pile_3_')
}

function _randomHorizontalFacing() {
  const facings = ['north', 'east', 'south', 'west']
  return facings[Math.floor(Math.random() * facings.length)]
}

function _kjsFacingFromEvent(event, fallbackBlock) {
  // Try to read facing from the event (depends on KubeJS/Architectury mapping)
  try {
    const candidates = [event?.facing, event?.face, event?.direction, event?.side]
    for (const c of candidates) {
      if (!c) continue
      const s = typeof c === 'string' ? c : (c?.getName ? c.getName() : (c?.name ? c.name : _safeString(c)))
      if (s === 'north' || s === 'east' || s === 'south' || s === 'west') return s
    }
  } catch (e) {}

  // Try player facing (often exposed on KubeJS player wrapper)
  try {
    const pf = event?.player?.facing || event?.player?.horizontalFacing
    const s = typeof pf === 'string' ? pf : (pf?.getName ? pf.getName() : (pf?.name ? pf.name : null))
    if (s === 'north' || s === 'east' || s === 'south' || s === 'west') return s
  } catch (e) {}

  return _kjsFlintPileFacingFrom(fallbackBlock)
}

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

// Handle all flint pile interactions (base + direction variants)
BlockEvents.rightClicked(event => {
  const id = event.block?.id
  if (!id || !_isAnyFlintPileId(id)) return

  const hand = event.player.mainHandItem.id
  const size = id.includes('flint_pile_1') ? 1 : (id.includes('flint_pile_2') ? 2 : 3)
  const dir = _dirFromPileId(id) || _kjsFlintPileFacingFrom(event.block) || 'north'
  _dbg(event, `click pile size=${size} dir=${dir} | hand=${hand} | id=${id}`)

  if (hand === 'minecraft:flint') {
    if (size >= 3) return

    if (!event.player.creativeMode) {
      if (event.player.mainHandItem.shrink) event.player.mainHandItem.shrink(1)
      else if (event.player.mainHandItem.count !== undefined) event.player.mainHandItem.count = Math.max(0, event.player.mainHandItem.count - 1)
    }

    const nextId = _pileVariantId(size + 1, dir)
    _dbg(event, `upgrade -> ${nextId}`)
    event.block.set(nextId)
    return
  }

  // Not holding flint: break + drop
  const dropCount = size
  _dbg(event, `break -> drop ${dropCount} flint`)
  if (dropCount === 1) event.block.popItem('minecraft:flint')
  else event.block.popItem(`${dropCount}x minecraft:flint`)
  event.block.set('minecraft:air')
})

// Place a flint pile on the ground when holding flint
BlockEvents.rightClicked(event => {
  if (event.player.mainHandItem.id != 'minecraft:flint') return

  // Only when actually clicking a block (not air)
  if (event.block.id == 'minecraft:air') {
    _dbg(event, `click ignored (air target) | facingRaw=${_safeString(event.facing || event.face || event.direction || event.side)}`)
    return
  }

  const bp = _safeProps(event.block)
  _dbg(event, `click ground | hand=flint | block=${event.block.id} | blockFacing=${bp?.facing} | facingRaw=${_safeString(event.facing || event.face || event.direction || event.side)}`)

  // Don’t interfere with clicking existing piles
  if (_isAnyFlintPileId(event.block.id)) return

  // Only allow placing on our designated spawnable blocks
  if (!_safeHasTag(event.block, 'rololo:rocks_spawnable')) return

  const above = event.block.offset ? event.block.offset(0, 1, 0) : event.block.up
  const ap = above ? _safeProps(above) : undefined
  _dbg(event, `above=${above ? above.id : 'null'} | aboveFacing=${ap?.facing}`)
  if (!above || above.id != 'minecraft:air') return

  const dir = _randomDir()
  _dbg(event, `place pile_1 | dir=${dir}`)

  if (!event.player.creativeMode) {
    if (event.player.mainHandItem.shrink) event.player.mainHandItem.shrink(1)
    else if (event.player.mainHandItem.count !== undefined) event.player.mainHandItem.count = Math.max(0, event.player.mainHandItem.count - 1)
  }

  const state = _pileVariantId(1, dir)
  _dbg(event, `set above -> ${state}`)
  above.set(state)
})