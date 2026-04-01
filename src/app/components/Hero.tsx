import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        src="https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4"
      />
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center text-center w-full px-[5vw]"
      >
        <div className="text-[#888888] text-[14px] font-[600] uppercase tracking-[2px] mb-6 md:mb-10">
          2025 SUSTAINABILITY REPORT
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-white font-[800] leading-[1] text-[clamp(40px,8vw,120px)] tracking-[-0.03em] whitespace-nowrap">
            BEYOND LANDMARK
          </h1>
        </div>
      </motion.div>
    </section>
  );
}
