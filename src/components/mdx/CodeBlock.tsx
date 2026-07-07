import { codeToHtml } from "shiki";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  lang: string;
  filename?: string;
  className?: string;
}

export async function CodeBlock({ code, lang, filename, className }: CodeBlockProps) {
  // Use a minimal, dark theme matching Vercel docs
  const html = await codeToHtml(code, {
    lang,
    theme: "github-dark",
  });

  return (
    <div className={cn("my-6 overflow-hidden rounded-lg border border-border bg-[#0d1117]", className)}>
      {filename && (
        <div className="flex items-center px-4 py-2 bg-muted/50 border-b border-border text-xs text-muted-foreground font-mono">
          {filename}
        </div>
      )}
      <div 
        className="overflow-x-auto p-4 text-sm [&>pre]:!bg-transparent [&>pre]:m-0"
        dangerouslySetInnerHTML={{ __html: html }} 
      />
    </div>
  );
}
