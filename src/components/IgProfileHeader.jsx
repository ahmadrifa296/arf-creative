import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { storyHighlights } from '../data/portfolioData';
import { MessageSquare, Copy, Check, Plus, FolderGit2, Sparkles, BookOpen, ShoppingBag, Code } from 'lucide-react';
import { IconInstagram } from './Icons';

export default function IgProfileHeader({ activeFilter, onSelectFilter }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(siteConfig.contact.instagramUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightIcons = {
    Grid: FolderGit2,
    BookOpen: BookOpen,
    ShoppingBag: ShoppingBag,
    Code: Code,
    Sparkles: Sparkles
  };

  return (
    <section className="pt-6 pb-4 border-b border-white/10 bg-[#060B13]">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Top Profile Header: Avatar & Counts */}
        <div className="flex items-center gap-6 sm:gap-10 pb-5">
          
          {/* Avatar with Circular Spark Badge & Plus Icon */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2px] bg-gradient-to-tr from-[#38BDF8] via-[#2563EB] to-[#F59E0B]">
              <div className="w-full h-full rounded-full bg-[#071124] border-2 border-[#060B13] flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="16" y="74" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" fontSize="36" letterSpacing="1">ARF</text>
                  <line x1="88" y1="40" x2="98" y2="30" stroke="#38BDF8" strokeWidth="4.5" strokeLinecap="round" />
                  <line x1="92" y1="48" x2="105" y2="45" stroke="#FBBF24" strokeWidth="4.5" strokeLinecap="round" />
                  <line x1="90" y1="56" x2="101" y2="62" stroke="#F97316" strokeWidth="4.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            {/* Blue Plus Badge */}
            <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#2563EB] border-2 border-[#060B13] flex items-center justify-center text-white">
              <Plus className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Counts Row: 6 postingan, 10 pengikut, 19 mengikuti */}
          <div className="flex-1 flex items-center justify-around text-center">
            <div className="space-y-0.5">
              <div className="text-base sm:text-xl font-extrabold text-white font-sans">6</div>
              <div className="text-xs text-[#94A3B8]">postingan</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-base sm:text-xl font-extrabold text-white font-sans">10</div>
              <div className="text-xs text-[#94A3B8]">pengikut</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-base sm:text-xl font-extrabold text-white font-sans">19</div>
              <div className="text-xs text-[#94A3B8]">mengikuti</div>
            </div>
          </div>

        </div>

        {/* Bio Text */}
        <div className="space-y-1.5 pb-5">
          <div className="flex items-center gap-2">
            <h1 className="font-extrabold text-sm sm:text-base text-white">
              arf_.creative
            </h1>
            <span className="text-xs font-mono text-[#94A3B8]">his</span>
          </div>

          <div className="text-xs sm:text-sm text-[#E2E8F0] space-y-0.5 leading-snug">
            <p>Creative space &amp; process.</p>
            <p>Let's collaborate.</p>
          </div>

          <p className="text-xs text-[#38BDF8] pt-0.5">
            Fokus: Dokumentasi &amp; Rancang Bangun Website
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pb-6">
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold text-[#060B13] bg-[#38BDF8] hover:bg-white transition-colors min-h-[44px]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Mulai Kolaborasi</span>
          </a>

          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0B1320] hover:bg-white/10 border border-white/10 transition-colors min-h-[44px]"
          >
            <IconInstagram className="w-4 h-4 text-[#E1306C]" />
            <span>DM Instagram</span>
          </a>

          <button
            onClick={handleCopyLink}
            className="col-span-2 sm:col-span-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#94A3B8] hover:text-white bg-[#0B1320] hover:bg-white/10 border border-white/10 transition-colors min-h-[44px]"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Tautan Disalin!' : 'Bagikan Profil'}</span>
          </button>
        </div>

        {/* Story Highlights Bar */}
        <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-none" aria-label="Sorotan Projek">
          {storyHighlights.map((hl) => {
            const IconComp = highlightIcons[hl.icon] || FolderGit2;
            const isSelected = activeFilter === hl.id;

            return (
              <button
                key={hl.id}
                onClick={() => onSelectFilter(hl.id)}
                className="flex flex-col items-center gap-1.5 shrink-0 group focus:outline-none"
              >
                <div className={`w-14 h-14 rounded-full p-[2px] transition-all ${
                  isSelected 
                    ? 'bg-gradient-to-tr from-[#38BDF8] to-[#2563EB] ring-2 ring-[#38BDF8]/50'
                    : 'bg-white/10 group-hover:bg-white/20'
                }`}>
                  <div className="w-full h-full rounded-full bg-[#071123] border-2 border-[#060B13] flex items-center justify-center text-white">
                    <IconComp className={`w-5 h-5 ${isSelected ? 'text-[#38BDF8]' : 'text-[#94A3B8] group-hover:text-white'}`} />
                  </div>
                </div>
                <span className={`text-[11px] font-medium max-w-[70px] truncate text-center ${
                  isSelected ? 'text-[#38BDF8] font-bold' : 'text-[#94A3B8]'
                }`}>
                  {hl.label}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
