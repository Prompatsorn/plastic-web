'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function SceneSea3() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="relative w-full h-auto overflow-hidden">
                  {/* 🔳 พื้นหลัง */}
                  <Image
                    src="/assets/sea3.png"
                    alt="sea3 background"
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-cover"
                    priority
                  />

      {/* microbt - กลับด้านเมื่อคลิก */}
      {!isFlipped ? (
        <Image
          src="/assets/microbt.png"
          alt="microbt"
          width={800}
          height={800}
          className="absolute cursor-pointer md:top-[1050px] md:left-[100px] md:w-[500px] lg:top-[1000px] lg:left-[800px] lg:w-[800px]"
          onClick={() => setIsFlipped(true)}
        />
      ) : (
        <Image
          src="/assets/microbtback.png"
          alt="microbtback"
          width={800}
          height={800}
          className="absolute cursor-pointer md:top-[1050px] md:left-[100px] md:w-[500px] lg:top-[950px] lg:left-[780px] lg:w-[800px]"
          onClick={() => setIsFlipped(false)}
        />
      )}
    </section>
  );
}

