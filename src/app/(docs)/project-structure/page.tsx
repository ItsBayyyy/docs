import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Structure - Vishara Docs",
  description: "Penjelasan folder dan struktur repositori proyek Vishara",
};

export default function ProjectStructurePage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Project Structure</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Panduan memahami hierarki folder pada repositori Vishara Versi 2.
      </p>
      
      <EstimatedReadingTime time="2 min" />

      <Callout type="info">
        Repositori ini dipecah menjadi dua bagian utama: <code>frontend/</code> dan <code>backend/</code>. 
        Keduanya dapat dideploy secara terpisah (Monorepo-style sederhana).
      </Callout>

      <h2>Root Directory</h2>
      <p>Struktur utama project Anda terlihat seperti ini:</p>

      <CodeBlock
        lang="plaintext"
        code={`versi_2_competition/
├── backend/            # FastAPI, Python Backend
├── frontend/           # Next.js, React Frontend
├── docs/               # Next.js (Website Dokumentasi ini)
└── README.md           # Quick start (sekarang sudah dipindah ke Docs)`}
      />

      <Pagination />
    </div>
  );
}
