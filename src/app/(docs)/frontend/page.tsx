import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Architecture - Vishara Docs",
  description: "Arsitektur frontend Next.js pada proyek Vishara",
};

export default function FrontendArchitecturePage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Frontend Architecture</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Penjelasan lengkap mengenai struktur dan flow aplikasi Next.js (App Router).
      </p>
      
      <EstimatedReadingTime time="5 min" />

      <Callout type="info">
        Frontend menggunakan Next.js App Router (versi 15+), React 19, dan Tailwind CSS v4.
        Semua komponen UI dibangun tanpa library eksternal (shadcn/ui-like, tapi dibangun dari awal).
      </Callout>

      <h2>Struktur Folder <code>app/</code></h2>
      <p>Aplikasi menggunakan sistem routing App Router. Berikut adalah struktur folder utama:</p>

      <CodeBlock 
        lang="plaintext"
        code={`app/
├── globals.css         # Styling global & Tailwind
├── layout.tsx          # Root layout (ThemeProvider, Fonts)
├── page.tsx            # Landing Page (Hero section)
├── loading.tsx         # Global loading UI
├── (hospital)          # Route Group untuk fitur Hospital
│   └── hospital/
│       └── page.tsx    # Hospital guide page
├── (scan)              # Route Group untuk fitur utama
│   ├── scan/
│   │   └── page.tsx    # Halaman Scan kamera (WebRTC)
│   └── result/
│       └── page.tsx    # Hasil analisis AI
└── api/                # Next.js API Routes (jika ada)`}
      />

      <h2>Komponen (<code>components/</code>)</h2>
      <p>Semua komponen terpusat di folder <code>components/</code>, dan dibagi menjadi:</p>
      <ul>
        <li><code>ui/</code>: Komponen dasar yang reusable (Button, Input, Card).</li>
        <li><code>layout/</code>: Navbar, Sidebar, Footer.</li>
        <li><code>features/</code>: Komponen spesifik fitur (seperti CameraScanner, ResultVisualizer).</li>
      </ul>

      <h2>State Management</h2>
      <p>State management dilakukan dengan pendekatan:</p>
      <ol>
        <li><strong>React State & Context:</strong> Untuk state lokal (UI toggles, input forms).</li>
        <li><strong>URL Search Params:</strong> Digunakan untuk melempar data antar halaman.</li>
      </ol>

      <Callout type="success" title="Hal yang perlu dihafal">
        Gunakan <code>useSearchParams</code> dari <code>next/navigation</code> untuk membaca ID hasil scan dari URL,
        lalu fetch datanya dari backend.
      </Callout>

      <Callout type="warning" title="Hal yang tidak perlu dihafal">
        Konfigurasi Tailwind CSS rumit. Cukup pahami bahwa <code>globals.css</code> mengatur theme dark/light dan token warna.
      </Callout>

      <Pagination />
    </div>
  );
}
