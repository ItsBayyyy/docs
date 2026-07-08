import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Cheatsheet - Docs",
  description: "Referensi cepat sintaks Next.js",
};

export default function NextjsCheatsheetPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Next.js Cheatsheet</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Cheatsheet untuk Next.js App Router.
      </p>
      
      <EstimatedReadingTime time="3 min" />

      <div className="my-8 p-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-700 shadow-lg">
        <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">Quick Reference</h3>
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          <code>
{`// Server Component (default)
export default async function Page() { }
// Client Component
"use client";
import Link from 'next/link';`}
          </code>
        </pre>
      </div>


      <h2>App Router (page.tsx)</h2>
      <p>Halaman utama dalam route.</p>
      
      <CodeBlock 
        lang="javascript"
        code={`export default function HomePage() {
  return (
    <main>
      <h1>Selamat Datang</h1>
    </main>
  );
}`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>File harus bernama `page.tsx`. Defaultnya adalah Server Component.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Menggunakan hooks seperti `useState` tanpa mendefinisikan `"use client"`.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          Ingat: page.tsx adalah UI.
        </Callout>
      </div>

      <h2>Link Component</h2>
      <p>Navigasi antar halaman secara klien tanpa full-refresh.</p>
      
      <CodeBlock 
        lang="javascript"
        code={`import Link from 'next/link';

export default function Nav() {
  return (
    <Link href="/about" className="text-blue-500 hover:underline">
      Tentang Kami
    </Link>
  );
}`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>- `href`: Tujuan URL.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Menggunakan tag `<code>&lt;a&gt;</code>` biasa yang menyebabkan full page reload.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
  Selalu gunakan <code>&lt;Link&gt;</code> untuk navigasi internal.
</Callout>
      </div>


      <Callout type="info" title="Related Documentation">
        <p>Lihat dokumentasi resmi untuk info lebih lanjut: [Next.js Docs](https://nextjs.org/docs)</p>
      </Callout>

      <Pagination />
    </div>
  );
}
