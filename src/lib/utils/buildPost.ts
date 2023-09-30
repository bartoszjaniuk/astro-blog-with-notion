import type { Post, FileObject, Emoji } from "../interfaces";
import type { PageObject } from "../responses";

export const buildPost = (pageObject: PageObject): Post => {
  const prop = pageObject.properties;

  let icon: FileObject | Emoji | null = null;
  if (pageObject.icon) {
    if (pageObject.icon.type === "emoji" && "emoji" in pageObject.icon) {
      icon = {
        Type: pageObject.icon.type,
        Emoji: pageObject.icon.emoji,
      };
    } else if (
      pageObject.icon.type === "external" &&
      "external" in pageObject.icon
    ) {
      icon = {
        Type: pageObject.icon.type,
        Url: pageObject.icon.external?.url || "",
      };
    }
  }

  let cover: FileObject | null = null;
  if (pageObject.cover) {
    cover = {
      Type: pageObject.cover.type,
      Url: pageObject.cover.external?.url || "",
    };
  }

  let featuredImage: FileObject | null = null;
  if (prop.FeaturedImage.files && prop.FeaturedImage.files.length > 0) {
    if (prop.FeaturedImage.files[0].external) {
      featuredImage = {
        Type: prop.FeaturedImage.type,
        Url: prop.FeaturedImage.files[0].external.url,
      };
    } else if (prop.FeaturedImage.files[0].file) {
      featuredImage = {
        Type: prop.FeaturedImage.type,
        Url: prop.FeaturedImage.files[0].file.url,
        ExpiryTime: prop.FeaturedImage.files[0].file.expiry_time,
      };
    }
  }

  const post: Post = {
    PageId: pageObject.id,
    Title: prop.Page.title
      ? prop.Page.title.map((richText) => richText.plain_text).join("")
      : "",
    Icon: icon,
    Cover: cover,
    Slug: prop.Slug.rich_text
      ? prop.Slug.rich_text.map((richText) => richText.plain_text).join("")
      : "",
    Date: prop.Date.date ? prop.Date.date.start : "",
    Tags: prop.Tags.multi_select ? prop.Tags.multi_select : [],
    Excerpt:
      prop.Excerpt.rich_text && prop.Excerpt.rich_text.length > 0
        ? prop.Excerpt.rich_text.map((richText) => richText.plain_text).join("")
        : "",
    FeaturedImage: featuredImage,
    Rank: prop.Rank.number ? prop.Rank.number : 0,
  };

  return post;
};
