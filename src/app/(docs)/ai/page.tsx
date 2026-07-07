import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Architecture - Vishara Docs",
  description: "Arsitektur integrasi Google Gemini AI pada proyek Vishara",
};

export default function AIArchitecturePage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">AI Architecture</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Penjelasan lengkap flow AI, prompt, dan parsing response.
      </p>
      
      <EstimatedReadingTime time="4 min" />

      <Callout type="info">
        Vishara menggunakan <strong>Google Gemini API</strong> (Gemini 1.5 Flash) untuk mendeteksi teks dari gambar (OCR) dan menstrukturkan informasinya secara cerdas.
      </Callout>

      <h2>Flow AI</h2>
      <ol>
        <li>User mengirimkan gambar foto resep dokter dari Frontend (Next.js) ke Backend (FastAPI).</li>
        <li>Backend mengkonversi gambar ke format yang bisa dibaca Gemini.</li>
        <li>Backend memanggil Gemini API beserta <strong>Prompt Khusus</strong>.</li>
        <li>Gemini membalas dengan struktur JSON murni.</li>
        <li>Backend menyimpan JSON tersebut ke database dan mengembalikannya ke Frontend.</li>
      </ol>

      <h2>Prompt Engineering</h2>
      <p>Kunci dari ekstraksi yang akurat adalah <em>System Prompt</em> yang digunakan. Berikut contoh potongannya:</p>

      <CodeBlock 
        lang="python"
        code={`PROMPT = """
Anda adalah AI asisten apoteker yang ahli membaca resep dokter.
Ekstrak informasi dari gambar resep dokter ini dan WAJIB kembalikan
dalam bentuk JSON murni tanpa markdown \`\`\`json.

Struktur yang diharapkan:
{
  "patient_name": "Nama Pasien",
  "doctor_name": "Nama Dokter",
  "medicines": [
    {
      "name": "Nama Obat",
      "dosage": "Dosis (contoh: 3x1)",
      "notes": "Catatan tambahan"
    }
  ],
  "confidence": 0.95
}
"""`}
      />

      <h2>JSON & Confidence Score</h2>
      <p>
        AI diminta memberikan <code>confidence</code> score antara 0.0 hingga 1.0 yang menandakan tingkat 
        keyakinan model terhadap tulisan tangan yang dibacanya. Jika nilai confidence di bawah 0.7, 
        aplikasi bisa memberikan peringatan <em>"Hasil scan mungkin tidak akurat, harap periksa kembali"</em>.
      </p>

      <Pagination />
    </div>
  );
}
