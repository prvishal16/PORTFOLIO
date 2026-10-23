import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import heroVideoUrl from '../assets/hero-video/intro.mp4';
import heroPortraitUrl from '../assets/hero-portrait.png';
import { profile } from '../data/portfolio';
import HeroParticles from './HeroParticles';
import ResumePopover from './ResumePopover';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.currentTime = 0;
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      v.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      <img
        src={heroPortraitUrl}
        alt="Vishal portrait"
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
      />
      <video
        ref={videoRef}
        preload="auto"
        playsInline
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        className={`absolute top-0 left-0 w-full h-full object-cover z-[1] transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <source src={heroVideoUrl} type="video/mp4" />
      </video>

      {/* Very light gradient for subtle text legibility; keeps the artwork bright */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-t from-black/15 via-black/5 to-transparent pointer-events-none" />

      {/* Subtle three.js particle layer */}
      <HeroParticles />

      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          <span
            data-aos="fade-up"
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/90 text-xs md:text-sm font-bold tracking-widest uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse" />
            Available for opportunities
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tight leading-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.65)]"
          >
            Hi, I'm {profile.shortName}
          </h1>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="h-10 md:h-14 mb-6 flex items-center"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a2a] to-white text-2xl md:text-4xl font-black tracking-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.65)]"
              >
                {profile.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]"
          >
            {profile.summary}
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <a
              href="#projects"
              className="px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              View My Work
            </a>
            <ResumePopover
              align="left"
              trigger={(props) => (
                <button
                  {...props}
                  className="px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-base rounded-full bg-[#ff2a2a] text-white font-semibold hover:bg-[#e01f1f] transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Download Resume
                </button>
              )}
            />
            <a
              href="#contact"
              className="px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto"
          onClick={toggleVideo}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
            {!isPlaying ? (
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            {!isPlaying ? 'Play Intro' : 'Pause'}
          </span>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
