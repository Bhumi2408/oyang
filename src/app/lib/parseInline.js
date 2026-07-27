import React from "react";
import Link from "next/link";

/**
 * Parses a string for simple inline markdown-like syntax:
 *  - **bold text**
 *  - [link text](https://url or /path)
 * Returns an array of React nodes ready to render inside a <p>, <li>, <td> etc.
 *
 * Link color/hover styling comes from the "primary" theme color and is
 * applied via inline classes here so it works everywhere this is used.
 */
export function parseInline(text = "") {
  if (!text) return null;

  // Combined regex: matches **bold** OR [label](href)
  const pattern = /(\*\*(.+?)\*\*)|(\[(.+?)\]\((.+?)\))/g;

  const nodes = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      // Bold
      nodes.push(
        <strong key={`b-${key++}`} className="font-bold text-[#0f172a]">
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      // Link
      const label = match[4];
      const href = match[5];
      const isInternal = href.startsWith("/");

      const linkClasses =
        "text-primary font-semibold no-underline hover:underline decoration-2 underline-offset-2 transition-all duration-200";

      nodes.push(
        isInternal ? (
          <Link key={`l-${key++}`} href={href} className={linkClasses}>
            {label}
          </Link>
        ) : (
          <a
            key={`l-${key++}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            {label}
          </a>
        )
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}