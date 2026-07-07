import { Callout } from "@/components/mdx/Callout";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Debugging Guide - Vishara Docs",
  description: "Cara mengatasi error umum pada pengembangan proyek Vishara",
};

export default function DebuggingPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Debugging</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Masalah umum yang sering terjadi saat menjalankan aplikasi secara lokal dan cara menyelesaikannya.
      </p>
      
      <EstimatedReadingTime time="4 min" />

      <h2>Error Next.js (Frontend)</h2>
      
      <h3>1. CORS Error di Console Browser</h3>
      <Callout type="danger" title="Error: No 'Access-Control-Allow-Origin' header is present...">
        <p><strong>Penyebab:</strong> Next.js mencoba memanggil API FastAPI (berjalan di localhost:8000), namun FastAPI menolak karena tidak diizinkan oleh kebijakan CORS (Cross-Origin Resource Sharing).</p>
        <p><strong>Solusi:</strong> Tambahkan origin frontend Anda (contoh: <code>http://localhost:3000</code>) ke dalam daftar <code>allow_origins</code> di file middleware <code>main.py</code> milik backend.</p>
      </Callout>

      <h3>2. Kamera Tidak Muncul / Permission Denied</h3>
      <Callout type="warning" title="Error: DOMException: Permission denied">
        <p><strong>Penyebab:</strong> Browser tidak mengizinkan website mengakses kamera lokal jika tidak menggunakan HTTPS (kecuali <code>localhost</code>).</p>
        <p><strong>Solusi:</strong> Jika Anda mengakses aplikasi dari perangkat lain dalam jaringan lokal, pastikan menggunakan ngrok atau layanan tunnel serupa yang menyediakan HTTPS. Jika di <code>localhost</code>, periksa pengaturan izin kamera di browser Anda.</p>
      </Callout>

      <h2>Error FastAPI (Backend)</h2>

      <h3>1. ModuleNotFoundError</h3>
      <Callout type="danger" title="Error: No module named '...' ">
        <p><strong>Penyebab:</strong> Dependencies belum terinstal di lingkungan Python Anda.</p>
        <p><strong>Solusi:</strong> Jalankan perintah <code>pip install -r requirements.txt</code> di dalam virtual environment Anda.</p>
      </Callout>

      <h2>Error AI & Database</h2>

      <h3>1. 401 Unauthorized / Gemini Error</h3>
      <Callout type="danger" title="Error: API key not valid">
        <p><strong>Penyebab:</strong> API Key Google Gemini salah, sudah kedaluwarsa, atau tidak terbaca di environment variable.</p>
        <p><strong>Solusi:</strong> Periksa file <code>.env</code> Anda di folder <code>backend/</code> dan pastikan variabel <code>GEMINI_API_KEY</code> terisi dengan benar. Restart server FastAPI setelah merubah file `.env`.</p>
      </Callout>

      <h3>2. Supabase Connection Error</h3>
      <Callout type="warning" title="Error: Client response error / Failed to fetch">
        <p><strong>Penyebab:</strong> Koneksi internet Anda memblokir koneksi ke Supabase, atau URL dan Key di `.env` salah.</p>
        <p><strong>Solusi:</strong> Verifikasi <code>SUPABASE_URL</code> dan <code>SUPABASE_KEY</code>. Pastikan juga jaringan yang Anda gunakan (contoh: WiFi kampus/kantor) tidak memblokir port atau koneksi database cloud.</p>
      </Callout>

      <Pagination />
    </div>
  );
}
