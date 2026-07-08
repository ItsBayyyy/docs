import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TypeScript Cheatsheet - Docs",
  description: "Referensi cepat sintaks TypeScript",
};

export default function TypeScriptCheatsheetPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">TypeScript Cheatsheet</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Cheatsheet untuk sistem tipe statis TypeScript.
      </p>
      
      <EstimatedReadingTime time="3 min" />

      <div className="my-8 p-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-700 shadow-lg">
        <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">Quick Reference</h3>
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          <code>
{`interface User {
  id: string;
  name: string;
  age?: number;
}`}
          </code>
        </pre>
      </div>


      <h2>Interface & Optional</h2>
      <p>Mendefinisikan bentuk sebuah object.</p>
      
      <CodeBlock 
        lang="typescript"
        code={`interface Product {
  id: number;
  name: string;
  description?: string; // opsional
  price: number;
}

const item: Product = {
  id: 1,
  name: "Laptop",
  price: 15000000
};`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>Gunakan `?` untuk menandai properti sebagai opsional.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Mencoba membaca properti opsional tanpa memastikan eksistensinya (bisa undefined).
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          Interface bisa di-extends, type lebih cocok untuk union.
        </Callout>
      </div>

      <h2>Union & Types</h2>
      <p>Menentukan tipe variabel yang bisa bernilai lebih dari satu jenis.</p>
      
      <CodeBlock
  lang="typescript"
  code={`type Status = "success" | "error" | "loading";

function printStatus(status: Status) {
  console.log(\`Current status: \${status}\`);
}

printStatus("success"); // Valid
// printStatus("failed"); // Error`}
/>
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>Gunakan `|` untuk memisahkan opsi tipe.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Menggabungkan tipe yang sangat bertolak belakang yang menyebabkan TS bingung.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          Gunakan union untuk string literals yang spesifik.
        </Callout>
      </div>


      <Callout type="info" title="Related Documentation">
        <p>Lihat dokumentasi resmi untuk info lebih lanjut: [TypeScript Docs](https://www.typescriptlang.org/docs/)</p>
      </Callout>

      <Pagination />
    </div>
  );
}
