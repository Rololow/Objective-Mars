package com.rololow.objectivemars.core.registry;

import com.rololow.objectivemars.core.ObjectiveMarsCore;
import net.minecraft.core.registries.Registries;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.CreativeModeTab;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.RegistryObject;

public final class OMCCreativeTabs {
	public static final DeferredRegister<CreativeModeTab> REGISTER = DeferredRegister.create(Registries.CREATIVE_MODE_TAB, ObjectiveMarsCore.MODID);

	public static final RegistryObject<CreativeModeTab> MAIN = REGISTER.register("flint_piles", () -> CreativeModeTab.builder()
			.title(Component.translatable("creativetab.objective_mars_core.flint_piles"))
			.icon(() -> new ItemStack(OMCItems.FLINT_PILE_1.get()))
			.displayItems((parameters, output) -> {
				output.accept(OMCItems.FLINT_PILE_1.get());
				output.accept(OMCItems.FLINT_PILE_2.get());
				output.accept(OMCItems.FLINT_PILE_3.get());
			})
			.build());

	private OMCCreativeTabs() {}
}
