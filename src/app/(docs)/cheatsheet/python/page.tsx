import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Python Cheatsheet - Docs",
  description: "Referensi cepat sintaks Python",
};

export default function PythonCheatsheetPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Python Cheatsheet</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Cheatsheet untuk sintaks dasar Python.
      </p>
      
      <EstimatedReadingTime time="3 min" />

      <div className="my-8 p-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-700 shadow-lg">
        <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">Quick Reference</h3>
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          <code>
{`def my_func(arg: int) -> str:
    return str(arg)

my_dict = {"key": "value"}`}
          </code>
        </pre>
      </div>


      <h2>Dictionary & List</h2>
      <p>Struktur data utama Python.</p>
      
      <CodeBlock 
        lang="python"
        code={`users = [
    {"id": 1, "name": "Budi"},
    {"id": 2, "name": "Siti"}
]

# Mendapatkan nilai dari dict
first_user_name = users[0].get("name", "Unknown")

# List comprehension
names = [user["name"] for user in users]`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>- `.get(key, default)`: Mengambil nilai dict dengan fallback.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Menggunakan `dict["key"]` langsung dan mendapatkan KeyError jika key tidak ada.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          Selalu gunakan `.get()` jika key belum pasti ada.
        </Callout>
      </div>

      <h2>Try Catch (Exception)</h2>
      <p>Menangani error runtime.</p>
      
      <CodeBlock 
        lang="python"
        code={`def divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        print("Tidak bisa dibagi nol!")
        return 0
    except Exception as e:
        print(f"Error tidak diketahui: {e}")
        return None`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>Blok `try` diikuti `except`.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Menggunakan blok `except:` kosong (bare except) yang menyembunyikan semua error.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          Tangkap error yang spesifik terlebih dahulu.
        </Callout>
      </div>


      <Callout type="info" title="Related Documentation">
        <p>Lihat dokumentasi resmi untuk info lebih lanjut: [Python Docs](https://docs.python.org/3/)</p>
      </Callout>

      <Pagination />
    </div>
  );
}
