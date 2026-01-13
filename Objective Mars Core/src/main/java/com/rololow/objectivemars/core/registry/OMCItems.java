package com.rololow.objectivemars.core.registry;

import com.rololow.objectivemars.core.ObjectiveMarsCore;
import net.minecraft.world.item.BlockItem;
import net.minecraft.world.item.Item;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;

public final class OMCItems {
	public static final DeferredRegister<Item> REGISTER = DeferredRegister.create(ForgeRegistries.ITEMS, ObjectiveMarsCore.MODID);

	public static final RegistryObject<Item> FLINT_PILE_1 = REGISTER.register("flint_pile_1", () -> new BlockItem(OMCBlocks.FLINT_PILE_1.get(), new Item.Properties()));
	public static final RegistryObject<Item> FLINT_PILE_2 = REGISTER.register("flint_pile_2", () -> new BlockItem(OMCBlocks.FLINT_PILE_2.get(), new Item.Properties()));
	public static final RegistryObject<Item> FLINT_PILE_3 = REGISTER.register("flint_pile_3", () -> new BlockItem(OMCBlocks.FLINT_PILE_3.get(), new Item.Properties()));

	private OMCItems() {}
}
