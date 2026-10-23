import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ResumeBook from './ResumeBook';

const RESUMES = [
  {
    id: 'se',
    label: 'Software Engineering',
    role: 'Software Engineer',
    headline: 'Builds scalable production software.',
    stack: 'Full-Stack • Java • Python • MERN',
    badge: 'Default',
    file: '/resume/vishal-software-engineer.pdf',
    filename: 'Vishal_Software_Engineer_Resume.pdf',
    glyphType: 'code',
  },
  {
    id: 'ai',
    label: 'Artificial Intelligence',
    role: 'AI Engineer',
    headline: 'Builds intelligent AI systems.',
    stack: 'LLMs • Vision • NLP • Agents • Python',
    badge: 'Specialized',
    file: '/resume/vishal-ai-engineer.pdf',
    filename: 'Vishal_AI_Engineer_Resume.pdf',
    glyphType: 'spark',
  },
];

const Glyph = ({ type }) => (
  <span
    className={`shrink-0 mt-0.5 w-11 h-11 rounded-xl flex items-center justify-center border ${
      type === 'spark'
        ? 'bg-gradient-to-br from-[#ff2a2a]/20 to-[#ff2a2a]/[0.02] border-[#ff2a2a]/25 text-[#ff8a8a]'
        : 'bg-gradient-to-br from-white/[0.08] to-white/[0.01] border-white/10 text-white'
    }`}
  >
    {type === 'spark' ? (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
        <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
      </svg>
    ) : (
      <span className="font-mono text-[13px] font-black tracking-tight">&lt;/&gt;</span>
    )}
  </span>
);

const ResumePopover = ({ trigger, align = 'left' }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [viewerId, setViewerId] = useState(null);
  const wrapRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive((i) => (i + 1) % RESUMES.length); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setActive((i) => (i - 1 + RESUMES.length) % RESUMES.length); }
      if (e.key === 'Enter') { e.preventDefault(); download(RESUMES[active]); }
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, active]);

  useEffect(() => {
    if (open) itemRefs.current[active]?.focus();
  }, [open, active]);

  const download = (r) => {
    const a = document.createElement('a');
    a.href = r.file;
    a.download = r.filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setOpen(false);
  };

  const openViewer = (r, e) => {
    e?.stopPropagation();
    setViewerId(r.id);
    setOpen(false);
  };

  return (
    <div ref={wrapRef} className="relative inline-block">
      {trigger({ onClick: () => setOpen((o) => !o), 'aria-expanded': open, 'aria-haspopup': 'menu' })}
      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            aria-label="Choose resume"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute z-[60] mt-3 w-[340px] sm:w-[400px] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.03] ${
              align === 'right' ? 'right-0' : 'left-0'
            }`}
          >
            {/* header */}
            <div className="px-5 pt-5 pb-4 border-b border-white/[0.06] text-center">
              <p className="text-[15px] font-semibold text-white tracking-tight">
                Choose Your Profile
              </p>
              <p className="text-[11.5px] text-white/45 mt-1.5 leading-snug">
                Select the version of my experience
                <br className="hidden sm:inline" />
                that best matches your hiring needs.
              </p>
            </div>

            {/* items */}
            <div className="flex flex-col gap-1 p-2">
              {RESUMES.map((r, i) => (
                <button
                  key={r.id}
                  ref={(el) => (itemRefs.current[i] = el)}
                  role="menuitem"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => download(r)}
                  className={`group relative text-left flex items-start gap-3.5 px-3 py-3.5 rounded-xl transition-all duration-200 outline-none border ${
                    active === i
                      ? 'bg-white/[0.05] border-white/10 shadow-[0_0_0_1px_rgba(255,42,42,0.15)_inset]'
                      : 'bg-transparent border-transparent hover:bg-white/[0.03]'
                  }`}
                >
                  <Glyph type={r.glyphType} />
                  <span className="flex-1 min-w-0">
                    <span className="flex items-center gap-2 flex-wrap">
                      <span className="text-[14px] font-semibold text-white leading-tight tracking-tight">
                        {r.label}
                      </span>
                      <span
                        className={`text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded border ${
                          r.badge === 'Default'
                            ? 'border-white/15 bg-white/[0.05] text-white/70'
                            : 'border-[#ff2a2a]/30 bg-[#ff2a2a]/10 text-[#ff8a8a]'
                        }`}
                      >
                        {r.badge}
                      </span>
                    </span>
                    <span className="block text-[11.5px] text-white/60 mt-1 leading-snug">
                      {r.headline}
                    </span>
                    <span className="block text-[10.5px] text-white/35 mt-1 font-mono tracking-wide">
                      {r.stack}
                    </span>
                  </span>
                  <span
                    className="self-center flex items-center gap-1.5 pl-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={(e) => openViewer(r, e)}
                      title="Preview as book"
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                        active === i
                          ? 'border-white/15 bg-white/[0.06] text-white'
                          : 'border-white/10 bg-white/[0.02] text-white/60 hover:text-white hover:bg-white/[0.06]'
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); download(r); }}
                      title="Download PDF"
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                        active === i
                          ? 'border-[#ff2a2a]/40 bg-[#ff2a2a]/15 text-[#ff8a8a]'
                          : 'border-white/10 bg-white/[0.02] text-white/60 hover:text-white hover:bg-white/[0.06]'
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"/>
                      </svg>
                    </button>
                  </span>
                </button>
              ))}
            </div>

            {/* footer */}
            <button
              onClick={() => RESUMES.forEach(download)}
              className="group w-full flex items-center justify-center gap-2 px-4 py-3 border-t border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.04] transition-colors"
            >
              <span className="text-[11px] text-white/50">Need both?</span>
              <span className="text-[11.5px] font-semibold text-white group-hover:text-[#ff2a2a] transition-colors">
                Download Both Profiles
              </span>
              <span className="text-white/40 group-hover:text-[#ff2a2a] group-hover:translate-x-0.5 transition-all">
                →
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <ResumeBook
        open={!!viewerId}
        profileId={viewerId || 'se'}
        onClose={() => setViewerId(null)}
      />
    </div>
  );
};

export default ResumePopover;