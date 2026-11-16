import React, { useState } from 'react';
import { portfolioData, portfolioCategories } from '../data/portfolioData';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { IconGithub } from './Icons';

export default function ProjectDocumentation() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filteredProjects = activeFilter === "Semua"
    ? portfolioData
    : portfolioData.filter(p => p.categories.includes(activeFilter));

  const renderVisualMockup = (type) => {
    switch (type) {
      case 'aksara-dialogue':
        return (
          <div className="w-full min-h-[260px] sm:min-h-[320px] rounded-2xl bg-[#030712] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-[#94A3B8]">
              <span className="text-white font-bold">aksaradialogue.com</span>
              <span className="text-[#FB923C] font-semibold text-[10px]">EDITORIAL PLATFORM</span>
            </div>

            <div className="my-auto py-6 space-y-3">
              <span className="text-[11px] font-mono text-[#F97316] uppercase tracking-widest font-bold">
                SUARA PUBLIK, RUANG DIALOG.
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug max-w-lg">
                Sebuah Platform untuk Membaca Opini Tanpa Kebisingan Algoritma.
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md leading-relaxed font-normal">
                Menghadirkan kenyamanan membaca esai panjang dengan hierarki tipografi bersih, ruang bernapas lega, dan navigasi topik yang teratur.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#64748B]">
              <span>Tampilan Responsif Desktop &amp; Mobile</span>
              <span className="text-[#38BDF8]">Dokumentasi Lengkap</span>
            </div>
          </div>
        );

      case 'bdg-boys-merch':
        return (
          <div className="w-full min-h-[260px] sm:min-h-[320px] rounded-2xl bg-[#050B14] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-[#94A3B8]">
              <span className="text-white font-bold">bdgboysmerch.id</span>
              <span className="text-[#FBBF24] font-semibold text-[10px]">STREETWEAR STORE</span>
            </div>

            <div className="my-auto py-6 space-y-3">
              <span className="text-[11px] font-mono text-[#F59E0B] uppercase tracking-widest font-bold">
                BANDUNG BOYS MERCH
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug max-w-lg">
                Etalase Digital Cepat untuk Rilisan Streetwear Lokal.
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md leading-relaxed font-normal">
                Katalog produk streetwear dengan tema gelap urban, pemilih ukuran baju interaktif, dan integrasi pesanan langsung ke WhatsApp.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#64748B]">
              <span>Katalog Interaktif + WhatsApp Order</span>
              <span className="text-[#F59E0B]">Streetwear Brand</span>
            </div>
          </div>
        );

      case 'projek-pertama':
        return (
          <div className="w-full min-h-[260px] sm:min-h-[320px] rounded-2xl bg-[#080E1C] border border-white/10 p-6 sm:p-8 flex flex-col justify-between font-mono">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-[#94A3B8]">
              <span className="text-white font-bold">workspace/projek-pertama.js</span>
              <span className="text-[#38BDF8] text-[10px]">FONDASI WEB</span>
            </div>

            <div className="my-auto py-6 space-y-2 text-xs sm:text-sm text-[#94A3B8]">
              <div><span className="text-purple-400">const</span> <span className="text-white font-bold">learningLog</span> = &#123;</div>
              <div className="pl-4 text-emerald-400">// Langkah awal mempelajari web modern dari nol</div>
              <div className="pl-4">materi: <span className="text-yellow-300">'HTML5 Semantik, CSS Grid, DOM JavaScript'</span>,</div>
              <div className="pl-4">tujuan: <span className="text-[#38BDF8]">'Fondasi Koding yang Terstruktur'</span></div>
              <div>&#125;;</div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#64748B]">
              <span>Catatan Eksplorasi Kode</span>
              <span className="text-[#38BDF8]">Arsip Belajar</span>
            </div>
          </div>
        );

      case 'arf-space':
      default:
        return (
          <div className="w-full min-h-[260px] sm:min-h-[320px] rounded-2xl bg-[#071946] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-[#94A3B8]">
              <span className="text-white font-bold">arf-creative.vercel.app</span>
              <span className="text-[#38BDF8] font-semibold text-[10px]">STUDIO WEBSITE</span>
            </div>

            <div className="my-auto py-6 space-y-3">
              <span className="text-[11px] font-mono text-[#38BDF8] uppercase tracking-widest font-bold">
                ARF CREATIVE DIGITAL SPACE
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug max-w-lg">
                Website Showcase Interaktif dengan Performa Kilat.
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md leading-relaxed font-normal">
                Dibangun sebagai static site berarsitektur modern dengan React dan Tailwind CSS v4, siap dipublikasikan ke Vercel tanpa backend server.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#64748B]">
              <span>React 18 + Vite + Tailwind CSS v4</span>
              <span className="text-[#38BDF8]">Vercel Deployed</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projek" className="py-24 bg-[#08090D] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase">
              ARSIP DOKUMENTASI PROJEK
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Studi Kasus &amp; Karya Digital.
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter Kategori Projek">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors min-h-[40px] ${
                  activeFilter === cat
                    ? 'bg-[#2563EB] text-white'
                    : 'bg-[#0F1117] text-[#94A3B8] hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project List */}
        <div className="space-y-16">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="p-6 sm:p-10 rounded-3xl bg-[#0F1117] border border-white/10 space-y-8"
            >
              {/* Meta row */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#94A3B8] pb-4 border-b border-white/5">
                <span className="text-[#38BDF8] font-bold">
                  PROJEK #{project.index} / {project.year}
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#08090D] border border-white/10 text-white font-sans font-semibold">
                  {project.category}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#F59E0B] font-semibold uppercase tracking-wider">
                  {project.tagline}
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {project.title}
                </h3>
              </div>

              {/* Mockup Display */}
              {renderVisualMockup(project.visualType)}

              {/* Problem & Solution Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-[#08090D] border border-white/5 space-y-2">
                  <div className="text-xs font-mono text-[#38BDF8] font-bold uppercase tracking-wider">
                    Latar Belakang &amp; Tantangan
                  </div>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#08090D] border border-white/5 space-y-2">
                  <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    Pendekatan Desain &amp; Solusi
                  </div>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack & Action Links */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-[#08090D] text-[#CBD5E1] border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#08090D] hover:bg-white/10 border border-white/10 transition-colors min-h-[44px]"
                    >
                      <IconGithub className="w-4 h-4 text-[#38BDF8]" />
                      <span>Repositori GitHub</span>
                    </a>
                  )}

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors min-h-[44px]"
                    >
                      <span>Buka Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
