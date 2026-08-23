import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { MessageSquare, Search, Code, CheckCircle, Send } from 'lucide-react';

export default function Workflow() {
  const stepIcons = [MessageSquare, Search, Code, CheckCircle, Send];

  return (
    <section id="proses" className="py-24 bg-[#0A1220] relative overflow-hidden border-y border-white/5">
      
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] text-xs font-bold uppercase tracking-wider">
            WORKFLOW & PROSES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Alur Pengerjaan Project
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Proses kerja yang transparan, terstruktur, dan terukur dari awal hingga akhir.
          </p>
        </div>

        {/* Responsive Timeline Grid */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2563EB]/20 via-[#22D3EE] to-[#2563EB]/20 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {siteConfig.workflowSteps.map((step, idx) => {
              const IconComp = stepIcons[idx] || Code;
              return (
                <div
                  key={step.step}
                  className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#22D3EE]/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Step Icon Badge */}
                    <div className="relative mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#050B14] border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-all duration-300 shadow-lg shadow-cyan-500/10">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="absolute top-0 right-0 font-mono text-2xl font-black text-white/20 group-hover:text-[#22D3EE]/40 transition-colors">
                        {step.step}
                      </span>
                    </div>

                    {/* Step Content */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#22D3EE] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Footer */}
                  <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-semibold text-[#64748B] flex items-center justify-between">
                    <span>Tahap {step.step}</span>
                    <span className="w-2 h-2 rounded-full bg-[#22D3EE]/50 group-hover:bg-[#22D3EE] transition-colors"></span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
