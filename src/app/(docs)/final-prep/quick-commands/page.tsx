import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Commands - Final Prep",
  description: "Kumpulan perintah terminal copy-paste yang sering digunakan.",
};

export default function FinalPrepPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2 text-red-600">Quick Commands</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Kumpulan perintah terminal copy-paste yang sering digunakan.
      </p>
      
      <EstimatedReadingTime time="4 min" />

      <div className="mt-8">

      <Callout type="info">
        Gunakan tombol <strong>Copy</strong> di pojok kanan code block untuk mempercepat workflow Anda.
      </Callout>

      <h3>Menjalankan Frontend Lokal</h3>
      <CodeBlock lang="bash" code={`cd frontend
npm install
npm run dev`} />

      <h3>Menjalankan Backend Lokal (FastAPI)</h3>
      <CodeBlock lang="bash" code={`cd backend
# Windows: venv\Scripts\activate
# Mac/Linux: source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000`} />

      <h3>Git (Menyelamatkan Kode dengan Cepat)</h3>
      <CodeBlock lang="bash" code={`git add .
git commit -m "update fix darurat"
git push origin main`} />

      <h3>Membatalkan Perubahan Git (Panic Reset)</h3>
      <p>Jika kode rusak dan ingin kembali ke commit terakhir yang berfungsi:</p>
      <CodeBlock lang="bash" code={`# Menghapus semua perubahan yang belum di commit
git reset --hard HEAD`} />
      
      <Callout type="warning" title="Peringatan Bahaya">
        Perintah <code>git reset --hard</code> akan menghapus semua ketikan kode yang belum Anda commit secara permanen.
      </Callout>

      <h3>Instalasi Dependensi yang Sering Terlupa</h3>
      <CodeBlock lang="bash" code={`# Frontend
npm install lucide-react framer-motion axios

# Backend
pip install fastapi uvicorn httpx pydantic python-multipart`} />

      </div>

      <Pagination />
    </div>
  );
}
