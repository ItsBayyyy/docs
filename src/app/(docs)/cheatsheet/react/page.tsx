import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Cheatsheet - Docs",
  description: "Referensi cepat sintaks React",
};

export default function ReactCheatsheetPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">React Cheatsheet</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Cheatsheet untuk core hooks dan fitur React.
      </p>
      
      <EstimatedReadingTime time="3 min" />

      <div className="my-8 p-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-700 shadow-lg">
        <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">Quick Reference</h3>
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          <code>
{`const [state, setState] = useState(initial)
useEffect(() => { /* side effect */ }, [deps])`}
          </code>
        </pre>
      </div>


      <h2>useState</h2>
      <p>Hook untuk menyimpan state lokal komponen.</p>
      
      <CodeBlock 
        lang="react"
        code={`import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>- `initialValue`: Nilai awal state.
- Returns array: `[currentState, setterFunction]`.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Mengubah state secara langsung (mutasi) seperti `state = 1` tanpa memanggil setter.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          Anggap saja useState itu dompet. Kamu tidak memasukkan uang langsung, tapi lewat setter (petugas kasir).
        </Callout>
      </div>

      <h2>useEffect</h2>
      <p>Hook untuk menangani efek samping (side effects) seperti fetch data atau DOM manipulation.</p>
      
      <CodeBlock 
        lang="react"
        code={`import { useEffect, useState } from 'react';

export default function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isActive = true;
    fetch('/api/data')
      .then(res => res.json())
      .then(resData => { if (isActive) setData(resData); });
      
    return () => { isActive = false; };
  }, []);

  return <div>{data ? data.name : "Loading..."}</div>;
}`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>- `effect`: Fungsi efek samping.
- `deps`: Array dependencies kapan efek dijalankan ulang.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Lupa array dependensi `[]` sehingga efek berjalan setiap render.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          useEffect = "Lakukan ini SETELAH render".
        </Callout>
      </div>


      <Callout type="info" title="Related Documentation">
        <p>Lihat dokumentasi resmi untuk info lebih lanjut: [React Docs](https://react.dev/reference/react)</p>
      </Callout>

      <Pagination />
    </div>
  );
}
