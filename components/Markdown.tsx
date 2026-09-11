import type { ReactNode } from "react";

type Props = {
  content: string;
  className?: string;
};

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(<strong key={`b-${key++}`}>{token.slice(2, -2)}</strong>);
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const href = link[2];
        const external = href.startsWith("http");
        nodes.push(
          <a
            key={`a-${key++}`}
            href={href}
            className="font-semibold text-teal-700 underline-offset-2 hover:text-navy-900 hover:underline"
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {link[1]}
          </a>,
        );
      }
    }
    last = match.index + token.length;
  }

  if (last < text.length) {
    nodes.push(text.slice(last));
  }
  return nodes;
}

function isListBlock(block: string) {
  return block
    .trim()
    .split("\n")
    .every((line) => /^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line));
}

export default function Markdown({ content, className }: Props) {
  const blocks = content
    .trim()
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div className={className ?? "space-y-5 text-base leading-relaxed text-slate-600"}>
      {blocks.map((block, i) => {
        if (block.startsWith("### ")) {
          return (
            <h3 key={i} className="pt-2 text-xl font-semibold text-navy-900">
              {renderInline(block.slice(4))}
            </h3>
          );
        }
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="pt-4 text-2xl font-semibold text-navy-900">
              {renderInline(block.slice(3))}
            </h2>
          );
        }
        if (block.startsWith("# ")) {
          return (
            <h2 key={i} className="pt-4 text-2xl font-semibold text-navy-900">
              {renderInline(block.slice(2))}
            </h2>
          );
        }
        if (isListBlock(block)) {
          const items = block.split("\n").map((line) =>
            line.replace(/^[-*]\s+/, "").replace(/^\d+\.\s+/, ""),
          );
          return (
            <ul key={i} className="list-disc space-y-2 pl-5">
              {items.map((item, j) => (
                <li key={j}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{renderInline(block)}</p>;
      })}
    </div>
  );
}
