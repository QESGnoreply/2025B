import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const AGENDA_ITEMS = [
  {
    id: "01",
    title: "Net Zero",
    desc: "온실가스 감축 및 에너지 전환",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80"
  },
  {
    id: "02",
    title: "Safety First",
    desc: "중대재해 Zero 안전 경영 실현",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80"
  },
  {
    id: "03",
    title: "Shared Growth",
    desc: "협력사 동반성장 생태계 구축",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80"
  },
  {
    id: "04",
    title: "Governance",
    desc: "투명한 이사회 운영 및 윤리경영",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80"
  }
];

export function CoreAgenda() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-white py-[100px] border-t border-[#EEEEEE] px-[5vw]">
      <div className="max-w-[1440px] mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-[60px]"
        >
          <div className="text-[#888888] text-[14px] font-[600] uppercase tracking-[2px] mb-4">
            CORE AGENDA
          </div>
          <h2 className="text-[36px] md:text-[60px] font-[800] leading-[1.1] tracking-[-0.03em] text-[#111111]">
            2026 Focus Areas
          </h2>
        </motion.div>

        <div className="relative border-b border-[#EEEEEE]">
          {AGENDA_ITEMS.map((item, idx) => (
            <div 
              key={item.id}
              className={`group flex flex-col md:flex-row md:items-center py-[40px] md:py-[60px] border-b transition-all duration-300 ease-out cursor-pointer hover:bg-transparent ${hoveredIndex === idx ? 'md:pl-[30px] border-[#111111]' : 'border-[#EEEEEE]'}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-[20px] md:gap-[40px] flex-1 mb-4 md:mb-0">
                <span className="text-[16px] font-[600] text-[#111111]">{item.id}</span>
                <h3 className="text-[40px] md:text-[60px] font-[800] tracking-[-0.03em] text-[#111111] transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
              <div className="md:w-[300px] text-[18px] text-[#666666] leading-[1.5]">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Hover Image (Desktop Only) */}
        <div className="hidden md:block pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-[400px] h-[500px]">
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                key={hoveredIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 rounded-[10px] overflow-hidden bg-[#111111]"
                style={{ filter: "brightness(0.8)" }}
              >
                <img 
                  src={AGENDA_ITEMS[hoveredIndex].image} 
                  alt={AGENDA_ITEMS[hoveredIndex].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
