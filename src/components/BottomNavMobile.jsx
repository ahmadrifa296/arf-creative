import React, { useState, useEffect } from 'react';
import { Home, Layers, Briefcase, Mail } from 'lucide-react';
import { IconWhatsapp } from './Icons';
import { siteConfig } from '../data/siteConfig';

export default function BottomNavMobile() {
  const [activeTab, setActiveTab] = useState('Beranda');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = [
        { id: 'kontak', name: 'Kontak' },
        { id: 'projek', name: 'Project' },
        { id: 'tentang', name: 'Tentang' },
        { id: 'hero', name: 'Beranda' }
      ];

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop - 160;
          if (scrollY >= top) {
            setActiveTab(sec.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Beranda',
      href: '#hero',
      icon: Home
    },
    {
      name: 'Tentang',
      href: '#tentang',
      icon: Layers
    },
    {
      name: 'Project',
      href: '#projek',
      icon: Briefcase
    },
    {
      name: 'Kontak',
      href: '#kontak',
      icon: Mail
    }
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#050B17]/95 backdrop-blur-xl border-t border-white/10 px-2 py-1.5 shadow-[0_-8px_25px_rgba(0,0,0,0.6)]"
      aria-label="Navigasi Bawah Mobile"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const IconComp = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.name)}
              className={`flex-1 flex flex-col items-center justify-center py-1.5 min-h-[48px] rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-[#38BDF8]'
                  : 'text-white/60 hover:text-white active:scale-95'
              }`}
              aria-label={`Navigasi ke ${item.name}`}
            >
              <div className="relative flex items-center justify-center">
                <IconComp className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]' : ''}`} />
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                )}
              </div>
              <span className={`text-[10px] font-bold mt-1 tracking-tight ${isActive ? 'text-white font-black' : 'text-white/60'}`}>
                {item.name}
              </span>
            </a>
          );
        })}

        {/* Action Button: WhatsApp Direct Chat (Matching bdgnomerch Green Accent) */}
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 min-h-[48px] rounded-xl text-emerald-400 hover:text-emerald-300 transition-all active:scale-95 group"
          aria-label="Chat WhatsApp Admin Resmi"
        >
          <div className="w-8 h-8 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center shadow-md shadow-emerald-950/60 group-hover:scale-110 transition-transform">
            <IconWhatsapp className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-[10px] font-black text-emerald-400 mt-0.5 tracking-tight">
            Chat WA
          </span>
        </a>
      </div>
    </nav>
  );
}
