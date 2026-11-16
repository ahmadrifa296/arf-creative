import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { MessageSquare, Share2, ExternalLink } from 'lucide-react';
import { ArfLogo, IconInstagram } from './Icons';

export default function IgNavbar() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'ARF Creative : Creative Space & Process',
        text: 'Dokumentasi projek website dan karya digital oleh @arf_.creative',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Tautan website ARF Creative berhasil disalin!');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#060B13]/95 backdrop-blur-md border-b border-white/10 py-3">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        
        {/* Brand Username */}
        <div className="flex items-center gap-2.5">
          <ArfLogo className="w-8 h-8" />
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-base tracking-tight text-white font-sans">
              arf_.creative
            </span>
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" title="Verified Creative Space"></span>
          </div>
        </div>

        {/* Action icons right */}
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#0B1320] border border-white/10 text-[#94A3B8] hover:text-white transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
            title="Kunjungi Instagram Resmi @arf_.creative"
            aria-label="Instagram Resmi"
          >
            <IconInstagram className="w-4 h-4 text-[#E1306C]" />
          </a>

          <button
            onClick={handleShare}
            className="p-2 rounded-lg bg-[#0B1320] border border-white/10 text-[#94A3B8] hover:text-white transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
            title="Bagikan Tautan Profil"
            aria-label="Bagikan Profil"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#060B13] bg-[#38BDF8] hover:bg-white transition-colors min-h-[40px]"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Kolaborasi</span>
          </a>
        </div>

      </div>
    </header>
  );
}
