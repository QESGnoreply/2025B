import React from 'react';
import { motion } from 'motion/react';

const PORTFOLIO_BLOCKS = [
  {
    id: "01",
    label: "01 PROPERTY",
    title: "Lotte World Tower",
    desc: "글로벌 그린 랜드마크 운영",
    image: "https://images.unsplash.com/photo-1736257902131-0aa732b9215c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWxsJTIwbW9kZXJuJTIwc2t5c2NyYXBlciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzUwMDY1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "02",
    label: "02 MANAGEMENT",
    title: "Asset Management",
    desc: "프리미엄 자산 가치 제고 및 임대 관리",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80"
  },
  {
    id: "03",
    label: "03 SOLUTION",
    title: "Eco Tech",
    desc: "건물 에너지 효율화 솔루션 (BEMS)",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80"
  }
];

export function Portfolio() {
  return (
    <section className="relative w-full flex flex-col md:flex-row bg-white">
      {/* Left Sticky Panel */}
      <div className="w-full md:w-1/2 bg-[#000000] p-[60px_20px] md:p-[80px] flex items-center md:sticky md:top-0 md:h-[100vh]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <span className="text-[#888888] text-[14px] font-[600] uppercase tracking-[2px] mb-6">
            OUR PORTFOLIO
          </span>
          <h2 className="text-white text-[40px] md:text-[60px] font-[800] leading-[1.1] tracking-[-0.03em]">
            Designing Sustainable Velocity.
          </h2>
        </motion.div>
      </div>

      {/* Right Scrolling Content */}
      <div className="w-full md:w-1/2 flex flex-col">
        {PORTFOLIO_BLOCKS.map((block, idx) => (
          <div 
            key={block.id} 
            className="w-full min-h-[100vh] p-[20px] py-[60px] md:p-[80px] bg-white border-b border-[#F0F0F0] flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full h-full flex flex-col justify-center"
            >
              <div className="w-full h-[40vh] md:h-[60%] mb-[40px] overflow-hidden">
                <img 
                  src={block.image} 
                  alt={block.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#888888] text-[14px] font-[600] uppercase tracking-[2px] mb-4">
                  {block.label}
                </span>
                <h3 className="text-[#111111] text-[40px] font-[800] tracking-[-0.03em] mb-2 leading-[1.1]">
                  {block.title}
                </h3>
                <p className="text-[#666666] text-[18px]">
                  {block.desc}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
