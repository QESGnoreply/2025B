import React from 'react';
import { motion } from 'motion/react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 md:px-[5vw] h-[80px] mix-blend-difference pointer-events-none">
      <div className="text-white text-[20px] font-[800] uppercase tracking-tighter pointer-events-auto">
        LOTTE P&D
      </div>
      <button className="text-white text-[14px] font-[600] uppercase tracking-tighter pointer-events-auto cursor-pointer">
        MENU
      </button>
    </header>
  );
}
