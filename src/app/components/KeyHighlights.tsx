import React from 'react';
import { motion } from 'motion/react';

const HIGHLIGHTS = [
  {
    num: "32",
    unit: "%",
    title: "GHG Reduction",
    desc: "수열 에너지를 활용하여 전년 대비 획기적인 탄소 배출 저감을 달성했습니다."
  },
  {
    num: "0",
    unit: "",
    title: "Safety Incidents",
    desc: "5년 연속 중대재해 발생 건수 0건을 기록하며 안전을 증명했습니다."
  },
  {
    num: "200",
    unit: "억",
    title: "Growth Fund",
    desc: "파트너사와의 상생을 위해 200억원 규모의 동반성장 펀드를 조성했습니다."
  }
];

export function KeyHighlights() {
  return (
    <section className="w-full bg-[#F9F9F9] py-[100px] md:py-[150px] px-[5vw]">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#888888] text-[14px] font-[600] uppercase tracking-[2px] mb-[60px] md:mb-[100px]"
        >
          KEY HIGHLIGHTS
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px] md:gap-[100px]">
          {HIGHLIGHTS.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="flex items-start tracking-[-0.03em]">
                <span className="text-[100px] font-[800] text-[#111111] leading-[0.9]">
                  {item.num}
                </span>
                {item.unit && (
                  <span className="text-[30px] font-[800] text-[#DA291C] mt-[8px]">
                    {item.unit}
                  </span>
                )}
              </div>
              <div className="mt-[20px] pt-[20px] border-t-2 border-[#DDDDDD]">
                <h4 className="text-[18px] font-[800] text-[#111111] mb-[10px]">
                  {item.title}
                </h4>
                <p className="text-[18px] text-[#555555] leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
