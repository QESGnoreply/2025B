import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-[#111111] py-[50px] md:py-[100px] px-[5vw]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[50px]">
        {/* Left Column */}
        <div className="flex flex-col">
          <div className="text-white text-[40px] font-[800] uppercase tracking-[-0.03em] leading-[1]">
            LOTTE P&D
          </div>
          <div className="text-white opacity-50 text-[14px] mt-[10px]">
            Seoul, Korea
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:items-end justify-end">
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px] mb-[40px] md:mb-[40px]">
            {["Privacy Policy", "Contact Us", "Download Report"].map((link) => (
              <a 
                key={link}
                href="#"
                className="text-[#888888] text-[14px] hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="text-white opacity-30 text-[13px]">
            © 2026 LOTTE Property & Development.
          </div>
        </div>
      </div>
    </footer>
  );
}
