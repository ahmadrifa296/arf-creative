import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Check, MessageSquare, AlertCircle } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="kolaborasi" className="py-24 bg-[#050B14] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
            OPSI KERJA SAMA
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pilihan Kolaborasi &amp; Pengerjaan
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Format fleksibel yang dirancang untuk mendukung kebutuhan dokumentasi dan pembuatan website Anda.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {siteConfig.pricing.map((plan) => (
            <div
              key={plan.id}
              className={`glass-card rounded-2xl p-8 relative flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'border-[#38BDF8] shadow-2xl shadow-blue-600/20 md:scale-105 bg-[#0F172A]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Highlight Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white text-[10px] font-extrabold tracking-wider uppercase shadow-md">
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6 pt-2">
                  <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider">
                    {plan.title}
                  </span>
                  <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {plan.price}
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8 pt-6 border-t border-white/10">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#F8FAFC]">
                      <div className="p-0.5 rounded bg-[#2563EB]/20 border border-[#2563EB]/40 text-[#38BDF8] mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold rounded-xl transition-all min-h-[44px] ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white hover:from-[#1D4ED8] hover:to-[#0284C7] shadow-lg shadow-sky-500/30'
                      : 'bg-[#050B14] hover:bg-[#1E293B] text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{plan.ctaText}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Disclaimer Text */}
        <div className="mt-12 text-center max-w-xl mx-auto flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0A1220] border border-white/5 text-xs text-[#94A3B8]">
          <AlertCircle className="w-4 h-4 text-[#38BDF8] shrink-0" />
          <span>* Estimasi biaya menyesuaikan tingkat kompleksitas dan skala kebutuhan projek.</span>
        </div>

      </div>
    </section>
  );
}
