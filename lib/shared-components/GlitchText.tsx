/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { motion } from 'framer-motion';

interface ButterTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
}

const ButterText: React.FC<ButterTextProps> = ({ text, as: Component = 'span', className = '' }) => {
  return (
    <Component className={`relative inline-block font-black tracking-tighter isolate ${className}`}>
      {/* Liquid Gold Shimmer */}
      <motion.span
        className="absolute inset-0 z-10 block bg-gradient-to-r from-[#f5d142] via-white via-[#f5d142] to-[#f5d142] bg-[length:200%_auto] bg-clip-text text-transparent will-change-[background-position]"
        animate={{
          backgroundPosition: ['0% center', '200% center'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        aria-hidden="true"
        style={{ 
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transform: 'translateZ(0)',
        }}
      >
        {text}
      </motion.span>
      
      {/* Static layer for consistency */}
      <span 
        className="block text-[#f5d142] opacity-20 blur-sm absolute inset-0 select-none"
        aria-hidden="true"
      >
        {text}
      </span>

      {/* Real Text for Accessibility & Spacing */}
      <span className="relative z-0 opacity-0">{text}</span>
    </Component>
  );
};

export default ButterText;