import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Code2, Phone } from 'lucide-react';
import { IconGithub, IconInstagram } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-[#050B14] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#22D3EE] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#050B14] rounded-[11px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-[#22D3EE]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight">
                  {siteConfig.brandName}
                </span>
                <span className="text-xs text-[#94A3B8] font-medium">
                  {siteConfig.fullName}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              Website Development &amp; Project Support for Students. Solusi pengembangan website modern, terarah, dan berkualitas.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0A1220] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/40 transition-all"
                aria-label="WhatsApp DisTech"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0A1220] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/40 transition-all"
                aria-label="Instagram DisTech"
              >
                <IconInstagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0A1220] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/40 transition-all"
                aria-label="GitHub DisTech"
              >
                <IconGithub className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#22D3EE]">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Target & Scope Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#22D3EE]">
              Fokus Layanan
            </h4>
            <ul className="space-y-2 text-xs text-[#94A3B8] leading-relaxed">
              <li>• Website Development</li>
              <li>• Frontend &amp; Backend CRUD</li>
              <li>• Bug Fixing &amp; Debugging</li>
              <li>• UI/UX Design Responsive</li>
              <li>• Pendampingan Project Web</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            © 2026 DisTech. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built for Vercel Static Hosting</span>
            <span>•</span>
            <a href="#hero" className="hover:text-white transition-colors">Back to Top ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
