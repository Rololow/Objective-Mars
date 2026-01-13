package com.rololow.objectivemars.core;

import com.rololow.objectivemars.core.registry.OMCBlocks;
import com.rololow.objectivemars.core.registry.OMCCreativeTabs;
import com.rololow.objectivemars.core.registry.OMCItems;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;

@Mod(ObjectiveMarsCore.MODID)
public final class ObjectiveMarsCore {
	public static final String MODID = "objective_mars_core";

	public ObjectiveMarsCore() {
		IEventBus modEventBus = FMLJavaModLoadingContext.get().getModEventBus();
		OMCBlocks.REGISTER.register(modEventBus);
		OMCItems.REGISTER.register(modEventBus);
		OMCCreativeTabs.REGISTER.register(modEventBus);
	}
}
