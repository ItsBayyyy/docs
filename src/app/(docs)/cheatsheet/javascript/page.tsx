import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JavaScript Cheatsheet - Docs",
  description: "Referensi cepat sintaks JavaScript",
};

export default function JavaScriptCheatsheetPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">JavaScript Cheatsheet</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Cheatsheet untuk fitur utama JavaScript modern.
      </p>
      
      <EstimatedReadingTime time="3 min" />

      <div className="my-8 p-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-700 shadow-lg">
        <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">Quick Reference</h3>
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          <code>
{`const arr = [1, 2, 3];
const double = arr.map(x => x * 2);
const filtered = arr.filter(x => x > 1);`}
          </code>
        </pre>
      </div>


      <h2>Fetch & Async/Await</h2>
      <p>Mengambil data dari API secara asinkron.</p>
      
      <CodeBlock 
        lang="javascript"
        code={`async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error('Jaringan bermasalah');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>- `url`: Endpoint API.
- `options`: Method, headers, body (opsional).</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Lupa menggunakan `await` saat memanggil `response.json()`.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          Fetch selalu butuh 2x await (satu untuk request, satu untuk parsing JSON).
        </Callout>
      </div>

      <h2>Array Map</h2>
      <p>Mengubah setiap elemen dalam array.</p>
      
      <CodeBlock 
        lang="javascript"
        code={`const users = [
  { id: 1, name: 'Budi' },
  { id: 2, name: 'Siti' }
];

const userNames = users.map(user => user.name);
// Hasil: ['Budi', 'Siti']`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>- `callback(element, index)`: Fungsi yang dijalankan pada setiap elemen.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Lupa me-return nilai dari dalam fungsi callback map.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          Map tidak merubah array asli, tapi menghasilkan array baru.
        </Callout>
      </div>


      <Callout type="info" title="Related Documentation">
        <p>Lihat dokumentasi resmi untuk info lebih lanjut: [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)</p>
      </Callout>

      <Pagination />
    </div>
  );
}
