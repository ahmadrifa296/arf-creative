import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowLeft, ArrowUpRight, Laptop, Smartphone, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { IconGithub, IconWhatsapp } from './Icons';
import { siteConfig } from '../data/siteConfig';

export default function DesignWorkGallery() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [deviceTab, setDeviceTab] = useState('laptop');

  // 2 REAL LIVE PROJECTS FROM @arf_.creative
  const realProjects = [
    {
      id: "aksara-dialogue",
      title: "Aksara Dialogue",
      subtitle: "Gerakan Sosial, Advokasi Kebijakan & Ruang Dialog",
      category: "EDITORIAL WEB",
      mockupType: "aksara",
      description: "Platform advokasi dan ruang dialog publik kritis yang berfokus pada keadilan sosial, transparansi demokrasi, kelestarian ekologis, dan literasi publik.",
      fullOverview: "Aksara Dialogue (aksara-dialogue.vercel.app) adalah platform gerakan sosial dan advokasi kebijakan publik. Menghadirkan ruang diskursus yang kritis, inklusif, dan partisipatif guna mendorong perubahan sosial yang berkeadilan serta bermakna bagi seluruh lapisan masyarakat.",
      problem: "Isu-isu krusial kebijakan dan advokasi sosial sering kali tersebar tanpa wadah dialog terpadu yang nyaman diakses melalui perangkat seluler maupun komputer.",
      solution: "Membangun platform web editorial responsif dengan pilar fokus gerakan terarah, sistem program advokasi, dan tata letak yang ramah pembaca lintas perangkat.",
      techStack: ["React 18", "Tailwind CSS", "Vite", "JavaScript", "Vercel Hosting", "Mobile-First Design"],
      githubUrl: "https://github.com/ahmadrifa296/aksara-dialogue",
      liveDemoUrl: "https://aksara-dialogue.vercel.app/",
      imageLaptop: "/projects/aksara-dialogue-laptop.png",
      imageMobile: "/projects/aksara-dialogue-mobile.png"
    },
    {
      id: "bdg-boys-merch",
      title: "BDG Boys Merch",
      subtitle: "Etalase Streetwear & WhatsApp Direct Order",
      category: "STREETWEAR STORE",
      mockupType: "merch",
      description: "Website etalase digital resmi BDG Boys Merch untuk memamerkan katalog kaos katun Combed 24s dan official sticker pack dengan alur pemesanan langsung terintegrasi ke WhatsApp admin resmi.",
      fullOverview: "Website katalog produk resmi BDG Boys Merch menghadirkan etalase digital bernuansa streetwear gelap khas kultur Bandung. Pembeli dapat langsung memilih varian kaos dan stiker lalu melanjutkan pesanan ke WhatsApp admin resmi tanpa perlu registrasi akun yang rumit.",
      problem: "Brand streetwear lokal membutuhkan etalase produk digital yang berkarakter tegas dan cepat diakses di ponsel tanpa sistem e-commerce yang rumit.",
      solution: "Membangun antarmuka bertema gelap urban streetwear dengan katalog interaktif, kartu produk responsif, dan direct order WhatsApp API.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp API", "Vercel Hosting"],
      githubUrl: "https://github.com/ahmadrifa296/bdgnomerch",
      liveDemoUrl: "https://bdgnomerch.vercel.app/",
      imageLaptop: "/projects/bdg-merch-laptop.png",
      imageMobile: "/projects/bdg-merch-mobile.jpg"
    }
  ];

  // Listen to hash changes for browser back / forward navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#detail-')) {
        const projectId = hash.replace('#detail-', '');
        const found = realProjects.find((p) => p.id === projectId);
        if (found) {
          setSelectedProject(found);
          setDeviceTab('laptop');
        }
      } else if (hash === '#projek' || hash === '') {
        setSelectedProject(null);
      }
    };

    handleHash();
    window.addEventListener('popstate', handleHash);
    return () => window.removeEventListener('popstate', handleHash);
  }, []);

  const openProjectDetail = (item) => {
    setSelectedProject(item);
    setDeviceTab('laptop');
    window.location.hash = `detail-${item.id}`;
    const el = document.getElementById('projek');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    window.location.hash = 'projek';
    const el = document.getElementById('projek');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderCardMockup = (item) => {
    if (item.mockupType === 'aksara') {
      return (
        <div className="w-full aspect-[16/10] rounded-2xl bg-[#030816] border border-white/10 overflow-hidden flex items-center justify-center p-3 sm:p-5 group-hover:border-[#38BDF8]/60 transition-all duration-300 shadow-xl relative">
          <img
            src="/projects/aksara-dialogue-laptop.png"
            alt="Aksara Dialogue Preview"
            className="w-full h-full object-contain transform group-hover:scale-[1.03] transition-transform duration-300 drop-shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </div>
      );
    }

    return (
      <div className="w-full aspect-[16/10] rounded-2xl bg-[#030816] border border-white/10 overflow-hidden flex items-center justify-center p-3 sm:p-5 group-hover:border-[#38BDF8]/60 transition-all duration-300 shadow-xl relative">
        <img
          src="/projects/bdg-merch-laptop.png"
          alt="BDG Boys Merch Preview"
          className="w-full h-full object-contain transform group-hover:scale-[1.03] transition-transform duration-300 drop-shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  };

  return (
    <section id="projek" className="py-14 sm:py-20 scroll-mt-20">

      {/* 
        CASE 1: DEDICATED FULL-PAGE PROJECT EXPLANATION VIEW (NON-POPUP)
        Tampil langsung sebagai halaman penjelasan projek yang elegan tanpa modal popup
      */}
      {selectedProject ? (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">

          {/* Top Navigation & Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <button
              onClick={closeProjectDetail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-sm font-semibold text-white border border-white/10 transition-colors min-h-[44px] cursor-pointer"
              aria-label="Kembali ke semua project"
            >
              <ArrowLeft className="w-4 h-4 text-[#38BDF8]" />
              <span>Kembali ke Semua Project</span>
            </button>

            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-[#0284C7]/20 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-mono font-bold uppercase">
                {selectedProject.category}
              </span>
              {selectedProject.liveDemoUrl && (
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Demo Aktif
                </span>
              )}
            </div>
          </div>

          {/* Project Title & Headline */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              {selectedProject.title}
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] font-medium leading-relaxed">
              {selectedProject.subtitle}
            </p>
          </div>

          {/* Large Device Mockup Showcase Frame */}
          <div className="space-y-4">
            {selectedProject.imageLaptop ? (
              <div className="space-y-3">
                {/* Device Switcher Tab */}
                {selectedProject.imageMobile && (
                  <div className="flex items-center justify-center gap-2 p-1.5 rounded-xl bg-[#050D21] border border-white/10 w-fit mx-auto">
                    <button
                      onClick={() => setDeviceTab('laptop')}
                      className={`px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 min-h-[44px] cursor-pointer ${deviceTab === 'laptop'
                        ? 'bg-[#2563EB] text-white shadow-lg'
                        : 'text-[#94A3B8] hover:text-white'
                        }`}
                    >
                      <Laptop className="w-4 h-4" />
                      <span>Tampilan Desktop (Laptop)</span>
                    </button>

                    <button
                      onClick={() => setDeviceTab('mobile')}
                      className={`px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 min-h-[44px] cursor-pointer ${deviceTab === 'mobile'
                        ? 'bg-[#2563EB] text-white shadow-lg'
                        : 'text-[#94A3B8] hover:text-white'
                        }`}
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Tampilan Mobile (Smartphone)</span>
                    </button>
                  </div>
                )}

                {/* Display Frame */}
                <div className="rounded-3xl bg-[#040A1A] border border-white/10 p-4 sm:p-8 flex items-center justify-center min-h-[320px] sm:min-h-[450px] shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-sky-900/10 pointer-events-none" />
                  {deviceTab === 'laptop' || !selectedProject.imageMobile ? (
                    <img
                      src={selectedProject.imageLaptop}
                      alt={`${selectedProject.title} Laptop Mockup`}
                      className="w-full h-auto max-h-[420px] object-contain drop-shadow-2xl relative z-10"
                    />
                  ) : (
                    <img
                      src={selectedProject.imageMobile}
                      alt={`${selectedProject.title} Mobile Mockup`}
                      className="w-auto h-[380px] sm:h-[450px] object-contain drop-shadow-2xl rounded-2xl relative z-10"
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                {renderCardMockup(selectedProject)}
              </div>
            )}
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-[#050D21] border border-white/10">
            {selectedProject.liveDemoUrl && (
              <a
                href={selectedProject.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] inline-flex items-center gap-2 shadow-lg transition-colors min-h-[44px]"
              >
                <span>Buka Website (Live Demo)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {selectedProject.githubUrl && (
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/10 inline-flex items-center gap-2 transition-colors min-h-[44px]"
              >
                <IconGithub className="w-4 h-4" />
                <span>Repositori GitHub</span>
              </a>
            )}

            <a
              href={`${siteConfig.contact.whatsappUrl}&text=Halo%20ARF%20Creative,%20saya%20tertarik%20berdiskusi%20mengenai%20projek%20${encodeURIComponent(selectedProject.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#10B981] hover:bg-[#059669] inline-flex items-center gap-2 transition-colors min-h-[44px] ml-auto"
            >
              <IconWhatsapp className="w-4 h-4" />
              <span>Konsultasi Projek Ini</span>
            </a>
          </div>

          {/* Detailed Narrative Section */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#081329] border border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#38BDF8]" />
              <span>Ringkasan &amp; Gambaran Projek</span>
            </h3>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              {selectedProject.fullOverview || selectedProject.description}
            </p>
          </div>

          {/* Problem & Solution Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#050D21] border border-white/10 space-y-3">
              <div className="text-xs font-mono text-[#38BDF8] uppercase font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                <span>Tantangan Projek</span>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {selectedProject.problem}
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-3xl bg-[#050D21] border border-white/10 space-y-3">
              <div className="text-xs font-mono text-emerald-400 uppercase font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Solusi Rancang Bangun</span>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {selectedProject.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#081329] border border-white/10 space-y-3">
            <div className="text-xs font-mono text-white/70 uppercase font-bold">
              Teknologi &amp; Spesifikasi Arsitektur:
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedProject.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/5 text-white border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Back Button */}
          <div className="pt-6 border-t border-white/10 flex justify-center">
            <button
              onClick={closeProjectDetail}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-bold text-white border border-white/15 transition-colors min-h-[44px] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#38BDF8]" />
              <span>Kembali ke Daftar Semua Project</span>
            </button>
          </div>

        </div>
      ) : (
        /* 
          CASE 2: CLEAN 2-COLUMN PROJECT GRID (MATCHING TARGET REFERENCE)
        */
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">

          {/* Section Header Matching Target Reference */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Project
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8]">
              Berikut beberapa project yang pernah dikembangkan
            </p>
          </div>

          {/* Project Showcase (Mobile: Horizontal Swipe / Desktop: Wide 2 Columns) */}
          <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar pb-4 md:pb-0 pt-1 -mx-4 md:mx-0 px-4 md:px-0">
            {realProjects.map((item) => (
              <div
                key={item.id}
                className="w-[85vw] sm:w-[380px] md:w-full max-w-[380px] md:max-w-none shrink-0 md:shrink snap-start group flex flex-col space-y-4"
              >
                {/* Large Clickable Preview Image Container */}
                <div
                  onClick={() => openProjectDetail(item)}
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openProjectDetail(item);
                    }
                  }}
                  aria-label={`Buka penjelasan ${item.title}`}
                >
                  {renderCardMockup(item)}
                </div>

                {/* Text Block Directly Below Image */}
                <div className="space-y-1.5">
                  <h3
                    onClick={() => openProjectDetail(item)}
                    className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#38BDF8] transition-colors cursor-pointer"
                  >
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-4 pt-0.5">
                    {/* "Lihat Disini" Link to Live Demo if available, otherwise open detail page */}
                    {item.liveDemoUrl ? (
                      <a
                        href={item.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[#38BDF8] hover:text-sky-300 hover:underline transition-colors min-h-[36px]"
                      >
                        <span>Lihat Disini</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => openProjectDetail(item)}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[#38BDF8] hover:text-sky-300 hover:underline transition-colors cursor-pointer min-h-[36px]"
                      >
                        <span>Lihat Disini</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    )}

                    {/* Direct explicit button to view explanation page */}
                    <button
                      type="button"
                      onClick={() => openProjectDetail(item)}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-white/70 hover:text-white hover:underline transition-colors cursor-pointer min-h-[36px]"
                    >
                      <span>Lihat Penjelasan</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
                    </button>
                  </div>

                  <p className="text-sm text-[#94A3B8] leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Mobile Horizontal Swipe Indicator */}
          <div className="md:hidden flex items-center justify-center gap-1.5 text-[10px] font-mono text-[#38BDF8]/70 mt-1">
            <span>&larr; Geser menyamping untuk melihat projek lain &rarr;</span>
          </div>

        </div>
      )}

    </section>
  );
}
