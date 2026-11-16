import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Copy, Check, ExternalLink, MessageSquare, Mail } from 'lucide-react';
import { IconGithub, IconInstagram } from './Icons';

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const channels = [
    {
      key: "instagram",
      label: "Instagram Resmi",
      value: siteConfig.contact.instagram,
      url: siteConfig.contact.instagramUrl,
      icon: IconInstagram,
      actionText: "Buka Profil",
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      value: siteConfig.contact.whatsapp,
      url: siteConfig.contact.whatsappUrl,
      icon: MessageSquare,
      actionText: "Kirim Pesan",
    },
    {
      key: "github",
      label: "GitHub Repository",
      value: siteConfig.contact.github,
      url: siteConfig.contact.githubUrl,
      icon: IconGithub,
      actionText: "Buka Repository",
    },
    {
      key: "email",
      label: "Email Langsung",
      value: siteConfig.contact.email,
      url: siteConfig.contact.emailUrl,
      icon: Mail,
      actionText: "Kirim Email",
    }
  ];

  return (
    <section id="kontak" className="py-20 bg-[#060B13] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-10 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase mb-1">
              DIREKTORI KONTAK
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Saluran Komunikasi Resmi
            </h2>
          </div>
          <p className="text-xs font-mono text-[#94A3B8]">
            RESPON CEPAT VIA INSTAGRAM DM &amp; WHATSAPP
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map((ch) => {
            const IconComponent = ch.icon;
            const isCopied = copiedKey === ch.key;

            return (
              <div
                key={ch.key}
                className="p-5 rounded-xl bg-[#0B1320] border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                    <span className="text-[11px] font-mono text-[#94A3B8] uppercase">
                      {ch.label}
                    </span>
                    <button
                      onClick={() => handleCopy(ch.value, ch.key)}
                      className="p-1.5 rounded bg-[#060B13] text-[#94A3B8] hover:text-white border border-white/5 hover:border-white/20 transition-colors"
                      title="Salin Kontak"
                      aria-label={`Salin ${ch.label}`}
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <div className="font-mono text-sm font-bold text-white break-all mb-4">
                    {ch.value}
                  </div>
                </div>

                <a
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-2 text-xs font-semibold text-[#38BDF8] hover:text-white transition-colors"
                >
                  <span>{ch.actionText}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
