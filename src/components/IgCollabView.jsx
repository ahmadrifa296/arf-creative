import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { MessageSquare, Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { IconGithub, IconInstagram } from './Icons';

export default function IgCollabView() {
  const [copiedKey, setCopiedKey] = React.useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const contactList = [
    {
      key: "instagram",
      label: "Instagram Resmi",
      val: siteConfig.contact.instagram,
      url: siteConfig.contact.instagramUrl,
      icon: IconInstagram,
      action: "Buka Akun"
    },
    {
      key: "whatsapp",
      label: "WhatsApp Chat",
      val: siteConfig.contact.whatsapp,
      url: siteConfig.contact.whatsappUrl,
      icon: MessageSquare,
      action: "Kirim Chat"
    },
    {
      key: "github",
      label: "GitHub Hub",
      val: siteConfig.contact.github,
      url: siteConfig.contact.githubUrl,
      icon: IconGithub,
      action: "Lihat Repositori"
    },
    {
      key: "email",
      label: "Email",
      val: siteConfig.contact.email,
      url: siteConfig.contact.emailUrl,
      icon: Mail,
      action: "Kirim Email"
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* Collab Hero Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1320] border border-white/10 space-y-4">
        <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
          LET'S COLLABORATE
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Mari Berdiskusi &amp; Rancang Projek Bersama.
        </h3>
        <p className="text-sm text-[#94A3B8] leading-relaxed max-w-2xl">
          ARF Creative membuka kolaborasi untuk pembuatan landing page, web platform editorial, etalase brand lokal, maupun bimbingan proses belajar koding web.
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-[#060B13] bg-[#38BDF8] hover:bg-white transition-colors min-h-[44px]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Mulai Chat WhatsApp</span>
          </a>

          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#060B13] hover:bg-white/10 border border-white/10 transition-colors min-h-[44px]"
          >
            <IconInstagram className="w-4 h-4 text-[#E1306C]" />
            <span>DM Instagram @arf_.creative</span>
          </a>
        </div>
      </div>

      {/* Direct Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {contactList.map((c) => {
          const IconComp = c.icon;
          const isCopied = copiedKey === c.key;

          return (
            <div
              key={c.key}
              className="p-4 rounded-xl bg-[#0B1320] border border-white/10 flex items-center justify-between"
            >
              <div className="space-y-0.5">
                <div className="text-[11px] font-mono text-[#94A3B8]">{c.label}</div>
                <div className="text-xs sm:text-sm font-bold text-white font-mono">{c.val}</div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleCopy(c.val, c.key)}
                  className="p-2 rounded-lg bg-[#060B13] border border-white/10 text-[#94A3B8] hover:text-white min-h-[40px] min-w-[40px] flex items-center justify-center"
                  title="Salin"
                  aria-label={`Salin ${c.label}`}
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>

                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#060B13] border border-white/10 text-[#38BDF8] hover:text-white min-h-[40px] min-w-[40px] flex items-center justify-center"
                  title={c.action}
                  aria-label={c.action}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Process Steps */}
      <div className="p-6 rounded-2xl bg-[#0B1320] border border-white/10 space-y-4">
        <h4 className="text-sm font-mono font-bold text-white uppercase">
          Alur Pengerjaan &amp; Dokumentasi
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-[#060B13] border border-white/5 space-y-1">
            <span className="font-mono text-[#38BDF8] font-bold">01. Diskusi</span>
            <p className="text-[#94A3B8]">Memahami esensi dan tujuan projek yang ingin dibuat.</p>
          </div>
          <div className="p-3 rounded-lg bg-[#060B13] border border-white/5 space-y-1">
            <span className="font-mono text-[#38BDF8] font-bold">02. Eksekusi</span>
            <p className="text-[#94A3B8]">Rancang bangun antarmuka dan koding web modern.</p>
          </div>
          <div className="p-3 rounded-lg bg-[#060B13] border border-white/5 space-y-1">
            <span className="font-mono text-[#38BDF8] font-bold">03. Rilis</span>
            <p className="text-[#94A3B8]">Publikasi ke Vercel dan penyusunan catatan dokumentasi.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
