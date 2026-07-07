import { Clock } from "lucide-react";

interface EstimatedReadingTimeProps {
  time: string;
}

export function EstimatedReadingTime({ time }: EstimatedReadingTimeProps) {
  return (
    <div className="flex items-center gap-1.5 text-sm text-muted-foreground my-4">
      <Clock className="h-4 w-4" />
      <span>{time} read</span>
    </div>
  );
}
