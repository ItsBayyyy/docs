import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introduction - Vishara Docs",
  description: "Learn about the Vishara project",
};

export default function IntroductionPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Introduction</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Menjelaskan Vishara dan tujuan dari proyek ini.
      </p>
      
      <EstimatedReadingTime time="2 min" />

      <p>
        Vishara adalah aplikasi berbasis AI untuk membaca dan menganalisis resep dokter secara otomatis. 
        Dokumentasi ini berisi panduan lengkap untuk memahami arsitektur, kode, dan cara melakukan deploy proyek Vishara (Versi 2 - Competition).
      </p>

      <Callout type="info" title="Apa yang akan Anda pelajari?">
        Dokumentasi ini tidak hanya menjelaskan struktur proyek, tapi juga dirancang sebagai bahan belajar
        untuk melakukan rewrite (menulis ulang dari nol) proyek Vishara dalam 10 jam.
      </Callout>

      <h2>Teknologi Utama</h2>
      <p>Vishara dibangun menggunakan modern stack yang clean dan skalabel:</p>
      
      <ul>
        <li><strong>Frontend:</strong> Next.js App Router, Tailwind CSS, TypeScript</li>
        <li><strong>Backend:</strong> FastAPI, Python</li>
        <li><strong>Database:</strong> Supabase (PostgreSQL)</li>
        <li><strong>AI Engine:</strong> Google Gemini API</li>
      </ul>

      <Callout type="success" title="Best Practice">
        Selalu pisahkan <em>business logic</em> (Services) dengan <em>routing logic</em> (Routers) di FastAPI 
        agar kode lebih mudah di-maintain dan di-test.
      </Callout>

      <h2>Contoh Kode (Dummy)</h2>
      <CodeBlock 
        filename="example.ts"
        lang="typescript"
        code={`// Ini adalah contoh code block dengan syntax highlighting
function helloWorld() {
  console.log("Welcome to Vishara Docs!");
}`}
      />

      <Callout type="warning" title="Penting untuk diingat">
        Dokumentasi ini adalah bagian dari proses belajar. Anda sangat disarankan untuk mengikuti 
        halaman "Live Coding" dan "Rewrite Practice" jika ingin menguasai arsitektur proyek ini.
      </Callout>

      <Pagination />
    </div>
  );
}
