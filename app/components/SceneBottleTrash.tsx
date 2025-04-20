'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function SceneBottleTrash() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleImage = () => setIsClicked(!isClicked);
  const [isEffectTopicVisible, setIsEffectTopicVisible] = useState(false);
  const effectTopicRef = useRef(null);

  useEffect(() => {
    const el = effectTopicRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsEffectTopicVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);

  return (
    <section  id="scene-bottletrash" className="relative w-full h-auto overflow-hidden">
      {/* 🔳 พื้นหลัง */}
      <Image
        src="/assets/gabage.png"
        alt="gabage"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
        priority
      />

<div
        ref={effectTopicRef}
        className={`absolute top-[5%] left-[5%] sm:left-[8%] md:left-[10%] w-[60vw] max-w-[1000px] z-10 transition-all duration-700 ease-out delay-200 ${
          isEffectTopicVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-10 scale-95 opacity-0'
        }`}
      >
        <Image
          src="/assets/topiceffect.png"
          alt="topic"
          width={1000}
          height={500}
          className="w-full h-auto"
        />
      </div>
      {/* 🧃 รูปขวด (กดเพื่อเปลี่ยนภาพ) */}
      <div
        onClick={toggleImage}
        className="absolute top-[45%] left-[20%] w-[60vw] max-w-[1000px] z-20 cursor-pointer transition-transform hover:scale-105"
      >
        <Image
          src={isClicked ? '/assets/bottleseachb.png' : '/assets/bottleseach.png'}
          alt="bottle info"
          width={1000}
          height={500}
          className="w-full h-auto transition-opacity duration-300"
        />
      </div>

      {/* 🗨️ ข้อความประกอบ */}
      <div className="absolute top-[20%] left-[45%] sm:left-[20%] md:left-[20%] w-[40vw] max-w-[1000px] z-10">
  <Image
    src="/assets/texteffect.png"
    alt="text"
    width={1000}
    height={500}
    className="w-full h-auto"
  />
</div>
    </section>
  );
}

