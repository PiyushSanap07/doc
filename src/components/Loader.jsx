import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Loader = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        setVisible(false);
        onFinish?.();
      }, 600);
    }, 2600);
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white ${exiting ? 'loader-exit' : ''}`}
      >
        {/* Decorative background circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-40 h-40 rounded-full bg-mint opacity-60 animate-pulse-ring" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-[20%] right-[8%] w-28 h-28 rounded-full bg-mint opacity-40 animate-pulse-ring" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-[55%] left-[65%] w-20 h-20 rounded-full bg-accent/10 animate-pulse-ring" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[10%] right-[20%] w-6 h-6 rounded-full bg-accent/40" />
          <div className="absolute bottom-[30%] left-[25%] w-4 h-4 rounded-full bg-primary/20" />
        </div>

        {/* Center loader content */}
        <div className="relative z-10 flex flex-col items-center gap-6 animate-float-gentle">
          {/* Logo icon with pulsing ring */}
          <div className="relative">
            <div className="absolute inset-0 w-24 h-24 rounded-full bg-primary/15 animate-pulse-ring" />
            <div className="absolute -inset-3 w-30 h-30 rounded-full border-2 border-primary/10 animate-pulse-ring" style={{ animationDelay: '0.3s' }} />
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
              className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg"
            >
              <Leaf className="w-12 h-12 text-white" />
            </motion.div>
          </div>

          {/* Doctor name & role */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
              Dr. Neha Shinde
            </h2>
            <p className="text-sm sm:text-base font-semibold text-primary mt-1">
              Dermatologist & Aesthetic Physician
            </p>
          </motion.div>

          {/* Heartbeat / ECG line animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="w-48 sm:w-64"
          >
            <svg viewBox="0 0 200 40" className="w-full h-10">
              {/* Base line */}
              <line x1="0" y1="20" x2="200" y2="20" stroke="#D0F4EB" strokeWidth="1.5" />
              {/* Animated heartbeat */}
              <motion.polyline
                points="0,20 40,20 55,20 65,5 75,35 85,8 95,28 105,20 140,20 200,20"
                fill="none"
                stroke="#00B894"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
              />
              {/* Moving dot */}
              <motion.circle
                r="4"
                fill="#00B894"
                initial={{ cx: 0, cy: 20, opacity: 0 }}
                animate={{
                  cx: [0, 40, 55, 65, 75, 85, 95, 105, 140, 200],
                  cy: [20, 20, 20, 5, 35, 8, 28, 20, 20, 20],
                  opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
            className="text-xs sm:text-sm font-medium text-muted tracking-widest uppercase"
          >
            Loading...
          </motion.p>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Loader;
