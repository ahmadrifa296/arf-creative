import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { MessageSquare, ArrowRight, Code, ShieldCheck, Terminal, Sparkles, CheckCircle2, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#2563EB]/20 via-[#22D3EE]/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1220] border border-[#22D3EE]/30 backdrop-blur-md shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider text-[#22D3EE] uppercase">
                {siteConfig.positioning}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              BUILD YOUR PROJECT.<br />
              <span className="text-gradient-blue bg-clip-text text-transparent">
                WE MAKE IT DIGITAL.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl font-normal leading-relaxed">
              {siteConfig.subtagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-[#2563EB] to-[#22D3EE] hover:from-[#1D4ED8] hover:to-[#06B6D4] shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Mulai Konsultasi</span>
                <ArrowRight className="w-4 h-4 text-white/80" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#F8FAFC] bg-[#0F172A] hover:bg-[#1E293B] border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300"
              >
                <span>Lihat Portfolio</span>
              </a>
            </div>

            {/* Small Trust Text */}
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-[#94A3B8]">
              <ShieldCheck className="w-4 h-4 text-[#22D3EE] shrink-0" />
              <span>{siteConfig.trustText}</span>
            </div>

          </div>

          {/* Right Column: Premium Interactive Mockup Dashboard Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card Glass Container */}
              <div className="relative rounded-2xl bg-[#0F172A]/90 border border-white/10 shadow-2xl backdrop-blur-xl p-4 sm:p-5 overflow-hidden group">
                
                {/* Visual Header / Browser Toolbar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                  </div>
                  <div className="px-3 py-1 rounded-md bg-[#050B14] border border-white/10 text-[11px] text-[#94A3B8] font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse"></span>
                    <span>distech.dev/project-preview</span>
                  </div>
                  <Terminal className="w-4 h-4 text-[#94A3B8]" />
                </div>

                {/* Dashboard Screen Mockup Content */}
                <div className="space-y-4 font-sans">
                  
                  {/* Visual Top Bar / Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[#050B14]/80 border border-white/5 space-y-1">
                      <div className="text-[10px] text-[#94A3B8] uppercase font-semibold">Web Performance</div>
                      <div className="text-xl font-bold text-white flex items-center justify-between">
                        <span>99.8%</span>
                        <span className="text-xs text-[#22D3EE] font-mono">100/100</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#050B14]/80 border border-white/5 space-y-1">
                      <div className="text-[10px] text-[#94A3B8] uppercase font-semibold">Code Status</div>
                      <div className="text-xl font-bold text-[#22D3EE] flex items-center justify-between">
                        <span>Clean</span>
                        <CheckCircle2 className="w-4 h-4 text-[#22D3EE]" />
                      </div>
                    </div>
                  </div>

                  {/* Visual Code Editor Box */}
                  <div className="rounded-xl bg-[#050B14] p-3.5 border border-white/10 font-mono text-[11px] leading-relaxed text-[#94A3B8] relative overflow-hidden">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[10px] text-[#64748B]">
                      <span>App.jsx — DisTech Architecture</span>
                      <span className="text-[#22D3EE]">Vite + React</span>
                    </div>
                    <p className="text-purple-400">import <span className="text-white">React</span> from <span className="text-emerald-400">'react'</span>;</p>
                    <p className="text-blue-400">const <span className="text-yellow-300">WebProject</span> = () =&gt; &#123;</p>
                    <p className="pl-4 text-emerald-400">return &lt;<span className="text-blue-400">StudentProject</span> status=<span className="text-cyan-300">"Modern & Fast"</span> /&gt;</p>
                    <p className="text-blue-400">&#125;;</p>
                  </div>

                  {/* Visual Feature Tag Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/20 border border-[#2563EB]/40 text-[#60A5FA] text-[11px] font-semibold">
                      ✓ Responsive Layout
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#22D3EE]/20 border border-[#22D3EE]/40 text-[#22D3EE] text-[11px] font-semibold">
                      ✓ Bug Free
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#0F172A] border border-white/10 text-[#94A3B8] text-[11px] font-semibold">
                      ✓ Ready Deploy Vercel
                    </span>
                  </div>

                </div>

                {/* Floating Animated UI Card 1 (Bottom Left) */}
                <div className="absolute -bottom-3 -left-3 sm:-left-6 bg-[#0A1220]/95 border border-[#22D3EE]/40 rounded-xl p-3 shadow-xl backdrop-blur-md animate-float flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#22D3EE]/20 border border-[#22D3EE]/50 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-[#22D3EE]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Project Ready</div>
                    <div className="text-[10px] text-[#94A3B8]">Hasil Rapih & Sesuai Spec</div>
                  </div>
                </div>

                {/* Floating Animated UI Card 2 (Top Right) */}
                <div className="absolute -top-3 -right-3 sm:-right-6 bg-[#0A1220]/95 border border-[#2563EB]/40 rounded-xl p-3 shadow-xl backdrop-blur-md animate-float-delayed flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/50 flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4 text-[#60A5FA]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Full Assistance</div>
                    <div className="text-[10px] text-[#94A3B8]">Pendampingan Mahasiswa</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
