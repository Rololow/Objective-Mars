const $TierSortingRegistry = Java.loadClass("net.minecraftforge.common.TierSortingRegistry")
const $Tiers = Java.loadClass("net.minecraft.world.item.Tiers")
const $ForgeTier = Java.loadClass("net.minecraftforge.common.ForgeTier")
const $BlockTags = Java.loadClass("net.minecraft.tags.BlockTags")

ItemEvents.toolTierRegistry((event) => {
  event.add("bronze", (tier) => {
    tier.uses = 180
    tier.speed = 5.0
    tier.attackDamageBonus = 1.0
    tier.level = -1
    tier.enchantmentValue = 10.0
    tier.repairIngredient = "#forge:ingots/bronze"
  })
//The "$BlockTags.create" should contain the name of the tag you want to use to set the material requirment of your block, it's best to folow the name format of "<mod_name>:needs_<material>_tool"
//The "Ingredient.of" should contain the item or tag you want to use in your recipy
  const BronzeTier = new $ForgeTier(0, 32, 12, 0, 22, $BlockTags.create("minecraft:needs_bronze_tool"), () => Ingredient.of("#forge:ingots/bronze"))
  $TierSortingRegistry.registerTier(BronzeTier, "bronze", [$Tiers.STONE], [$Tiers.IRON])
});

//Register the pick with your new tier
ItemEvents.modification(event => {
  event.modify("metal_works:bronze_pickaxe", item => {
    item.tier = "bronze"
  })
});


// thanks to https://discord.com/channels/303440391124942858/1288320670761091196/1288320712745943040 for the help