import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function WorkflowSection() {
  return (
    <section id="alur" className="py-24 bg-[#08122A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase">
            ALUR KERJA &amp; DOKUMENTASI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bagaimana Setiap Projek Dikerjakan &amp; Dicatat.
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Tidak ada jalan pintas dalam menghasilkan website yang solid. Setiap tahapan memiliki tujuan nyata yang terukur dari awal diskusi hingga rilis akhir.
          </p>
        </div>

        {/* Process Flow - Clean Editorial Stack */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {siteConfig.processSteps.map((item) => (
            <div
              key={item.step}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group hover:bg-[#0A1635] transition-colors px-3 rounded-xl"
            >
              {/* Step Number */}
              <div className="md:col-span-2">
                <span className="font-mono text-sm sm:text-base font-bold text-[#38BDF8]">
                  TAHAP {item.step}
                </span>
              </div>

              {/* Step Title */}
              <div className="md:col-span-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Step Description */}
              <div className="md:col-span-6">
                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
