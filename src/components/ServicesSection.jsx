import React from 'react';
import { servicesData } from '../data/servicesData';
import { siteConfig } from '../data/siteConfig';
import { ArrowUpRight, MessageSquare } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-24 bg-[#060D1F] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase">
            BIDANG EKSPLORASI &amp; LAYANAN
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Layanan Rancang Bangun &amp; Dokumentasi
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Menemani proses pembuatan website Anda dari perancangan konsep visual, penulisan kode, hingga penyusunan dokumentasi teknis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="p-8 rounded-2xl bg-[#091533] border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                  <span className="font-mono text-xs font-bold text-[#38BDF8]">
                    {svc.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase">
                    FOKUS EKSPLORASI
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors mb-2">
                  {svc.title}
                </h3>

                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {svc.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  {svc.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#38BDF8] hover:text-white transition-colors min-h-[44px]"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Diskusikan Kebutuhan</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
