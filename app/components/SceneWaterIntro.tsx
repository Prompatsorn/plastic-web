'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function SceneWaterIntro() {
  const [isTopicVisible, setIsTopicVisible] = useState(false);
  const topicRef = useRef(null);

  useEffect(() => {
    const el = topicRef.current; // ✅ เก็บค่า ref ปัจจุบันไว้ในตัวแปร

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTopicVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(el); // ✅ ใช้ตัวแปรแทน topicRef.current

    return () => {
      observer.unobserve(el); // ✅ cleanup แบบปลอดภัย
    };
  }, []);

  return (
    <section className="relative w-full h-auto overflow-hidden">
      {/* 💧 พื้นหลังน้ำ */}
      <Image
        src="/assets/water2.jpg"
        alt="water background"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
        priority
      />

      {/* 🌊 หัวข้อ topicwater */}
      <div
        ref={topicRef}
        className={`absolute top-[20%] left-1/2 transform -translate-x-1/2 w-[60vw] max-w-[1000px] z-10 transition-all duration-700 ease-out delay-200 ${
          isTopicVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-10 scale-95 opacity-0'
        }`}
      >
        <Image
          src="/assets/topicwater.png"
          alt="topic water"
          width={1000}
          height={500}
          className="w-full"
        />
      </div>

      {/* 🌀 ปุ่ม BT ที่ hover แล้วข้อความขึ้น */}
      <div className="absolute lg:top-[48%] sm:top-[40%] left-1/2 transform -translate-x-1/2 sm:w-[200px] lg:w-[400px] z-20 group">
        <Image
          src="/assets/bt.png"
          alt="bt"
          width={300}
          height={300}
          className="w-full transition-opacity duration-300 group-hover:opacity-100 animate-[wiggle_1s_ease-in-out_infinite]"
        />
        <Image
          src="/assets/textbt.png"
          alt="textbt"
          width={700}
          height={300}
          className="absolute top-1/2 left-1/2 w-[70vw] max-w-[1000px] transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        />
      </div>
    </section>
  );
}
