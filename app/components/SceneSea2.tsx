'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function SceneSea2() {
  const [isMicroClicked, setIsMicroClicked] = useState(false);
  const [isClockHovered, setIsClockHovered] = useState(false);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* 🌊 พื้นหลัง แบบใช้ขนาดจริง */}
      <div className="relative w-full">
        <Image
          src="/assets/sea2.png"
          alt="sea2 background"
          width={1920}
          height={1685}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* 🔍 Microbt ตัวค้นหา */}
      <div 
        className="absolute top-10 left-1/2 z-30 cursor-pointer"
        onClick={() => setIsMicroClicked(!isMicroClicked)}
      >
        <Image
          src={isMicroClicked ? "/assets/microbtback.png" : "/assets/microbt.png"}
          alt="Search icon"
          width={1000}
          height={1000}
          className="w-[30vw] max-w-[1000px] h-auto"
        />
      </div>

      {/* ⏰ นาฬิกา */}
      <div 
        className="absolute top-[35%] left-[10%] z-20 cursor-pointer"
        onMouseEnter={() => setIsClockHovered(true)}
        onMouseLeave={() => setIsClockHovered(false)}
      >
        <Image
          src={isClockHovered ? "/assets/clockback.gif" : "/assets/clock.gif"}
          alt="Clock"
          width={500}
          height={500}
          className="w-[20vw] max-w-[600px] h-auto"
        />
      </div>

      {/* 📝 ข้อความ textsea2.png */}
      <div className="absolute top-[45%] right-[20%] z-20">
        <Image
          src="/assets/textsea2.png"
          alt="Sea Text"
          width={500}
          height={500}
          className="w-[40vw] max-w-[1500px] h-auto"
        />
      </div>
    </section>
  );
}


