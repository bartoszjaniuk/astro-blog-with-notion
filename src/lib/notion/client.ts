import { Client } from "@notionhq/client";
import {
	NOTION_API_SECRET,
	NOTION_DATABASE_EVENTS_SECRET,
} from "src/consts/server-constants";

export const client = new Client({
	auth: NOTION_API_SECRET,
});

export const eventsClient = new Client({
	auth: NOTION_DATABASE_EVENTS_SECRET,
});
