import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Phone, Mail, Copy, Check, ExternalLink, MessageSquare } from 'lucide-react';
import { IconGithub, IconInstagram } from './Icons';

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const contactItems = [
    {
      key: "whatsapp",
      label: "WhatsApp",
      value: siteConfig.contact.whatsapp,
      url: siteConfig.contact.whatsappUrl,
      icon: Phone,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/30"
    },
    {
      key: "instagram",
      label: "Instagram",
      value: siteConfig.contact.instagram,
      url: siteConfig.contact.instagramUrl,
      icon: IconInstagram,
      color: "text-pink-400",
      bgColor: "bg-pink-500/10 border-pink-500/30"
    },
    {
      key: "github",
      label: "GitHub",
      value: siteConfig.contact.github,
      url: siteConfig.contact.githubUrl,
      icon: IconGithub,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10 border-cyan-500/30"
    },
    {
      key: "email",
      label: "Email",
      value: siteConfig.contact.email,
      url: siteConfig.contact.emailUrl,
      icon: Mail,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10 border-blue-500/30"
    }
  ];

  return (
    <section id="kontak" className="py-24 bg-[#0A1220] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#22D3EE] text-xs font-bold uppercase tracking-wider">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hubungi DisTech
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Pilih saluran komunikasi yang paling nyaman bagi Anda untuk mendiskusikan project website.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item) => {
            const IconComp = item.icon;
            const isCopied = copiedKey === item.key;

            return (
              <div
                key={item.key}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${item.bgColor} ${item.color}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <button
                      onClick={() => handleCopy(item.value, item.key)}
                      className="p-2 rounded-lg bg-[#050B14] border border-white/10 text-[#94A3B8] hover:text-white hover:border-white/20 transition-colors"
                      title="Salin Kontak"
                      aria-label={`Salin ${item.label}`}
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                    {item.label}
                  </div>
                  <div className="text-base font-mono font-bold text-white break-all mb-4">
                    {item.value}
                  </div>
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-bold text-white bg-[#050B14] hover:bg-[#1E293B] border border-white/10 hover:border-white/20 rounded-xl transition-all"
                >
                  <span>Buka {item.label}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#22D3EE]" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
