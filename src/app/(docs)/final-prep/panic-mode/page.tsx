import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { EstimatedReadingTime } from "@/components/mdx/EstimatedReadingTime";
import { Pagination } from "@/components/layout/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "If Everything Goes Wrong - Final Prep",
  description: "SOP Evakuasi Psikologis saat Live Coding.",
};

export default function FinalPrepPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="mb-2 text-red-600">If Everything Goes Wrong</h1>
      <p className="text-lg text-muted-foreground mb-6">
        SOP Evakuasi Psikologis saat Live Coding.
      </p>
      
      <EstimatedReadingTime time="4 min" />

      <div className="mt-8">

      <div className="p-8 bg-red-600 text-white rounded-2xl mb-8 shadow-xl text-center">
        <h1 className="text-4xl font-black text-white mb-2 uppercase">Jangan Panik.</h1>
        <h2 className="text-2xl font-bold">Tarik napas 3 detik.</h2>
      </div>

      <p className="text-xl">Jika saat live demo aplikasi hancur lebur (White screen, 500 error, internet mati):</p>

      <h2>1. Jujur kepada Juri</h2>
      <p className="italic bg-slate-100 p-4 rounded-lg border-l-4 border-slate-400">
        "Mohon maaf, sepertinya terjadi kendala pada environment live. Saya akan segera melakukan debugging ringan. Mengingat waktu terbatas, saya akan mencoba satu fix."
      </p>

      <h2>2. Segera Temukan Sumber Masalah (Triage)</h2>
      <ul>
        <li><strong>Aplikasi Blank Putih?</strong> ➔ 90% masalah di React Client Error (lupa pasang <code>"use client"</code> atau <em>map of undefined</em>).</li>
        <li><strong>Console Merah "Failed to fetch" atau CORS?</strong> ➔ Masalah koneksi Frontend ke Backend.</li>
        <li><strong>Backend mencetak error Python beruntun?</strong> ➔ Masalah data dari API pihak ketiga (Qwen/Supabase) tidak sesuai format ekspektasi.</li>
      </ul>

      <h2>3. Lakukan ATURAN 1 BUG</h2>
      <ul>
        <li>Beri waktu <strong>maksimal 2 menit</strong> untuk memperbaiki bug.</li>
        <li>Jika 2 menit berlalu, <strong>BERHENTI</strong>. Jangan bongkar kode lebih dalam.</li>
        <li>Segera fallback ke <strong>Video Demo Backup</strong> (selalu siapkan rekaman layar aplikasi berjalan dengan baik di laptop Anda sebelum demo!).</li>
      </ul>

      <h2>4. Trik Bertahan Hidup (Survival Tactics)</h2>
      <ul>
        <li><strong>Hapus Fitur Rusak:</strong> Daripada 1 layar tidak bisa dibuka karena error di komponen HospitalList, hapus komponen HospitalList dari layar. Sisakan Result. Aplikasi berjalan walau fitur kurang.</li>
        <li><strong>Ubah ke Hardcode:</strong> Jika fetching rusak, hapus fetch, ganti state langsung dengan array statis. Juri menghargai pemecahan masalah secara <em>agile</em>.</li>
        <li><strong>Jangan Coba Install Library Baru</strong> di 10 menit terakhir.</li>
      </ul>

      <Callout type="success" title="Ingat!">
        Juri paham ini adalah Hackathon/Live Coding. Sistem yang hancur tapi Anda bisa mengidentifikasi penyebabnya dan bereaksi dengan tenang (bahkan dengan fallback hardcode) dinilai jauh lebih baik daripada panik diam menatap layar error.
      </Callout>

      </div>

      <Pagination />
    </div>
  );
}
