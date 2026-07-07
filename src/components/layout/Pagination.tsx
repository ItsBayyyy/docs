"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { docsConfig, NavItem } from "./Sidebar";

// Flatten the docs config to find prev/next items
function getFlattenedNavItems(items: NavItem[]): NavItem[] {
  return items.reduce((acc, item) => {
    if (item.href) {
      acc.push(item);
    }
    if (item.items) {
      acc.push(...getFlattenedNavItems(item.items));
    }
    return acc;
  }, [] as NavItem[]);
}

export function Pagination() {
  const pathname = usePathname();
  const flatItems = getFlattenedNavItems(docsConfig);
  const currentIndex = flatItems.findIndex((item) => item.href === pathname);

  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? flatItems[currentIndex - 1] : null;
  const next = currentIndex < flatItems.length - 1 ? flatItems[currentIndex + 1] : null;

  if (!prev && !next) return null;

  return (
    <div className="flex flex-row items-center justify-between mt-12 pt-6 border-t border-border">
      {prev ? (
        <Link
          href={prev.href!}
          className="group flex flex-col items-start gap-1 rounded-lg border border-transparent hover:bg-muted/50 p-4 transition-colors w-1/2"
        >
          <span className="flex items-center text-xs text-muted-foreground">
            <ChevronLeft className="mr-1 h-3 w-3" />
            Previous
          </span>
          <span className="font-medium text-primary">{prev.title}</span>
        </Link>
      ) : (
        <div className="w-1/2" />
      )}
      
      {next ? (
        <Link
          href={next.href!}
          className="group flex flex-col items-end gap-1 rounded-lg border border-transparent hover:bg-muted/50 p-4 transition-colors w-1/2 text-right"
        >
          <span className="flex items-center text-xs text-muted-foreground">
            Next
            <ChevronRight className="ml-1 h-3 w-3" />
          </span>
          <span className="font-medium text-primary">{next.title}</span>
        </Link>
      ) : (
        <div className="w-1/2" />
      )}
    </div>
  );
}
