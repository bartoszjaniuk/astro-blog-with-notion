import retry from "async-retry";
import type { TableCell, TableRow } from "../interfaces";
import type { RetrieveBlockChildren } from "../requestParams";
import type { BlockObject, RetrieveBlockChildrenResponse } from "../responses";
import { client } from "../notion/client";
import fs from "node:fs";
import { APIResponseError } from "@notionhq/client";
import { NUMBER_OF_RETRY } from "src/consts/notion";
import { buildRichText } from "./buildRichText";

export const getTableRows = async (blockId: string): Promise<TableRow[]> => {
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

  return results.map((blockObject) => {
    const tableRow: TableRow = {
      Id: blockObject.id,
      Type: blockObject.type,
      HasChildren: blockObject.has_children,
      Cells: [],
    };

    if (blockObject.type === "table_row" && blockObject.table_row) {
      const cells: TableCell[] = blockObject.table_row.cells.map((cell) => {
        const tableCell: TableCell = {
          RichTexts: cell.map(buildRichText),
        };

        return tableCell;
      });

      tableRow.Cells = cells;
    }

    return tableRow;
  });
};
