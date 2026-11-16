import React from 'react';

export default function ExperienceSoftware() {
  const techStack = [
    { name: 'React 18', label: 'React', bg: 'bg-[#087ea4]', text: 'text-white' },
    { name: 'Tailwind CSS', label: 'Tailwind', bg: 'bg-[#06b6d4]', text: 'text-white' },
    { name: 'JavaScript', label: 'JS', bg: 'bg-[#f7df1e]', text: 'text-black font-black' },
    { name: 'Vite', label: 'Vite', bg: 'bg-[#646cff]', text: 'text-white' },
    { name: 'HTML5/CSS3', label: 'HTML', bg: 'bg-[#e34f26]', text: 'text-white' },
    { name: 'Vercel Static', label: 'Vercel', bg: 'bg-black', text: 'text-white' },
  ];

  return (
    <section id="layanan" className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two Sections Side by Side matching the Reference Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Block: LAYANAN & SPESIALISASI KAMI (Mapped from MY EXPERIENCE) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1E3A8A]/40 via-[#0F172A]/50 to-[#050B17]/80 border border-blue-500/30 backdrop-blur-md shadow-2xl relative overflow-hidden">
            
            {/* Pill Badge on Top */}
            <div className="inline-block px-5 py-1.5 rounded-full border border-white/30 bg-white/10 text-white text-xs font-extrabold uppercase tracking-wider mb-6">
              LAYANAN &amp; SPESIALISASI KAMI
            </div>

            {/* 2 Columns Bulleted List matching reference structure */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
              
              {/* Column 1 */}
              <div className="space-y-4">
                <div>
                  <div className="font-extrabold text-white text-sm sm:text-base flex items-center gap-1.5">
                    <span className="text-[#38BDF8]">•</span> Website Development
                  </div>
                  <div className="text-[#94A3B8] text-xs pl-3.5 mt-0.5 leading-relaxed">
                    Pembuatan website modern, responsif, dan siap rilis ke Vercel tanpa dependensi backend yang berat.
                  </div>
                </div>

                <div>
                  <div className="font-extrabold text-white text-sm sm:text-base flex items-center gap-1.5">
                    <span className="text-[#38BDF8]">•</span> Feature &amp; CRUD Development
                  </div>
                  <div className="text-[#94A3B8] text-xs pl-3.5 mt-0.5 leading-relaxed">
                    Implementasi fitur web seperti dashboard, autentikasi, filter data, form dinamis, dan integrasi API.
                  </div>
                </div>

                <div>
                  <div className="font-extrabold text-white text-sm sm:text-base flex items-center gap-1.5">
                    <span className="text-[#38BDF8]">•</span> UI/UX Interface Design
                  </div>
                  <div className="text-[#94A3B8] text-xs pl-3.5 mt-0.5 leading-relaxed">
                    Perancangan antarmuka visual yang estetik, ramah mata, berkarakter kuat, dan optimal di ponsel.
                  </div>
                </div>

                <div>
                  <div className="font-extrabold text-white text-sm sm:text-base flex items-center gap-1.5">
                    <span className="text-[#38BDF8]">•</span> Bug Fixing &amp; Troubleshooting
                  </div>
                  <div className="text-[#94A3B8] text-xs pl-3.5 mt-0.5 leading-relaxed">
                    Membantu menemukan dan memperbaiki error kode JavaScript, layout CSS yang berantakan, dan console error.
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <div>
                  <div className="font-extrabold text-white text-sm sm:text-base flex items-center gap-1.5">
                    <span className="text-[#38BDF8]">•</span> E-Commerce &amp; Web Catalog
                  </div>
                  <div className="text-[#94A3B8] text-xs pl-3.5 mt-0.5 leading-relaxed">
                    Etalase produk digital interaktif untuk brand lokal dengan alur direct order WhatsApp tanpa sistem rumit.
                  </div>
                </div>

                <div>
                  <div className="font-extrabold text-white text-sm sm:text-base flex items-center gap-1.5">
                    <span className="text-[#38BDF8]">•</span> Platform Editorial &amp; Opini
                  </div>
                  <div className="text-[#94A3B8] text-xs pl-3.5 mt-0.5 leading-relaxed">
                    Website publikasi artikel mandiri dengan ruang dialog terbuka dan kenyamanan membaca esai panjang.
                  </div>
                </div>

                <div>
                  <div className="font-extrabold text-white text-sm sm:text-base flex items-center gap-1.5">
                    <span className="text-[#38BDF8]">•</span> Pendampingan Projek Mahasiswa
                  </div>
                  <div className="text-[#94A3B8] text-xs pl-3.5 mt-0.5 leading-relaxed">
                    Konsultasi struktur arsitektur web, persiapan sidang, dan bimbingan teknis pengerjaan tugas akhir.
                  </div>
                </div>

                <div>
                  <div className="font-extrabold text-white text-sm sm:text-base flex items-center gap-1.5">
                    <span className="text-[#38BDF8]">•</span> Dokumentasi Teknis Lengkap
                  </div>
                  <div className="text-[#94A3B8] text-xs pl-3.5 mt-0.5 leading-relaxed">
                    Setiap pengerjaan dilengkapi catatan alur kode, struktur folder, dan panduan agar mudah dipelajari.
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Block: TEKNOLOGI & TOOLS (Mapped from SOFTWARE) */}
          <div id="teknologi" className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1E3A8A]/40 via-[#0F172A]/50 to-[#050B17]/80 border border-blue-500/30 backdrop-blur-md shadow-2xl flex flex-col justify-between">
            
            <div>
              {/* Pill Badge */}
              <div className="inline-block px-5 py-1.5 rounded-full border border-white/30 bg-white/10 text-white text-xs font-extrabold uppercase tracking-wider mb-6">
                TEKNOLOGI &amp; TOOLS
              </div>

              {/* App Icon Tiles */}
              <div className="grid grid-cols-2 gap-3.5">
                {techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-black/40 border border-white/15 flex items-center gap-3 hover:border-blue-400/50 transition-colors"
                  >
                    <div className={`w-9 h-9 rounded-xl ${tech.bg} ${tech.text} flex items-center justify-center font-bold text-xs shrink-0 shadow-md`}>
                      {tech.label.slice(0, 2)}
                    </div>
                    <span className="text-xs font-bold text-white tracking-wide truncate">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-[#94A3B8] text-center">
              FOKUS PENGEMBANGAN STATIC WEB
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
