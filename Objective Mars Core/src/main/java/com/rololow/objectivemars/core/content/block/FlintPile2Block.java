package com.rololow.objectivemars.core.content.block;

import com.rololow.objectivemars.core.registry.OMCBlocks;
import com.rololow.objectivemars.core.util.OMCCompatItems;
import net.mcreator.spelunkerscharm.block.RockPile2Block;
import net.minecraft.core.BlockPos;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.phys.BlockHitResult;

public class FlintPile2Block extends RockPile2Block {
	@Override
	public InteractionResult use(BlockState state, Level level, BlockPos pos, Player player, InteractionHand hand, BlockHitResult hit) {
		ItemStack held = player.getItemInHand(hand);
		if (held.isEmpty()) {
			if (!level.isClientSide) {
				FlintPile1Block.popFlint(level, pos, 2);
				level.setBlock(pos, net.minecraft.world.level.block.Blocks.AIR.defaultBlockState(), 3);
			}
			return InteractionResult.sidedSuccess(level.isClientSide);
		}
		if (held.is(OMCCompatItems.rawFlint())) {
			if (!level.isClientSide) {
				BlockState next = OMCBlocks.FLINT_PILE_3.get().defaultBlockState();
				next = FlintPile1Block.copyCommonState(state, next);
				level.setBlock(pos, next, 3);
				if (!player.getAbilities().instabuild) {
					held.shrink(1);
				}
			}
			return InteractionResult.sidedSuccess(level.isClientSide);
		}

		return super.use(state, level, pos, player, hand, hit);
	}
}
