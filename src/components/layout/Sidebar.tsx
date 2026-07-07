"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export type NavItem = {
  title: string;
  href?: string;
  items?: NavItem[];
};

export const docsConfig: NavItem[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/" },
      { title: "Project Structure", href: "/project-structure" },
      { title: "Flow", href: "/flow" },
    ],
  },
  {
    title: "Architecture",
    items: [
      { title: "Frontend", href: "/frontend" },
      { title: "Backend", href: "/backend" },
      { title: "Database", href: "/database" },
      { title: "AI", href: "/ai" },
      { title: "API", href: "/api" },
    ],
  },
  {
    title: "Deployment",
    items: [
      { title: "Frontend Deployment", href: "/deployment/frontend" },
      { title: "Backend Deployment", href: "/deployment/backend" },
      { title: "Database Deployment", href: "/deployment/database" },
    ],
  },
  {
    title: "Learning",
    items: [
      { title: "Live Coding", href: "/live-coding" },
      { title: "Learning Roadmap", href: "/learning-roadmap" },
      { title: "Rewrite Practice", href: "/rewrite-practice" },
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      { title: "Debugging", href: "/debugging" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Final Preparation",
    items: [
      { title: "Last 10 Minutes", href: "/final-prep/last-10-minutes" },
      { title: "Judge Questions", href: "/final-prep/judge-questions" },
      { title: "Emergency Fix", href: "/final-prep/emergency-fix" },
      { title: "Quick Commands", href: "/final-prep/quick-commands" },
      { title: "Panic Mode", href: "/final-prep/panic-mode" },
    ],
  },
  {
    title: "Framework Cheatsheet",
    items: [
      { title: "React", href: "/cheatsheet/react" },
      { title: "Next.js", href: "/cheatsheet/nextjs" },
      { title: "Tailwind CSS", href: "/cheatsheet/tailwind" },
      { title: "JavaScript", href: "/cheatsheet/javascript" },
      { title: "TypeScript", href: "/cheatsheet/typescript" },
      { title: "Python", href: "/cheatsheet/python" },
      { title: "FastAPI", href: "/cheatsheet/fastapi" },
      { title: "Supabase", href: "/cheatsheet/supabase" },
      { title: "SQL", href: "/cheatsheet/sql" },
      { title: "Git", href: "/cheatsheet/git" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full">
      {docsConfig.map((item, index) => (
        <div key={index} className="pb-4">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {item.title}
          </h4>
          {item.items?.length && (
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {item.items.map((subItem, index) => {
                const isActive = pathname === subItem.href;
                return (
                  <Link
                    key={index}
                    href={subItem.href!}
                    className={cn(
                      "group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 hover:underline",
                      isActive
                        ? "font-medium text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {subItem.title}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
