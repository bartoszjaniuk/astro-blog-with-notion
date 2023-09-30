import retry from "async-retry";

import type { Database, Post } from "src/lib/interfaces";
import type * as responses from "../responses";
import type * as requestParams from "../requestParams";
import { DATABASE_ID } from "src/consts/server-constants";
import { client } from "./client";
import { APIResponseError } from "@notionhq/client";
import { NUMBER_OF_POSTS_PER_PAGE, NUMBER_OF_RETRY } from "src/consts/notion";
import { buildPost } from "src/lib/utils/buildPost";
import { validatePageObject } from "src/lib/utils/validatePageObject";

let postsCache: Post[] | null = null;
let dbCache: Database | null = null;

export async function getAllPosts(): Promise<Post[]> {
	if (postsCache !== null) {
		return Promise.resolve(postsCache);
	}

	const params: requestParams.QueryDatabase = {
		database_id: DATABASE_ID,
		filter: {
			and: [
				{
					property: "Published",
					checkbox: {
						equals: true,
					},
				},
				{
					property: "Date",
					date: {
						on_or_before: new Date().toISOString(),
					},
				},
			],
		},
		sorts: [
			{
				property: "Date",
				direction: "descending",
			},
		],
		page_size: 100,
	};

	let results: responses.PageObject[] = [];
	while (true) {
		const res = await retry(
			async (bail) => {
				try {
					return (await client.databases.query(
						params as any, // eslint-disable-line @typescript-eslint/no-explicit-any
					)) as responses.QueryDatabaseResponse;
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
			},
		);

		results = results.concat(res.results);

		if (!res.has_more) {
			break;
		}

		params["start_cursor"] = res.next_cursor as string;
	}

	postsCache = results
		.filter((pageObject) => validatePageObject(pageObject))
		.map((pageObject) => buildPost(pageObject));
	return postsCache;
}

export async function getPosts(pageSize = 10): Promise<Post[]> {
	const allPosts = await getAllPosts();
	return allPosts.slice(0, pageSize);
}

export async function getRankedPosts(pageSize = 10): Promise<Post[]> {
	const allPosts = await getAllPosts();
	return allPosts
		.filter((post) => !!post.Rank)
		.sort((a, b) => {
			if (a.Rank > b.Rank) {
				return -1;
			} else if (a.Rank === b.Rank) {
				return 0;
			}
			return 1;
		})
		.slice(0, pageSize);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
	const allPosts = await getAllPosts();
	return allPosts.find((post) => post.Slug === slug) || null;
}

export async function getPostByPageId(pageId: string): Promise<Post | null> {
	const allPosts = await getAllPosts();
	return allPosts.find((post) => post.PageId === pageId) || null;
}

export async function getPostsByTag(
	tagName: string,
	pageSize = 10,
): Promise<Post[]> {
	if (!tagName) return [];

	const allPosts = await getAllPosts();
	return allPosts
		.filter((post) => post.Tags.find((tag) => tag.name === tagName))
		.slice(0, pageSize);
}

// page starts from 1 not 0
export async function getPostsByPage(page: number): Promise<Post[]> {
	if (page < 1) {
		return [];
	}

	const allPosts = await getAllPosts();

	const startIndex = (page - 1) * NUMBER_OF_POSTS_PER_PAGE;
	const endIndex = startIndex + NUMBER_OF_POSTS_PER_PAGE;

	return allPosts.slice(startIndex, endIndex);
}

// page starts from 1 not 0
export async function getPostsByTagAndPage(
	tagName: string,
	page: number,
): Promise<Post[]> {
	if (page < 1) {
		return [];
	}

	const allPosts = await getAllPosts();
	const posts = allPosts.filter((post) =>
		post.Tags.find((tag) => tag.name === tagName),
	);

	const startIndex = (page - 1) * NUMBER_OF_POSTS_PER_PAGE;
	const endIndex = startIndex + NUMBER_OF_POSTS_PER_PAGE;

	return posts.slice(startIndex, endIndex);
}
