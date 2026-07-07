import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";
import React from "react";

type CalloutType = "default" | "warning" | "info" | "success" | "danger";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Callout({
  type = "default",
  title,
  children,
  className,
}: CalloutProps) {
  const iconMap = {
    default: Info,
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle2,
    danger: AlertCircle,
  };

  const Icon = iconMap[type];

  const variants = {
    default: "bg-muted/50 text-foreground border-l-4 border-muted-foreground",
    info: "bg-blue-500/10 text-blue-900 dark:text-blue-200 border-l-4 border-blue-500",
    warning: "bg-yellow-500/10 text-yellow-900 dark:text-yellow-200 border-l-4 border-yellow-500",
    success: "bg-green-500/10 text-green-900 dark:text-green-200 border-l-4 border-green-500",
    danger: "bg-red-500/10 text-red-900 dark:text-red-200 border-l-4 border-red-500",
  };

  return (
    <div
      className={cn(
        "my-6 flex flex-col gap-2 rounded-md p-4 text-sm",
        variants[type],
        className
      )}
    >
      {title && (
        <div className="flex items-center gap-2 font-semibold">
          <Icon className="h-4 w-4" />
          <span>{title}</span>
        </div>
      )}
      <div className={cn("leading-relaxed", !title && "flex gap-2")}>
        {!title && <Icon className="mt-0.5 h-4 w-4 shrink-0" />}
        <div>{children}</div>
      </div>
    </div>
  );
}
