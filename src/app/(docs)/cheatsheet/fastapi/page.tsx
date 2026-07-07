import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FastAPI Cheatsheet - Docs",
  description: "Referensi cepat sintaks FastAPI",
};

export default function FastAPICheatsheetPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">FastAPI Cheatsheet</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Cheatsheet untuk framework web FastAPI Python.
      </p>
      
      <EstimatedReadingTime time="3 min" />

      <div className="my-8 p-6 bg-slate-900 text-slate-100 rounded-xl border border-slate-700 shadow-lg">
        <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">Quick Reference</h3>
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          <code>
{`from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def read_root(): return {"Hello": "World"}`}
          </code>
        </pre>
      </div>


      <h2>Route dasar (@app.get)</h2>
      <p>Mendefinisikan endpoint API.</p>
      
      <CodeBlock 
        lang="python"
        code={`from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float

@app.post("/items/")
async def create_item(item: Item):
    return {"message": "Item created", "data": item}`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>- `@app.get` atau `@app.post` mendefinisikan method.
- Parameter fungsi otomatis menjadi query string atau body (jika Pydantic).</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Lupa mewariskan `BaseModel` dari Pydantic pada schema request.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          FastAPI otomatis membedakan parameter path, query, dan body berdasarkan Tipe (Pydantic).
        </Callout>
      </div>

      <h2>UploadFile</h2>
      <p>Menerima file dari form-data multipart.</p>
      
      <CodeBlock 
        lang="python"
        code={`from fastapi import FastAPI, File, UploadFile

app = FastAPI()

@app.post("/upload/")
async def upload_image(file: UploadFile = File(...)):
    contents = await file.read()
    return {"filename": file.filename, "size": len(contents)}`}
      />
      
      <div className="mt-4">
        <strong>Parameter & Penjelasan:</strong>
        <p>- `File(...)`: Menandakan field ini wajib berupa file form-data.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-12">
        <Callout type="warning" title="Common Mistakes">
          Mencoba membaca isi file dengan `.read()` tanpa `await` jika fungsi adalah async.
        </Callout>
        <Callout type="success" title="Tips Menghafal">
          UploadFile menggunakan SpooledTemporaryFile sehingga aman untuk file besar.
        </Callout>
      </div>


      <Callout type="info" title="Related Documentation">
        <p>Lihat dokumentasi resmi untuk info lebih lanjut: [FastAPI Docs](https://fastapi.tiangolo.com/)</p>
      </Callout>

      <Pagination />
    </div>
  );
}
