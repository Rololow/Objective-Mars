// Author: Rololo
// priority: 1

let MekanismJEI = Java.loadClass('mekanism.client.jei.MekanismJEI')

JEIEvents.hideCustom(event => {
    event.get(MekanismJEI.TYPE_SLURRY).hideAll()
    event.get(MekanismJEI.TYPE_GAS).hideAll()
    event.get(MekanismJEI.TYPE_INFUSION).hideAll()
    event.get(MekanismJEI.TYPE_PIGMENT).hideAll()
})