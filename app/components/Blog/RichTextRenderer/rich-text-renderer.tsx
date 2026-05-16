import React from "react";
import Image from "next/image";
import { BLOCKS, INLINES, MARKS, Document } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";

export type EmbeddedAsset = { id: string; url: string; title: string };

export function buildRenderOptions(
  embeddedAssets: EmbeddedAsset[],
  document?: Document
): Options {
  // Pre-walk top-level nodes to find the first non-empty paragraph so we can
  // apply lead styling by object identity rather than a fragile counter.
  // A plain counter miscounts because Contentful nests PARAGRAPH nodes inside
  // LIST_ITEM, QUOTE, and TABLE_CELL — those fire the renderer before the first
  // visible top-level paragraph does.
  const leadNode =
    document?.content.find(
      (node) =>
        node.nodeType === BLOCKS.PARAGRAPH &&
        node.content.some(
          (n) =>
            n.nodeType === "text" &&
            (n as { nodeType: string; value: string }).value.trim().length > 0
        )
    ) ?? null;

  return {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong className="font-semibold">{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
      [MARKS.STRIKETHROUGH]: (text) => (
        <span className="line-through">{text}</span>
      ),
      [MARKS.CODE]: (text) => (
        <code className="bg-gray-200 text-[#07658C] font-mono text-sm px-1.5 py-0.5 rounded break-words">
          {text}
        </code>
      ),
      [MARKS.SUPERSCRIPT]: (text) => <sup>{text}</sup>,
      [MARKS.SUBSCRIPT]: (text) => <sub>{text}</sub>,
    },

    renderNode: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
        const isEmpty = node.content?.every(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (n: any) => n.nodeType === "text" && n.value === ""
        );
        if (isEmpty) return <p className="mb-3" />;

        if (node === leadNode) {
          return (
            <p className="text-xl sm:text-[23px] sm:leading-[34.5px] text-main font-primary font-normal border-b border-[#555555]/30 pb-6 mb-6">
              {children}
            </p>
          );
        }
        return (
          <p className="text-base font-normal font-secondary text-main mb-6">
            {children}
          </p>
        );
      },

      [BLOCKS.HEADING_1]: (_node, children: React.ReactNode) => (
        <h1 className="text-[28px] leading-[36px] sm:text-[37px] sm:leading-[44px] font-medium font-primary text-main mt-10 mb-4">
          {children}
        </h1>
      ),

      [BLOCKS.HEADING_2]: (_node, children: React.ReactNode) => (
        <h2 className="text-[24px] leading-[32px] sm:text-[31px] sm:leading-[40px] font-medium font-primary text-main mt-8 mb-4">
          {children}
        </h2>
      ),

      [BLOCKS.HEADING_3]: (_node, children: React.ReactNode) => (
        <h3 className="text-[21px] leading-[30px] sm:text-[26px] sm:leading-[39px] font-medium font-primary text-main mt-8 mb-3">
          {children}
        </h3>
      ),

      [BLOCKS.HEADING_4]: (_node, children: React.ReactNode) => (
        <h4 className="text-[19px] leading-[28px] sm:text-[21px] sm:leading-[31.5px] font-medium font-primary text-main mt-6 mb-2">
          {children}
        </h4>
      ),

      [BLOCKS.HEADING_5]: (_node, children: React.ReactNode) => (
        <h5 className="text-base sm:text-[19px] sm:leading-[28.5px] font-medium font-primary text-main mt-6 mb-2">
          {children}
        </h5>
      ),

      [BLOCKS.HEADING_6]: (_node, children: React.ReactNode) => (
        <h6 className="text-base font-semibold font-primary text-main mt-4 mb-2">
          {children}
        </h6>
      ),

      [BLOCKS.OL_LIST]: (_node, children: React.ReactNode) => (
        <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
      ),

      [BLOCKS.UL_LIST]: (_node, children: React.ReactNode) => (
        <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
      ),

      [BLOCKS.LIST_ITEM]: (_node, children: React.ReactNode) => (
        <li className="text-base font-normal font-secondary text-main [&>p]:mb-0">
          {children}
        </li>
      ),

      [BLOCKS.QUOTE]: (_node, children: React.ReactNode) => (
        <blockquote className="border-l-4 border-[#07658C] pl-5 my-6 italic text-secondary font-secondary [&>p]:text-secondary [&>p]:mb-0">
          {children}
        </blockquote>
      ),

      [BLOCKS.HR]: () => (
        <hr className="border-t border-[#555555]/30 my-8" />
      ),

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [BLOCKS.TABLE]: (node: any, children: React.ReactNode) => {
        const firstRow = node.content?.[0];
        const hasHeaderRow = firstRow?.content?.some(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (cell: any) => cell.nodeType === BLOCKS.TABLE_HEADER_CELL
        );
        const rows = React.Children.toArray(children);

        return (
          <div className="overflow-x-auto my-8 rounded-lg border border-[#555555]/20">
            <table className="w-full border-collapse text-sm sm:text-base font-secondary text-main">
              {hasHeaderRow ? (
                <>
                  <thead>{rows[0]}</thead>
                  <tbody>{rows.slice(1)}</tbody>
                </>
              ) : (
                <tbody>{rows}</tbody>
              )}
            </table>
          </div>
        );
      },

      [BLOCKS.TABLE_ROW]: (_node, children: React.ReactNode) => (
        <tr className="border-b border-[#555555]/20 even:bg-white">
          {children}
        </tr>
      ),

      [BLOCKS.TABLE_HEADER_CELL]: (_node, children: React.ReactNode) => (
        <th className="text-left px-3 py-3 sm:px-4 font-semibold bg-[#032432] text-white whitespace-nowrap [&>p]:text-white [&>p]:mb-0">
          {children}
        </th>
      ),

      [BLOCKS.TABLE_CELL]: (_node, children: React.ReactNode) => (
        <td className="px-3 py-3 sm:px-4 text-main [&>p]:mb-0">{children}</td>
      ),

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#07658C] underline underline-offset-2 hover:opacity-80"
        >
          {children}
        </a>
      ),

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = embeddedAssets.find(
          (item) => item.id === node.data.target.sys.id
        );

        if (!asset) return null;

        return (
          <div className="my-8">
            <Image
              src={asset.url}
              width={800}
              height={450}
              alt={asset.title || "Embedded image"}
              className="rounded-lg"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        );
      },
    },
  };
}
