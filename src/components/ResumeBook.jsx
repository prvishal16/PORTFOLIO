import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  profile as profileData,
  skillCategories,
  experience,
  projects,
  education,
  certifications,
} from '../data/portfolio';

// ============================================================
// ResumeBook — a premium, cinematic "coffee-table book" resume viewer.
// Not a PDF. Not an iframe. Every page is a hand-built editorial layout.
// ============================================================

const PROFILES = {
  se: {
    id: 'se',
    label: 'Engineering',
    role: 'Full Stack Engineer',
    accent: '#ff2a2a',
    file: '/resume/vishal-software-engineer.pdf',
    filename: 'Vishal_Software_Engineer_Resume.pdf',
    glyph: '</>',
  },
  ai: {
    id: 'ai',
    label: 'Artificial Intelligence',
    role: 'AI Engineer',
    accent: '#ff2a2a',
    file: '/resume/vishal-ai-engineer.pdf',
    filename: 'Vishal_AI_Engineer_Resume.pdf',
    glyph: '✦',
  },
};

// ------------------ Page primitives ------------------

const Page = ({ children, side = 'right', pageNumber, total }) => (
  <div
    className="relative w-full h-full bg-[#faf8f4] text-[#111] overflow-hidden"
    style={{
      backgroundImage:
        'radial-gradient(1200px 800px at 30% 20%, rgba(255,255,255,0.9), transparent), radial-gradient(600px 400px at 70% 90%, rgba(0,0,0,0.04), transparent)',
    }}
  >
    {/* Page inner shadow near spine */}
    <div
      className={`pointer-events-none absolute inset-y-0 w-16 ${
        side === 'right' ? 'left-0' : 'right-0'
      }`}
      style={{
        background:
          side === 'right'
            ? 'linear-gradient(to right, rgba(0,0,0,0.22), rgba(0,0,0,0))'
            : 'linear-gradient(to left, rgba(0,0,0,0.22), rgba(0,0,0,0))',
      }}
    />
    <div className="relative w-full h-full px-10 md:px-14 py-10 md:py-14 flex flex-col">
      {children}
    </div>
    {pageNumber && (
      <div
        className={`absolute bottom-4 ${
          side === 'right' ? 'right-6' : 'left-6'
        } text-[10px] tracking-[0.3em] uppercase text-[#111]/40 font-mono`}
      >
        {String(pageNumber).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    )}
  </div>
);

const SectionTitle = ({ children, accent }) => (
  <div className="flex items-center gap-3 mb-5">
    <span
      className="inline-block w-8 h-[2px]"
      style={{ background: accent }}
    />
    <h3
      className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#111]/60"
    >
      {children}
    </h3>
  </div>
);

// ------------------ Cover page ------------------

const CoverPage = ({ p }) => (
  <div
    className="relative w-full h-full overflow-hidden text-white"
    style={{
      background:
        'radial-gradient(1000px 700px at 20% 10%, #1a1a1a, #050505 60%)',
    }}
  >
    <div
      className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-40"
      style={{ background: p.accent }}
    />
    <div className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, #fff 0 1px, transparent 1px 40px)',
      }}
    />
    <div className="relative h-full w-full px-12 py-14 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/50">
          Résumé · 2026
        </span>
        <span
          className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center font-mono text-sm"
          style={{ color: p.accent }}
        >
          {p.glyph}
        </span>
      </div>

      <div>
        <div
          className="text-[10px] font-mono uppercase tracking-[0.4em] mb-4"
          style={{ color: p.accent }}
        >
          {p.label} Profile
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[0.95]">
          PR
          <br />
          Vishal
          <span style={{ color: p.accent }}>.</span>
        </h1>
        <p className="mt-5 text-white/60 text-sm max-w-xs leading-relaxed">
          {p.role} — building intelligent products end to end.
        </p>
      </div>

      <div className="flex items-end justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
        <span>Hyderabad · IN</span>
        <span>Vol. 01</span>
      </div>
    </div>
  </div>
);

// ------------------ Content pages ------------------

const ProfilePage = ({ p, total, pageNumber }) => (
  <Page side="right" pageNumber={pageNumber} total={total}>
    <SectionTitle accent={p.accent}>Profile</SectionTitle>
    <h2 className="text-4xl font-black tracking-tight leading-none mb-1">
      {profileData.shortName}
    </h2>
    <p className="text-[13px] uppercase tracking-[0.25em] text-[#111]/50 mb-6 font-mono">
      {p.role}
    </p>
    <p className="text-[14px] leading-relaxed text-[#111]/80 mb-8">
      {p.id === 'ai'
        ? 'AI engineer building production intelligence — LLM agents, RAG pipelines, computer vision and real-time ML systems shipped inside real products.'
        : profileData.summary}
    </p>

    <SectionTitle accent={p.accent}>Contact</SectionTitle>
    <ul className="text-[13px] space-y-2 text-[#111]/80">
      <li className="flex justify-between border-b border-black/5 pb-1.5"><span className="text-[#111]/50">Email</span><span>{profileData.email}</span></li>
      <li className="flex justify-between border-b border-black/5 pb-1.5"><span className="text-[#111]/50">Phone</span><span>{profileData.phone}</span></li>
      <li className="flex justify-between border-b border-black/5 pb-1.5"><span className="text-[#111]/50">GitHub</span><span>github.com/prvishal16</span></li>
      <li className="flex justify-between border-b border-black/5 pb-1.5"><span className="text-[#111]/50">LinkedIn</span><span>in/prvishal16</span></li>
      <li className="flex justify-between"><span className="text-[#111]/50">Location</span><span>Hyderabad, IN</span></li>
    </ul>
  </Page>
);

const SkillsPage = ({ p, total, pageNumber }) => {
  const filtered = p.id === 'ai'
    ? [
        { label: 'AI / ML', skills: [{ name: 'PyTorch' }, { name: 'TensorFlow' }, { name: 'scikit-learn' }, { name: 'MediaPipe' }] },
        { label: 'LLM & Agents', skills: [{ name: 'OpenRouter' }, { name: 'LangChain' }, { name: 'RAG' }, { name: 'Vector DBs' }] },
        { label: 'Languages', skills: [{ name: 'Python' }, { name: 'TypeScript' }, { name: 'JavaScript' }] },
        { label: 'Systems', skills: [{ name: 'FastAPI' }, { name: 'Docker' }, { name: 'PostgreSQL' }, { name: 'AWS' }] },
      ]
    : skillCategories;
  return (
    <Page side="left" pageNumber={pageNumber} total={total}>
      <SectionTitle accent={p.accent}>Capabilities</SectionTitle>
      <h2 className="text-3xl font-black tracking-tight mb-6">Toolkit</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
        {filtered.map((cat) => (
          <div key={cat.label}>
            <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#111]/45 mb-2">{cat.label}</p>
            <ul className="space-y-1">
              {cat.skills.map((s) => (
                <li key={s.name} className="text-[13px] text-[#111]/85 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full" style={{ background: p.accent }} />
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Page>
  );
};

const ExperiencePage = ({ p, total, pageNumber }) => (
  <Page side="right" pageNumber={pageNumber} total={total}>
    <SectionTitle accent={p.accent}>Experience</SectionTitle>
    <h2 className="text-3xl font-black tracking-tight mb-6">Where I've built</h2>
    <div className="space-y-5">
      {experience.map((e) => (
        <div key={e.id} className="border-l-2 pl-4" style={{ borderColor: `${p.accent}55` }}>
          <div className="flex items-baseline justify-between gap-3">
            <h4 className="text-[14px] font-bold tracking-tight">{e.role}</h4>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#111]/50 whitespace-nowrap">{e.period}</span>
          </div>
          <p className="text-[12px] text-[#111]/60 mb-1.5">{e.org}</p>
          <ul className="text-[12px] text-[#111]/75 leading-relaxed space-y-0.5">
            {e.points.slice(0, 2).map((pt, i) => (<li key={i}>• {pt}</li>))}
          </ul>
        </div>
      ))}
    </div>
  </Page>
);

const ProjectsPage = ({ p, total, pageNumber }) => {
  const list = p.id === 'ai'
    ? projects.filter((pr) => ['talentforge', 'deployai'].includes(pr.id))
    : projects.filter((pr) => ['workloom', 'gethired', 'deployai'].includes(pr.id));
  return (
    <Page side="left" pageNumber={pageNumber} total={total}>
      <SectionTitle accent={p.accent}>Selected Work</SectionTitle>
      <h2 className="text-3xl font-black tracking-tight mb-6">Projects</h2>
      <div className="space-y-5">
        {list.map((pr) => (
          <div key={pr.id}>
            <div className="flex items-baseline justify-between gap-3 mb-1">
              <h4 className="text-[15px] font-bold tracking-tight">{pr.title}</h4>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#111]/50">{pr.category.split(' · ')[1]}</span>
            </div>
            <p className="text-[12px] text-[#111]/70 leading-relaxed mb-1.5">{pr.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {pr.tech.slice(0, 5).map((t) => (
                <span key={t} className="text-[9.5px] font-mono px-1.5 py-0.5 rounded border border-black/10 text-[#111]/60">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};

const ClosingPage = ({ p, total, pageNumber }) => (
  <Page side="right" pageNumber={pageNumber} total={total}>
    <SectionTitle accent={p.accent}>Education</SectionTitle>
    <div className="space-y-4 mb-8">
      {education.map((e) => (
        <div key={e.school}>
          <h4 className="text-[13px] font-bold tracking-tight">{e.school}</h4>
          <p className="text-[12px] text-[#111]/65">{e.degree}</p>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#111]/45 mt-0.5">{e.period} · {e.detail}</p>
        </div>
      ))}
    </div>

    <SectionTitle accent={p.accent}>Certifications</SectionTitle>
    <ul className="space-y-1.5 mb-8">
      {certifications.map((c) => (
        <li key={c} className="text-[12px] text-[#111]/75 flex gap-2">
          <span className="w-1 h-1 mt-2 rounded-full flex-shrink-0" style={{ background: p.accent }} />
          {c}
        </li>
      ))}
    </ul>

    <div className="mt-auto pt-6 border-t border-black/10 flex items-center justify-between">
      <div>
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#111]/40">End of profile</p>
        <p className="text-[13px] font-bold mt-1">Let's build something.</p>
      </div>
      <span className="text-[11px] font-mono text-[#111]/50">{profileData.email}</span>
    </div>
  </Page>
);

// ------------------ Book shell ------------------

const buildPages = (p) => [
  { key: 'cover', render: () => <CoverPage p={p} /> },
  { key: 'profile', render: (n, t) => <ProfilePage p={p} pageNumber={n} total={t} /> },
  { key: 'skills', render: (n, t) => <SkillsPage p={p} pageNumber={n} total={t} /> },
  { key: 'experience', render: (n, t) => <ExperiencePage p={p} pageNumber={n} total={t} /> },
  { key: 'projects', render: (n, t) => <ProjectsPage p={p} pageNumber={n} total={t} /> },
  { key: 'closing', render: (n, t) => <ClosingPage p={p} pageNumber={n} total={t} /> },
];

const ResumeBook = ({ open, profileId = 'se', onClose }) => {
  const p = PROFILES[profileId] || PROFILES.se;
  const pages = useMemo(() => buildPages(p), [p]);
  const total = pages.length;

  // spreadIndex: 0 = cover alone, then pairs (1,2), (3,4), (5,-)
  const spreads = useMemo(() => {
    const arr = [[0]];
    for (let i = 1; i < total; i += 2) {
      arr.push([i, i + 1 < total ? i + 1 : null]);
    }
    return arr;
  }, [total]);

  const [spread, setSpread] = useState(0);
  const [flipDir, setFlipDir] = useState(1);
  const [mode, setMode] = useState('book'); // 'book' | 'magazine'
  const [fullscreen, setFullscreen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const bookRef = useRef(null);

  useEffect(() => {
    if (open) {
      setSpread(0);
      setFlipDir(1);
    }
  }, [open, profileId]);

  const next = () => {
    if (spread < spreads.length - 1) {
      setFlipDir(1);
      setSpread((s) => s + 1);
    }
  };
  const prev = () => {
    if (spread > 0) {
      setFlipDir(-1);
      setSpread((s) => s - 1);
    }
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      if (e.key.toLowerCase() === 'f') setFullscreen((f) => !f);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [open]);

  const download = () => {
    const a = document.createElement('a');
    a.href = p.file;
    a.download = p.filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleMouse = (e) => {
    if (!bookRef.current || mode !== 'book') return;
    const r = bookRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -4, y: px * 6 });
  };
  const resetTilt = () => setTilt({ x: 0, y: 0 });

  const [leftIdx, rightIdx] = spreads[spread] || [null, null];
  const currentPageDisplay = rightIdx != null ? rightIdx + 1 : leftIdx + 1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
            className="absolute inset-0"
            style={{
              background: 'rgba(5,5,5,0.85)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
            }}
          />

          {/* Top bar */}
          <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between">
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl">
              <span
                className="w-6 h-6 rounded-md border border-white/10 flex items-center justify-center text-xs font-mono"
                style={{ color: p.accent }}
              >{p.glyph}</span>
              <span className="text-[12px] text-white/85 font-semibold tracking-tight pr-2">{p.label}</span>
            </div>

            <div className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl text-white/70 text-[11px] font-mono tracking-widest">
              {String(currentPageDisplay).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMode((m) => (m === 'book' ? 'magazine' : 'book'))}
                className="hidden sm:inline-flex px-3 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl text-white/70 hover:text-white hover:bg-white/[0.08] text-[10px] font-mono uppercase tracking-widest transition-colors"
                title="Toggle view mode"
              >
                {mode === 'book' ? 'Book' : 'Magazine'}
              </button>
              <IconBtn onClick={() => setFullscreen((f) => !f)} title="Fullscreen (F)">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </IconBtn>
              <IconBtn onClick={download} title="Download">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </IconBtn>
              <IconBtn onClick={onClose} title="Close (Esc)">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" strokeLinecap="round"/></svg>
              </IconBtn>
            </div>
          </div>

          {/* Book area */}
          <div
            className="relative z-[1] w-full h-full flex items-center justify-center px-4 md:px-16 py-24"
            onMouseMove={handleMouse}
            onMouseLeave={resetTilt}
          >
            {mode === 'book' ? (
              <motion.div
                key={p.id + '-book'}
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ perspective: 2400 }}
                className="w-full max-w-[1100px]"
              >
                <motion.div
                  ref={bookRef}
                  animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                  transition={{ type: 'spring', stiffness: 60, damping: 18 }}
                  style={{
                    transformStyle: 'preserve-3d',
                    aspectRatio: fullscreen ? '16 / 10' : '16 / 10.5',
                    maxHeight: fullscreen ? '92vh' : '78vh',
                  }}
                  className="relative mx-auto w-full"
                >
                  {/* Book shadow */}
                  <div
                    className="absolute -inset-6 rounded-[28px] blur-3xl opacity-70 -z-10"
                    style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.7), transparent 65%)' }}
                  />
                  {/* Book thickness / cover base */}
                  <div
                    className="absolute inset-0 rounded-[18px]"
                    style={{
                      background: 'linear-gradient(180deg, #111 0%, #0a0a0a 100%)',
                      boxShadow: '0 40px 80px -20px rgba(0,0,0,0.9), 0 10px 30px rgba(0,0,0,0.5)',
                      transform: 'translateZ(-2px)',
                    }}
                  />
                  {/* Pages spread */}
                  <div className="absolute inset-[6px] rounded-[14px] overflow-hidden flex bg-black">
                    {/* LEFT */}
                    <div className="relative w-1/2 h-full">
                      <AnimatePresence initial={false} custom={flipDir}>
                        <motion.div
                          key={`L-${spread}`}
                          initial={{ rotateY: flipDir > 0 ? 0 : -180, opacity: flipDir > 0 ? 1 : 0.7 }}
                          animate={{ rotateY: 0, opacity: 1 }}
                          exit={{ rotateY: flipDir > 0 ? -180 : 0, opacity: flipDir > 0 ? 0.7 : 1 }}
                          transition={{ duration: 0.7, ease: [0.6, 0.05, 0.3, 0.95] }}
                          style={{ transformOrigin: 'right center', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                          className="absolute inset-0"
                        >
                          {leftIdx != null && pages[leftIdx].render(leftIdx + 1, total)}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    {/* Spine */}
                    <div
                      className="w-[2px] h-full relative"
                      style={{
                        background: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.15), rgba(0,0,0,0.5))',
                      }}
                    />
                    {/* RIGHT */}
                    <div className="relative w-1/2 h-full">
                      <AnimatePresence initial={false} custom={flipDir}>
                        <motion.div
                          key={`R-${spread}`}
                          initial={{ rotateY: flipDir > 0 ? 180 : 0, opacity: flipDir > 0 ? 0.7 : 1 }}
                          animate={{ rotateY: 0, opacity: 1 }}
                          exit={{ rotateY: flipDir > 0 ? 0 : 180, opacity: flipDir > 0 ? 1 : 0.7 }}
                          transition={{ duration: 0.7, ease: [0.6, 0.05, 0.3, 0.95] }}
                          style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                          className="absolute inset-0"
                        >
                          {rightIdx != null ? (
                            pages[rightIdx].render(rightIdx + 1, total)
                          ) : (
                            <div className="w-full h-full bg-[#f5f2ec] flex items-center justify-center text-[#111]/30 text-[11px] font-mono uppercase tracking-widest">
                              Back Cover
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                  {/* Corner light reflection */}
                  <div
                    className="pointer-events-none absolute inset-[6px] rounded-[14px]"
                    style={{
                      background: 'linear-gradient(115deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 30%)',
                    }}
                  />
                </motion.div>
              </motion.div>
            ) : (
              // Magazine mode — vertical scroll of same pages, stacked
              <motion.div
                key={p.id + '-mag'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-[720px] h-[82vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] scroll-smooth"
              >
                {pages.map((pg, i) => (
                  <div key={pg.key} className="aspect-[3/4] border-b border-black/40 last:border-b-0">
                    {pg.render(i + 1, total)}
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Bottom nav */}
          {mode === 'book' && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-2 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl">
              <IconBtn onClick={prev} disabled={spread === 0} title="Previous">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </IconBtn>
              <span className="px-3 text-[11px] font-mono tracking-widest text-white/60 min-w-[70px] text-center">
                {String(spread + 1).padStart(2, '0')} / {String(spreads.length).padStart(2, '0')}
              </span>
              <IconBtn onClick={next} disabled={spread === spreads.length - 1} title="Next">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </IconBtn>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const IconBtn = ({ children, onClick, disabled, title }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    title={title}
    className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl text-white/75 hover:text-white hover:bg-white/[0.1] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all"
  >
    {children}
  </button>
);

export default ResumeBook;