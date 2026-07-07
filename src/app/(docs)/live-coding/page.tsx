import { Callout } from "@/components/mdx/Callout";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Coding - Vishara Docs",
  description: "Timeline 10 jam Live Coding Vishara",
};

export default function LiveCodingPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Live Coding (10 Jam)</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Panduan detail timeline pengerjaan ulang Vishara dari nol dalam 10 jam.
      </p>
      
      <EstimatedReadingTime time="15 min" />

      <Callout type="info" title="Paling Penting!">
        Halaman ini adalah inti dari proses pembelajaran Anda. Ikuti timeline ini langkah demi langkah untuk menguasai arsitektur dan flow Vishara.
      </Callout>

      <div className="space-y-8 mt-8">
        
        <div className="border-l-2 border-primary pl-6 relative">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
          <h3 className="mt-0">Jam 0 - 1: Setup & Landing Page</h3>
          <ul>
            <li>Inisialisasi Next.js, Tailwind CSS, TypeScript.</li>
            <li>Setup layout dasar dan navigasi.</li>
            <li>Membuat komponen Hero section (Landing Page).</li>
          </ul>
        </div>

        <div className="border-l-2 border-primary pl-6 relative">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
          <h3 className="mt-0">Jam 1 - 2: Setup FastAPI & Database</h3>
          <ul>
            <li>Inisialisasi FastAPI project.</li>
            <li>Membuat Supabase project dan mengambil credential.</li>
            <li>Menghubungkan FastAPI dengan Supabase PostgreSQL.</li>
            <li>Membuat struktur tabel (Migration/SQL).</li>
          </ul>
        </div>
        
        <div className="border-l-2 border-primary pl-6 relative">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
          <h3 className="mt-0">Jam 2 - 3: Flow Kamera & Scan (Frontend)</h3>
          <ul>
            <li>Membuat halaman Scan Page.</li>
            <li>Mengintegrasikan WebRTC / API Kamera di browser.</li>
            <li>Mengambil gambar (snapshot) dari video stream.</li>
          </ul>
        </div>

        <div className="border-l-2 border-primary pl-6 relative">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
          <h3 className="mt-0">Jam 3 - 5: Integrasi AI & Prompt Engineering</h3>
          <ul>
            <li>Membuat endpoint backend untuk menerima upload gambar.</li>
            <li>Mengirim gambar ke Google Gemini API dengan prompt spesifik.</li>
            <li>Parsing response dari AI menjadi format JSON yang terstruktur.</li>
          </ul>
        </div>
        
        {/* We can expand up to hour 10 */}
        <div className="border-l-2 border-primary pl-6 relative">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
          <h3 className="mt-0">Jam 5 - 10: Polishing, Result Page, & Deploy</h3>
          <ul>
            <li>Menampilkan hasil ekstraksi AI di Result Page.</li>
            <li>Menambahkan UI Hospital Guide.</li>
            <li>Deploy Backend ke Render/Vercel.</li>
            <li>Deploy Frontend ke Vercel.</li>
          </ul>
        </div>

      </div>

      <Pagination />
    </div>
  );
}
