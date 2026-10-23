import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { HiArrowUpRight } from 'react-icons/hi2';
import { projects } from '../data/portfolio';

import talentforgeImg from '../assets/projects/talentforge.jpg';
import deployaiImg from '../assets/projects/deployai.jpg';
import workloomImg from '../assets/projects/workloom.jpg';
import gethiredImg from '../assets/projects/gethired.jpg';
import enviroclassImg from '../assets/projects/enviroclass.jpg';
import graftluminexImg from '../assets/projects/graftluminex.jpg';
import netoptixImg from '../assets/projects/netoptix.jpg';
import backriseImg from '../assets/projects/backrise.jpg';
import codexImg from '../assets/projects/codex.jpg';
import fridayImg from '../assets/projects/friday.jpg';
import fincortexImg from '../assets/projects/fincortex.jpg';

const covers = {
  talentforge: talentforgeImg,
  deployai: deployaiImg,
  workloom: workloomImg,
  gethired: gethiredImg,
  enviroclass: enviroclassImg,
  graftluminex: graftluminexImg,
  netoptix: netoptixImg,
  backrise: backriseImg,
  codex: codexImg,
  friday: fridayImg,
  fincortex: fincortexImg,
};

// Pyramid stack: TalentForge (bottom, featured), rows widen upward.
// Order matches FAN_POS index.
const FAN_ORDER = [
  'backrise',                                // top-left stair (highest)
  'friday',                                  // top-right stair (highest)
  'codex',                                   // left stair (mid)
  'netoptix',                                // right stair (mid)
  'workloom', 'deployai', 'graftluminex',    // row 3
  'gethired', 'enviroclass',                 // row 2
  'talentforge',                             // row 1 (bottom, featured)
];
const FAN_POS = [
  // top stair – highest
  { x: -640, y:  30, rot: -10, z: 1 }, // backrise
  { x:  640, y:  30, rot:  10, z: 1 }, // friday
  // stair – mid
  { x: -520, y: 150, rot:  -8, z: 3 }, // codex
  { x:  520, y: 150, rot:   8, z: 3 }, // netoptix
  // row 3
  { x: -400, y: 275, rot: -8, z: 5 },
  { x:    0, y: 265, rot:  0, z: 6 },
  { x:  400, y: 275, rot:  8, z: 5 },
  // row 2
  { x: -230, y: 400, rot: -5, z: 8 },
  { x:  230, y: 400, rot:  5, z: 8 },
  // row 1 – featured
  { x:    0, y: 520, rot:  0, z: 20, featured: true },
];

const BrowserCard = ({ project, pos, isActive, onSelect }) => {
  const featured = !!pos.featured;
  const width = featured ? 480 : 340;
  const height = featured ? 320 : 240;

  return (
    <motion.div
      layout
      onClick={() => onSelect(project.id)}
      role="button"
      tabIndex={0}
      initial={{ opacity: 0, y: 60, rotate: pos.rot, scale: 0.9 }}
      whileInView={{ opacity: 1, y: pos.y, rotate: pos.rot, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: pos.y - 22,
        rotate: pos.rot * 0.35,
        scale: featured ? 1.04 : 1.06,
        zIndex: 50,
        transition: { type: 'spring', stiffness: 260, damping: 22 },
      }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ x: pos.x, width, height, zIndex: isActive ? 40 : pos.z }}
      className={`group absolute left-1/2 top-0 -translate-x-1/2 origin-center cursor-pointer rounded-2xl overflow-hidden border bg-[#0a0a0a] shadow-[0_25px_60px_-20px_rgba(0,0,0,0.8)] transition-colors duration-300 ${
        isActive
          ? 'border-[#ff2a2a]/70 shadow-[0_30px_80px_-15px_rgba(255,42,42,0.45)]'
          : 'border-white/10 hover:border-[#ff2a2a]/50'
      }`}
    >
      <div className="flex items-center gap-2 px-2.5 py-2 bg-[#0f0f0f] border-b border-white/5">
        <div className="flex items-center gap-1 shrink-0">
          <span className="h-2 w-2 rounded-full bg-[#ff5f56]/80" />
          <span className="h-2 w-2 rounded-full bg-[#ffbd2e]/80" />
          <span className="h-2 w-2 rounded-full bg-[#27c93f]/80" />
        </div>
        <span className="min-w-0 flex-1 truncate text-[10px] font-black uppercase tracking-[0.15em] text-white">
          {project.title}
        </span>
        <div className="flex shrink-0 items-center gap-1.5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${project.title} GitHub`}
            className={`inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/5 font-bold uppercase tracking-widest text-white/85 backdrop-blur transition-all duration-300 hover:border-white hover:text-white ${
              featured ? 'px-2.5 py-1 text-[10px]' : 'px-2 py-0.5 text-[9px]'
            }`}
          >
            <FaGithub className={featured ? 'h-3 w-3' : 'h-2.5 w-2.5'} />
            <span>{featured ? 'GitHub' : 'Git'}</span>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${project.title} Live Demo`}
            className={`inline-flex items-center gap-1 rounded-full border border-[#ff2a2a]/60 bg-[#ff2a2a] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#ff4444] ${
              featured ? 'px-2.5 py-1 text-[10px]' : 'px-2 py-0.5 text-[9px]'
            }`}
          >
            <span>{featured ? 'Live Project' : 'Live'}</span>
            <HiArrowUpRight className={featured ? 'h-3 w-3' : 'h-2.5 w-2.5'} />
          </a>
        </div>
      </div>
      <div className="relative h-[calc(100%-36px)] w-full overflow-hidden">
        <img
          src={covers[project.cover]}
          alt={`${project.title} preview`}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(255,42,42,0.18),transparent_70%)]" />
      </div>
    </motion.div>
  );
};

const MobileTeaser = ({ project, isActive, onSelect }) => (
  <motion.button
    onClick={() => onSelect(project.id)}
    whileTap={{ scale: 0.97 }}
    className={`group relative overflow-hidden rounded-2xl border bg-[#0a0a0a] text-left transition-all ${
      isActive ? 'border-[#ff2a2a]/70 shadow-[0_20px_50px_-15px_rgba(255,42,42,0.45)]' : 'border-white/10'
    }`}
  >
    <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0f0f0f] border-b border-white/5">
      <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f56]/70" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#ffbd2e]/70" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#27c93f]/70" />
    </div>
    <img
      src={covers[project.cover]}
      alt={project.title}
      loading="lazy"
      width={1024}
      height={1024}
      className="h-32 w-full object-cover"
    />
    <div className="p-3">
      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{project.category}</p>
      <p className="mt-1 text-sm font-black uppercase text-white">{project.title}</p>
    </div>
  </motion.button>
);

const MoreCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (index % 4) * 0.06 }}
    whileHover={{ y: -6 }}
    className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d0d0d] via-[#0a0a0a] to-[#050505] shadow-[0_20px_60px_-25px_rgba(0,0,0,0.9)] transition-all duration-500 hover:border-[#ff2a2a]/60 hover:shadow-[0_25px_70px_-20px_rgba(255,42,42,0.35)]"
  >
    <div className="relative flex items-center gap-2 border-b border-white/5 bg-[#0f0f0f]/80 px-3 py-2.5">
      <div className="flex items-center gap-1 shrink-0">
        <span className="h-2 w-2 rounded-full bg-[#ff5f56]/80" />
        <span className="h-2 w-2 rounded-full bg-[#ffbd2e]/80" />
        <span className="h-2 w-2 rounded-full bg-[#27c93f]/80" />
      </div>
      <p className="min-w-0 flex-1 truncate text-[10px] font-black uppercase tracking-[0.15em] text-white">
        {project.title}
      </p>
      <div className="flex shrink-0 items-center gap-1.5">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} GitHub`}
          className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-white/80 backdrop-blur transition-all duration-300 hover:border-white hover:text-white"
        >
          <FaGithub className="h-2.5 w-2.5" /> Git
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} Live Demo`}
          className="inline-flex items-center gap-1 rounded-full border border-[#ff2a2a]/60 bg-[#ff2a2a] px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#ff4444]"
        >
          Live <HiArrowUpRight className="h-2.5 w-2.5" />
        </a>
      </div>
    </div>
    <div className="relative overflow-hidden">
      <img
        src={covers[project.cover]}
        alt={`${project.title} preview`}
        loading="lazy"
        width={1024}
        height={1024}
        className="h-40 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
    </div>
    <div className="relative flex flex-1 flex-col gap-3 p-4">
      <div>
        <h3 className="text-base font-black uppercase tracking-tight text-white">{project.title}</h3>
        <p className="mt-0.5 text-[11px] font-bold text-[#ff2a2a]">{project.tagline}</p>
      </div>
      <p className="text-[12px] leading-relaxed text-white/65 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-1">
        {project.tech.slice(0, 5).map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/70"
          >
            {t}
          </span>
        ))}
      </div>
      <ul className="mt-auto space-y-1.5">
        {project.features?.slice(0, 3).map((f) => (
          <li key={f} className="flex items-start gap-2 text-[11px] text-white/70">
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#ff2a2a] shadow-[0_0_8px_rgba(255,42,42,0.7)]" />
            <span className="font-medium">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.article>
);

const Projects = () => {
  const fanProjects = useMemo(
    () => FAN_ORDER.map((id) => projects.find((p) => p.id === id)).filter(Boolean),
    []
  );
  const extraProjects = useMemo(() => projects.filter((p) => !FAN_ORDER.includes(p.id)), []);

  const [activeId, setActiveId] = useState('talentforge');
  const active = projects.find((p) => p.id === activeId) || projects[0];

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-[#070707] px-4 py-24 sm:px-6 md:px-12 md:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-[#ff2a2a]/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-2/3 h-[380px] w-[380px] rounded-full bg-[#ff2a2a]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <div data-aos="fade-up" className="mb-4 text-center pt-10 md:pt-16">
          <div className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-5 py-1.5 text-sm font-bold text-white/70 backdrop-blur-md">
            Selected Work
          </div>
          <h2 className="text-5xl font-black uppercase tracking-tight text-white md:text-7xl">
            Project<span className="text-[#ff2a2a]">s</span>
          </h2>
        </div>

        {/* Signature strip */}
        <div className="relative z-20 flex flex-col items-center gap-3 pt-1 pb-2">
          <div className="flex items-center gap-4">
            <span className="hidden sm:block h-px w-14 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <p className="text-[11px] sm:text-xs font-black uppercase tracking-[0.35em] text-white/70">
              Full Stack Developer <span className="text-[#ff2a2a]">×</span> AI Engineer
            </p>
            <span className="hidden sm:block h-px w-14 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[`${projects.length}+ Projects`, 'AI × Full Stack', 'Production Ready'].map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/70 backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* DESKTOP: pyramid stack */}
        <div className="relative hidden md:block h-[900px] mt-0">
          {fanProjects.map((project, i) => (
            <BrowserCard
              key={project.id}
              project={project}
              pos={FAN_POS[i]}
              isActive={activeId === project.id}
              onSelect={setActiveId}
            />
          ))}
          <div className="pointer-events-none absolute left-1/2 bottom-0 h-40 w-[80%] -translate-x-1/2 rounded-full bg-[#ff2a2a]/10 blur-[100px]" />
        </div>

        {/* MOBILE: teaser grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden mt-6">
          {fanProjects.map((project) => (
            <MobileTeaser
              key={project.id}
              project={project}
              isActive={activeId === project.id}
              onSelect={setActiveId}
            />
          ))}
        </div>

        {/* Selected fan project detail */}
        <div className="mt-14 md:mt-20">
          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0d0d0d] via-[#0a0a0a] to-[#050505] p-6 sm:p-8 md:p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#ff2a2a]/10 blur-3xl" />
              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white/50">
                    {active.category}
                  </p>
                  <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                    {active.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base font-bold text-[#ff2a2a]">{active.tagline}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white/80 backdrop-blur transition-all duration-300 hover:border-white hover:text-white"
                  >
                    <FaGithub className="h-3.5 w-3.5" /> GitHub
                  </a>
                  <a
                    href={active.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#ff2a2a]/60 bg-[#ff2a2a] px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#ff4444]"
                  >
                    Live Demo <HiArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
              <div className="relative mt-7 grid gap-8 md:grid-cols-5">
                <div className="md:col-span-3">
                  <p className="text-sm md:text-base leading-relaxed text-white/70">{active.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {active.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="md:col-span-2 space-y-2.5">
                  {active.features?.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#ff2a2a] shadow-[0_0_10px_rgba(255,42,42,0.7)]" />
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;