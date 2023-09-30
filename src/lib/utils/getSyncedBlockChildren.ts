import { getAllBlocksByBlockId } from "./../notion/blocks";
import type { Block } from "../interfaces";
import { getBlock } from "../notion/blocks";

export const getSyncedBlockChildren = async (
  block: Block
): Promise<Block[]> => {
  let originalBlock: Block = block;
  if (
    block.SyncedBlock &&
    block.SyncedBlock.SyncedFrom &&
    block.SyncedBlock.SyncedFrom.BlockId
  ) {
    try {
      originalBlock = await getBlock(block.SyncedBlock.SyncedFrom.BlockId);
    } catch (err) {
      console.log(
        `Could not retrieve the original synced_block. error: ${err}`
      );
      return [];
    }
  }

  const children = await getAllBlocksByBlockId(originalBlock.Id);
  return children;
};
