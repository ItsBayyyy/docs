import { Callout } from "@/components/mdx/Callout";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Vishara Docs",
  description: "Pertanyaan yang sering muncul seputar proyek Vishara",
};

export default function FAQPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">FAQ (Frequently Asked Questions)</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Kumpulan pertanyaan yang sering diajukan mengenai pengembangan proyek Vishara.
      </p>
      
      <EstimatedReadingTime time="3 min" />

      <h3>Apakah saya harus menggunakan Next.js App Router?</h3>
      <p>
        Sangat disarankan. Mulai dari Next.js 13, App Router adalah cara yang direkomendasikan secara resmi (dan menjadi default) oleh Vercel. 
        App Router memungkinkan React Server Components (RSC) yang membuat aplikasi jauh lebih cepat dan SEO-friendly secara out-of-the-box.
      </p>

      <h3>Mengapa menggunakan FastAPI di backend, bukan Next.js API Routes?</h3>
      <p>
        Next.js API Routes memang sangat mumpuni, tetapi untuk proyek AI yang banyak melakukan pengolahan gambar (image processing), parsing kompleks, dan bergantung pada ekosistem machine learning yang sebagian besar ditulis dengan Python, FastAPI adalah pilihan yang lebih tepat dan alami (native).
      </p>

      <h3>Berapa lama waktu yang dibutuhkan untuk menguasai proyek ini?</h3>
      <p>
        Berdasarkan halaman <a href="/live-coding">Live Coding</a> dan <a href="/learning-roadmap">Learning Roadmap</a>, jika Anda sudah familiar dengan dasar React dan Python, Anda dapat membangun ulang aplikasi ini dalam kurun waktu 10 hingga 15 jam.
      </p>

      <h3>Bagaimana cara Google Gemini membedakan jenis obat?</h3>
      <p>
        Model Gemini 1.5 Flash telah dilatih pada data gambar dan teks dalam jumlah besar (multimodal). Dengan <em>Prompt Engineering</em> yang baik, kita menginstruksikan model untuk tidak sekadar "membaca teks", tetapi mengkategorikan setiap kalimat dalam resep ke dalam struktur JSON yang kita minta (nama obat, dosis, catatan).
      </p>

      <h3>Apakah aplikasi ini membutuhkan Database Lokal (PostgreSQL) saat Development?</h3>
      <p>
        Tidak. Karena kita menggunakan Supabase (Database-as-a-Service) di cloud, Anda tidak perlu menginstall PostgreSQL Server di komputer Anda. Anda hanya perlu memiliki koneksi internet dan API Keys yang valid dari proyek Supabase Anda.
      </p>

      <Pagination />
    </div>
  );
}
