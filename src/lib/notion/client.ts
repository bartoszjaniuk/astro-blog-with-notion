import { Client } from "@notionhq/client";
import { NOTION_API_SECRET } from "src/consts/server-constants";

export const client = new Client({
  auth: NOTION_API_SECRET,
});
