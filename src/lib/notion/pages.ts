import { NUMBER_OF_POSTS_PER_PAGE } from "src/consts/notion";
import { getAllPosts } from "./posts";

export const getNumberOfPages = async (): Promise<number> => {
  const allPosts = await getAllPosts();
  return (
    Math.floor(allPosts.length / NUMBER_OF_POSTS_PER_PAGE) +
    (allPosts.length % NUMBER_OF_POSTS_PER_PAGE > 0 ? 1 : 0)
  );
};

export const getNumberOfPagesByTag = async (
  tagName: string
): Promise<number> => {
  const allPosts = await getAllPosts();
  const posts = allPosts.filter((post) =>
    post.Tags.find((tag) => tag.name === tagName)
  );
  return (
    Math.floor(posts.length / NUMBER_OF_POSTS_PER_PAGE) +
    (posts.length % NUMBER_OF_POSTS_PER_PAGE > 0 ? 1 : 0)
  );
};
