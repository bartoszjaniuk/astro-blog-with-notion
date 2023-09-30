import type {
  RichText,
  Annotation,
  Equation,
  Mention,
  Reference,
  Text,
} from "../interfaces";
import type { RichTextObject } from "../responses";

export const buildRichText = (richTextObject: RichTextObject): RichText => {
  const annotation: Annotation = {
    Bold: richTextObject.annotations.bold,
    Italic: richTextObject.annotations.italic,
    Strikethrough: richTextObject.annotations.strikethrough,
    Underline: richTextObject.annotations.underline,
    Code: richTextObject.annotations.code,
    Color: richTextObject.annotations.color,
  };

  const richText: RichText = {
    Annotation: annotation,
    PlainText: richTextObject.plain_text,
    Href: richTextObject.href,
  };

  if (richTextObject.type === "text" && richTextObject.text) {
    const text: Text = {
      Content: richTextObject.text.content,
    };

    if (richTextObject.text.link) {
      text.Link = {
        Url: richTextObject.text.link.url,
      };
    }

    richText.Text = text;
  } else if (richTextObject.type === "equation" && richTextObject.equation) {
    const equation: Equation = {
      Expression: richTextObject.equation.expression,
    };
    richText.Equation = equation;
  } else if (richTextObject.type === "mention" && richTextObject.mention) {
    const mention: Mention = {
      Type: richTextObject.mention.type,
    };

    if (richTextObject.mention.type === "page" && richTextObject.mention.page) {
      const reference: Reference = {
        Id: richTextObject.mention.page.id,
      };
      mention.Page = reference;
    }

    richText.Mention = mention;
  }

  return richText;
};
