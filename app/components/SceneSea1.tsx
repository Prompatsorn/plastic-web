'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function SceneSea1() {
  const [isSeaTopicVisible, setIsSeaTopicVisible] = useState(false);
  const seaTopicRef = useRef(null);

  useEffect(() => {
    const el = seaTopicRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSeaTopicVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);

  return (
    <section className="relative w-full h-auto overflow-hidden">
          {/* 🔳 พื้นหลัง */}
          <Image
            src="/assets/sea1.png"
            alt="sea background"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            priority
          />

<div
        ref={seaTopicRef}
        className={`absolute top-[20%] right-[0%] sm:right-[8%] md:right-[10%] w-[50vw] max-w-[1000px] z-10 transition-all duration-700 ease-out delay-200 ${
          isSeaTopicVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-10 scale-95 opacity-0'
        }`}
      >
        <Image
          src="/assets/topicsea1.png"
          alt="topic"
          width={1000}
          height={500}
          className="w-full h-auto"
        />
      </div>

      {/* 🗨️ ข้อความประกอบ */}
            <div className="absolute top-[40%] right-[5%] sm:right-[15%] md:right-[15%] w-[40vw] max-w-[1000px] z-10">
        <Image
          src="/assets/textsea1.png"
          alt="text"
          width={1000}
          height={500}
          className="w-full h-auto"
        />
      </div>
      
      <Image
  src="/assets/tao.gif"
  alt="taogif"
  width={400}
  height={400}
  className="absolute 
    lg:top-[50%] lg:left-[5%] lg:w-[25%] 
    md:top-[45%] md:left-[6%] md:w-[25%] 
    sm:top-[50%] sm:left-[6%] sm:w-[25%] 
    cursor-pointer transition-opacity duration-300 hover:opacity-0"
/>

<Image
  src="/assets/taob.gif"
  alt="taoback"
  width={400}
  height={400}
  className="absolute 
    lg:top-[50%] lg:left-[5%] lg:w-[25%] 
    md:top-[45%] md:left-[6%] md:w-[25%] 
    sm:top-[50%] sm:left-[6%] sm:w-[25%] 
    cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100"
/>
<Image
            src="/assets/g220.gif"
            alt="g220"
            width={400}
            height={400}
            className="absolute 
             lg:top-[65%] lg:left-[35%] lg:w-[25%] 
            md:top-[65%] md:left-[35%] md:w-[25%] 
            sm:top-[65%] sm:left-[35%] sm:w-[25%] 
            cursor-pointer transition-opacity duration-300  hover:opacity-0  "
          />
          <Image
            src="/assets/gback220.gif"
            alt="gback220"
            width={400}
            height={400}
            className="absolute  
            lg:top-[65%] lg:left-[35%] lg:w-[25%] 
            md:top-[65%] md:left-[35%] md:w-[25%] 
            sm:top-[65%] sm:left-[35%] sm:w-[25%] 
            cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100 " />

<Image
            src="/assets/openbottle.gif"
            alt="openbottle"
            width={400}
            height={400}
            className="absolute 
            lg:top-[60%] lg:left-[70%] lg:w-[25%] 
            md:top-[65%] md:left-[70%] md:w-[25%] 
            sm:top-[65%] sm:left-[70%] sm:w-[25%] 
            cursor-pointer transition-opacity duration-300  hover:opacity-0 "
          />
          <Image
            src="/assets/openbottleb.gif"
            alt="openbottleback"
            width={400}
            height={400}
            className="absolute
            lg:top-[60%] lg:left-[70%] lg:w-[25%] 
            md:top-[65%] md:left-[70%] md:w-[25%] 
            sm:top-[65%] sm:left-[70%] sm:w-[25%] 
            cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100 "
          />




    </section>
  );
}

