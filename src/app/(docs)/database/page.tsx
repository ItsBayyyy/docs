import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Database Architecture - Vishara Docs",
  description: "Arsitektur database Supabase pada proyek Vishara",
};

export default function DatabaseArchitecturePage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Database Architecture</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Struktur tabel, relasi, dan cara melakukan query ke Supabase.
      </p>
      
      <EstimatedReadingTime time="3 min" />

      <Callout type="info">
        Vishara menggunakan <strong>Supabase</strong> sebagai database utama (PostgreSQL). 
        Anda tidak perlu mengelola server database sendiri.
      </Callout>

      <h2>Entity Relationship Diagram (ERD)</h2>
      <p>Sistem ini memiliki tabel sederhana untuk menyimpan resep dokter dan hasil scan AI.</p>

      <CodeBlock 
        lang="sql"
        code={`-- Tabel utama: scans
CREATE TABLE scans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  image_url TEXT NOT NULL,
  ai_result JSONB,
  confidence_score FLOAT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`}
      />

      <h2>Cara Query dari FastAPI</h2>
      <p>Backend FastAPI berkomunikasi dengan Supabase melalui REST API yang disediakan oleh Supabase Client.</p>

      <CodeBlock 
        lang="python"
        code={`# Contoh di services/db.py
from supabase import create_client, Client
from config import settings

supabase: Client = create_client(settings.supabase_url, settings.supabase_key)

def save_scan_result(image_url: str, ai_data: dict):
    data = {
        "image_url": image_url,
        "ai_result": ai_data
    }
    response = supabase.table("scans").insert(data).execute()
    return response.data`}
      />

      <Callout type="warning" title="Keamanan Row Level Security (RLS)">
        Pastikan RLS pada tabel <code>scans</code> dikonfigurasi dengan benar di Supabase Dashboard, 
        agar data tidak bisa diakses secara publik (jika ada data sensitif).
      </Callout>

      <Pagination />
    </div>
  );
}
