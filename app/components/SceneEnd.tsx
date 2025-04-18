'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function SceneEnd() {
  const [scrollX, setScrollX] = useState(0);
  const [isTopicVisible, setIsTopicVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const topicRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // รถขยับไป-กลับตาม scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // ความยาวในการเคลื่อนที่ (เช่น 300px ไป-กลับ)
      const maxMove = 900;

      // คำนวณระยะการเคลื่อนไหวไป-กลับแบบลูป (ping-pong)
      const position = Math.abs((scrollTop % (maxMove * 2)) - maxMove);

      setScrollX(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // แสดง topicend เมื่อเลื่อนถึง
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsTopicVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (topicRef.current) observer.observe(topicRef.current);
    return () => observer.disconnect();
  }, []);

  // แสดง textend เมื่อเลื่อนถึง
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsTextVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white flex items-center justify-center">
      {/* พื้นหลัง */}
      <Image
        src="/assets/end.png"
        alt="end"
        fill
        className="object-cover"
        priority
      />

      {/* รถ */}
      <Image
        src="/assets/car.png"
        alt="car"
        width={120}
        height={120}
        style={{ transform: `translateX(${scrollX}px)` }}
        className="absolute transition-transform duration-300 ease-out
          top-[70%] left-[20%]
          sm:top-[75%] sm:left-[16%]
          md:top-[75%] md:left-[20%]
          lg:top-[78%] lg:left-[32%]
          w-[80px] md:w-[100px] lg:w-[140px]"
      />

      {/* topicend */}
      <div
        ref={topicRef}
        className="absolute
          top-[15%] left-1/2 transform -translate-x-1/2
          w-[250px] md:w-[300px] md:left-[500px] md:top-[10%]
          lg:w-[500px]  lg:left-[1000px] lg:top-[10%]
          sm:w-[300px] sm:left-[450px] sm:top-[10%] "
      >
        <Image
          src="/assets/topicend.png"
          alt="topicend"
          width={500}
          height={300}
          className={`w-full transition-all duration-700 ease-out ${
            isTopicVisible
              ? 'translate-y-0 scale-100 opacity-100'
              : 'translate-y-10 scale-95 opacity-0'
          }`}
        />
      </div>

      {/* textend */}
      <div
        ref={textRef}
        className="absolute
          top-[40%] left-[1000px] transform -translate-x-1/2
          w-[220px] md:w-[450px] md:left-[550px] md:top-[30%]
          lg:w-[800px] lg:left-[1020px] lg:top-[30%]
          sm:w-[400px] sm:left-[500px] sm:top-[30%] "
      >
        <Image
          src="/assets/textend.png"
          alt="textend"
          width={460}
          height={280}
          className={`w-full transition-all duration-700 ease-out delay-200 ${
            isTextVisible
              ? 'translate-y-0 scale-100 opacity-100'
              : 'translate-y-10 scale-95 opacity-0'
          }`}
        />
      </div>
    </section>
  );
}
