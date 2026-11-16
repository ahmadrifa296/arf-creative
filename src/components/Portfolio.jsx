import React, { useState } from 'react';
import { portfolioData, portfolioCategories } from '../data/portfolioData';
import { ExternalLink, Layers, FolderGit2, X, CheckCircle2 } from 'lucide-react';
import { IconGithub } from './Icons';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === "Semua"
    ? portfolioData
    : portfolioData.filter(proj => proj.categories.includes(selectedCategory));

  // Render high fidelity mockups reflecting the real Instagram posts
  const renderVisualMockup = (type) => {
    switch (type) {
      case 'aksara-dialogue':
        return (
          <div className="w-full h-52 bg-gradient-to-br from-[#0B1528] to-[#040811] p-3 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-[#94A3B8]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
              </div>
              <span className="font-mono text-[#38BDF8]">aksaradialogue.com</span>
              <span className="px-1.5 py-0.5 rounded bg-[#F97316]/20 text-[#FB923C] font-semibold text-[8px]">EDITORIAL</span>
            </div>
            {/* Split Screen Layout (Editorial style) */}
            <div className="grid grid-cols-12 gap-2 my-auto">
              <div className="col-span-8 space-y-1.5 bg-[#070D18]/90 p-2.5 rounded-lg border border-white/5">
                <div className="text-[9px] font-bold text-[#F97316] uppercase tracking-wide">RUANG DIALOG</div>
                <div className="text-[12px] font-extrabold text-white leading-tight">SUARA PUBLIK, RUANG DIALOG.</div>
                <div className="h-1.5 w-3/4 bg-white/20 rounded"></div>
                <div className="h-1.5 w-1/2 bg-white/10 rounded"></div>
              </div>
              <div className="col-span-4 bg-[#0F1D38] rounded-lg p-2 border border-white/10 flex flex-col justify-between">
                <div className="text-[8px] text-[#38BDF8] font-bold">OPINI PUBLIK</div>
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-blue-400/30 rounded"></div>
                  <div className="h-1.5 w-4/5 bg-blue-400/20 rounded"></div>
                </div>
                <div className="text-[7px] text-[#94A3B8]">Esai &amp; Wawancara</div>
              </div>
            </div>
            {/* Tagline footer */}
            <div className="py-1 px-2 rounded bg-white/5 border border-white/5 flex items-center justify-between text-[8px] text-[#94A3B8]">
              <span>Dokumentasi Aksara Dialogue</span>
              <span className="text-[#38BDF8] font-bold">BACA DOKUMEN</span>
            </div>
          </div>
        );

      case 'bdg-boys-merch':
        return (
          <div className="w-full h-52 bg-gradient-to-br from-[#060A12] via-[#0E1726] to-[#040810] p-3 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-[#94A3B8]">
              <span className="font-mono text-[#FBBF24]">bdgboysmerch.id</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[8px]">MERCH STORE</span>
            </div>
            {/* Merch Product Card Visual */}
            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="p-2 rounded-lg bg-[#050B14] border border-white/10 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded bg-gradient-to-b from-[#1E293B] to-[#0F172A] border border-white/10 flex items-center justify-center mb-1">
                  <span className="text-[10px] font-black text-white">BDG</span>
                </div>
                <div className="text-[9px] font-bold text-white">T-Shirt Series 01</div>
                <div className="text-[8px] text-[#FBBF24] font-semibold">Ready Stock</div>
              </div>
              <div className="p-2 rounded-lg bg-[#070E1C] border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="text-[8px] text-[#38BDF8] font-bold uppercase">STREETWEAR APPAREL</div>
                  <div className="text-[10px] font-black text-white leading-tight mt-0.5">BANDUNG BOYS MERCH</div>
                </div>
                <div className="py-1 px-1.5 rounded bg-emerald-500/20 border border-emerald-500/30 text-[8px] text-emerald-300 font-bold text-center">
                  Order via WhatsApp
                </div>
              </div>
            </div>
            {/* Bottom note */}
            <div className="py-1 px-2 rounded bg-white/5 border border-white/5 flex items-center justify-between text-[8px] text-[#94A3B8]">
              <span>Dokumentasi BDG Boys Merch</span>
              <span className="text-[#FBBF24] font-bold">KREATIF</span>
            </div>
          </div>
        );

      case 'learning-process':
        return (
          <div className="w-full h-52 bg-gradient-to-br from-[#050B14] via-[#0A1220] to-[#09152C] p-3 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-[#94A3B8]">
              <span className="font-mono text-[#38BDF8]">workspace/projek-pertama.js</span>
              <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-[#60A5FA] font-bold text-[8px]">BELAJAR KODING</span>
            </div>
            {/* Code syntax visual */}
            <div className="font-mono text-[10px] p-2.5 rounded-lg bg-[#03060C] border border-white/10 text-[#94A3B8] space-y-1">
              <div><span className="text-purple-400">const</span> <span className="text-blue-300">projekKreatif</span> = () =&gt; &#123;</div>
              <div className="pl-3 text-emerald-400">// Langkah awal belajar web modern</div>
              <div className="pl-3"><span className="text-yellow-300">compile</span>(<span className="text-sky-300">'HTML5, CSS3, JS'</span>);</div>
              <div>&#125;;</div>
            </div>
            {/* Bottom note */}
            <div className="py-1 px-2 rounded bg-white/5 border border-white/5 flex items-center justify-between text-[8px] text-[#94A3B8]">
              <span>Dokumentasi &amp; Proses Belajar</span>
              <span className="text-[#38BDF8] font-bold">PONDASI WEB</span>
            </div>
          </div>
        );

      case 'arf-showcase':
      default:
        return (
          <div className="w-full h-52 bg-gradient-to-br from-[#070E1A] via-[#0C1A30] to-[#050B14] p-3 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-[#94A3B8]">
              <span className="font-mono text-[#38BDF8]">arf-creative.vercel.app</span>
              <span className="px-1.5 py-0.5 rounded bg-[#38BDF8]/20 text-[#38BDF8] font-bold text-[8px]">STATIC SITE</span>
            </div>
            <div className="p-3 my-auto rounded-lg bg-[#050B14]/80 border border-white/10 text-center space-y-1">
              <div className="text-xs font-black tracking-wider text-white">ARF CREATIVE SPACE</div>
              <div className="text-[10px] text-[#38BDF8]">Creative space &amp; process. Let's collaborate.</div>
              <div className="pt-1 flex justify-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]"></span>
                <span className="w-2 h-2 rounded-full bg-[#FBBF24]"></span>
                <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>
              </div>
            </div>
            <div className="py-1 px-2 rounded bg-white/5 border border-white/5 flex items-center justify-between text-[8px] text-[#94A3B8]">
              <span>Dokumentasi Showcase Resmi</span>
              <span className="text-[#38BDF8] font-bold">LIVE VERCEL</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projek" className="py-24 bg-[#0A1220] relative overflow-hidden border-t border-white/5">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
            ARSIP DOKUMENTASI PROJEK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Karya &amp; Dokumentasi Projek
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Catatan proses rancang bangun website, implementasi antarmuka, dan dokumentasi teknis yang dikerjakan di ARF Creative.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist" aria-label="Filter Kategori Projek">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 min-h-[44px] ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white shadow-md shadow-blue-500/25'
                  : 'bg-[#050B14] text-[#94A3B8] hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Visual Mockup Container */}
                <div className="relative overflow-hidden border-b border-white/10">
                  {renderVisualMockup(project.visualType)}
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#050B14]/90 text-[#38BDF8] border border-[#38BDF8]/30 backdrop-blur-md">
                      {project.statusBadge}
                    </span>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-[#FBBF24] uppercase tracking-wider">
                      {project.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors mt-0.5">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Documentation Note snippet */}
                  <div className="p-3 rounded-xl bg-[#050B14] border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#38BDF8]">
                      <FolderGit2 className="w-3.5 h-3.5" />
                      <span>Catatan Dokumentasi:</span>
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {project.documentationSummary}
                    </p>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#050B14] text-[#F8FAFC] border border-white/10 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4 pt-4 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/10 hover:bg-[#38BDF8]/20 border border-[#38BDF8]/30 rounded-xl transition-all min-h-[44px]"
                >
                  <FolderGit2 className="w-4 h-4" />
                  <span>Detail Dokumentasi</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white bg-[#050B14] hover:bg-[#1E293B] border border-white/10 hover:border-white/20 rounded-xl transition-all min-h-[44px]"
                    aria-label={`Repositori GitHub ${project.title}`}
                  >
                    <IconGithub className="w-4 h-4 text-[#38BDF8]" />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white bg-[#2563EB]/20 hover:bg-[#2563EB]/30 border border-[#2563EB]/40 rounded-xl transition-all min-h-[44px]"
                      aria-label={`Live Demo ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4 text-[#38BDF8]" />
                      <span className="hidden sm:inline">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Documentation Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div className="relative w-full max-w-2xl bg-[#0F172A] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 overflow-y-auto max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-bold text-[#FBBF24] uppercase tracking-wider">
                  {activeModalProject.subtitle}
                </span>
                <h3 id="modal-project-title" className="text-2xl font-extrabold text-white mt-1">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl bg-[#050B14] border border-white/10 text-[#94A3B8] hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Tutup jendela detail dokumentasi"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider">
                Ringkasan Projek
              </h4>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {activeModalProject.description}
              </p>
            </div>

            {/* Documentation Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider">
                Fokus Proses &amp; Poin Dokumentasi
              </h4>
              <div className="space-y-2">
                {activeModalProject.highlights.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-[#F8FAFC]">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider">
                Teknologi yang Digunakan
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.technologies.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-[#050B14] border border-white/10 text-white">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#050B14] hover:bg-[#1E293B] border border-white/10 rounded-xl transition-all min-h-[44px]"
              >
                <IconGithub className="w-4 h-4 text-[#38BDF8]" />
                <span>Lihat Repositori GitHub</span>
              </a>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 text-xs font-bold text-white bg-white/10 hover:bg-white/15 rounded-xl transition-all min-h-[44px]"
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
