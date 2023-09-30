import retry from "async-retry";
import type { RetrieveBlock, RetrieveBlockChildren } from "../requestParams";
import { client } from "./client";
import type { Block } from "../interfaces";
import type {
  BlockObject,
  RetrieveBlockChildrenResponse,
  RetrieveBlockResponse,
} from "../responses";
import { APIResponseError } from "@notionhq/client";
import { NUMBER_OF_RETRY } from "src/consts/notion";
import { buildBlock } from "../utils/buildBlock";
import fs, { createWriteStream } from "node:fs";
import { getSyncedBlockChildren } from "../utils/getSyncedBlockChildren";
import { getTableRows } from "../utils/getTableRows";
import { getColumns } from "../utils/getColumns";

export const getBlock = async (blockId: string): Promise<Block> => {
  const params: RetrieveBlock = {
    block_id: blockId,
  };

  const res = await retry(
    async (bail) => {
      try {
        return (await client.blocks.retrieve(
          params as any // eslint-disable-line @typescript-eslint/no-explicit-any
        )) as RetrieveBlockResponse;
      } catch (error: unknown) {
        if (error instanceof APIResponseError) {
          if (error.status && error.status >= 400 && error.status < 500) {
            bail(error);
          }
        }
        throw error;
      }
    },
    {
      retries: NUMBER_OF_RETRY,
    }
  );

  return buildBlock(res);
};

export const getAllBlocksByBlockId = async (
  blockId: string
): Promise<Block[]> => {
  let results: BlockObject[] = [];

  if (fs.existsSync(`tmp/${blockId}.json`)) {
    results = JSON.parse(fs.readFileSync(`tmp/${blockId}.json`, "utf-8"));
  } else {
    const params: RetrieveBlockChildren = {
      block_id: blockId,
    };

    while (true) {
      const res = await retry(
        async (bail) => {
          try {
            return (await client.blocks.children.list(
              params as any // eslint-disable-line @typescript-eslint/no-explicit-any
            )) as RetrieveBlockChildrenResponse;
          } catch (error: unknown) {
            if (error instanceof APIResponseError) {
              if (error.status && error.status >= 400 && error.status < 500) {
                bail(error);
              }
            }
            throw error;
          }
        },
        {
          retries: NUMBER_OF_RETRY,
        }
      );

      results = results.concat(res.results);

      if (!res.has_more) {
        break;
      }

      params["start_cursor"] = res.next_cursor as string;
    }
  }

  const allBlocks = results.map((blockObject) => buildBlock(blockObject));

  for (let i = 0; i < allBlocks.length; i++) {
    const block = allBlocks[i];

    if (block.Type === "table" && block.Table) {
      block.Table.Rows = await getTableRows(block.Id);
    } else if (block.Type === "column_list" && block.ColumnList) {
      block.ColumnList.Columns = await getColumns(block.Id);
    } else if (
      block.Type === "bulleted_list_item" &&
      block.BulletedListItem &&
      block.HasChildren
    ) {
      block.BulletedListItem.Children = await getAllBlocksByBlockId(block.Id);
    } else if (
      block.Type === "numbered_list_item" &&
      block.NumberedListItem &&
      block.HasChildren
    ) {
      block.NumberedListItem.Children = await getAllBlocksByBlockId(block.Id);
    } else if (block.Type === "to_do" && block.ToDo && block.HasChildren) {
      block.ToDo.Children = await getAllBlocksByBlockId(block.Id);
    } else if (block.Type === "synced_block" && block.SyncedBlock) {
      block.SyncedBlock.Children = await getSyncedBlockChildren(block);
    } else if (block.Type === "toggle" && block.Toggle) {
      block.Toggle.Children = await getAllBlocksByBlockId(block.Id);
    } else if (
      block.Type === "paragraph" &&
      block.Paragraph &&
      block.HasChildren
    ) {
      block.Paragraph.Children = await getAllBlocksByBlockId(block.Id);
    } else if (
      block.Type === "heading_1" &&
      block.Heading1 &&
      block.HasChildren
    ) {
      block.Heading1.Children = await getAllBlocksByBlockId(block.Id);
    } else if (
      block.Type === "heading_2" &&
      block.Heading2 &&
      block.HasChildren
    ) {
      block.Heading2.Children = await getAllBlocksByBlockId(block.Id);
    } else if (
      block.Type === "heading_3" &&
      block.Heading3 &&
      block.HasChildren
    ) {
      block.Heading3.Children = await getAllBlocksByBlockId(block.Id);
    } else if (block.Type === "quote" && block.Quote && block.HasChildren) {
      block.Quote.Children = await getAllBlocksByBlockId(block.Id);
    } else if (block.Type === "callout" && block.Callout && block.HasChildren) {
      block.Callout.Children = await getAllBlocksByBlockId(block.Id);
    }
  }

  return allBlocks;
};
