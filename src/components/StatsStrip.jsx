import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import skinCleaningImg from '../assets/images/oxygeno-facial.webp';

/* ─── Count-Up Number Component ────────────────────────────── */
/* Re-animates every time the strip enters the viewport         */
const CountUpNumber = ({ target, suffix = '', duration = 1.6 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const rafRef = useRef(null);

  const runAnimation = useCallback(() => {
    // Cancel any in-progress animation before starting a new one
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setCount(0);

    const startTime = performance.now();
    const step = (currentTime) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for natural smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(step);
  }, [target, duration]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Re-trigger animation every time element enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
        } else {
          // Reset to 0 when it leaves so next entry starts fresh
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          setCount(0);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [runAnimation]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

/* ─── Statistics Data matching Reference Image ─────────────── */
const STATS = [
  { target: 10,  suffix: '+', label: 'Years of Experience' },
  { target: 500, suffix: '+', label: 'Happy Patients' },
  { target: 100, suffix: '%', label: 'Support Given' },
  { target: 100, suffix: '%', label: 'Results' },
];

/* ─── Horizontal Stats Strip Component ─────────────────────── */
const StatsStrip = () => {
  return (
    <section className="relative overflow-hidden py-11 sm:py-14 md:py-16 my-8 sm:my-12 lg:my-16 min-h-[210px]">
      {/* Background Skin Cleaning Technique Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={skinCleaningImg}
          alt="Skin Cleansing Technique"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-[center_36%]"
        />
        {/* Clean neutral dark overlay — no gradient color */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Foreground Container with 4 Outlined Stat Boxes */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6">
          {STATS.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="border border-white/85 hover:border-white p-5 sm:p-7 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] bg-black/25 backdrop-blur-2xs shadow-sm"
            >
              {/* Animated Stat Number — re-triggers on every scroll-in */}
              <div className="font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-[3.5rem] text-white tracking-tight leading-none mb-2.5 sm:mb-3">
                <CountUpNumber target={item.target} suffix={item.suffix} duration={1.6} />
              </div>

              {/* Stat Description Label */}
              <p className="text-xs sm:text-sm md:text-[15px] font-semibold text-white tracking-normal leading-snug">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
