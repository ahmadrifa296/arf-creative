import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { IconGithub, IconInstagram, IconWhatsapp, Icon3DWhatsapp, Icon3DInstagram, Icon3DGithub, Icon3DMail } from './Icons';

export default function CompanyContact() {
  const contactList = [
    {
      key: "whatsapp",
      name: "WhatsApp",
      sublabel: "Chat Langsung",
      url: siteConfig.contact.whatsappUrl,
      icon: Icon3DWhatsapp,
      border: "border-emerald-500/30",
      hoverBorder: "hover:border-emerald-400",
      hoverBg: "hover:bg-emerald-950/40"
    },
    {
      key: "instagram",
      name: "Instagram",
      sublabel: "@arf_.creative",
      url: siteConfig.contact.instagramUrl,
      icon: Icon3DInstagram,
      border: "border-rose-500/30",
      hoverBorder: "hover:border-rose-400",
      hoverBg: "hover:bg-rose-950/40"
    },
    {
      key: "github",
      name: "GitHub",
      sublabel: "Repositori",
      url: siteConfig.contact.githubUrl,
      icon: Icon3DGithub,
      border: "border-sky-500/30",
      hoverBorder: "hover:border-sky-400",
      hoverBg: "hover:bg-sky-950/40"
    },
    {
      key: "email",
      name: "Email",
      sublabel: "Kirim Pesan",
      url: siteConfig.contact.emailUrl,
      icon: Icon3DMail,
      border: "border-amber-500/30",
      hoverBorder: "hover:border-amber-400",
      hoverBg: "hover:bg-amber-950/40"
    }
  ];

  return (
    <section id="kontak" className="pt-10 pb-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bottom CTA Banner (matching bdgnomerch "Butuh Rekomendasi Ukuran atau Cek Stok Ready?") */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#081329] border border-white/10 text-center space-y-8 shadow-2xl">
          
          <div className="max-w-xl mx-auto space-y-2.5">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Punya Ide Projek Website atau Bimbingan?
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              ARF Creative siap membantu mengecek kebutuhan teknis projek Anda dan memberikan pendampingan praktis hingga online.
            </p>
          </div>

          {/* 2 Big Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#10B981] hover:bg-[#059669] shadow-lg shadow-emerald-950/50 transition-all min-h-[44px]"
            >
              <IconWhatsapp className="w-4 h-4" />
              <span>Chat Admin WhatsApp</span>
            </a>

            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#0D1C3D] hover:bg-white/10 border border-white/15 transition-all min-h-[44px]"
            >
              <IconInstagram className="w-4 h-4 text-[#E1306C]" />
              <span>Instagram @arf_.creative</span>
            </a>
          </div>

          {/* Direct Clickable Contact Icon Tiles */}
          <div className="pt-6 border-t border-white/10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {contactList.map((ch) => {
                const ContactIcon = ch.icon;
                return (
                  <a
                    key={ch.key}
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#061026] border ${ch.border} ${ch.hoverBorder} ${ch.hoverBg} transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-lg min-h-[110px]`}
                    title={`Buka ${ch.name} ARF Creative`}
                    aria-label={`Buka ${ch.name} ARF Creative`}
                  >
                    <div className="w-14 h-14 mb-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                      <ContactIcon className="w-12 h-12" />
                    </div>

                    <span className="text-xs font-bold text-white group-hover:text-white transition-colors">
                      {ch.name}
                    </span>

                    <span className="text-[10px] font-mono text-white/50 group-hover:text-white/80 transition-colors mt-0.5">
                      {ch.sublabel}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
