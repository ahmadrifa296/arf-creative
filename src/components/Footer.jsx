import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { ArrowUp } from 'lucide-react';
import { IconGithub, IconInstagram, IconWhatsapp } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-[#040A1C] border-t border-white/10 pt-10 pb-6 text-xs text-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* 4 Columns Footer (matching bdgnomerch.vercel.app footer) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border-2 border-white/80 bg-[#071330] flex flex-col items-center justify-center shrink-0 shadow-md">
                <span className="text-[10px] font-black text-white leading-none">ARF</span>
                <span className="text-[6px] text-[#94A3B8] font-medium leading-none mt-0.5">creative</span>
              </div>
              <div>
                <div className="font-black text-sm text-white tracking-wider uppercase">
                  ARF CREATIVE
                </div>
                <div className="text-[10px] text-[#38BDF8] font-mono">
                  STUDIO DOKUMENTASI WEB
                </div>
              </div>
            </div>

            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              Official creative space &amp; process. Studio pengembangan website modern dan dokumentasi projek digital. Menghadirkan solusi web fungsional dan arsip pembelajaran terstruktur.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                title="Instagram @arf_.creative"
                aria-label="Instagram"
              >
                <IconInstagram className="w-4 h-4 text-[#E1306C]" />
              </a>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                title="WhatsApp Resmi"
                aria-label="WhatsApp"
              >
                <IconWhatsapp className="w-4 h-4 text-emerald-400" />
              </a>

              <a
                href={siteConfig.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                title="GitHub Repositori"
                aria-label="GitHub"
              >
                <IconGithub className="w-4 h-4 text-[#38BDF8]" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigasi Cepat (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              NAVIGASI CEPAT
            </h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">Layanan &amp; Fokus</a>
              </li>
              <li>
                <a href="#projek" className="hover:text-white transition-colors">Dokumentasi Projek</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white transition-colors">Alur &amp; FAQ</a>
              </li>
              <li>
                <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Konsultasi WA</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Koleksi Projek Populer (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              PROJEK POPULER
            </h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li>
                <a href="#detail-aksara-dialogue" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Aksara Dialogue</span>
                  <span className="text-[10px] font-mono text-[#38BDF8]">Editorial</span>
                </a>
              </li>
              <li>
                <a href="#detail-bdg-boys-merch" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>BDG Boys Merch</span>
                  <span className="text-[10px] font-mono text-[#FBBF24]">Streetwear</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio & Layanan (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              STUDIO &amp; LAYANAN
            </h4>
            <div className="space-y-2 text-xs text-[#94A3B8]">
              <p>
                <span className="text-white font-medium">Basis Studio:</span> Kota Ciamis, Indonesia
              </p>
              <p>
                <span className="text-white font-medium">Jam Diskusi:</span> Senin - Sabtu, 09.00 - 21.00 WIB
              </p>
              <p>
                <span className="text-white font-medium">Fokus:</span> Web Laravel, React &amp; Bimbingan Tugas Akhir
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar (matching bdgnomerch bottom bar) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/50">
          <div>
            &copy; 2026 ARF Creative (@arf_.creative). All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981]/30 text-emerald-400 font-bold hover:bg-[#10B981] hover:text-white transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Order via WhatsApp</span>
            </a>

            <a
              href="#hero"
              className="inline-flex items-center gap-1 text-white/70 hover:text-[#38BDF8] transition-colors"
              title="Kembali ke atas"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
