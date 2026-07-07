import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Endpoints - Vishara Docs",
  description: "Dokumentasi API Backend FastAPI proyek Vishara",
};

export default function APIPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">API Reference</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Dokumentasi lengkap untuk semua endpoint backend yang digunakan oleh frontend.
      </p>
      
      <EstimatedReadingTime time="3 min" />

      <Callout type="info">
        Semua endpoint FastAPI secara default bisa diakses melalui <code>http://localhost:8000</code>.
        FastAPI juga menyediakan Swagger UI interaktif di <code>http://localhost:8000/docs</code>.
      </Callout>

      <h2>1. <code>POST /api/upload</code></h2>
      <p>Menerima file gambar resep dari frontend, memprosesnya dengan AI, dan menyimpan hasilnya ke database.</p>

      <h3>Request</h3>
      <ul>
        <li><strong>Method:</strong> POST</li>
        <li><strong>Content-Type:</strong> <code>multipart/form-data</code></li>
        <li><strong>Body:</strong> <code>file</code> (Binary image file, misal: JPG/PNG)</li>
      </ul>

      <h3>Response (200 OK)</h3>
      <CodeBlock 
        lang="json"
        code={`{
  "status": "success",
  "data": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "image_url": "https://storage.supabase.co/...",
    "ai_result": {
      "patient_name": "Budi",
      "medicines": [...]
    }
  }
}`}
      />

      <h2>2. <code>GET /api/results/{"{id}"}</code></h2>
      <p>Mengambil hasil ekstraksi resep dari database berdasarkan ID scan.</p>

      <h3>Request</h3>
      <ul>
        <li><strong>Method:</strong> GET</li>
        <li><strong>Params:</strong> <code>id</code> (UUID string dari hasil upload)</li>
      </ul>

      <h3>Response (200 OK)</h3>
      <CodeBlock 
        lang="json"
        code={`{
  "status": "success",
  "data": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "image_url": "https://storage.supabase.co/...",
    "ai_result": { ... },
    "created_at": "2026-07-07T03:00:00Z"
  }
}`}
      />

      <Callout type="danger" title="Error Handling">
        Jika ID tidak ditemukan, endpoint <code>GET /api/results/{"{id}"}</code> akan mengembalikan status <code>404 Not Found</code>. 
        Frontend harus meng-handle kondisi ini dengan menampilkan UI error yang sesuai.
      </Callout>

      <Pagination />
    </div>
  );
}
