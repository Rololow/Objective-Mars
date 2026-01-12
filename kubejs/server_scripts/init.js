// priority: 10
// Author: Rololo

PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has("base")) {       
      event.player.stages.add("base")
    }
  })