import { Callout } from "@/components/mdx/Callout";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Flow - Vishara Docs",
  description: "User flow dari aplikasi Vishara mulai dari Landing page hingga Hasil Akhir",
};

export default function FlowPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2">Application Flow</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Alur interaksi pengguna (User Journey) di dalam aplikasi Vishara.
      </p>
      
      <EstimatedReadingTime time="2 min" />

      <Callout type="info">
        Aplikasi dirancang agar linear dan intuitif. Pengguna dipandu dari satu langkah ke langkah berikutnya secara berurutan tanpa navigasi yang membingungkan.
      </Callout>

      <div className="flex flex-col items-center gap-4 my-10 font-medium text-sm">
        <div className="bg-muted px-6 py-3 rounded-lg border border-border shadow-sm text-center w-48">
          1. Landing Page<br/>
          <span className="text-xs font-normal text-muted-foreground">(Homepage)</span>
        </div>
        <div className="h-6 border-l-2 border-primary border-dashed"></div>
        <div className="bg-muted px-6 py-3 rounded-lg border border-border shadow-sm text-center w-48">
          2. Scan Page<br/>
          <span className="text-xs font-normal text-muted-foreground">(WebRTC / File Upload)</span>
        </div>
        <div className="h-6 border-l-2 border-primary border-dashed"></div>
        <div className="bg-primary/20 text-primary px-6 py-3 rounded-lg border border-primary/50 shadow-sm text-center w-48">
          3. Loading State<br/>
          <span className="text-xs font-normal opacity-80">(AI Processing)</span>
        </div>
        <div className="h-6 border-l-2 border-primary border-dashed"></div>
        <div className="bg-muted px-6 py-3 rounded-lg border border-border shadow-sm text-center w-48">
          4. Result Page<br/>
          <span className="text-xs font-normal text-muted-foreground">(Extracted Data JSON)</span>
        </div>
        <div className="h-6 border-l-2 border-primary border-dashed"></div>
        <div className="bg-muted px-6 py-3 rounded-lg border border-border shadow-sm text-center w-48">
          5. Hospital Guide<br/>
          <span className="text-xs font-normal text-muted-foreground">(Optional Next Step)</span>
        </div>
      </div>

      <h2>Penjelasan Setiap Langkah</h2>
      <ul>
        <li><strong>Landing Page:</strong> Pengenalan aplikasi dan Call-to-Action (CTA) untuk memulai pemindaian resep.</li>
        <li><strong>Scan Page:</strong> Memanfaatkan Web API Kamera (WebRTC) agar pengguna bisa memfoto resep langsung dari browser, atau mengunggah gambar dari galeri.</li>
        <li><strong>Loading State:</strong> Animasi atau skeleton screen sambil menunggu respons dari Google Gemini API. Proses ini memakan waktu 2-5 detik.</li>
        <li><strong>Result Page:</strong> Menampilkan hasil parsing JSON dari backend menjadi UI yang cantik dan mudah dibaca (Daftar Obat, Dosis, dll).</li>
        <li><strong>Hospital Guide:</strong> Halaman opsional jika resep memerlukan penebusan obat di rumah sakit terdekat.</li>
      </ul>

      <Pagination />
    </div>
  );
}
