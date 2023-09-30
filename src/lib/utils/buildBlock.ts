import type {
  Block,
  Bookmark,
  BulletedListItem,
  Callout,
  Code,
  ColumnList,
  Embed,
  Emoji,
  Equation,
  FileObject,
  Heading1,
  Heading2,
  Heading3,
  LinkPreview,
  LinkToPage,
  NumberedListItem,
  Paragraph,
  Quote,
  SyncedBlock,
  SyncedFrom,
  Table,
  TableOfContents,
  ToDo,
  Toggle,
  Video,
  File,
  Image,
} from "../interfaces";
import type { BlockObject } from "../responses";
import { buildRichText } from "./buildRichText";

export const buildBlock = (blockObject: BlockObject): Block => {
  const block: Block = {
    Id: blockObject.id,
    Type: blockObject.type,
    HasChildren: blockObject.has_children,
  };

  switch (blockObject.type) {
    case "paragraph":
      if (blockObject.paragraph) {
        const paragraph: Paragraph = {
          RichTexts: blockObject.paragraph.rich_text.map(buildRichText),
          Color: blockObject.paragraph.color,
        };
        block.Paragraph = paragraph;
      }
      break;
    case "heading_1":
      if (blockObject.heading_1) {
        const heading1: Heading1 = {
          RichTexts: blockObject.heading_1.rich_text.map(buildRichText),
          Color: blockObject.heading_1.color,
          IsToggleable: blockObject.heading_1.is_toggleable,
        };
        block.Heading1 = heading1;
      }
      break;
    case "heading_2":
      if (blockObject.heading_2) {
        const heading2: Heading2 = {
          RichTexts: blockObject.heading_2.rich_text.map(buildRichText),
          Color: blockObject.heading_2.color,
          IsToggleable: blockObject.heading_2.is_toggleable,
        };
        block.Heading2 = heading2;
      }
      break;
    case "heading_3":
      if (blockObject.heading_3) {
        const heading3: Heading3 = {
          RichTexts: blockObject.heading_3.rich_text.map(buildRichText),
          Color: blockObject.heading_3.color,
          IsToggleable: blockObject.heading_3.is_toggleable,
        };
        block.Heading3 = heading3;
      }
      break;
    case "bulleted_list_item":
      if (blockObject.bulleted_list_item) {
        const bulletedListItem: BulletedListItem = {
          RichTexts:
            blockObject.bulleted_list_item.rich_text.map(buildRichText),
          Color: blockObject.bulleted_list_item.color,
        };
        block.BulletedListItem = bulletedListItem;
      }
      break;
    case "numbered_list_item":
      if (blockObject.numbered_list_item) {
        const numberedListItem: NumberedListItem = {
          RichTexts:
            blockObject.numbered_list_item.rich_text.map(buildRichText),
          Color: blockObject.numbered_list_item.color,
        };
        block.NumberedListItem = numberedListItem;
      }
      break;
    case "to_do":
      if (blockObject.to_do) {
        const toDo: ToDo = {
          RichTexts: blockObject.to_do.rich_text.map(buildRichText),
          Checked: blockObject.to_do.checked,
          Color: blockObject.to_do.color,
        };
        block.ToDo = toDo;
      }
      break;
    case "video":
      if (blockObject.video) {
        const video: Video = {
          Caption: blockObject.video.caption?.map(buildRichText) || [],
          Type: blockObject.video.type,
        };
        if (
          blockObject.video.type === "external" &&
          blockObject.video.external
        ) {
          video.External = { Url: blockObject.video.external.url };
        }
        block.Video = video;
      }
      break;
    case "image":
      if (blockObject.image) {
        const image: Image = {
          Caption: blockObject.image.caption?.map(buildRichText) || [],
          Type: blockObject.image.type,
        };
        if (
          blockObject.image.type === "external" &&
          blockObject.image.external
        ) {
          image.External = { Url: blockObject.image.external.url };
        } else if (
          blockObject.image.type === "file" &&
          blockObject.image.file
        ) {
          image.File = {
            Type: blockObject.image.type,
            Url: blockObject.image.file.url,
            ExpiryTime: blockObject.image.file.expiry_time,
          };
        }
        block.Image = image;
      }
      break;
    case "file":
      if (blockObject.file) {
        const file: File = {
          Caption: blockObject.file.caption?.map(buildRichText) || [],
          Type: blockObject.file.type,
        };
        if (blockObject.file.type === "external" && blockObject.file.external) {
          file.External = { Url: blockObject.file.external.url };
        } else if (blockObject.file.type === "file" && blockObject.file.file) {
          file.File = {
            Type: blockObject.file.type,
            Url: blockObject.file.file.url,
            ExpiryTime: blockObject.file.file.expiry_time,
          };
        }
        block.File = file;
      }
      break;
    case "code":
      if (blockObject.code) {
        const code: Code = {
          Caption: blockObject.code.caption?.map(buildRichText) || [],
          RichTexts: blockObject.code.rich_text.map(buildRichText),
          Language: blockObject.code.language,
        };
        block.Code = code;
      }
      break;
    case "quote":
      if (blockObject.quote) {
        const quote: Quote = {
          RichTexts: blockObject.quote.rich_text.map(buildRichText),
          Color: blockObject.quote.color,
        };
        block.Quote = quote;
      }
      break;
    case "equation":
      if (blockObject.equation) {
        const equation: Equation = {
          Expression: blockObject.equation.expression,
        };
        block.Equation = equation;
      }
      break;
    case "callout":
      if (blockObject.callout) {
        let icon: FileObject | Emoji | null = null;
        if (blockObject.callout.icon) {
          if (
            blockObject.callout.icon.type === "emoji" &&
            "emoji" in blockObject.callout.icon
          ) {
            icon = {
              Type: blockObject.callout.icon.type,
              Emoji: blockObject.callout.icon.emoji,
            };
          } else if (
            blockObject.callout.icon.type === "external" &&
            "external" in blockObject.callout.icon
          ) {
            icon = {
              Type: blockObject.callout.icon.type,
              Url: blockObject.callout.icon.external?.url || "",
            };
          }
        }

        const callout: Callout = {
          RichTexts: blockObject.callout.rich_text.map(buildRichText),
          Icon: icon,
          Color: blockObject.callout.color,
        };
        block.Callout = callout;
      }
      break;
    case "synced_block":
      if (blockObject.synced_block) {
        let syncedFrom: SyncedFrom | null = null;
        if (
          blockObject.synced_block.synced_from &&
          blockObject.synced_block.synced_from.block_id
        ) {
          syncedFrom = {
            BlockId: blockObject.synced_block.synced_from.block_id,
          };
        }

        const syncedBlock: SyncedBlock = {
          SyncedFrom: syncedFrom,
        };
        block.SyncedBlock = syncedBlock;
      }
      break;
    case "toggle":
      if (blockObject.toggle) {
        const toggle: Toggle = {
          RichTexts: blockObject.toggle.rich_text.map(buildRichText),
          Color: blockObject.toggle.color,
          Children: [],
        };
        block.Toggle = toggle;
      }
      break;
    case "embed":
      if (blockObject.embed) {
        const embed: Embed = {
          Url: blockObject.embed.url,
        };
        block.Embed = embed;
      }
      break;
    case "bookmark":
      if (blockObject.bookmark) {
        const bookmark: Bookmark = {
          Url: blockObject.bookmark.url,
        };
        block.Bookmark = bookmark;
      }
      break;
    case "link_preview":
      if (blockObject.link_preview) {
        const linkPreview: LinkPreview = {
          Url: blockObject.link_preview.url,
        };
        block.LinkPreview = linkPreview;
      }
      break;
    case "table":
      if (blockObject.table) {
        const table: Table = {
          TableWidth: blockObject.table.table_width,
          HasColumnHeader: blockObject.table.has_column_header,
          HasRowHeader: blockObject.table.has_row_header,
          Rows: [],
        };
        block.Table = table;
      }
      break;
    case "column_list":
      const columnList: ColumnList = {
        Columns: [],
      };
      block.ColumnList = columnList;
      break;
    case "table_of_contents":
      if (blockObject.table_of_contents) {
        const tableOfContents: TableOfContents = {
          Color: blockObject.table_of_contents.color,
        };
        block.TableOfContents = tableOfContents;
      }
      break;
    case "link_to_page":
      if (blockObject.link_to_page && blockObject.link_to_page.page_id) {
        const linkToPage: LinkToPage = {
          Type: blockObject.link_to_page.type,
          PageId: blockObject.link_to_page.page_id,
        };
        block.LinkToPage = linkToPage;
      }
      break;
  }

  return block;
};
