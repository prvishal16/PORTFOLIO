import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, FileDown, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { profile } from '../data/portfolio';

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { label: 'GitHub', href: profile.github, icon: FaGithub, external: true },
    { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedinIn, external: true },
    { label: 'Email', href: `mailto:${profile.email}`, icon: Mail, external: false },
    { label: 'Resume', href: profile.resumeFile, icon: FileDown, external: false, download: true },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] text-[#d4d4d4] w-full overflow-hidden">
      {/* subtle top hairline + red glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-[#ff2a2a]/10 blur-[120px] rounded-full" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="relative max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-10"
      >
        {/* CTA */}
        <motion.div variants={fadeUp} className="pb-16 md:pb-20 max-w-4xl">
          <p className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#ff2a2a] mb-6">
            Have an idea?
          </p>
          <h3 className="font-sans font-semibold text-white leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Let&apos;s build something{' '}
            <span className="italic font-light text-white/60">amazing</span> together.
          </h3>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-3 bg-white text-black hover:bg-[#ff2a2a] hover:text-white transition-colors duration-300 px-6 py-3.5 rounded-full font-medium text-sm md:text-base"
          >
            Start a Conversation
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Info grid */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pt-16 md:pt-20 border-t border-white/10"
        >
          {/* Contact */}
          <div className="md:col-span-6 flex flex-col gap-5">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
              Contact
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-start gap-3 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 mt-1 text-white/40 group-hover:text-[#ff2a2a] transition-colors" />
              <span className="text-[15px] break-all">{profile.email}</span>
            </a>
            <div className="flex items-start gap-3 text-white/60">
              <MapPin className="w-4 h-4 mt-1 text-white/40" />
              <span className="text-[15px]">{profile.location}</span>
            </div>
          </div>

          {/* Elsewhere */}
          <div className="md:col-span-6 flex flex-col gap-5">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
              Elsewhere
            </p>
            <div className="flex flex-col gap-3">
              {socials.map(({ label, href, icon: Icon, external, download }) => (
                <motion.a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  {...(download ? { download: true } : {})}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25, ease }}
                  className="group flex items-center justify-between border-b border-white/10 pb-3 text-white/80 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-3 text-[15px]">
                    <Icon className="w-4 h-4 text-white/50 group-hover:text-[#ff2a2a] transition-colors" />
                    {label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Huge brand */}
        <motion.div
          initial={{ opacity: 0.15, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease }}
          className="w-full flex justify-center items-center pt-24 md:pt-32 pb-8 overflow-hidden"
        >
          <h2 className="text-[22vw] md:text-[18vw] leading-[0.85] font-sans font-bold tracking-[-0.04em] lowercase select-none w-full text-center bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/20">
            vishal
          </h2>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[10px] md:text-[11px] tracking-widest text-white/40 uppercase"
        >
          <p>© {year} {profile.shortName} — Designed &amp; Developed by {profile.shortName}</p>
          <p>Built with React • Vite • Framer Motion</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
