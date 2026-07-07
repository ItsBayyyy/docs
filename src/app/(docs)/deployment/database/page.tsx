import { Callout } from "@/components/mdx/Callout";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Database Deployment - Vishara Docs",
  description: "Cara setup dan deploy database di Supabase",
};

export default function DatabaseDeploymentPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Database Deployment</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Cara menyiapkan proyek database PostgreSQL menggunakan Supabase secara gratis.
      </p>
      
      <EstimatedReadingTime time="2 min" />

      <Callout type="info">
        Supabase adalah platform Backend-as-a-Service (BaaS) sumber terbuka yang memberikan Anda database PostgreSQL lengkap secara instan.
      </Callout>

      <h2>Langkah Setup</h2>
      <ol>
        <li>Login ke <a href="https://supabase.com" target="_blank" rel="noreferrer">Supabase.com</a> menggunakan akun GitHub Anda.</li>
        <li>Buat organisasi baru (jika belum ada) dan klik <strong>New Project</strong>.</li>
        <li>
          Isi detail proyek:
          <ul>
            <li><strong>Name:</strong> vishara-db</li>
            <li><strong>Database Password:</strong> Buat password yang kuat dan catat/simpan!</li>
            <li><strong>Region:</strong> Pilih server terdekat (contoh: Singapore).</li>
          </ul>
        </li>
        <li>Tunggu beberapa menit hingga Supabase selesai menyiapkan database Anda.</li>
        <li>
          Pilih menu <strong>SQL Editor</strong> di sidebar kiri, lalu klik <em>New Query</em>.
          Tempelkan skema SQL yang ada di halaman <a href="/database">Database Architecture</a> untuk membuat tabel <code>scans</code>. Klik <strong>Run</strong>.
        </li>
        <li>Buka menu <strong>Project Settings &gt; API</strong> untuk menyalin <code>Project URL</code> dan <code>anon public key</code>. Keduanya dibutuhkan oleh backend Anda (simpan ke <code>SUPABASE_URL</code> dan <code>SUPABASE_KEY</code>).</li>
      </ol>

      <Pagination />
    </div>
  );
}
