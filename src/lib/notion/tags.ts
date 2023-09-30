import type { SelectProperty } from "../interfaces";
import { getAllPosts } from "./posts";

export const getAllTags = async (): Promise<SelectProperty[]> => {
  const allPosts = await getAllPosts();

  const tagNames: string[] = [];
  return allPosts
    .flatMap((post) => post.Tags)
    .reduce((acc, tag) => {
      if (!tagNames.includes(tag.name)) {
        acc.push(tag);
        tagNames.push(tag.name);
      }
      return acc;
    }, [] as SelectProperty[])
    .sort((a: SelectProperty, b: SelectProperty) =>
      a.name.localeCompare(b.name)
    );
};
