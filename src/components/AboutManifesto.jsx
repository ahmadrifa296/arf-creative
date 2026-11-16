import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function AboutManifesto() {
  const manifestoPoints = [
    {
      num: "01",
      title: "Dokumentasi Terbuka",
      desc: "Setiap projek bukan hanya kode yang berjalan di browser, melainkan arsip pembelajaran: mencatat alasan pemilihan antarmuka, penanganan kendala teknis, dan catatan perbaikan."
    },
    {
      num: "02",
      title: "Karakter Visual yang Spesifik",
      desc: "Menolak template generik yang seragam. Setiap karya dirancang dari nol dengan identitas tipografi, palet warna, dan tata letak yang mencerminkan pesan unik pemilik projek."
    },
    {
      num: "03",
      title: "Performa Ringan & Statis",
      desc: "Memprioritaskan kecepatan render dan kemudahan pemeliharaan. Menggunakan pendekatan modern tanpa beban dependensi backend yang tidak dibutuhkan."
    },
    {
      num: "04",
      title: "Semangat Kolaborasi Kreatif",
      desc: "Membuka pintu diskusi santai dan terarah bersama mahasiswa, komunitas, maupun brand lokal yang ingin mewujudkan ide web mereka ke ranah digital."
    }
  ];

  return (
    <section id="tentang" className="py-24 bg-[#060B13] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Manifesto & Narrative */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase">
              TENTANG &amp; FILOSOFI KREATIF
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Karya Digital Lahir dari Proses yang Terdokumentasi.
            </h2>

            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              ARF Creative didirikan sebagai ruang kreatif untuk bereksplorasi, belajar, dan merancang bangun website. Kami percaya bahwa nilai sebuah projek tidak hanya terletak pada tampilan akhirnya, melainkan pada seluruh perjalanan pemecahan masalah di baliknya.
            </p>

            <div className="pt-4 p-5 rounded-xl bg-[#0B1320] border border-white/10 space-y-2">
              <div className="text-xs font-mono text-white font-bold">
                PRINSIP KAMI
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed italic">
                "{siteConfig.quote}"
              </p>
            </div>
          </div>

          {/* Right Column: Numbered Editorial Breakdown */}
          <div className="lg:col-span-7 space-y-4">
            {manifestoPoints.map((item) => (
              <div
                key={item.num}
                className="p-6 sm:p-8 rounded-xl bg-[#0B1320] border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs text-[#38BDF8] font-bold">
                    {item.num}
                  </span>
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
