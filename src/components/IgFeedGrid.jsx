import React from 'react';
import { Eye, Heart, MessageCircle } from 'lucide-react';

export default function IgFeedGrid({ posts, onSelectPost }) {
  const renderCardVisual = (post) => {
    switch (post.id) {
      case 'post-hello-words':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5 relative select-none">
            {/* Top Left Tag */}
            <div className="text-[11px] sm:text-xs font-black tracking-wider text-white">
              ARF
            </div>

            {/* Center Content: Hello Words! + Arrow */}
            <div className="my-auto text-center space-y-3">
              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                Hello Words!
              </h3>
              {/* Bold curved arrow */}
              <div className="flex justify-center">
                <svg className="w-10 h-10 sm:w-14 sm:h-14 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20 C 16 48, 38 48, 48 36" />
                  <polyline points="38 34, 48 36, 44 48" />
                </svg>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#94A3B8] font-mono">
              <Eye className="w-3 h-3 text-[#38BDF8]" />
              <span className="text-white font-bold">{post.views}</span>
              <span className="text-[#64748B]">arf_.creative</span>
            </div>
          </div>
        );

      case 'post-arf-brand':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5 relative select-none">
            <div className="text-[11px] sm:text-xs font-black tracking-wider text-white">
              ARF
            </div>

            {/* Center Big Logo */}
            <div className="my-auto text-center space-y-1">
              <div className="relative inline-block">
                <span className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  ARF
                </span>
                {/* 3 Creative spark rays */}
                <div className="absolute -top-3 -right-5 flex flex-col">
                  <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                    <line x1="2" y1="20" x2="16" y2="6" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="8" y1="24" x2="26" y2="16" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
                    <line x1="6" y1="28" x2="22" y2="28" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="text-xs sm:text-base font-semibold text-white/90 tracking-wide">
                Creative
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#94A3B8] font-mono">
              <Eye className="w-3 h-3 text-[#38BDF8]" />
              <span className="text-white font-bold">{post.views}</span>
              <span className="text-[#64748B]">arf_.creative</span>
            </div>
          </div>
        );

      case 'post-lets-create':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5 relative select-none">
            <div className="text-[11px] sm:text-xs font-black tracking-wider text-white">
              ARF
            </div>

            {/* Center Content: let's Create! with us */}
            <div className="my-auto text-center space-y-1">
              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                let's Create!
              </h3>
              <p className="text-xs sm:text-base italic font-serif text-white/80">
                with us
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#94A3B8] font-mono">
              <Eye className="w-3 h-3 text-[#38BDF8]" />
              <span className="text-white font-bold">{post.views}</span>
              <span className="text-[#64748B]">arf_.creative</span>
            </div>
          </div>
        );

      case 'post-aksara-dialogue':
        return (
          <div className="w-full h-full flex flex-col justify-between p-3 sm:p-4 relative select-none overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-black tracking-wider text-white">ARF</span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-[#38BDF8]">WEB</span>
            </div>

            {/* Title Header */}
            <div className="text-center pt-1 space-y-0.5">
              <div className="text-[8px] sm:text-[9px] font-mono text-[#94A3B8] uppercase tracking-wider">PROJEK</div>
              <div className="text-[11px] sm:text-xs font-extrabold text-white leading-tight">AKSARA DIALOGUE</div>
              <div className="text-[11px] sm:text-xs font-black text-[#FBBF24] tracking-wide">KREATIF</div>
              <div className="text-[8px] sm:text-[9px] text-[#94A3B8]">Dokumentasi Aksara Dialogue</div>
            </div>

            {/* Device Mockup representation (Laptop + Smartphone) */}
            <div className="my-auto relative max-w-[200px] mx-auto w-full pt-1">
              {/* Laptop frame */}
              <div className="w-full rounded-t-md bg-[#020509] border border-white/20 p-1.5 shadow-lg">
                <div className="bg-[#0A1322] rounded p-1 space-y-1">
                  <div className="text-[6px] font-bold text-[#F97316] uppercase">SUARA PUBLIK, RUANG DIALOG.</div>
                  <div className="h-1 w-3/4 bg-white/20 rounded"></div>
                  <div className="h-1 w-1/2 bg-white/10 rounded"></div>
                </div>
              </div>
              <div className="h-1 w-[108%] -ml-[4%] bg-white/20 rounded-b"></div>

              {/* Smartphone overlapping */}
              <div className="absolute -bottom-1 -right-1 w-11 sm:w-14 rounded-md bg-[#020509] border border-white/25 p-0.5 shadow-xl">
                <div className="bg-[#0F1D38] rounded p-0.5 text-[5px] text-white font-bold leading-none">
                  <div className="text-[5px] text-[#38BDF8]">Ruang Dialog</div>
                  <div className="h-0.5 w-full bg-white/30 my-0.5 rounded"></div>
                </div>
              </div>
            </div>

            {/* Bottom Views */}
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#94A3B8] font-mono pt-1">
              <Eye className="w-3 h-3 text-[#38BDF8]" />
              <span className="text-white font-bold">{post.views}</span>
              <span className="text-[#64748B]">arf_.creative</span>
            </div>
          </div>
        );

      case 'post-projek-pertama':
        return (
          <div className="w-full h-full flex flex-col justify-between p-3 sm:p-4 relative select-none overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-black tracking-wider text-white">ARF</span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-emerald-400">LOG</span>
            </div>

            {/* Title Header */}
            <div className="text-center pt-1 space-y-0.5">
              <div className="text-[8px] sm:text-[9px] font-mono text-[#94A3B8] uppercase tracking-wider">PROJEK</div>
              <div className="text-[11px] sm:text-xs font-extrabold text-white leading-tight">PERTAMA</div>
              <div className="text-[11px] sm:text-xs font-black text-[#FBBF24] tracking-wide flex items-center justify-center gap-1">
                <span>✦</span>
                <span>KREATIF</span>
                <span>✦</span>
              </div>
              <div className="text-[8px] sm:text-[9px] text-[#94A3B8]">Dokumentasi &amp; Proses Belajar</div>
            </div>

            {/* 3D Coding workspace visual */}
            <div className="my-auto max-w-[190px] mx-auto w-full p-2 rounded-lg bg-[#040812] border border-white/10 space-y-1 font-mono">
              <div className="flex items-center gap-1 text-[7px] text-[#38BDF8]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>belajar-web.js</span>
              </div>
              <div className="text-[7px] text-white/70 space-y-0.5 leading-none">
                <div className="text-purple-400">&lt;html&gt;</div>
                <div className="pl-1.5 text-blue-300">const dev = 'ARF';</div>
                <div className="pl-1.5 text-yellow-300">render();</div>
              </div>
            </div>

            {/* Bottom Views */}
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#94A3B8] font-mono pt-1">
              <Eye className="w-3 h-3 text-[#38BDF8]" />
              <span className="text-white font-bold">{post.views}</span>
              <span className="text-[#64748B]">arf_.creative</span>
            </div>
          </div>
        );

      case 'post-bdg-boys-merch':
        return (
          <div className="w-full h-full flex flex-col justify-between p-3 sm:p-4 relative select-none overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-black tracking-wider text-white">ARF</span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-[#FBBF24]">STORE</span>
            </div>

            {/* Title Header */}
            <div className="text-center pt-1 space-y-0.5">
              <div className="text-[8px] sm:text-[9px] font-mono text-[#94A3B8] uppercase tracking-wider">PROJEK</div>
              <div className="text-[11px] sm:text-xs font-extrabold text-white leading-tight">BDG BOYS MERCH</div>
              <div className="text-[11px] sm:text-xs font-black text-[#FBBF24] tracking-wide">KREATIF</div>
              <div className="text-[8px] sm:text-[9px] text-[#94A3B8]">Dokumentasi BDG BOYS MERCH</div>
            </div>

            {/* E-commerce apparel mockup representation */}
            <div className="my-auto relative max-w-[200px] mx-auto w-full pt-1 flex items-center justify-between gap-1.5">
              {/* Store Laptop mockup */}
              <div className="flex-1 rounded bg-[#03060D] border border-white/20 p-1">
                <div className="text-[6px] font-bold text-white">BDG STORE</div>
                <div className="h-0.5 w-3/4 bg-white/30 my-0.5"></div>
                <div className="text-[5px] text-[#FBBF24]">Ready Stock</div>
              </div>
              {/* White T-Shirt Graphic representation */}
              <div className="w-12 h-14 rounded bg-white text-black p-1 flex flex-col items-center justify-center shadow-md">
                <span className="text-[6px] font-black tracking-tighter">BDG</span>
                <span className="text-[4px] font-mono">BOYS</span>
              </div>
            </div>

            {/* Bottom Views */}
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#94A3B8] font-mono pt-1">
              <Eye className="w-3 h-3 text-[#38BDF8]" />
              <span className="text-white font-bold">{post.views}</span>
              <span className="text-[#64748B]">arf_.creative</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2">
      {posts.map((post) => (
        <button
          key={post.id}
          onClick={() => onSelectPost(post)}
          className={`aspect-square w-full rounded-md sm:rounded-lg overflow-hidden bg-gradient-to-br ${post.bgGradient} border border-white/10 hover:border-[#38BDF8]/60 transition-all group relative focus:outline-none focus:ring-2 focus:ring-[#38BDF8] text-left`}
          aria-label={`Buka ${post.captionTitle || post.headline}`}
        >
          {/* Authentic Blueprint Grid Texture */}
          <div className="absolute inset-0 editorial-grid opacity-70 pointer-events-none"></div>

          {/* Card Visual Content */}
          <div className="relative z-10 w-full h-full">
            {renderCardVisual(post)}
          </div>

          {/* Interactive Hover / Focus Overlay with Instagram stats */}
          <div className="absolute inset-0 z-20 bg-black/60 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white font-bold text-xs sm:text-sm backdrop-blur-[2px]">
            <div className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 fill-white" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Lihat Detail</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
