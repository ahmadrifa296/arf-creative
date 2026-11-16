import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { MessageSquare, ArrowUpRight, Mail } from 'lucide-react';
import { IconInstagram } from './Icons';

export default function CollabSection() {
  const collabScopes = [
    {
      title: "Rancang Bangun Website Baru",
      desc: "Membangun website dari tahap perumusan konsep visual, wireframing antarmuka, hingga koding siap deploy untuk landing page, editorial, maupun etalase produk."
    },
    {
      title: "Dokumentasi & Perapihan Web",
      desc: "Menelaah website yang sudah ada, memperbaiki tampilan responsif, merapikan struktur file kode, dan menyusun catatan dokumentasi teknisnya."
    },
    {
      title: "Eksplorasi Konsep & Konsultasi",
      desc: "Sesi diskusi terarah untuk mematangkan ide, memilih tumpukan teknologi (tech stack) yang efisien, dan menyusun arsitektur sistem yang tepat."
    }
  ];

  return (
    <section id="kolaborasi" className="py-24 bg-[#0B1320] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Collaboration Offer */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase">
              RUANG KOLABORASI
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Punya Ide Projek? Mari Rancang Bersama.
            </h2>

            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              ARF Creative selalu terbuka untuk berdiskusi dengan mahasiswa, kreator independen, maupun brand lokal. Kami siap membantu mewujudkan konsep Anda menjadi website fungsional dengan proses yang terdokumentasi rapi.
            </p>

            {/* Direct Contact Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-[#060B13] bg-[#38BDF8] hover:bg-white transition-colors min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Diskusi via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-[#060B13] hover:bg-white/10 border border-white/10 transition-colors min-h-[44px]"
              >
                <IconInstagram className="w-4 h-4 text-[#E1306C]" />
                <span>DM Instagram @arf_.creative</span>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
              <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Email:</span>
              <a href={siteConfig.contact.emailUrl} className="text-white hover:text-[#38BDF8] underline underline-offset-4">
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          {/* Right Column: Scopes of Collaboration */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
              BENTUK KOLABORASI YANG BISA KITA LAKUKAN
            </div>

            {collabScopes.map((scope, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-[#060B13] border border-white/10 space-y-2 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white">
                    {scope.title}
                  </h3>
                  <span className="font-mono text-xs text-[#38BDF8]">
                    0{i + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {scope.desc}
                </p>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-[#060B13]/60 border border-white/5 text-xs text-[#94A3B8] leading-relaxed">
              <span className="font-bold text-white">Catatan Transparansi:</span> Estimasi waktu dan lingkup kerja disesuaikan dengan skala spesifik projek yang disepakati bersama sejak awal diskusi.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
