'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function SceneBeach1() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isGone, setIsGone] = useState(false);
  const [isBeachTopicVisible, setIsBeachTopicVisible] = useState(false);
  const beachTopicRef = useRef(null);

  useEffect(() => {
    const el = beachTopicRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBeachTopicVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasEntered) {
          setHasEntered(true);
          // เริ่มนับเวลาหลังเริ่มร่วง
          setTimeout(() => {
            setIsGone(true);
          }, 2000); // หายตอน 2 วินาที
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasEntered]);

  const garbageConfigs = [
    { name: 'big1', top: 'top-[10%]', left: 'left-[10%]', delay: 0 },
    { name: 'big2', top: 'top-[15%]', left: 'right-[15%]', delay: 200 },
    { name: 'big3', top: 'top-[8%]', left: 'left-[40%]', delay: 400 },
    { name: 'big4', top: 'top-[5%]', left: 'right-[30%]', delay: 600 },
    { name: 'big5', top: 'top-[12%]', left: 'left-[60%]', delay: 800 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* 🔳 พื้นหลัง */}
      <Image
        src="/assets/beach1.png"
        alt="beach1 background"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
        priority
      />

      {/* 📝 หัวข้อ */}
        <div
        ref={beachTopicRef}
        className={`absolute top-[60%] right-[10%] w-[60vw] max-w-[1000px] z-10 transition-all duration-700 ease-out delay-200 ${
          isBeachTopicVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-10 scale-95 opacity-0'
        }`}
      >
        <Image
          src="/assets/topicbeach1.png"
          alt="topic"
          width={1000}
          height={500}
          className="w-full h-auto"
        />
      </div>

      {/* 🗨️ ข้อความประกอบ */}
      <div className="absolute top-[80%] right-[20%] w-[40vw] max-w-[1000px] z-10">
        <Image
          src="/assets/textbeach1.png"
          alt="text"
          width={1000}
          height={500}
          className="w-full h-auto"
        />
      </div>

      {/* 🗑️ ขยะร่วงและค่อยๆ หาย */}
      {garbageConfigs.map(({ name, top, left, delay }) => (
        <Image
          key={name}
          src={`/assets/${name}.png`}
          alt={name}
          width={120}
          height={120}
          className={`
            absolute z-20 w-[80px] sm:w-[100px] md:w-[120px]
            ${top} ${left}
            transition-all duration-[2000ms] ease-in-out
            ${hasEntered ? 'translate-y-[80vh]' : 'translate-y-0 opacity-0'}
            ${isGone ? 'opacity-0' : 'opacity-100'}
          `}
          style={{ transitionDelay: `${delay}ms` }}
        />
      ))}
    </section>
  );
}

