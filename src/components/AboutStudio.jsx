import React from 'react';

export default function AboutStudio() {
  const pillars = [
    {
      num: "01",
      title: "Dokumentasi Menyeluruh",
      desc: "Setiap karya bukan sekadar tampilan yang berjalan di browser, melainkan arsip pembelajaran: mencatat alasan pemilihan antarmuka, penanganan kendala kode, dan catatan perbaikan."
    },
    {
      num: "02",
      title: "Karakter Visual yang Otentik",
      desc: "Menolak template generik yang seragam. Setiap projek dirancang dengan identitas tipografi, palet warna, dan tata letak yang mencerminkan pesan unik pemilik karya."
    },
    {
      num: "03",
      title: "Arsitektur Statis Modern",
      desc: "Memprioritaskan kecepatan pemuatan dan kemudahan pemeliharaan. Menggunakan pendekatan statis modern yang siap dipublikasikan ke Vercel tanpa dependensi backend berlebih."
    }
  ];

  return (
    <section id="tentang" className="py-24 bg-[#0A0C13] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <div className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase">
            CATATAN PROSES &amp; PENDEKATAN
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Menghargai Proses di Balik Setiap Baris Kode.
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            ARF Creative didirikan dari keyakinan bahwa website yang bernilai dibangun di atas pemahaman masalah yang jujur dan catatan proses yang transparan.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item) => (
            <div
              key={item.num}
              className="p-8 rounded-3xl bg-[#0F1117] border border-white/10 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="font-mono text-sm font-bold text-[#38BDF8] block">
                  {item.num}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-[#64748B]">
                ARF CREATIVE STANDARD
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
