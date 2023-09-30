import retry from "async-retry";
import fs, { createWriteStream } from "node:fs";

import type { BlockObject, RetrieveBlockChildrenResponse } from "../responses";
import { APIResponseError } from "@notionhq/client";
import type { Column } from "../interfaces";
import { getAllBlocksByBlockId } from "../notion/blocks";
import { client } from "../notion/client";
import type { RetrieveBlockChildren } from "../requestParams";
import { NUMBER_OF_RETRY } from "src/consts/notion";

export const getColumns = async (blockId: string): Promise<Column[]> => {
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

  return await Promise.all(
    results.map(async (blockObject) => {
      const children = await getAllBlocksByBlockId(blockObject.id);

      const column: Column = {
        Id: blockObject.id,
        Type: blockObject.type,
        HasChildren: blockObject.has_children,
        Children: children,
      };

      return column;
    })
  );
};
