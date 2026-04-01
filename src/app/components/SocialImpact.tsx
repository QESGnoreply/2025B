import React from 'react';
import { motion } from 'motion/react';

export function SocialImpact() {
  return (
    <section className="relative w-full h-[600px] md:h-[100vh] min-h-[600px] overflow-hidden">
      {/* Fixed Background Image for Parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80")' }}
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-[5vw]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white p-[40px] md:p-[80px] max-w-[600px] w-full text-center flex flex-col items-center justify-center"
        >
          <div className="text-[#DA291C] text-[60px] md:text-[80px] font-[800] tracking-[-0.03em] leading-[1]">
            245B
          </div>
          <div className="text-[#111111] text-[20px] md:text-[24px] font-[700] tracking-[-0.03em] mt-[20px]">
            Social Value Created
          </div>
          <p className="text-[#666666] text-[16px] leading-[1.6] mt-[20px]">
            2025년, 롯데물산이 창출한 사회적 가치의 총액입니다.<br className="hidden md:block"/>
            우리는 숫자를 넘어 진정한 변화를 만듭니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
