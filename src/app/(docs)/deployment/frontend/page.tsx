import { Callout } from "@/components/mdx/Callout";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Deployment - Vishara Docs",
  description: "Cara mendepoy frontend Next.js ke Vercel",
};

export default function FrontendDeploymentPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Frontend Deployment</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Cara deploy aplikasi Next.js (Frontend) ke platform Vercel secara gratis.
      </p>
      
      <EstimatedReadingTime time="2 min" />

      <Callout type="info">
        Vercel adalah platform terbaik untuk deploy Next.js karena keduanya dibangun oleh tim yang sama (Vercel Inc).
        Proses deployment sepenuhnya otomatis lewat integrasi GitHub.
      </Callout>

      <h2>Langkah Deployment</h2>
      <ol>
        <li>Push kode <code>frontend/</code> Anda ke repositori GitHub.</li>
        <li>Login ke <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel.com</a> menggunakan akun GitHub Anda.</li>
        <li>Klik tombol <strong>Add New Project</strong>.</li>
        <li>Pilih repository GitHub yang baru saja Anda push.</li>
        <li>
          Pada bagian <strong>Framework Preset</strong>, pastikan terpilih <code>Next.js</code>.<br/>
          <em>Penting:</em> Jika kode frontend Anda ada di dalam folder <code>frontend/</code>, atur <strong>Root Directory</strong> ke <code>frontend</code>.
        </li>
        <li>
          Pada bagian <strong>Environment Variables</strong>, tambahkan URL backend Anda nantinya:
          <pre><code>NEXT_PUBLIC_API_URL = https://vishara-backend.onrender.com/api</code></pre>
        </li>
        <li>Klik <strong>Deploy</strong> dan tunggu 1-2 menit.</li>
      </ol>

      <Callout type="success" title="Selesai!">
        Frontend Anda sekarang sudah bisa diakses di internet. Jika ada perubahan kode di GitHub, Vercel akan otomatis melakukan redeploy (CI/CD otomatis).
      </Callout>

      <Pagination />
    </div>
  );
}
