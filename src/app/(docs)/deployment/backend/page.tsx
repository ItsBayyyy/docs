import { Callout } from "@/components/mdx/Callout";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backend Deployment - Vishara Docs",
  description: "Cara mendepoy backend FastAPI ke Render",
};

export default function BackendDeploymentPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Backend Deployment</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Cara deploy aplikasi FastAPI (Backend) ke platform Render secara gratis.
      </p>
      
      <EstimatedReadingTime time="3 min" />

      <Callout type="info">
        Render.com adalah alternatif gratis yang sangat baik untuk mendeploy aplikasi backend seperti FastAPI atau Node.js.
      </Callout>

      <h2>Persiapan Kode</h2>
      <p>Pastikan Anda memiliki file <code>requirements.txt</code> di dalam folder <code>backend/</code>. Jika belum ada, buat dengan perintah:</p>
      <pre><code>pip freeze &gt; requirements.txt</code></pre>

      <h2>Langkah Deployment</h2>
      <ol>
        <li>Login ke <a href="https://render.com" target="_blank" rel="noreferrer">Render.com</a> menggunakan GitHub Anda.</li>
        <li>Klik tombol <strong>New +</strong> dan pilih <strong>Web Service</strong>.</li>
        <li>Pilih opsi "Build and deploy from a Git repository".</li>
        <li>Hubungkan repositori GitHub Anda.</li>
        <li>
          Konfigurasi Service Anda:
          <ul>
            <li><strong>Name:</strong> vishara-backend (atau terserah Anda)</li>
            <li><strong>Root Directory:</strong> <code>backend</code></li>
            <li><strong>Environment:</strong> Python 3</li>
            <li><strong>Build Command:</strong> <code>pip install -r requirements.txt</code></li>
            <li><strong>Start Command:</strong> <code>uvicorn main:app --host 0.0.0.0 --port 10000</code></li>
          </ul>
        </li>
        <li>
          Scroll ke bawah ke bagian <strong>Advanced</strong> lalu tambahkan Environment Variables:
          <pre><code>GEMINI_API_KEY = your_gemini_api_key
SUPABASE_URL = your_supabase_url
SUPABASE_KEY = your_supabase_key</code></pre>
        </li>
        <li>Klik <strong>Create Web Service</strong>.</li>
      </ol>

      <Callout type="warning" title="Render Free Tier Timeout">
        Server gratis di Render akan "tertidur" jika tidak ada request selama 15 menit. Request pertama setelah server tertidur mungkin membutuhkan waktu 30-60 detik untuk merespons.
      </Callout>

      <Pagination />
    </div>
  );
}
