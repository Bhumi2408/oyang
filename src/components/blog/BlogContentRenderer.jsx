import Image from "next/image";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { parseInline } from "@/app/lib/parseInline";

function Heading({ level, text }) {
  const styles = {
    2: "text-3xl lg:text-4xl font-extrabold mt-12 mb-5 text-[#0f172a]",
    3: "text-2xl lg:text-3xl font-extrabold mt-10 mb-4 text-[#0f172a]",
    4: "text-xl lg:text-2xl font-bold mt-8 mb-3 text-[#0f172a]",
    5: "text-lg font-bold mt-6 mb-2 text-[#0f172a]",
    6: "text-base font-bold mt-5 mb-2 text-slate-700 uppercase tracking-wide",
  };
  const Tag = `h${level}`;
  return <Tag className={styles[level] || styles[3]}>{parseInline(text)}</Tag>;
}

function Paragraph({ text }) {
  return (
    <p className="text-slate-700 leading-8 text-lg mb-6">{parseInline(text)}</p>
  );
}

function ContentImage({ src, alt, caption }) {
  return (
    <figure className="my-8">
      <div className="relative w-full overflow-hidden rounded-2xl" style={{ height: "420px" }}>
        <Image src={src} alt={alt || ""} fill className="object-cover" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-slate-500 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function ListBlock({ style, items }) {
  const Tag = style === "number" ? "ol" : "ul";
  return (
    <Tag
      className={`mb-6 space-y-3 pl-6 text-slate-700 leading-7 text-lg ${
        style === "number" ? "list-decimal" : "list-disc"
      }`}
    >
      {items.map((item, i) => (
        <li key={i} className="pl-1">
          {parseInline(item)}
        </li>
      ))}
    </Tag>
  );
}

function ChecklistBlock({ items }) {
  return (
    <ul className="mb-6 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <span className="text-slate-700 leading-7 text-lg">{parseInline(item.text)}</span>
        </li>
      ))}
    </ul>
  );
}

function TableBlock({ headers, rows }) {
  return (
    <div className="mb-8 overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-5 py-3.5 text-sm font-bold text-[#0f172a] border-b border-slate-200"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 1 ? "bg-slate-50/60" : ""}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-5 py-3.5 text-sm text-slate-700 border-b border-slate-100 last:border-0"
                >
                  {parseInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FaqBlock({ items }) {
  return (
    <div className="mb-8 space-y-4">
      {items.map((item, i) => (
        <details
          key={i}
          className="group rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 open:bg-white transition-colors duration-300"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-[#0f172a] list-none">
            {item.q}
            <ChevronDown className="w-5 h-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <p className="mt-3 text-slate-600 leading-7">{parseInline(item.a)}</p>
        </details>
      ))}
    </div>
  );
}

export default function BlogContentRenderer({ content }) {
  return (
    <div>
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return <Heading key={index} level={block.level} text={block.text} />;
          case "paragraph":
            return <Paragraph key={index} text={block.text} />;
          case "image":
            return (
              <ContentImage
                key={index}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
              />
            );
          case "list":
            return <ListBlock key={index} style={block.style} items={block.items} />;
          case "checklist":
            return <ChecklistBlock key={index} items={block.items} />;
          case "table":
            return <TableBlock key={index} headers={block.headers} rows={block.rows} />;
          case "faq":
            return <FaqBlock key={index} items={block.items} />;
          default:
            return null;
        }
      })}
    </div>
  );
}