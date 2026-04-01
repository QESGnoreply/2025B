import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Poster */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80")' }}
      />
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center text-center w-full px-[5vw]"
      >
        <div className="text-[#888888] text-[14px] font-[600] uppercase tracking-[2px] mb-6 md:mb-10">
          2026 SUSTAINABILITY REPORT
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-white font-[800] leading-[1] text-[clamp(60px,10vw,180px)] tracking-[-0.03em]">
            <span className="block">BEYOND</span>
            <span className="block">LANDMARK</span>
          </h1>
        </div>
      </motion.div>
    </section>
  );
}
