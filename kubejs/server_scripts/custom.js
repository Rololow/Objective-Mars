ServerEvents.recipes(e=> {

    e.custom({
        "type": "ad_astra:refining",
        "cookingtime": 1,
        "energy": 30,
        "input": {
          "ingredient": {
            "tag": "forge:crude_oil"
          },
          "millibuckets": 5
        },
        "result": {
          "fluid": "ad_astra:fuel",
          "millibuckets": 5
        }
      })
      e.custom(  {
        "type": "hexerei:mixingcauldron",
        "liquid": {
          "fluid": "minecraft:water"
        },
        "ingredients": [
          {
          "item": "minecraft:kelp"
          },
          {
          "item": "minecraft:brown_mushroom"
          },
          {
          "item": "minecraft:bone"
          },
          {
          "item": "minecraft:potato"
          },
          {
          "item": "minecraft:spider_eye"
          },
          {
          "item": "minecraft:porkchop"
          },
          {
              "item": "minecraft:rotten_flesh"
          },
          {
            "item" : "minecraft:salmon"
          }
        ],
        "output": {
        },
      
        "liquidOutput": {
          "fluid": "kubejs:knowledge_stew"
        },
          "heatRequirement": "heated",
          "fluidLevelsConsumed": 2000
      })
})