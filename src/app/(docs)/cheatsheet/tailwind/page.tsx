import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailwind CSS Cheatsheet - Docs",
  description: "Referensi cepat sintaks Tailwind CSS",
};

export default function TailwindCSSCheatsheetPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Tailwind CSS Cheatsheet</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Cheatsheet untuk utility classes Tailwind.
      </p>
      
      <EstimatedReadingTime time="3 min" />

      <div className="my-8 p-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-700 shadow-lg">
        <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">Quick Reference</h3>
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          <code>
{`flex items-center justify-between
p-4 m-2 w-full h-screen rounded-xl shadow-md`}
          </code>
        </pre>
      </div>


      <h2>Flexbox</h2>
      <p>Membuat layout fleksibel.</p>
      
      <CodeBlock 
        lang="javascript"
        code={`<div className="flex flex-col md:flex-row items-center justify-between gap-4">
  <div className="flex-1 bg-red-100 p-4">Kiri</div>
  <div className="flex-1 bg-blue-100 p-4">Kanan</div>
</div>`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>Class `flex` mengaktifkan flexbox. `gap-4` memberi jarak. `items-center` menyejajarkan secara vertikal.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Lupa menambahkan class `flex` sehingga class `justify-center` tidak bekerja.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          Pikirkan flex sebagai baris, dan col sebagai kolom.
        </Callout>
      </div>

      <h2>Responsive Design</h2>
      <p>Memberi styling khusus pada ukuran layar tertentu.</p>
      
      <CodeBlock 
        lang="javascript"
        code={`<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
  Responsive Box
</div>`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>Prefix `sm:`, `md:`, `lg:` menargetkan breakpoint spesifik.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Berpikir `md:` berarti dari ukuran 0 hingga md. Tailwind menggunakan pendekatan mobile-first (md: berarti md KATA ATAS).
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          Buat desain HP dulu, baru tambahkan `md:` untuk layar besar.
        </Callout>
      </div>


      <Callout type="info" title="Related Documentation">
        <p>Lihat dokumentasi resmi untuk info lebih lanjut: [Tailwind Docs](https://tailwindcss.com/docs)</p>
      </Callout>

      <Pagination />
    </div>
  );
}
