import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Possible Judge Questions - Final Prep",
  description: "Kompilasi 30+ pertanyaan yang berpotensi ditanyakan juri beserta panduan jawaban (argumen logis).",
};

export default function FinalPrepPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2 text-red-600">Possible Judge Questions</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Kompilasi 30+ pertanyaan yang berpotensi ditanyakan juri beserta panduan jawaban (argumen logis).
      </p>
      
      <EstimatedReadingTime time="4 min" />

      <div className="mt-8">

      <Callout type="info">
        Hafalkan inti dari argumen ini. Juri seringkali menguji "mengapa" Anda memilih stack/desain tertentu daripada "bagaimana" Anda membuatnya.
      </Callout>

      <h3>A. Teknologi & Arsitektur</h3>
      <ol className="space-y-4">
        <li>
          <strong>Mengapa menggunakan Next.js (App Router)?</strong><br/>
          <span className="text-slate-600">Jawaban: Next.js menyediakan Server Components dan optimasi bawaan (Image, Font, Routing) yang membuat aplikasi sangat cepat dimuat di jaringan lambat (situasi darurat).</span>
        </li>
        <li>
          <strong>Mengapa menggunakan FastAPI di Backend?</strong><br/>
          <span className="text-slate-600">Jawaban: FastAPI sangat cepat, mendukung asynchronous programming secara native, dan punya dokumentasi (Swagger UI) otomatis, cocok untuk kompetisi live coding berbatas waktu.</span>
        </li>
        <li>
          <strong>Mengapa memisahkan Frontend dan Backend?</strong><br/>
          <span className="text-slate-600">Jawaban: Pemisahan concern. Agar model AI di backend bisa di-scale terpisah dari web traffic, dan menyembunyikan API key AI dari client-side.</span>
        </li>
        <li>
          <strong>Mengapa menggunakan Supabase daripada Postgres manual?</strong><br/>
          <span className="text-slate-600">Jawaban: Supabase menyediakan API instan (PostgREST) untuk MVP 10 jam, sehingga kita bisa fokus ke integrasi AI daripada menulis boilerplate CRUD.</span>
        </li>
        <li>
          <strong>Mengapa tidak menggunakan sistem Login?</strong><br/>
          <span className="text-slate-600">Jawaban: Ini aplikasi darurat (Panic-Safe UX). Dalam kondisi tergigit ular, meminta orang login/register adalah UX yang fatal dan membuang golden time.</span>
        </li>
      </ol>

      <h3>B. AI & Integrasi</h3>
      <ol start={6} className="space-y-4">
        <li>
          <strong>Mengapa menggunakan Qwen-VL?</strong><br/>
          <span className="text-slate-600">Jawaban: Qwen-VL adalah salah satu model Vision-Language open-weight terbaik yang andal mendeteksi fauna Asia/Indonesia dengan latensi cepat via OpenRouter.</span>
        </li>
        <li>
          <strong>Bagaimana jika AI salah deteksi (False Positive/Negative)?</strong><br/>
          <span className="text-slate-600">Jawaban: Kami merancang prompt dengan safety-first bias. Jika AI ragu (confidence &lt; 85%), ia akan mengklasifikasikannya sebagai ular berbisa demi kehati-hatian, serta menampilkan peringatan "AI Tidak Yakin".</span>
        </li>
        <li>
          <strong>Apakah AI ini mengenali gambar selain ular?</strong><br/>
          <span className="text-slate-600">Jawaban: Pada system prompt, kami membatasi konteksnya sebagai pakar herpetologi. Gambar non-ular akan direject/diidentifikasi salah, error handling UI akan menyuruh memotret ulang.</span>
        </li>
        <li>
          <strong>Mengapa tidak melatih (train) model YOLO sendiri?</strong><br/>
          <span className="text-slate-600">Jawaban: Untuk MVP 10 jam, Large Vision Model memberikan akurasi generalisasi yang jauh lebih baik daripada melatih model kecil dengan dataset yang sangat terbatas saat hackathon.</span>
        </li>
        <li>
          <strong>Berapa lama latensi pemanggilan AI?</strong><br/>
          <span className="text-slate-600">Jawaban: Sekitar 3-5 detik. Oleh karena itu kami membuat Loading Page yang menenangkan (instruksi diam) untuk mengisi idle time.</span>
        </li>
      </ol>

      <h3>C. UX & Produk</h3>
      <ol start={11} className="space-y-4">
        <li>
          <strong>Mengapa memilih desain aplikasi darurat yang mencolok (Merah/Hijau/Besar)?</strong><br/>
          <span className="text-slate-600">Jawaban: Panic-Safe UX. Saat orang panik, kemampuan kognitif dan motorik halus menurun drastis. Tombol kecil tidak akan bisa ditekan.</span>
        </li>
        <li>
          <strong>Mengapa Hospital Recommendation menggunakan dataset statis?</strong><br/>
          <span className="text-slate-600">Jawaban: Ini MVP (Proof of Concept). Di dunia nyata, tidak semua RS punya SABU (Serum Anti Bisa Ular). Kami butuh struktur data terpisah (flag snakebite_ready) yang tidak ada di Google Maps API biasa.</span>
        </li>
        <li>
          <strong>Apa jaminan pengguna membaca First Aid?</strong><br/>
          <span className="text-slate-600">Jawaban: Kami membuang paragraf panjang dan menggantinya dengan daftar DO/DON&apos;T ber-ikon raksasa agar terbaca dalam hitungan sekon.</span>
        </li>
        <li>
          <strong>Bagaimana Anda membedakan proyek ini dengan Google Lens?</strong><br/>
          <span className="text-slate-600">Jawaban: Google Lens hanya memberi tahu nama ular. Vishara memberikan end-to-end emergency flow: tingkat bahaya -&gt; P3K larangan -&gt; navigasi ke RS berserum.</span>
        </li>
        <li>
          <strong>Mengapa Landing page sangat sepi?</strong><br/>
          <span className="text-slate-600">Jawaban: Agar pengguna bisa menekan tombol kamera dalam 0.5 detik tanpa terdistraksi teks marketing.</span>
        </li>
      </ol>

      <h3>D. Penanganan Masalah & Batasan</h3>
      <ol start={16} className="space-y-4">
        <li>
          <strong>Bagaimana jika pasien tidak ada sinyal internet?</strong><br/>
          <span className="text-slate-600">Jawaban: Saat ini versi web (MVP) butuh koneksi. Kedepannya (PWA/Native), kami akan cache panduan P3K untuk akses offline, walau deteksi AI tetap butuh jaringan.</span>
        </li>
        <li>
          <strong>Apa kelemahan utama MVP ini?</strong><br/>
          <span className="text-slate-600">Jawaban: Sangat bergantung pada kualitas foto. Foto blur dari kejauhan akan menurunkan akurasi AI.</span>
        </li>
        <li>
          <strong>Mengapa tidak ada fitur "Map penyebaran ular"?</strong><br/>
          <span className="text-slate-600">Jawaban: Fitur itu ada di Roadmap fase berikutnya (Incident Heatmap). Fokus fase 1 (MVP) 10 jam ini murni pada respon darurat individu.</span>
        </li>
        <li>
          <strong>Dari mana data First Aid didapat?</strong><br/>
          <span className="text-slate-600">Jawaban: Dummy data berdasarkan standar P3K WHO untuk gigitan ular (imobilisasi, larangan tourniquet).</span>
        </li>
        <li>
          <strong>Jika server OpenRouter down, aplikasi mati?</strong><br/>
          <span className="text-slate-600">Jawaban: Di code, ada implementasi dummy_qwen yang akan mereturn hasil tes jika API gagal di lingkungan lokal (Graceful Degradation).</span>
        </li>
      </ol>

      <h3>E. Pertanyaan Jebakan Live Coding</h3>
      <ol start={21} className="space-y-4">
        <li>
          <strong>Bagaimana cara Anda menyelesaikan ini dalam 10 jam?</strong><br/>
          <span className="text-slate-600">Jawaban: Fokus pada prioritisasi fitur (Landing, Scan, API). Mengorbankan nice-to-have seperti fitur login demi menyempurnakan alur darurat.</span>
        </li>
        <li>
          <strong>Bagian kode mana yang paling sulit dibuat?</strong><br/>
          <span className="text-slate-600">Jawaban: Merangkai instruksi prompt engineering agar model AI tidak berhalusinasi saat melihat gambar acak.</span>
        </li>
        <li>
          <strong>Bisa tunjukkan bagian kode untuk memanggil AI?</strong><br/>
          <span className="text-slate-600">Bersiap membuka <code>services/ai.py</code></span>
        </li>
        <li>
          <strong>Bagaimana cara menghubungkan UI dengan Backend?</strong><br/>
          <span className="text-slate-600">Bersiap menjelaskan penggunaan Fetch di <code>frontend/lib/api.ts</code></span>
        </li>
        <li>
          <strong>Mengapa warna danger diset via Tailwind dinamis?</strong><br/>
          <span className="text-slate-600">Jelaskan interpolasi string className di React</span>
        </li>
      </ol>

      <h3>F. Masa Depan Proyek (Roadmap)</h3>
      <ol start={26} className="space-y-4">
        <li>
          <strong>Bagaimana roadmap setelah lomba?</strong><br/>
          <span className="text-slate-600">Jawaban: Meluncurkan PWA offline-first, menambahkan Incident Heatmap, dan membuat dasbor institusi untuk Dinkes/RS.</span>
        </li>
        <li>
          <strong>Bagaimana cara update data rumah sakit yang memiliki antivenom?</strong><br/>
          <span className="text-slate-600">Jawaban: Di masa depan, diperlukan portal kemitraan (B2B) di mana RS dapat mengupdate stok SABU mereka secara berkala.</span>
        </li>
        <li>
          <strong>Bagaimana model monetisasi proyek sosial ini?</strong><br/>
          <span className="text-slate-600">Jawaban: Skema B2B/G2G. Menjual dasbor intelijen persebaran gigitan ular (heatmap) ke Dinas Kesehatan atau asuransi.</span>
        </li>
        <li>
          <strong>Apakah rencana membuat aplikasi Native (Android/iOS)?</strong><br/>
          <span className="text-slate-600">Jawaban: Ya, untuk memanfaatkan API Kamera yang lebih low-level saat memotret ular.</span>
        </li>
        <li>
          <strong>Mengapa nama proyeknya Vishara?</strong><br/>
          <span className="text-slate-600">Jawaban: Dari bahasa sansekerta "Visha" (Racun).</span>
        </li>
      </ol>

      </div>

      <Pagination />
    </div>
  );
}
