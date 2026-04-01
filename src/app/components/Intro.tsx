import React from 'react';
import { motion } from 'motion/react';

export function Intro() {
  return (
    <section className="w-full bg-white py-[100px] md:py-[200px] px-[5vw]">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1200px] mx-auto text-left"
      >
        <p className="text-[#111111] font-[600] leading-[1.3] text-[clamp(30px,4vw,60px)] tracking-[-0.03em] mb-10">
          롯데물산은 도시의 스카이라인을 넘어,<br/>
          <span className="text-[#DA291C]">지속가능한 삶의 기준</span>을 높입니다.
        </p>
        <p className="text-[#111111] font-[600] leading-[1.3] text-[clamp(30px,4vw,60px)] tracking-[-0.03em]">
          우리는 2040 탄소중립을 향해<br/>
          가장 높은 곳에서 변화를 시작합니다.
        </p>
      </motion.div>
    </section>
  );
}
