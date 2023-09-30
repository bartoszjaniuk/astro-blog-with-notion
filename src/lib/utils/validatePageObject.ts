import type { PageObject } from "../responses";

export const validatePageObject = (pageObject: PageObject): boolean => {
  const prop = pageObject.properties;
  return (
    !!prop.Page.title &&
    prop.Page.title.length > 0 &&
    !!prop.Slug.rich_text &&
    prop.Slug.rich_text.length > 0 &&
    !!prop.Date.date
  );
};
