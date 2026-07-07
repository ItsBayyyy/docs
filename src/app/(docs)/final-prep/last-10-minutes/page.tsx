import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Last 10 Minutes Checklist - Final Prep",
  description: "Checklist mutlak yang harus diperiksa 10 menit sebelum waktu live coding berakhir.",
};

export default function FinalPrepPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2 text-red-600">Last 10 Minutes Checklist</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Checklist mutlak yang harus diperiksa 10 menit sebelum waktu live coding berakhir.
      </p>
      
      <EstimatedReadingTime time="4 min" />

      <div className="mt-8">

      <h2>1. Functional Check</h2>
      <p>Pastikan semua fungsi inti tidak rusak:</p>
      <ul>
        <li><input type="checkbox" className="mr-2" /> Landing dapat dibuka</li>
        <li><input type="checkbox" className="mr-2" /> Scan dapat dibuka</li>
        <li><input type="checkbox" className="mr-2" /> Upload gambar berhasil</li>
        <li><input type="checkbox" className="mr-2" /> Kamera berhasil dibuka</li>
        <li><input type="checkbox" className="mr-2" /> AI mengembalikan hasil</li>
        <li><input type="checkbox" className="mr-2" /> Result tampil</li>
        <li><input type="checkbox" className="mr-2" /> First Aid tampil</li>
        <li><input type="checkbox" className="mr-2" /> Hospital tampil</li>
        <li><input type="checkbox" className="mr-2" /> Emergency Call berfungsi</li>
      </ul>

      <h2>2. UI Check</h2>
      <ul>
        <li><input type="checkbox" className="mr-2" /> Tidak ada tombol rusak (mati)</li>
        <li><input type="checkbox" className="mr-2" /> Tidak ada halaman kosong / <em>blank screen</em></li>
        <li><input type="checkbox" className="mr-2" /> Tidak ada <em>loading</em> yang tidak berhenti</li>
        <li><input type="checkbox" className="mr-2" /> Responsive di mobile</li>
        <li><input type="checkbox" className="mr-2" /> Responsive di desktop</li>
        <li><input type="checkbox" className="mr-2" /> Warna Danger (Merah/Orange/Hijau) muncul dengan benar sesuai level bisa</li>
      </ul>

      <h2>3. Backend Check</h2>
      <ul>
        <li><input type="checkbox" className="mr-2" /> Semua endpoint berjalan tanpa <code>Internal Server Error</code></li>
        <li><input type="checkbox" className="mr-2" /> Tidak ada error di terminal/console</li>
        <li><input type="checkbox" className="mr-2" /> Tidak ada error di FastAPI logs</li>
        <li><input type="checkbox" className="mr-2" /> Environment Variable (<code>.env</code>) benar terpasang</li>
        <li><input type="checkbox" className="mr-2" /> API Key (Qwen/Supabase) terbaca</li>
      </ul>

      <h2>4. Database Check</h2>
      <ul>
        <li><input type="checkbox" className="mr-2" /> Query berhasil ke Supabase</li>
        <li><input type="checkbox" className="mr-2" /> Dummy data rumah sakit muncul</li>
        <li><input type="checkbox" className="mr-2" /> Dummy data P3K muncul</li>
      </ul>

      <h2>5. Deployment Check</h2>
      <ul>
        <li><input type="checkbox" className="mr-2" /> Frontend online (Vercel)</li>
        <li><input type="checkbox" className="mr-2" /> Backend online (Railway/Render)</li>
        <li><input type="checkbox" className="mr-2" /> Semua endpoint memanggil URL production (bukan <code>localhost:8000</code>)</li>
        <li><input type="checkbox" className="mr-2" /> Tidak ada <em>CORS error</em></li>
      </ul>

      <h2>6. Demo Check</h2>
      <ul>
        <li><input type="checkbox" className="mr-2" /> Coba jalankan skenario pemindaian ular berbisa <strong>Satu Kali Penuh</strong>.</li>
        <li><input type="checkbox" className="mr-2" /> AI berjalan</li>
        <li><input type="checkbox" className="mr-2" /> Hospital muncul</li>
        <li><input type="checkbox" className="mr-2" /> Emergency Call muncul</li>
        <li><input type="checkbox" className="mr-2" /> Guide muncul</li>
      </ul>

      <div className="mt-12 p-6 bg-slate-900 text-slate-100 rounded-xl border border-emerald-500">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4 mt-0">📋 ALUR PRESENTASI JURI</h2>
        <ol className="text-lg space-y-3">
          <li><input type="checkbox" className="mr-2" /> Buka Landing Page</li>
          <li><input type="checkbox" className="mr-2" /> Jelaskan masalah (Tingkat kematian akibat panik & salah penanganan gigitan ular)</li>
          <li><input type="checkbox" className="mr-2" /> Jelaskan solusi (AI Assistant yang fokus pada kecepatan & P3K)</li>
          <li><input type="checkbox" className="mr-2" /> Demo Scan (Tunjukkan kamera/upload gambar ular kobra)</li>
          <li><input type="checkbox" className="mr-2" /> Demo AI (Tunjukkan proses analisis cepat)</li>
          <li><input type="checkbox" className="mr-2" /> Demo Result & Hospital (Tunjukkan UI Panic-Safe dan list RS yang punya Antivenom)</li>
          <li><input type="checkbox" className="mr-2" /> Demo Emergency Call (Tunjukkan tombol langsung panggil 119)</li>
          <li><input type="checkbox" className="mr-2" /> Tutup presentasi dengan menyebutkan Future Roadmap (Heatmap, Integrasi Instansi)</li>
        </ol>
      </div>

      </div>

      <Pagination />
    </div>
  );
}
