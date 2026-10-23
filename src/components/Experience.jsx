import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Plane } from 'lucide-react';
import { experience } from '../data/portfolio';

const TRACKS = [
  {
    id: 'software',
    icon: '💻',
    title: 'Software Engineering',
    description:
      'Building scalable web applications, backend systems and production software.',
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'AI Engineering',
    description:
      'Building intelligent systems using Deep Learning, Computer Vision and LLM technologies.',
  },
];

const TrackCard = ({ track, active, dimmed, onClick }) => (
  <motion.button
    layout
    onClick={onClick}
    whileHover={{ y: -6 }}
    animate={{ opacity: dimmed ? 0.45 : 1, scale: dimmed ? 0.98 : 1 }}
    transition={{ type: 'spring', stiffness: 260, damping: 28 }}
    className={`group relative text-left w-full rounded-3xl p-8 md:p-10 border transition-all duration-500 overflow-hidden ${
      active
        ? 'bg-white border-[#ff2a2a]/40 shadow-[0_30px_80px_-20px_rgba(255,42,42,0.25)]'
        : 'bg-[#fafafa] border-gray-200 hover:bg-white hover:border-[#ff2a2a]/40 hover:shadow-[0_30px_80px_-20px_rgba(255,42,42,0.18)]'
    }`}
  >
    <div
      className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      style={{ background: 'radial-gradient(circle, rgba(255,42,42,0.18), transparent 70%)' }}
    />

    <div className="relative">
      <motion.div
        className="text-5xl md:text-6xl mb-6 inline-block"
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {track.icon}
      </motion.div>
      <h3 className="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-[#ff2a2a] transition-colors duration-300 mb-3 tracking-tight">
        {track.title}
      </h3>
      <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium max-w-md">
        {track.description}
      </p>
    </div>

    <div className="relative mt-10 pt-6 border-t border-gray-200/70 flex items-center justify-end">
      <span className="flex items-center gap-2 text-xs md:text-sm font-black tracking-wide text-gray-900 group-hover:text-[#ff2a2a] transition-colors">
        {active ? 'Timeline Open' : 'View Timeline'}
        <motion.span
          className="inline-block"
          animate={{ x: active ? 4 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          →
        </motion.span>
      </span>
    </div>
  </motion.button>
);

const Timeline = ({ items }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 30%'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.5,
  });

  const N = items.length;
  const AMPLITUDE = 46; // px sway
  // Plane travels along the spine (top→bottom) and sways left/right,
  // hitting x=0 at every dot (p = k/N) and peaking between dots.
  const planeTop = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const planeX = useTransform(smoothProgress, (p) =>
    Math.sin(p * N * Math.PI) * AMPLITUDE
  );
  // Rotation follows the tangent of the sway path. atan2(dx/dp, dy/dp).
  // dy/dp is constant → we tune it so tilt stays elegant (~±35°).
  const planeRotate = useTransform(smoothProgress, (p) => {
    const dx = Math.cos(p * N * Math.PI) * N * Math.PI * AMPLITUDE;
    const dy = 900; // virtual vertical speed
    return (Math.atan2(dx, dy) * 180) / Math.PI;
  });
  const spineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative pl-14 md:pl-24 pr-6 md:pr-10 mt-16">
      {/* Static faded spine */}
      <div className="absolute left-[19px] md:left-[35px] top-2 bottom-2 w-[3px] bg-gray-200 rounded-full" />

      {/* Progress spine — grows with scroll */}
      <motion.div
        style={{ height: spineHeight }}
        className="absolute left-[19px] md:left-[35px] top-2 w-[3px] rounded-full bg-gradient-to-b from-[#ff2a2a] via-[#ff2a2a]/70 to-[#ff2a2a]/25"
      />

      {/* Flying plane */}
      <motion.div
        style={{ top: planeTop, x: planeX, rotate: planeRotate }}
        className="absolute left-[20px] md:left-[36px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#ff2a2a]/40 blur-xl scale-150" />
          <div className="relative w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#ff2a2a] text-white flex items-center justify-center shadow-[0_0_24px_rgba(255,42,42,0.55)]">
            {/* Plane icon base points up-right; rotate 45deg so 0° tangent = pointing down */}
            <Plane size={18} strokeWidth={2.2} className="rotate-[135deg]" />
          </div>
        </div>
      </motion.div>

      {items.map((job, idx) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-14 last:mb-0"
        >
          {/* Node ring — landing pad */}
          <span className="absolute -left-[46px] md:-left-[70px] top-1.5 w-5 h-5 flex items-center justify-center">
            <span
              className={`w-4 h-4 rounded-full border-[3px] bg-white ${
                job.current
                  ? 'border-[#ff2a2a] shadow-[0_0_0_4px_rgba(255,42,42,0.15)]'
                  : 'border-gray-400'
              }`}
            />
          </span>

          <div className="bg-[#f7f7f7] hover:bg-white border border-gray-200 hover:border-[#ff2a2a]/40 rounded-2xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(255,42,42,0.12)] transition-all duration-500">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h3 className="text-xl md:text-2xl font-black text-gray-900">{job.role}</h3>
              {job.current && (
                <span className="px-3 py-1 rounded-full bg-[#ff2a2a]/10 text-[#ff2a2a] text-[10px] font-black uppercase tracking-widest">
                  Current
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-5">
              <span className="text-gray-700 font-bold">{job.org}</span>
              <span className="text-gray-400 text-sm font-semibold">{job.period}</span>
            </div>
            <ul className="space-y-2.5">
              {job.points.map((point, pIdx) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: 0.2 + pIdx * 0.09, ease: 'easeOut' }}
                  className="flex gap-3 text-gray-600 text-sm md:text-base font-medium leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Experience = () => {
  const [selected, setSelected] = useState(null);

  const grouped = useMemo(() => {
    const g = { software: [], ai: [] };
    experience.forEach((e) => {
      const t = e.track || 'software';
      if (g[t]) g[t].push(e);
    });
    return g;
  }, []);

  const handleSelect = (id) => {
    setSelected((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="bg-white w-full py-28 px-6 md:px-12 relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Career Path
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-5">
            Work <span className="text-[#ff2a2a]">Experience</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-medium max-w-xl mx-auto">
            Choose a career track to explore my professional journey.
          </p>
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6 md:gap-8">
          {TRACKS.map((t) => (
            <TrackCard
              key={t.id}
              track={t}
              active={selected === t.id}
              dimmed={selected !== null && selected !== t.id}
              onClick={() => handleSelect(t.id)}
            />
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Timeline items={grouped[selected]} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;
