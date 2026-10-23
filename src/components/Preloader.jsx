import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/portfolio';

const NAME_DURATION = 2200;     // cinematic name reveal
const ROLE_DURATION = 1400;     // ms each role stays visible

const Preloader = () => {
  const preloaderRoles = profile.roles;
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState('name'); // 'name' -> 'role'
  const [roleIndex, setRoleIndex] = useState(0);
  const timersRef = useRef([]);
  const intervalRef = useRef(null);

  const totalDuration =
    NAME_DURATION + preloaderRoles.length * ROLE_DURATION + 500;

  const clearAllTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleSkip = () => {
    clearAllTimers();
    setIsLoading(false);
  };

  // name -> role phase switch, then close after every role has been shown once
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('role'), NAME_DURATION);
    const t2 = setTimeout(() => setIsLoading(false), totalDuration);
    timersRef.current.push(t1, t2);
    return () => clearAllTimers();
  }, [totalDuration]);

  // step through roles once, then stop on the last one
  useEffect(() => {
    if (phase !== 'role') return;
    const interval = setInterval(() => {
      setRoleIndex((i) => {
        if (i >= preloaderRoles.length - 1) {
          clearInterval(interval);
          return i;
        }
        return i + 1;
      });
    }, ROLE_DURATION);
    intervalRef.current = interval;
    return () => clearInterval(interval);
  }, [phase, preloaderRoles.length]);

  return (<>
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#0a0a0a] z-[100000] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ff2a2a]/20 rounded-full blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ff2a2a]/20 rounded-full blur-[120px]" />

          <AnimatePresence mode="wait">
            {phase === 'name' ? (
              <motion.div
                key="name"
                exit={{ opacity: 0, scale: 0.92, y: -16 }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="relative text-5xl md:text-8xl font-black tracking-tighter"
              >
                <div className="text-white/10 select-none">{profile.shortName}</div>
                <motion.div
                  className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap"
                  initial={{ clipPath: 'inset(100% 0 0 0)' }}
                  animate={{ clipPath: 'inset(0% 0 0 0)' }}
                  transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                >
                  {profile.shortName}
                  <span className="text-[#ff2a2a]">.</span>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="role"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-4"
              >
                <span className="text-white/40 text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
                  Loading Portfolio
                </span>
                <div className="h-10 md:h-14 flex items-center justify-center overflow-hidden px-6">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleIndex}
                      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -24, filter: 'blur(6px)' }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="text-white text-2xl md:text-4xl font-black tracking-tight"
                    >
                      {preloaderRoles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>

    <AnimatePresence>
      {isLoading && (
        <motion.button
          key="skip-preloader"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleSkip}
          className="fixed bottom-6 right-6 z-[100001] px-4 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-white/70 bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:text-white hover:border-white/20 transition-colors duration-300"
          aria-label="Skip preloader"
        >
          Skip
        </motion.button>
      )}
    </AnimatePresence>
  </>
);
};

export default Preloader;
