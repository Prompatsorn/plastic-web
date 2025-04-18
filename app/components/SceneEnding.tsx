'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function SceneEnding() {
  const [isZooming, setIsZooming] = useState(false);
  const topicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsZooming(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    const el = topicRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white flex items-center justify-center">
      {/* พื้นหลัง */}
      <Image
        src="/assets/ending.png"
        alt="ending background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* รูปหัวข้อที่ค่อย ๆ ขยายขึ้นเมื่อ scroll ผ่าน */}
      <div
        ref={topicRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          w-[300px] md:w-[400px] lg:w-[800px]"
      >
        <Image
          src="/assets/topic.png"
          alt="topicending"
          width={500}
          height={300}
          className={`w-full transition-all duration-1000 ease-out ${
            isZooming
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-50'
          }`}
        />
      </div>
    </section>
  );
}
