/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const StarField = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 1.5 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.1
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white/40 will-change-[opacity]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 2.5, star.opacity],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      
      <StarField />

      {/* Blob 1: Butter Gold - Subtler, wider glow */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[120vw] h-[100vw] bg-[#f5d142] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.08] will-change-transform"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Blob 2: Warm Amber */}
      <motion.div
        className="absolute bottom-[-30%] right-[-10%] w-[100vw] h-[80vw] bg-[#ffa500] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.05] will-change-transform"
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Blob 3: Deep Slate/Shadow */}
      <motion.div
        className="absolute top-[20%] right-[-30%] w-[70vw] h-[70vw] bg-[#637ab9] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.03] will-change-transform"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Static Grain Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/80 pointer-events-none" />
    </div>
  );
};

export default FluidBackground;