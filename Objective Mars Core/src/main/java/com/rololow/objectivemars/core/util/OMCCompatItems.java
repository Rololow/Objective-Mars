package com.rololow.objectivemars.core.util;

import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.Items;
import net.minecraftforge.registries.ForgeRegistries;

import java.util.Objects;

public final class OMCCompatItems {
	private static final ResourceLocation RAW_FLINT_ID = Objects.requireNonNull(ResourceLocation.tryParse("tough_beginnings:raw_flint"));

	private OMCCompatItems() {}

	public static Item rawFlint() {
		Item item = ForgeRegistries.ITEMS.getValue(RAW_FLINT_ID);
		return item == null ? Items.FLINT : item;
	}
}
