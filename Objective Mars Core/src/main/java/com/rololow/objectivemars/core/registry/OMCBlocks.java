package com.rololow.objectivemars.core.registry;

import com.rololow.objectivemars.core.ObjectiveMarsCore;
import com.rololow.objectivemars.core.content.block.FlintPile1Block;
import com.rololow.objectivemars.core.content.block.FlintPile2Block;
import com.rololow.objectivemars.core.content.block.FlintPile3Block;
import net.minecraft.world.level.block.Block;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;

public final class OMCBlocks {
	public static final DeferredRegister<Block> REGISTER = DeferredRegister.create(ForgeRegistries.BLOCKS, ObjectiveMarsCore.MODID);

	public static final RegistryObject<Block> FLINT_PILE_1 = REGISTER.register("flint_pile_1", FlintPile1Block::new);
	public static final RegistryObject<Block> FLINT_PILE_2 = REGISTER.register("flint_pile_2", FlintPile2Block::new);
	public static final RegistryObject<Block> FLINT_PILE_3 = REGISTER.register("flint_pile_3", FlintPile3Block::new);

	private OMCBlocks() {}
}
