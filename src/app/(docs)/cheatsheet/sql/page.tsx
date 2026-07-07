import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQL Cheatsheet - Docs",
  description: "Referensi cepat sintaks SQL",
};

export default function SQLCheatsheetPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">SQL Cheatsheet</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Cheatsheet untuk sintaks SQL Dasar.
      </p>
      
      <EstimatedReadingTime time="3 min" />

      <div className="my-8 p-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-700 shadow-lg">
        <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">Quick Reference</h3>
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          <code>
{`SELECT * FROM users WHERE status = 'active' ORDER BY id DESC LIMIT 5;
INSERT INTO users (name) VALUES ('Budi');`}
          </code>
        </pre>
      </div>


      <h2>SELECT & Filter</h2>
      <p>Query dasar membaca data.</p>
      
      <CodeBlock 
        lang="sql"
        code={`SELECT 
    id, 
    name, 
    created_at 
FROM items 
WHERE price > 1000 
  AND status = 'active'
ORDER BY created_at DESC 
LIMIT 10;`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>- `WHERE`: Kondisi filter.
- `ORDER BY`: Pengurutan.
- `LIMIT`: Batas jumlah.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Urutan penulisan WHERE setelah ORDER BY (sintaks akan error). Urutan harus: SELECT -> FROM -> WHERE -> ORDER BY -> LIMIT.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          Hafalkan akronim SF W O L (Select From Where Order Limit).
        </Callout>
      </div>

      <h2>INSERT & UPDATE</h2>
      <p>Memasukkan atau mengubah data.</p>
      
      <CodeBlock 
        lang="sql"
        code={`-- Insert 
INSERT INTO items (name, price, status) 
VALUES ('Produk A', 5000, 'active');

-- Update
UPDATE items 
SET price = 6000, status = 'inactive'
WHERE id = 1;`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>Gunakan klausa WHERE pada UPDATE.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Lupa menuliskan WHERE pada saat melakukan UPDATE, yang berakibat seluruh tabel berubah nilainya.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          Pikirkan WHERE sebelum mengetik UPDATE.
        </Callout>
      </div>


      <Callout type="info" title="Related Documentation">
        <p>Lihat dokumentasi resmi untuk info lebih lanjut: [PostgreSQL Docs](https://www.postgresql.org/docs/)</p>
      </Callout>

      <Pagination />
    </div>
  );
}
