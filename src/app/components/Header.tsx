import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Overview",
    "Our Strategy & Impacts",
    "Environmental",
    "Social",
    "Governance",
    "Appendix"
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference pointer-events-none">
      <div className="flex justify-between items-center px-5 md:px-[5vw] h-[80px]">
        <div className="text-white text-[20px] font-[800] uppercase tracking-tighter pointer-events-auto">
          LOTTE P&D
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-[14px] font-[600] uppercase tracking-tighter pointer-events-auto cursor-pointer focus:outline-none"
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full px-5 md:px-[5vw] flex flex-col items-end pointer-events-auto pt-4"
          >
            {menuItems.map((item, idx) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="text-white text-[24px] md:text-[40px] font-[800] tracking-tighter hover:text-[#DA291C] transition-colors mb-2 md:mb-4 whitespace-nowrap"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
