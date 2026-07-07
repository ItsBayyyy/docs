import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Fix - Final Prep",
  description: "Playbook darurat jika terjadi kerusakan infrastruktur saat demo berlangsung.",
};

export default function FinalPrepPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2 text-red-600">Emergency Fix</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Playbook darurat jika terjadi kerusakan infrastruktur saat demo berlangsung.
      </p>
      
      <EstimatedReadingTime time="4 min" />

      <div className="mt-8">

      <p>Halaman ini adalah prosedur darurat medis untuk kode Anda. Buka ini jika terjadi error tiba-tiba saat live demo di depan juri.</p>

      <h3>1. Jika AI (OpenRouter/Qwen) Mati / Limit / Timeout</h3>
      <p><strong>Gejala:</strong> Loading tidak selesai-selesai, lalu muncul <code>HTTP 500</code>.</p>
      <p><strong>Solusi Cepat (Bypass):</strong></p>
      <ol>
        <li>Buka <code>backend/services/ai.py</code>.</li>
        <li>Hapus atau comment blok request httpx.</li>
        <li>Paksa return data statis:</li>
      </ol>
      <CodeBlock lang="python" code={`return {
    "id": "mock-ai-123",
    "species_name": "Ular Kobra Jawa (Mock)",
    "scientific_name": "Naja sputatrix",
    "description": "API DOWN: Menampilkan hasil simulasi.",
    "venom_level": "High",
    "confidence": 99.0,
    "warning_message": "Sangat mematikan!"
}`} />

      <h3>2. Jika Backend FastAPI Mati (CORS Error / 502 Bad Gateway)</h3>
      <p><strong>Gejala:</strong> Frontend normal, tapi saat tekan tombol kamera muncul <em>Failed to fetch</em>.</p>
      <p><strong>Solusi Cepat:</strong></p>
      <ol>
        <li>Cek terminal Railway/Render.</li>
        <li>Jika server crash, lakukan <em>restart service</em>.</li>
        <li>Jika masalah CORS, buka <code>backend/main.py</code>.</li>
        <li>Paksa buka semua akses sementara (Gunakan <code>allow_origins=["*"]</code>).</li>
      </ol>

      <h3>3. Jika Supabase Gagal / Quota Habis</h3>
      <p><strong>Gejala:</strong> Data P3K atau Rumah Sakit kosong di halaman <em>Result</em>.</p>
      <p><strong>Solusi Cepat:</strong></p>
      <ol>
        <li>Buka <code>backend/services/db.py</code>.</li>
        <li>Kembalikan array manual statis.</li>
      </ol>
      <CodeBlock lang="python" code={`return (
    {"warning": "Bebat luka. Bawa ke RS. (MOCK)"},
    [{"name": "RS Darurat (Mock)", "address": "-", "phone": "119", "snakebite_ready": True}]
)`} />

      <h3>4. Jika Internet Sangat Lambat (Panggung Demo)</h3>
      <p><strong>Gejala:</strong> Gambar tidak mau terupload ke backend (terlalu besar).</p>
      <p><strong>Solusi Cepat:</strong></p>
      <ol>
        <li>Anda tidak punya waktu untuk membuat kompresi gambar di frontend.</li>
        <li>Solusi: Gunakan foto berukuran kecil (&lt; 100kb) dari galeri, jangan ambil foto live dari kamera resolusi 4K.</li>
      </ol>

      <h3>5. Vercel Gagal Build saat Push Terakhir</h3>
      <p><strong>Gejala:</strong> Vercel menampilkan <em>Build Error</em> karena error linting/TS.</p>
      <p><strong>Solusi Cepat:</strong></p>
      <p>Buka <code>next.config.js</code> dan abaikan TS errors sementara (HANYA SAAT DARURAT DEMO):</p>
      <CodeBlock lang="javascript" code={`const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
}
module.exports = nextConfig`} />

      </div>

      <Pagination />
    </div>
  );
}
