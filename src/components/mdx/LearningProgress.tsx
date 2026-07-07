"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChecklistItem {
  id: string;
  label: string;
}

interface LearningProgressProps {
  id: string; // Unique ID for this progress block
  title?: string;
  items: ChecklistItem[];
}

export function LearningProgress({ id, title = "Learning Progress", items }: LearningProgressProps) {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(`vishara-progress-${id}`);
    if (saved) {
      try {
        setCompleted(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
  }, [id]);

  const toggleItem = (itemId: string) => {
    const newCompleted = {
      ...completed,
      [itemId]: !completed[itemId],
    };
    setCompleted(newCompleted);
    localStorage.setItem(`vishara-progress-${id}`, JSON.stringify(newCompleted));
  };

  const total = items.length;
  const completedCount = items.filter((item) => completed[item.id]).length;
  const percentage = total === 0 ? 0 : Math.round((completedCount / total) * 100);

  if (!mounted) return null;

  return (
    <div className="my-8 rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold m-0">{title}</h3>
        <span className="text-sm font-medium text-muted-foreground">{percentage}% Complete</span>
      </div>
      
      <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-muted">
        <div 
          className="h-full bg-primary transition-all duration-500 ease-in-out" 
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const isDone = !!completed[item.id];
          return (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-md p-2 text-left transition-colors hover:bg-muted/50",
                isDone ? "text-muted-foreground" : "text-foreground"
              )}
            >
              {isDone ? (
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground shrink-0" />
              )}
              <span className={cn(isDone && "line-through decoration-muted-foreground/50")}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
