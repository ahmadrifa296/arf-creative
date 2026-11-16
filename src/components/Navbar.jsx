import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Dokumentasi', href: '#projek' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050B17]/90 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-4 sm:px-8 lg:px-12 py-3.5">
        <div className="flex items-center justify-between">
          
          {/* Logo brand */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-lg p-1"
          >
            {/* Circular Logo Badge with clean white ring */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white/80 bg-[#071330] flex flex-col items-center justify-center shrink-0 shadow-md">
              <span className="text-[10px] sm:text-[11px] font-black text-white leading-none">
                ARF
              </span>
              <span className="text-[7px] text-[#94A3B8] font-medium leading-none mt-0.5">
                creative
              </span>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-black text-xs sm:text-sm tracking-tight text-white group-hover:text-[#38BDF8] transition-colors leading-none uppercase">
                ARF CREATIVE
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#94A3B8] font-mono tracking-wider uppercase mt-1">
                STUDIO DOKUMENTASI
              </span>
            </div>
          </a>

          {/* Center Navigation Pills */}
          <nav className="hidden md:flex items-center gap-4 text-xs font-bold tracking-wide" aria-label="Navigasi Utama">
            {navItems.map((item) => {
              const isActive = activeNav === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveNav(item.label)}
                  className={`transition-all duration-200 px-4 py-1.5 rounded-full ${
                    isActive
                      ? 'bg-[#2532A0] text-white shadow-md shadow-indigo-950/60'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Green WA Pill Button */}
          <div className="hidden md:flex items-center">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-1.5 rounded-full text-xs font-black text-white bg-[#10B981] hover:bg-[#059669] shadow-md shadow-emerald-950/40 transition-colors min-h-[36px] flex items-center justify-center tracking-wider"
              title="Chat WhatsApp Resmi"
              aria-label="Chat WhatsApp Resmi"
            >
              WA
            </a>
          </div>

          {/* Mobile Right: WA + Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1 rounded-full text-xs font-black text-white bg-[#10B981] min-h-[32px] flex items-center justify-center"
              title="Chat WhatsApp Resmi"
            >
              WA
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#050B17]/98 border-b border-white/10 px-4 pt-3 pb-5 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveNav(item.label);
                  setMenuOpen(false);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-colors ${
                  activeNav === item.label
                    ? 'bg-[#2532A0] text-white'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
