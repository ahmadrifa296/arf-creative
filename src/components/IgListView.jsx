import React from 'react';
import { igPostsData } from '../data/portfolioData';
import { ExternalLink, Eye, Heart } from 'lucide-react';
import { IconGithub } from './Icons';

export default function IgListView({ onSelectPost }) {
  const projectPosts = igPostsData.filter(p => p.type === 'project');

  return (
    <div className="space-y-6">
      {projectPosts.map((post) => (
        <article
          key={post.id}
          className="p-5 sm:p-6 rounded-xl bg-[#0B1320] border border-white/10 hover:border-white/20 transition-colors space-y-4"
        >
          <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] pb-3 border-b border-white/5">
            <span className="text-[#38BDF8] font-bold">{post.docSubtitle}</span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3 text-[#38BDF8]" />
                {post.views}
              </span>
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3 text-red-400" />
                {post.likes}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-white">
              {post.captionTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mt-2">
              {post.captionText}
            </p>
          </div>

          {post.problemStatement && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs p-3.5 rounded-lg bg-[#060B13] border border-white/5">
              <div>
                <span className="font-bold text-[#38BDF8] block">Fokus Masalah:</span>
                <p className="text-[#94A3B8] mt-0.5">{post.problemStatement}</p>
              </div>
              <div>
                <span className="font-bold text-emerald-400 block">Pendekatan Solusi:</span>
                <p className="text-[#94A3B8] mt-0.5">{post.solutionDetails}</p>
              </div>
            </div>
          )}

          {post.techStack && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {post.techStack.map((tech, idx) => (
                <span key={idx} className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#060B13] text-[#38BDF8] border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
            <button
              onClick={() => onSelectPost(post)}
              className="text-xs font-bold text-[#38BDF8] hover:text-white transition-colors min-h-[44px] flex items-center"
            >
              <span>Buka Tampilan Feed &amp; Dokumentasi &rarr;</span>
            </button>

            <div className="flex items-center gap-2">
              {post.githubUrl && (
                <a
                  href={post.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#060B13] hover:bg-white/10 border border-white/10 min-h-[44px]"
                >
                  <IconGithub className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>GitHub</span>
                </a>
              )}

              {post.liveDemoUrl && (
                <a
                  href={post.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#060B13] bg-[#38BDF8] hover:bg-white min-h-[44px]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
