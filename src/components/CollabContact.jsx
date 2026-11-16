import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { MessageSquare, Mail, Copy, Check, ExternalLink, ArrowUpRight } from 'lucide-react';
import { IconGithub, IconInstagram, IconWhatsapp } from './Icons';

export default function CollabContact() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const contactList = [
    {
      key: "whatsapp",
      label: "WhatsApp Resmi",
      val: siteConfig.contact.whatsapp,
      url: siteConfig.contact.whatsappUrl,
      icon: IconWhatsapp,
      action: "Mulai Chat",
      color: "text-emerald-400"
    },
    {
      key: "instagram",
      label: "Instagram Profil",
      val: siteConfig.contact.instagram,
      url: siteConfig.contact.instagramUrl,
      icon: IconInstagram,
      action: "Buka Akun",
      color: "text-[#E1306C]"
    },
    {
      key: "github",
      label: "GitHub Hub",
      val: siteConfig.contact.github,
      url: siteConfig.contact.githubUrl,
      icon: IconGithub,
      action: "Lihat Repositori",
      color: "text-[#38BDF8]"
    },
    {
      key: "email",
      label: "Email Studio",
      val: siteConfig.contact.email,
      url: siteConfig.contact.emailUrl,
      icon: Mail,
      action: "Kirim Email",
      color: "text-amber-400"
    }
  ];

  return (
    <section id="kontak" className="py-24 bg-[#08090D] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Main Invite Banner */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#0F1117] border border-white/10 space-y-6">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase">
              RUANG KOLABORASI
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Punya Ide Projek? Mari Berdiskusi Santai.
            </h2>

            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              ARF Creative selalu terbuka untuk berdiskusi dengan mahasiswa, kreator, dan brand lokal. Kami siap membantu mewujudkan konsep Anda menjadi website fungsional dengan proses yang terdokumentasi rapi.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors min-h-[44px]"
              >
                <IconWhatsapp className="w-4 h-4" />
                <span>Mulai Chat WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-[#08090D] hover:bg-white/10 border border-white/10 transition-colors min-h-[44px]"
              >
                <IconInstagram className="w-4 h-4 text-[#E1306C]" />
                <span>DM Instagram @arf_.creative</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactList.map((ch) => {
            const IconComp = ch.icon;
            const isCopied = copiedKey === ch.key;

            return (
              <div
                key={ch.key}
                className="p-5 rounded-2xl bg-[#0F1117] border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                    <span className="text-[11px] font-mono text-[#94A3B8] uppercase">
                      {ch.label}
                    </span>
                    <button
                      onClick={() => handleCopy(ch.val, ch.key)}
                      className="p-1.5 rounded-lg bg-[#08090D] text-[#94A3B8] hover:text-white border border-white/5 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                      title="Salin Data"
                      aria-label={`Salin data ${ch.label}`}
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <div className="font-mono text-sm font-bold text-white break-all mb-4">
                    {ch.val}
                  </div>
                </div>

                <a
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-2 text-xs font-semibold text-[#38BDF8] hover:text-white transition-colors"
                >
                  <span>{ch.action}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
