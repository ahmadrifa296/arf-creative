import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { IconInstagram, IconWhatsapp } from './Icons';

export default function CompanyIntro() {
  return (
    <section id="tentang" className="py-10 space-y-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* 1. Service Category Cards (matching bdgnomerch 2-col Category Cards) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg sm:text-2xl font-black text-white uppercase tracking-tight">
                Layanan &amp; Fokus Studio
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-0.5">
                Pilih solusi pembuatan website atau bimbingan dokumentasi projek.
              </p>
            </div>
            <a
              href="#projek"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#38BDF8] hover:text-white transition-colors"
            >
              <span>Lihat Arsip Projek</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Category Cards (Mobile: Horizontal Swipe / Desktop: Wide 2 Columns) */}
          <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar pb-3 md:pb-0 pt-1 -mx-4 md:mx-0 px-4 md:px-0">

            {/* Category Card 1 */}
            <div className="w-[85vw] sm:w-[380px] md:w-full max-w-[380px] md:max-w-none shrink-0 md:shrink snap-start group p-6 sm:p-7 rounded-2xl bg-[#091530] border border-white/10 hover:border-[#38BDF8]/40 transition-all flex flex-col justify-between space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-[#0284C7]/20 border border-[#38BDF8]/30 text-[#38BDF8]">
                  WEBSITE DEVELOPMENT
                </span>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <h4 className="text-lg font-black text-white tracking-tight">
                  Website Modern &amp; Responsif
                </h4>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mt-1.5">
                  Pembuatan website modern yang cepat, elegan, ramah layar ponsel, serta pengembangan aplikasi web dinamis dengan React, Tailwind CSS, maupun Laravel.
                </p>
              </div>
            </div>

            {/* Category Card 2 */}
            <div className="w-[85vw] sm:w-[380px] md:w-full max-w-[380px] md:max-w-none shrink-0 md:shrink snap-start group p-6 sm:p-7 rounded-2xl bg-[#091530] border border-white/10 hover:border-[#38BDF8]/40 transition-all flex flex-col justify-between space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-[#4F46E5]/20 border border-[#818CF8]/30 text-[#818CF8]">
                  ARSIP &amp; DOKUMENTASI
                </span>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <h4 className="text-lg font-black text-white tracking-tight">
                  Dokumentasi &amp; Bimbingan Projek
                </h4>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mt-1.5">
                  Pendampingan teknis struktur kode, pemecahan kendala error (debugging), serta penyusunan catatan alur teknis untuk tugas akhir atau portfolio.
                </p>
              </div>
            </div>

          </div>

          {/* Mobile Horizontal Swipe Indicator */}
          <div className="md:hidden flex items-center justify-center gap-1.5 text-[10px] font-mono text-[#38BDF8]/70 mt-1">
            <span>&larr; Geser menyamping &rarr;</span>
          </div>
        </div>

        {/* 3. Feature Split Section (matching bdgnomerch "Standar Garmen Distro" layout) */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#081329] border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Narrative & Quality Checks */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  STANDAR KUALITAS ARF CREATIVE
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Kami memastikan setiap projek website dibangun dengan struktur yang jelas, performa tinggi, dan mudah dipelajari kembali tanpa dependensi rumit.
                </p>
              </div>

              {/* Checklist items with icons */}
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white">Antarmuka UI/UX Responsif:</strong>
                    <span className="text-[#94A3B8] ml-1">Teruji rapi dan nyaman diakses di smartphone, tablet, serta layar desktop tanpa elemen terpotong.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white">Arsitektur Kode &amp; Framework Fleksibel:</strong>
                    <span className="text-[#94A3B8] ml-1">Keahlian frontend modern (React 18, Tailwind CSS) hingga backend dinamis Laravel yang terstruktur dan aman.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white">Dokumentasi Teknis Siap Presentasi:</strong>
                    <span className="text-[#94A3B8] ml-1">Dilengkapi catatan struktur alur kerja sehingga memudahkan pemaparan ke dosen penguji maupun klien.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#10B981] hover:bg-[#059669] shadow-lg shadow-emerald-950/40 transition-colors min-h-[40px]"
                >
                  <IconWhatsapp className="w-4 h-4" />
                  <span>Konsultasi Projek via WA</span>
                </a>

                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#0D1C3D] hover:bg-white/10 border border-white/15 transition-colors min-h-[40px]"
                >
                  <IconInstagram className="w-4 h-4 text-[#E1306C]" />
                  <span>Instagram @arf_.creative</span>
                </a>
              </div>

            </div>

            {/* Right Column: Featured Image / Brand Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-[#061026] border border-white/15 shadow-2xl aspect-[4/3] flex items-center justify-center p-6 group">
                <div className="absolute inset-0 bg-radial from-[#2563EB]/20 via-transparent to-transparent pointer-events-none" />
                <div className="text-center space-y-3 z-10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full border-2 border-white/80 bg-[#071330] flex flex-col items-center justify-center shadow-2xl">
                    <span className="text-xl sm:text-2xl font-black text-white leading-none">ARF</span>
                    <span className="text-[10px] text-[#94A3B8] font-semibold mt-0.5">creative</span>
                  </div>
                  <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    Creative Space &amp; Process
                  </div>
                  <p className="text-[11px] text-[#94A3B8] max-w-xs mx-auto">
                    Dokumentasi otentik proses perancangan website dan karya digital.
                  </p>
                </div>
                <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px] font-mono text-white/80">
                  <span>Authentic Matchday &amp; Code</span>
                  <span className="text-[#38BDF8]">Ciamis</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
