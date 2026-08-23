import React from 'react';
import { servicesData } from '../data/servicesData';
import { Code2, Cpu, Bug, Layout, MessageSquareCode, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Services() {
  const iconMap = {
    Code2,
    Cpu,
    Bug,
    Layout,
    MessageSquareCode
  };

  return (
    <section id="layanan" className="py-24 bg-[#050B14] relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#22D3EE] text-xs font-bold uppercase tracking-wider">
            SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            LAYANAN DISTECH
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Fokus pada pengembangan website dan kebutuhan project mahasiswa.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Code2;
            const isFeatured = idx === 0 || idx === 1; // subtle accent for top services

            return (
              <div
                key={service.id}
                className={`glass-card rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group ${
                  isFeatured ? 'border-[#2563EB]/40 hover:border-[#22D3EE]' : 'hover:border-white/20'
                }`}
              >
                {/* Subtle Card Glow background on hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#22D3EE]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-extrabold font-mono px-2.5 py-1 rounded-md bg-[#050B14] border border-white/10 text-[#22D3EE]">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#0A1220] border border-white/10 flex items-center justify-center text-[#22D3EE] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#22D3EE] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlight Bullets */}
                  <div className="space-y-2 mb-6">
                    {service.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#F8FAFC]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#22D3EE] group-hover:text-white transition-colors"
                  >
                    <span>Konsultasi Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
