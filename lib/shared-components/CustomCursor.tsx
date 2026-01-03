"use client"
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 600, mass: 0.2 }; 
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Secondary lagging element
  const trailX = useSpring(mouseX, { damping: 50, stiffness: 400, mass: 0.6 });
  const trailY = useSpring(mouseY, { damping: 50, stiffness: 400, mass: 0.6 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const clickable = target.closest('button') || 
                        target.closest('a') || 
                        target.closest('input') ||
                        target.closest('[data-hover="true"]');
      setIsHovering(!!clickable);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Trail Element */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference hidden md:block"
        style={{ x: trailX, y: trailY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div 
          className="w-16 h-16 rounded-full border border-white/20"
          animate={{ scale: isHovering ? 2 : 1, opacity: isHovering ? 0 : 0.5 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Main Intelligent Cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference flex items-center justify-center hidden md:flex"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="relative rounded-full bg-[#f5d142] flex items-center justify-center overflow-hidden shadow-[0_0_30px_#f5d142]"
          animate={{
            width: isHovering ? 120 : 12,
            height: isHovering ? 120 : 12,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 1 : 0 }}
          >
            {/* Cursor would have a text in it */}
            {/* <span className="text-black font-black uppercase tracking-[0.4em] text-[8px] mb-1">
              SCAN
              </span> */}
            <div className="w-8 h-[1px] bg-black/30" />
          </motion.div>
          
          {/* Internal Shimmer Scanning effect */}
          {isHovering && (
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-transparent via-white/50 to-transparent h-[200%]"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;