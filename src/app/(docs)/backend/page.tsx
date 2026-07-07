import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backend Architecture - Vishara Docs",
  description: "Arsitektur backend FastAPI pada proyek Vishara",
};

export default function BackendArchitecturePage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Backend Architecture</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Panduan struktur FastAPI, struktur folder, dan logika routing backend.
      </p>
      
      <EstimatedReadingTime time="6 min" />

      <Callout type="info">
        Backend dibangun menggunakan FastAPI (Python). Fokus utama arsitektur ini adalah pemisahan
        tanggung jawab (separation of concerns) untuk mempermudah testing dan iterasi.
      </Callout>

      <h2>Struktur Folder <code>backend/</code></h2>
      <CodeBlock 
        lang="plaintext"
        code={`backend/
├── main.py             # Entry point aplikasi FastAPI
├── config.py           # Konfigurasi environment (Pydantic Settings)
├── routers/            # Endpoint controller (routes)
│   └── api.py          
├── services/           # Business logic (AI, Database)
│   ├── ai.py           # Integrasi Google Gemini API
│   └── db.py           # Operasi CRUD Supabase PostgreSQL
├── schemas/            # Pydantic models (Validasi request/response)
│   └── models.py       
└── utils.py            # Fungsi helper (format gambar, dll)`}
      />

      <h2>Komponen Utama</h2>
      
      <h3>1. <code>main.py</code></h3>
      <p>Menginisialisasi instance FastAPI, mengatur middleware CORS (sangat penting agar frontend bisa memanggil API), dan mendaftarkan routers.</p>
      
      <h3>2. <code>routers/</code></h3>
      <p>Berisi endpoint (contoh: <code>/upload</code>, <code>/results/{"{id}"}</code>). Router <strong>tidak boleh</strong> mengandung logika kompleks, router hanya menerima request, memanggil <code>services</code>, dan mengembalikan response.</p>

      <h3>3. <code>services/</code></h3>
      <p>Inti dari aplikasi. Terdapat dua file utama:</p>
      <ul>
        <li><code>ai.py</code>: Mengirim gambar ke Google Gemini, memparsing response (JSON parsing), dan mengembalikan data terstruktur.</li>
        <li><code>db.py</code>: Berkomunikasi dengan database (Supabase) via SQL atau ORM untuk menyimpan dan mengambil hasil scan.</li>
      </ul>

      <h3>4. <code>schemas/</code></h3>
      <p>Menggunakan Pydantic untuk mendefinisikan bentuk data yang masuk dan keluar, sekaligus berfungsi sebagai dokumentasi otomatis (Swagger UI).</p>

      <Callout type="warning" title="Best Practice: CORS">
        Jika frontend Next.js dan backend FastAPI berjalan di port berbeda (misal Next.js di 3000, FastAPI di 8000), 
        pastikan CORS middleware sudah dikonfigurasi di <code>main.py</code>.
      </Callout>

      <Pagination />
    </div>
  );
}
