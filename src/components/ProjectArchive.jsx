import React, { useState } from 'react';
import { portfolioData, portfolioCategories } from '../data/portfolioData';
import { ExternalLink, X, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { IconGithub } from './Icons';

export default function ProjectArchive() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const filteredProjects = activeCategory === "Semua"
    ? portfolioData
    : portfolioData.filter(p => p.categories.includes(activeCategory));

  const renderVisualArtifact = (type) => {
    switch (type) {
      case 'aksara-dialogue':
        return (
          <div className="w-full h-64 bg-[#05080E] border border-white/10 rounded-xl p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono text-[#94A3B8]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400/80"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-400/80"></span>
                <span className="w-2 h-2 rounded-full bg-green-400/80"></span>
                <span className="ml-2 text-white font-sans font-bold">Aksara Dialogue</span>
              </div>
              <span className="text-[#38BDF8]">aksaradialogue.com</span>
            </div>

            <div className="grid grid-cols-12 gap-3 my-auto">
              <div className="col-span-8 p-3 rounded-lg bg-[#0A111E] border border-white/5 space-y-2">
                <div className="text-[9px] font-mono text-[#F97316] font-bold uppercase tracking-wider">RUANG DIALOG PUBLIK</div>
                <div className="text-sm font-extrabold text-white leading-tight">SUARA PUBLIK, RUANG DIALOG.</div>
                <div className="space-y-1 pt-1">
                  <div className="h-2 w-full bg-white/20 rounded"></div>
                  <div className="h-2 w-4/5 bg-white/10 rounded"></div>
                  <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                </div>
              </div>
              <div className="col-span-4 p-3 rounded-lg bg-[#0F1C33] border border-white/10 flex flex-col justify-between">
                <div className="text-[9px] font-bold text-[#38BDF8]">ARSIP OPINI</div>
                <div className="text-[10px] text-white/80 font-medium">Esai &amp; Wawancara Terbuka</div>
                <div className="py-1 px-1.5 rounded bg-[#38BDF8]/10 text-[8px] font-mono text-[#38BDF8] text-center">
                  Editorial Layout
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#94A3B8] pt-2 border-t border-white/5">
              <span>Platform Web Editorial</span>
              <span className="text-[#38BDF8]">Dokumentasi Lengkap</span>
            </div>
          </div>
        );

      case 'bdg-boys-merch':
        return (
          <div className="w-full h-64 bg-[#05080E] border border-white/10 rounded-xl p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono text-[#94A3B8]">
              <span className="text-white font-bold font-sans">BDG Boys Merch</span>
              <span className="text-[#FBBF24]">bdgboysmerch.id</span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-auto">
              <div className="p-3 rounded-lg bg-[#0A111E] border border-white/10 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-md bg-[#131F33] border border-white/10 flex items-center justify-center mb-2">
                  <span className="text-xs font-black text-white">BDG BOYS</span>
                </div>
                <div className="text-xs font-bold text-white">Streetwear Series 01</div>
                <div className="text-[10px] font-mono text-[#FBBF24]">Limited Edition</div>
              </div>

              <div className="p-3 rounded-lg bg-[#080E1A] border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="text-[9px] font-mono text-[#38BDF8] uppercase font-bold">PRODUK LOKAL</div>
                  <div className="text-xs font-bold text-white leading-tight mt-1">Apparel &amp; Streetwear Merchandise</div>
                </div>
                <div className="py-1.5 px-2 rounded bg-emerald-500/20 border border-emerald-500/30 text-[9px] text-emerald-300 font-bold text-center">
                  Direct Order WhatsApp
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#94A3B8] pt-2 border-t border-white/5">
              <span>Katalog Digital &amp; E-Commerce</span>
              <span className="text-[#FBBF24]">Streetwear Brand</span>
            </div>
          </div>
        );

      case 'learning-process':
        return (
          <div className="w-full h-64 bg-[#05080E] border border-white/10 rounded-xl p-4 flex flex-col justify-between overflow-hidden font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] text-[#94A3B8]">
              <span>projek-pertama/workspace.js</span>
              <span className="text-[#38BDF8]">Fondasi Web</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#020509] border border-white/10 text-[#94A3B8] space-y-1.5 my-auto">
              <div><span className="text-purple-400">const</span> <span className="text-white">learningLog</span> = &#123;</div>
              <div className="pl-4 text-emerald-400">// Langkah awal mempelajari web modern</div>
              <div className="pl-4">milestone: <span className="text-yellow-300">'HTML Semantik, CSS Grid, DOM JS'</span>,</div>
              <div className="pl-4">status: <span className="text-[#38BDF8]">'Terdokumentasi Rapi'</span></div>
              <div>&#125;;</div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#94A3B8] pt-2 border-t border-white/5">
              <span>Catatan Eksplorasi Kode</span>
              <span className="text-[#38BDF8]">Arsip Belajar</span>
            </div>
          </div>
        );

      case 'arf-showcase':
      default:
        return (
          <div className="w-full h-64 bg-[#05080E] border border-white/10 rounded-xl p-4 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono text-[#94A3B8]">
              <span className="text-white font-bold font-sans">ARF Creative Hub</span>
              <span className="text-[#38BDF8]">arf-creative.vercel.app</span>
            </div>

            <div className="p-4 my-auto rounded-lg bg-[#0A111E] border border-white/10 text-center space-y-2">
              <div className="text-sm font-black text-white tracking-wide">ARF CREATIVE DIGITAL SPACE</div>
              <div className="text-xs text-[#94A3B8]">Creative space &amp; process. Let's collaborate.</div>
              <div className="flex justify-center gap-1.5 pt-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]"></span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#94A3B8] pt-2 border-t border-white/5">
              <span>Static Site Architecture</span>
              <span className="text-[#38BDF8]">Deploy Vercel</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="arsip" className="py-24 bg-[#060B13] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase mb-2">
              ARSIP DOKUMENTASI PROJEK
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Karya, Eksplorasi, &amp; Catatan Proses.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter Arsip Projek">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#38BDF8] text-[#060B13]'
                    : 'bg-[#0B1320] text-[#94A3B8] hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Exhibition List */}
        <div className="space-y-16">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="p-6 sm:p-10 rounded-2xl bg-[#0B1320] border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Visual Preview Mockup */}
                <div className="lg:col-span-6 space-y-4">
                  {renderVisualArtifact(project.visualType)}

                  {/* External Links Bar */}
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-[#060B13] hover:bg-white/10 border border-white/10 transition-colors min-h-[44px]"
                      aria-label={`Lihat repositori GitHub ${project.title}`}
                    >
                      <IconGithub className="w-4 h-4 text-[#38BDF8]" />
                      <span>Repositori GitHub</span>
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#38BDF8] bg-[#38BDF8]/10 hover:bg-[#38BDF8]/20 border border-[#38BDF8]/20 transition-colors min-h-[44px]"
                        aria-label={`Buka live demo ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Preview</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Documentation Information */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#94A3B8] pb-4 border-b border-white/5">
                    <span className="text-[#38BDF8] font-bold">
                      PROJEK {project.index} / {project.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-white">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-[#FBBF24] mt-1 font-semibold uppercase tracking-wider">
                      {project.tagline}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Structured Problem & Solution Case Study */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-[#060B13] border border-white/5 space-y-1">
                      <div className="text-[10px] font-mono text-[#38BDF8] uppercase font-bold">TANTANGAN &amp; LATAR BELAKANG</div>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">{project.problem}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#060B13] border border-white/5 space-y-1">
                      <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold">SOLUSI &amp; PENDEKATAN</div>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech Badges & Detail Trigger */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#060B13] text-white/80 border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#38BDF8] hover:text-white transition-colors"
                    >
                      <span>Buka Catatan Teknis</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Case Study Full Modal */}
      {selectedCaseStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <div className="relative w-full max-w-2xl bg-[#0B1320] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 overflow-y-auto max-h-[90vh]">
            
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#38BDF8]">
                  DOKUMENTASI TEKNIS #{selectedCaseStudy.index}
                </span>
                <h3 id="case-study-title" className="text-2xl font-extrabold text-white mt-1">
                  {selectedCaseStudy.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 rounded-lg bg-[#060B13] border border-white/10 text-[#94A3B8] hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Tutup jendela dokumentasi"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-[#94A3B8] uppercase">Peran &amp; Tanggung Jawab</div>
              <p className="text-sm font-semibold text-white">{selectedCaseStudy.role}</p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-[#94A3B8] uppercase">Ikhtisar Masalah</div>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{selectedCaseStudy.problem}</p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-[#94A3B8] uppercase">Implementasi Solusi</div>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{selectedCaseStudy.solution}</p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-[#94A3B8] uppercase">Teknologi Terpasang</div>
              <div className="flex flex-wrap gap-2 pt-1">
                {selectedCaseStudy.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded bg-[#060B13] border border-white/10 text-xs font-mono text-[#38BDF8]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={selectedCaseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#38BDF8] transition-colors"
              >
                <IconGithub className="w-4 h-4" />
                <span>Buka Kode di GitHub</span>
              </a>

              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
