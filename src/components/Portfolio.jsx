import React, { useState } from 'react';
import { portfolioData, portfolioCategories } from '../data/portfolioData';
import { ExternalLink, Code, Layers, Sparkles } from 'lucide-react';
import { IconGithub } from './Icons';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? portfolioData
    : portfolioData.filter(proj => proj.categories.includes(selectedCategory));

  // Helper to render responsive web mockup visuals per project type
  const renderVisualMockup = (type, title) => {
    switch (type) {
      case 'sales-system':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-3 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-[#94A3B8]">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
              </div>
              <span className="font-mono text-[#22D3EE]">sales-app.test/dashboard</span>
            </div>
            {/* Mockup Dashboard Graphics */}
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-2 rounded bg-[#050B14]/80 border border-white/5 text-[9px] text-[#94A3B8]">
                <span>Total Omset</span>
                <div className="font-bold text-white text-xs">Rp 45.2M</div>
              </div>
              <div className="p-2 rounded bg-[#050B14]/80 border border-white/5 text-[9px] text-[#94A3B8]">
                <span>Produk</span>
                <div className="font-bold text-[#22D3EE] text-xs">1,240 Item</div>
              </div>
              <div className="p-2 rounded bg-[#050B14]/80 border border-white/5 text-[9px] text-[#94A3B8]">
                <span>Laporan</span>
                <div className="font-bold text-emerald-400 text-xs">Verified</div>
              </div>
            </div>
            {/* Table Mockup */}
            <div className="space-y-1 bg-[#050B14]/60 p-2 rounded border border-white/5">
              <div className="h-2 w-3/4 bg-blue-500/40 rounded"></div>
              <div className="h-2 w-1/2 bg-cyan-400/40 rounded"></div>
            </div>
          </div>
        );

      case 'company-profile':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#050B14] via-[#0A1220] to-[#0F172A] p-3 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-[#94A3B8]">
              <span className="font-bold text-white text-[11px]">DISTECH AGENCY</span>
              <div className="flex gap-2 text-[9px] text-[#94A3B8]">
                <span>Home</span>
                <span>Services</span>
                <span>Contact</span>
              </div>
            </div>
            <div className="space-y-2 my-auto">
              <div className="text-xs font-black text-white tracking-wider">CREATIVE DIGITAL SOLUTION</div>
              <div className="h-2 w-2/3 bg-gradient-to-r from-[#2563EB] to-[#22D3EE] rounded"></div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="h-8 rounded bg-white/5 border border-white/5"></div>
              <div className="h-8 rounded bg-white/5 border border-white/5"></div>
              <div className="h-8 rounded bg-white/5 border border-white/5"></div>
            </div>
          </div>
        );

      case 'umkm-catalog':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#0F172A] to-[#050B14] p-3 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-[#94A3B8]">
              <span className="font-mono text-emerald-400">katalog-umkm.id</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[8px]">PRODUK LOKAL</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="h-16 rounded bg-[#0A1220] border border-white/10 p-1 flex flex-col justify-between">
                <div className="w-full h-7 bg-emerald-500/20 rounded"></div>
                <div className="h-1.5 w-3/4 bg-white/40 rounded"></div>
              </div>
              <div className="h-16 rounded bg-[#0A1220] border border-white/10 p-1 flex flex-col justify-between">
                <div className="w-full h-7 bg-blue-500/20 rounded"></div>
                <div className="h-1.5 w-3/4 bg-white/40 rounded"></div>
              </div>
              <div className="h-16 rounded bg-[#0A1220] border border-white/10 p-1 flex flex-col justify-between">
                <div className="w-full h-7 bg-purple-500/20 rounded"></div>
                <div className="h-1.5 w-3/4 bg-white/40 rounded"></div>
              </div>
            </div>
            <div className="h-3 bg-[#22D3EE]/20 rounded flex items-center justify-center text-[8px] text-[#22D3EE] font-bold">
              ORDER VIA WHATSAPP INTEGRATION
            </div>
          </div>
        );

      case 'analytics-dashboard':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#050B14] to-[#1E1B4B] p-3 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-[#94A3B8]">
              <span className="text-purple-300 font-semibold">Student Analytics Platform</span>
              <span className="text-[9px] text-[#22D3EE]">LIVE METRICS</span>
            </div>
            <div className="flex items-end gap-1.5 h-20 pt-2 pb-1 px-2 bg-[#050B14]/80 rounded border border-white/5">
              <div className="w-1/6 h-[30%] bg-blue-500 rounded-t"></div>
              <div className="w-1/6 h-[60%] bg-cyan-400 rounded-t"></div>
              <div className="w-1/6 h-[45%] bg-blue-600 rounded-t"></div>
              <div className="w-1/6 h-[85%] bg-[#22D3EE] rounded-t"></div>
              <div className="w-1/6 h-[55%] bg-indigo-500 rounded-t"></div>
              <div className="w-1/6 h-[100%] bg-purple-400 rounded-t"></div>
            </div>
            <div className="flex justify-between text-[9px] text-[#94A3B8]">
              <span>Accuracy: 99.4%</span>
              <span>Data Source: Realtime</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#0A1220] to-[#0F172A] p-4 flex flex-col justify-center items-center text-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <Code className="w-10 h-10 text-[#22D3EE] mb-2" />
            <div className="text-xs font-bold text-white">{title}</div>
            <div className="text-[10px] text-[#94A3B8]">DisTech Web Project</div>
          </div>
        );
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0A1220] relative overflow-hidden border-t border-white/5">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#22D3EE]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] text-xs font-bold uppercase tracking-wider">
            PORTFOLIO Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            PROJECT YANG PERNAH KAMI KERJAKAN
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Beberapa contoh website dan project yang dikembangkan menggunakan berbagai teknologi web.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#22D3EE] text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-[#050B14] text-[#94A3B8] hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#22D3EE]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Visual Screenshot Mockup Container */}
                <div className="relative overflow-hidden border-b border-white/10">
                  {renderVisualMockup(project.visualType, project.title)}
                  
                  {/* Category Pill Badge overlay */}
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    {project.categories.slice(0, 2).map((cat, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#050B14]/80 text-[#22D3EE] border border-[#22D3EE]/30 backdrop-blur-md">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#22D3EE] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#050B14] text-[#F8FAFC] border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: GitHub Repository & Live Demo */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4 pt-4 flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-white bg-[#050B14] hover:bg-[#1E293B] border border-white/10 hover:border-white/20 rounded-xl transition-all"
                  aria-label={`GitHub Repository ${project.title}`}
                >
                  <IconGithub className="w-3.5 h-3.5 text-[#22D3EE]" />
                  <span>GitHub Repository</span>
                </a>

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 text-xs font-bold text-[#22D3EE] bg-[#2563EB]/10 hover:bg-[#2563EB]/20 border border-[#2563EB]/30 rounded-xl transition-all"
                    title="Live Demo"
                    aria-label={`Live Demo ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
