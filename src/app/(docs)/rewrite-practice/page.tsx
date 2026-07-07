import { Callout } from "@/components/mdx/Callout";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { LearningProgress } from "@/components/mdx/LearningProgress";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rewrite Practice - Vishara Docs",
  description: "Checklist untuk latihan menulis ulang Vishara dari nol",
};

export default function RewritePracticePage() {
  const rewriteTasks = [
    { id: "task-1", label: "Buat project Next.js dan konfigurasi Tailwind" },
    { id: "task-2", label: "Buat Landing Page tanpa melihat kode asli" },
    { id: "task-3", label: "Buat halaman Scan Page dengan integrasi WebRTC" },
    { id: "task-4", label: "Buat project FastAPI dan integrasikan Supabase" },
    { id: "task-5", label: "Buat endpoint API untuk menerima gambar" },
    { id: "task-6", label: "Integrasikan Google Gemini API dengan prompt khusus" },
    { id: "task-7", label: "Buat halaman Result Page untuk menampilkan hasil AI" },
    { id: "task-8", label: "Deploy Frontend (Vercel) dan Backend (Render)" }
  ];

  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Rewrite Practice</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Halaman interaktif untuk melacak progress latihan Anda.
      </p>
      
      <EstimatedReadingTime time="1 min" />

      <Callout type="info" title="Cara Menggunakan">
        Tandai (check) setiap tugas yang sudah berhasil Anda kerjakan dari nol tanpa melihat referensi kode secara langsung.
        Progress Anda akan disimpan di browser.
      </Callout>

      <LearningProgress 
        id="rewrite-practice-1"
        title="Checklist Rewrite Vishara"
        items={rewriteTasks}
      />

      <Pagination />
    </div>
  );
}
