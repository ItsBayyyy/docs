import { Callout } from "@/components/mdx/Callout";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Roadmap - Vishara Docs",
  description: "Roadmap belajar membangun aplikasi medis AI dari nol",
};

export default function LearningRoadmapPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Learning Roadmap</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Langkah demi langkah untuk menguasai teknologi di balik proyek Vishara selama 7 hari.
      </p>
      
      <EstimatedReadingTime time="3 min" />

      <Callout type="info">
        Roadmap ini direkomendasikan bagi Anda yang baru mengenal Next.js, FastAPI, atau integrasi AI. 
        Ikuti secara berurutan!
      </Callout>

      <h2>Hari 1: Dasar-dasar Frontend Modern</h2>
      <ul>
        <li>Pelajari Next.js App Router (Routing, Layouts, Server Components).</li>
        <li>Review konsep dasar Tailwind CSS v4 (Utility classes, styling).</li>
        <li><em>Tugas Praktek:</em> Buat halaman statis sederhana tanpa fungsi interaktif.</li>
      </ul>

      <h2>Hari 2: Kamera & WebRTC</h2>
      <ul>
        <li>Pelajari cara browser mengakses hardware perangkat (Kamera/Microphone) lewat `navigator.mediaDevices`.</li>
        <li>Buat UI sederhana untuk menampilkan video stream dari webcam.</li>
        <li>Pelajari cara mengambil foto dari frame video menggunakan elemen HTML <code>&lt;canvas&gt;</code>.</li>
      </ul>

      <h2>Hari 3: Dasar Backend FastAPI</h2>
      <ul>
        <li>Setup lingkungan Python virtual (venv).</li>
        <li>Pelajari cara membuat endpoint sederhana dengan FastAPI (GET & POST).</li>
        <li>Pelajari Pydantic untuk memvalidasi input/output data (Schemas).</li>
        <li><em>Tugas Praktek:</em> Buat API untuk menerima upload file (gambar).</li>
      </ul>

      <h2>Hari 4: Database Supabase</h2>
      <ul>
        <li>Daftar ke Supabase dan buat proyek baru.</li>
        <li>Pelajari cara membuat tabel lewat SQL atau Supabase Studio.</li>
        <li>Integrasikan client Supabase (atau driver SQL) di FastAPI.</li>
        <li><em>Tugas Praktek:</em> Simpan URL gambar dan data dummy ke dalam tabel.</li>
      </ul>

      <h2>Hari 5: Integrasi AI (Gemini)</h2>
      <ul>
        <li>Pelajari konsep Prompt Engineering (menyuruh AI mengembalikan format JSON yang ketat).</li>
        <li>Integrasikan SDK <code>google-generativeai</code> di FastAPI.</li>
        <li><em>Tugas Praktek:</em> Kirim gambar dan prompt dari backend ke Gemini, dan dapatkan response JSON.</li>
      </ul>

      <h2>Hari 6: Penggabungan (Integration)</h2>
      <ul>
        <li>Hubungkan Frontend Next.js agar memanggil endpoint FastAPI.</li>
        <li>Tampilkan hasil JSON dari backend di UI Next.js (Result Page).</li>
        <li>Handle state loading (spinner/skeleton) saat menunggu balasan AI.</li>
      </ul>

      <h2>Hari 7: Deployment</h2>
      <ul>
        <li>Deploy database (Supabase sudah siap di cloud).</li>
        <li>Deploy backend FastAPI ke Render.com atau Railway.</li>
        <li>Deploy frontend Next.js ke Vercel.</li>
        <li><em>Tugas Praktek:</em> Uji aplikasi dari perangkat seluler (smartphone) Anda secara online!</li>
      </ul>

      <Pagination />
    </div>
  );
}
