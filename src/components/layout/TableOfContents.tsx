"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface TOCItem {
  title: string;
  url: string;
}

export function TableOfContents({ items = [] }: { items?: TOCItem[] }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <ul className="m-0 list-none">
        {items.map((item, index) => (
          <li key={index} className="mt-0 pt-2">
            <Link
              href={item.url}
              className={cn(
                "inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
