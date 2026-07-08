import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supabase Cheatsheet - Docs",
  description: "Referensi cepat sintaks Supabase",
};

export default function SupabaseCheatsheetPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Supabase Cheatsheet</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Cheatsheet untuk penggunaan API Supabase.
      </p>
      
      <EstimatedReadingTime time="3 min" />

      <div className="my-8 p-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-700 shadow-lg">
        <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">Quick Reference</h3>
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          <code>
{`const { data, error } = await supabase
  .from('table')
  .select('*')
  .eq('id', 1)`}
          </code>
        </pre>
      </div>


      <h2>Select Data</h2>
      <p>Mengambil baris dari tabel.</p>
      
      <CodeBlock 
        lang="javascript"
        code={`const getRecords = async () => {
  const { data, error } = await supabase
    .from('items')
    .select('id, name, price')
    .eq('status', 'active')
    .order('created_at', { ascending: false })
    .limit(10);
    
  if (error) console.error(error);
  return data;
}`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>- `.select()`: Memilih kolom.
- `.eq()`: Filter kondisi.
- `.order()`: Mengurutkan.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Lupa meng-handle object `error` dari response supabase yang membuat aplikasi crash saat offline.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          Response Supabase selalu mengembalikan `{ data, error }`.
        </Callout>
      </div>

      <h2>Insert Data</h2>
      <p>Memasukkan baris baru ke tabel.</p>
      
      <CodeBlock 
        lang="javascript"
        code={`const insertRecord = async (newItem) => {
  const { data, error } = await supabase
    .from('items')
    .insert([
      { name: newItem.name, price: newItem.price }
    ])
    .select(); // Tambahkan .select() agar mengembalikan row yg dibuat
    
  return { data, error };
}`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>- Array of object diterima oleh `.insert()`.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Lupa menggunakan `.select()` di akhir `.insert()` padahal butuh ID dari baris yang baru dibuat.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          Insert butuh array <code>[{"{...}"}]</code>.
        </Callout>
      </div>


      <Callout type="info" title="Related Documentation">
        <p>Lihat dokumentasi resmi untuk info lebih lanjut: [Supabase Docs](https://supabase.com/docs)</p>
      </Callout>

      <Pagination />
    </div>
  );
}
