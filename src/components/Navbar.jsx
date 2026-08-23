import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Menu, X, MessageSquare, Code2, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = siteConfig.navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#050B14]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-xl shadow-black/40' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#22D3EE] rounded-lg p-1">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#22D3EE] p-[1px] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-[#050B14] rounded-[11px] flex items-center justify-center group-hover:bg-[#0A1220] transition-colors">
                <Code2 className="w-5 h-5 text-[#22D3EE] group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-[#22D3EE] transition-colors">
                  {siteConfig.brandName}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#2563EB]/20 text-[#22D3EE] border border-[#2563EB]/30">
                  DEV
                </span>
              </div>
              <span className="text-[11px] text-[#94A3B8] font-medium tracking-wide">
                {siteConfig.fullName}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0A1220]/60 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white shadow-md shadow-blue-600/30'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white rounded-full overflow-hidden group bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#22D3EE] p-[1px] hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <span className="w-full h-full bg-[#050B14] rounded-full px-4 py-2 flex items-center gap-2 group-hover:bg-transparent transition-colors duration-300">
                <MessageSquare className="w-3.5 h-3.5 text-[#22D3EE] group-hover:text-white transition-colors" />
                <span>Mulai Konsultasi</span>
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#0A1220] border border-white/10 text-[#94A3B8] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1220]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-semibold rounded-xl text-[#F8FAFC] hover:bg-white/5 hover:text-[#22D3EE] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-[#2563EB] to-[#22D3EE] shadow-lg shadow-blue-600/30 active:scale-95 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Mulai Konsultasi</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
