import React, { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { X, Heart, MessageCircle, Share2, ExternalLink, MessageSquare, ArrowRight } from 'lucide-react';
import { IconGithub } from './Icons';

export default function IgPostModal({ post, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-post-title"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0A1220] border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* Left Side: Visual Showcase of the Post */}
        <div className={`md:w-1/2 min-h-[300px] md:min-h-[500px] bg-gradient-to-br ${post.bgGradient} relative flex flex-col justify-between p-6 sm:p-8 border-b md:border-b-0 md:border-r border-white/10 select-none`}>
          <div className="absolute inset-0 editorial-grid opacity-70 pointer-events-none"></div>

          {/* Top Logo */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white">
            <span className="font-black text-sm tracking-widest">ARF</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-[#38BDF8]">
              {post.category}
            </span>
          </div>

          {/* Center Graphic */}
          <div className="relative z-10 my-auto text-center space-y-3 py-6">
            {post.type === 'manifesto' && (
              <>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Hello Words!
                </h3>
                <div className="flex justify-center">
                  <svg className="w-16 h-16 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20 C 16 48, 38 48, 48 36" />
                    <polyline points="38 34, 48 36, 44 48" />
                  </svg>
                </div>
              </>
            )}

            {post.type === 'brand' && (
              <div className="space-y-1">
                <div className="relative inline-block">
                  <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                    ARF
                  </span>
                  <div className="absolute -top-4 -right-6 flex flex-col">
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                      <line x1="2" y1="20" x2="16" y2="6" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
                      <line x1="8" y1="24" x2="26" y2="16" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
                      <line x1="6" y1="28" x2="22" y2="28" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="text-lg font-semibold text-white/90">Creative</div>
              </div>
            )}

            {post.type === 'collab' && (
              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  let's Create!
                </h3>
                <p className="text-lg italic font-serif text-white/80">
                  with us
                </p>
              </div>
            )}

            {post.type === 'project' && (
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#94A3B8] uppercase">PROJEK</div>
                <div className="text-xl sm:text-2xl font-black text-white">{post.projectTitle}</div>
                <div className="text-sm font-black text-[#FBBF24] tracking-wider">{post.projectBadge}</div>
                <div className="text-xs text-[#94A3B8]">{post.docSubtitle}</div>
              </div>
            )}
          </div>

          {/* Bottom Feed Signature */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#94A3B8]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]"></span>
              <span className="text-white font-bold">{post.views} views</span>
            </div>
            <span>@arf_.creative</span>
          </div>
        </div>

        {/* Right Side: Caption, Documentation, Tech Stack, & Actions */}
        <div className="md:w-1/2 flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-[85vh]">
          
          {/* Header Bar */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#0A1220]/95 backdrop-blur-md z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#071124] border border-[#38BDF8]/40 flex items-center justify-center font-bold text-xs text-white">
                ARF
              </div>
              <div>
                <div className="text-xs font-extrabold text-white">arf_.creative</div>
                <div className="text-[10px] text-[#94A3B8]">{post.category}</div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#060B13] border border-white/10 text-[#94A3B8] hover:text-white min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label="Tutup jendela postingan"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Caption & Documentation Content */}
          <div className="p-5 space-y-4 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            <div>
              <h4 id="modal-post-title" className="text-base font-extrabold text-white mb-1.5">
                {post.captionTitle}
              </h4>
              <p>{post.captionText}</p>
            </div>

            {/* Problem & Solution for Projects */}
            {post.problemStatement && (
              <div className="p-3.5 rounded-xl bg-[#060B13] border border-white/5 space-y-2 text-xs">
                <div>
                  <span className="font-bold text-[#38BDF8] uppercase tracking-wide text-[10px] block">
                    Fokus Masalah:
                  </span>
                  <p className="text-[#94A3B8] mt-0.5">{post.problemStatement}</p>
                </div>
                <div>
                  <span className="font-bold text-emerald-400 uppercase tracking-wide text-[10px] block">
                    Pendekatan Solusi:
                  </span>
                  <p className="text-[#94A3B8] mt-0.5">{post.solutionDetails}</p>
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {post.techStack && (
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-white font-bold uppercase">
                  Teknologi yang Digunakan:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {post.techStack.map((tech, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#060B13] text-[#38BDF8] border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1 text-xs text-[#38BDF8]">
              {post.tags.map((tag, i) => (
                <span key={i} className="hover:underline cursor-pointer">{tag}</span>
              ))}
            </div>

            <div className="text-[10px] font-mono text-[#64748B]">
              Diunggah pada {post.date}
            </div>
          </div>

          {/* Actions & Buttons */}
          <div className="p-4 border-t border-white/10 bg-[#070D18] space-y-3">
            
            {/* Action Row */}
            <div className="flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 font-bold">
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  <span>{post.likes} suka</span>
                </span>
                <span className="flex items-center gap-1 text-[#94A3B8]">
                  <MessageCircle className="w-4 h-4" />
                  <span>Dokumentasi</span>
                </span>
              </div>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-[#38BDF8] hover:text-white"
              >
                <span>Tanya Projek</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Project Buttons if available */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {post.githubUrl && (
                <a
                  href={post.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-white bg-[#060B13] hover:bg-white/10 border border-white/10 min-h-[40px]"
                >
                  <IconGithub className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {post.liveDemoUrl && (
                <a
                  href={post.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-[#060B13] bg-[#38BDF8] hover:bg-white min-h-[40px]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Preview</span>
                </a>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
