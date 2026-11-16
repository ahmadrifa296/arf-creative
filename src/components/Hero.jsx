import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { SparkleStar, Icon3DModernDev, Icon3DProjectFocused, Icon3DResponsive, Icon3DTechSupport } from './Icons';

export default function Hero() {
  const featureBadges = [
    {
      title: "MODERN DEVELOPMENT",
      desc: "React, Tailwind & Laravel",
      icon: Icon3DModernDev,
      glow: "hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]"
    },
    {
      title: "PROJECT FOCUSED",
      desc: "Bimbingan Mahasiswa & UMKM",
      icon: Icon3DProjectFocused,
      glow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]"
    },
    {
      title: "RESPONSIVE DESIGN",
      desc: "Optimal di Ponsel & Desktop",
      icon: Icon3DResponsive,
      glow: "hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]"
    },
    {
      title: "TECHNICAL SUPPORT",
      desc: "Debugging & Panduan Kode",
      icon: Icon3DTechSupport,
      glow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]"
    }
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#071330] pt-20 pb-12 px-4 sm:px-8"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(56, 189, 248, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(56, 189, 248, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }}
    >
      {/* Ambient Purple Lighting Blobs (Full-Bleed Viewport Edges) */}
      <div className="absolute top-12 right-0 sm:right-10 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-[#581C87]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 sm:left-6 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-[#4C1D95]/35 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-[#3B0764]/30 blur-2xl pointer-events-none" />

      {/* Decorative Sparkle 4-point Stars (✦) */}
      <SparkleStar className="absolute top-24 sm:top-28 right-8 sm:right-28 lg:right-36 w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.85)] pointer-events-none" />
      <SparkleStar className="absolute top-1/2 left-6 sm:left-16 lg:left-24 w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.75)] pointer-events-none" />
      <SparkleStar className="absolute bottom-24 sm:bottom-28 right-8 sm:right-20 lg:right-32 w-5 h-5 sm:w-7 sm:h-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] pointer-events-none" />

      {/* Center Content Column (Edge-to-Edge Responsive Container) */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto py-8 sm:py-12 my-auto w-full">

        {/* Center Circular Logo Badge */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 sm:border-[3px] border-white bg-[#071330] flex flex-col items-center justify-center shadow-2xl shadow-blue-950/80 transition-transform hover:scale-105 duration-300">
          <span className="text-3xl sm:text-4xl font-black text-white tracking-wider leading-none">
            ARF
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#CBD5E1] tracking-wider mt-1.5 leading-none">
            creative
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase mt-6 sm:mt-8">
          ARF CREATIVE
        </h1>

        {/* Description Text */}
        <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed max-w-2xl mt-4 sm:mt-6 px-2 drop-shadow-sm">
          {siteConfig.heroDescription}
        </p>

        {/* 4 Feature Badges Strip (Mobile: Horizontal Swipe / Desktop: 4 Columns Full Width) */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full mt-8 sm:mt-10 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none no-scrollbar pb-3 sm:pb-0 pt-1 -mx-4 sm:mx-0 px-4 sm:px-0">
          {featureBadges.map((badge, idx) => {
            const IconComp = badge.icon;
            return (
              <div
                key={idx}
                className={`w-[78vw] max-w-[285px] sm:w-full sm:max-w-none shrink-0 sm:shrink snap-start flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#081329]/95 border border-white/10 hover:border-white/25 ${badge.glow} transition-all duration-300 shadow-xl text-left group hover:-translate-y-0.5`}
              >
                <div className="shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                  <IconComp className="w-11 h-11 drop-shadow-md" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white tracking-wider uppercase">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] text-[#94A3B8] font-medium mt-0.5 leading-snug">
                    {badge.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Horizontal Swipe Indicator */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 text-[10px] font-mono text-[#38BDF8]/70 mt-1">
          <span>&larr; Geser menyamping &rarr;</span>
        </div>

        {/* Bottom Handle */}
        <a
          href={siteConfig.contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs sm:text-sm font-bold text-white/80 hover:text-white transition-colors tracking-widest mt-8 sm:mt-10 inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full hover:bg-white/10"
          title="Kunjungi Instagram @arf_.creative"
        >
          <span>{siteConfig.handle.replace('@', '')}</span>
        </a>

      </div>
    </section>
  );
}
