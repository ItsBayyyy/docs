import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Git Cheatsheet - Docs",
  description: "Referensi cepat sintaks Git",
};

export default function GitCheatsheetPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Git Cheatsheet</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Cheatsheet untuk command Git CLI.
      </p>
      
      <EstimatedReadingTime time="3 min" />

      <div className="my-8 p-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-700 shadow-lg">
        <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">Quick Reference</h3>
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          <code>
{`git add .
git commit -m "pesan"
git push origin main`}
          </code>
        </pre>
      </div>


      <h2>Basic Workflow</h2>
      <p>Alur standar menyimpan perubahan.</p>
      
      <CodeBlock 
        lang="bash"
        code={`# Menambahkan semua perubahan
git add .

# Menyimpan perubahan ke lokal dengan pesan
git commit -m "feat: Menambahkan halaman baru"

# Mengirim perubahan ke repository remote
git push origin main`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>- `add .`: Semua file.
- `-m`: Menyertakan pesan commit langsung.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Melakukan push sebelum pull (bisa conflict jika remote sudah berubah).
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          Add, Commit, Push berurutan.
        </Callout>
      </div>

      <h2>Branching & Merging</h2>
      <p>Bekerja di cabang terpisah.</p>
      
      <CodeBlock 
        lang="bash"
        code={`# Membuat dan langsung pindah ke branch baru
git checkout -b fitur-baru

# Setelah selesai, kembali ke main
git checkout main

# Menggabungkan fitur-baru ke main
git merge fitur-baru`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>- `-b`: Buat branch baru.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Melakukan perubahan di main padahal tim sepakat menggunakan branch terpisah.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          Setiap fitur = 1 branch baru.
        </Callout>
      </div>


      <Callout type="info" title="Related Documentation">
        <p>Lihat dokumentasi resmi untuk info lebih lanjut: [Git Docs](https://git-scm.com/doc)</p>
      </Callout>

      <Pagination />
    </div>
  );
}
