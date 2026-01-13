package com.rololow.objectivemars.core.event;

import com.rololow.objectivemars.core.ObjectiveMarsCore;
import com.rololow.objectivemars.core.registry.OMCBlocks;
import com.rololow.objectivemars.core.util.OMCCompatItems;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.SoundType;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.level.material.FluidState;
import net.minecraft.sounds.SoundSource;
import net.minecraftforge.event.entity.player.PlayerInteractEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod;

@Mod.EventBusSubscriber(modid = ObjectiveMarsCore.MODID, bus = Mod.EventBusSubscriber.Bus.FORGE)
public final class FlintPilePlacementHandler {
	private FlintPilePlacementHandler() {}

	@SubscribeEvent
	public static void onRightClickBlock(PlayerInteractEvent.RightClickBlock event) {
		Level level = event.getLevel();
		if (level.isClientSide) {
			return;
		}

		ItemStack held = event.getItemStack();
		if (!held.is(OMCCompatItems.rawFlint())) {
			return;
		}

		// If clicking an existing pile, let the block's own use() handle upgrades.
		BlockState clicked = level.getBlockState(event.getPos());
		if (clicked.is(OMCBlocks.FLINT_PILE_1.get()) || clicked.is(OMCBlocks.FLINT_PILE_2.get()) || clicked.is(OMCBlocks.FLINT_PILE_3.get())) {
			return;
		}

		Player player = event.getEntity();
		BlockPos placePos = event.getPos().relative(event.getFace());
		if (event.getFace() == Direction.DOWN) {
			return;
		}

		BlockState targetState = level.getBlockState(placePos);
		if (!targetState.canBeReplaced()) {
			return;
		}

		BlockState placeState = OMCBlocks.FLINT_PILE_1.get().defaultBlockState();
		if (placeState.hasProperty(BlockStateProperties.HORIZONTAL_FACING)) {
			placeState = placeState.setValue(BlockStateProperties.HORIZONTAL_FACING, player.getDirection().getOpposite());
		}
		if (placeState.hasProperty(BlockStateProperties.WATERLOGGED)) {
			FluidState fluid = level.getFluidState(placePos);
			placeState = placeState.setValue(BlockStateProperties.WATERLOGGED, fluid.isSource());
		}
		if (!placeState.canSurvive(level, placePos)) {
			return;
		}

		level.setBlock(placePos, placeState, 3);
		SoundType sound = placeState.getSoundType(level, placePos, player);
		level.playSound(null, placePos, sound.getPlaceSound(), SoundSource.BLOCKS, (sound.getVolume() + 1.0F) / 2.0F, sound.getPitch() * 0.8F);

		if (!player.getAbilities().instabuild) {
			held.shrink(1);
		}
		player.swing(event.getHand(), true);
		event.setCanceled(true);
		event.setCancellationResult(InteractionResult.SUCCESS);
	}
}
