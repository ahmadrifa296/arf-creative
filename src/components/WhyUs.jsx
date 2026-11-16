import React from 'react';

export default function WhyUs() {
  const reasons = [
    {
      number: "01",
      title: "Eksplorasi yang Terarah",
      description: "Setiap antarmuka dirancang berdasarkan kebutuhan nyata dan karakter unik projek, bukan sekadar menyalin template default."
    },
    {
      number: "02",
      title: "Arsip Pembelajaran Terbuka",
      description: "Tantangan teknis dan solusi kode dicatat rapi sehingga menjadi referensi berharga untuk pengembangan berkelanjutan."
    },
    {
      number: "03",
      title: "Responsif & Ringan",
      description: "Memanfaatkan praktik web modern agar website memiliki performa cepat dan nyaman diakses dari ponsel hingga layar desktop."
    },
    {
      number: "04",
      title: "Komunikasi Kolaboratif",
      description: "Setiap langkah dibahas secara transparan, memberikan ruang diskusi terbuka untuk melahirkan ide-ide baru."
    }
  ];

  return (
    <section className="py-20 bg-[#050B14] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
            NILAI &amp; KARAKTER
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kenapa Dokumentasi Projek Itu Penting?
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Menghargai setiap proses adalah kunci menghasilkan karya digital yang fungsional dan berdaya guna.
          </p>
        </div>

        {/* 4 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-300 group flex items-start gap-6"
            >
              {/* Number Badge */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] p-[1px] shrink-0 shadow-lg shadow-blue-500/20 group-hover:shadow-sky-500/40 transition-all">
                <div className="w-full h-full bg-[#050B14] rounded-[15px] flex items-center justify-center font-mono font-extrabold text-xl text-[#38BDF8] group-hover:bg-[#0A1220] transition-colors">
                  {reason.number}
                </div>
              </div>

              {/* Reason Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
