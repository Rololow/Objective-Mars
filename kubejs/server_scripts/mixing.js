
ServerEvents.recipes(event => {
    /*
    event.recipes.create.mixing( {fluid : "createindustry:lubrication_oil", amount : 1000}, {fluid : "pneumaticcraft:lubricant", amount : 1000})
    event.recipes.create.mixing( {fluid : "pneumaticcraft:lubricant", amount : 1000}, {fluid : "createindustry:lubrication_oil", amount : 1000})
    event.recipes.create.mixing( {fluid : "createaddition:bioethanol", amount : 1000}, {fluid : "mekanismgenerators:bioethanol", amount : 1000})
    event.recipes.create.mixing( {fluid : "mekanismgenerators:bioethanol", amount : 1000}, {fluid : "createaddition:bioethanol", amount : 1000})
    event.recipes.create.mixing( {fluid : "pneumaticcraft:diesel", amount : 1000}, {fluid : "createindustry:diesel", amount : 1000})
    event.recipes.create.mixing( {fluid : "createindustry:diesel", amount : 1000}, {fluid : "pneumaticcraft:diesel", amount : 1000})
    event.recipes.create.mixing( {fluid : "createindustry:gasoline", amount : 1000}, {fluid : "pneumaticcraft:gasoline", amount : 1000})
    event.recipes.create.mixing( {fluid : "pneumaticcraft:gasoline", amount : 1000}, {fluid : "createindustry:gasoline", amount : 1000})
    event.recipes.create.mixing( {fluid : "createindustry:kerosene", amount : 1000}, {fluid : "pneumaticcraft:kerosene", amount : 1000})
    event.recipes.create.mixing( {fluid : "pneumaticcraft:kerosene", amount : 1000}, {fluid : "createindustry:kerosene", amount : 1000})
    event.recipes.create.mixing( "4x mekanism:ingot_bronze", ["3x minecraft:copper_ingot", "mekanism:ingot_tin"])
    */

    event.remove({id: 'create:mixing/brass_ingot'})
})
