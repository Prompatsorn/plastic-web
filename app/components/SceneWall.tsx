'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';


export default function SceneWall() {
  const [yellowOpen, setYellowOpen] = useState(false);
  const [blueOpen, setBlueOpen] = useState(false);
  const [greenOpen, setGreenOpen] = useState(false);
  const [redOpen, setRedOpen] = useState(false);
  const [isWallTopicVisible, setIsWallTopicVisible] = useState(false);
  const wallTopicRef = useRef(null);

  useEffect(() => {
    const el = wallTopicRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsWallTopicVisible(entry.isIntersecting);
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
      <Image
        src="/assets/wall3.jpg"
        alt="wall"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
        priority
      />

<div
        ref={wallTopicRef}
        className={`absolute top-[10%] left-1/2 transform -translate-x-1/2 w-[60vw] max-w-[1000px] z-10 transition-all duration-700 ease-out delay-200 ${
          isWallTopicVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-10 scale-95 opacity-0'
        }`}
      >
        <Image
          src="/assets/textwall3.png"
          alt="topic wall"
          width={1000}
          height={500}
          className="w-full"
        />
      </div>

      {/* 🗑️ ถังขยะที่คลิกเปลี่ยนได้ */}
      <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 w-full max-w-[1000px] lg:top-56 lg:px-20 px-11 
      sm:px-12 flex justify-center gap-24 sm:gap-16 lg:gap-32 2xl:top-[30%] 2xl:gap-64">

        {/* ถังเหลือง */}
        <div onClick={() => setYellowOpen(!yellowOpen)} className="cursor-pointer">
          <Image
            src={yellowOpen ? '/assets/ylb1.png' : '/assets/yl1.png'}
            alt="yellow"
            width={200}
            height={200}
            className="w-[35vw] sm:w-[14vw] md:w-[14vw] max-w-[300px]  transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* ถังฟ้า */}
        <div onClick={() => setBlueOpen(!blueOpen)} className="cursor-pointer">
          <Image
            src={blueOpen ? '/assets/blueb.png' : '/assets/blue.png'}
            alt="blue"
            width={200}
            height={200}
            className="w-[35vw] sm:w-[14vw]  md:w-[14vw] max-w-[300px]  transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* ถังเขียว */}
        <div onClick={() => setGreenOpen(!greenOpen)} className="cursor-pointer">
          <Image
            src={greenOpen ? '/assets/greenb.png' : '/assets/green.png'}
            alt="green"
            width={200}
            height={200}
            className="w-[35vw] sm:w-[14vw] md:w-[14vw] max-w-[300px] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* ถังแดง */}
        <div onClick={() => setRedOpen(!redOpen)} className="cursor-pointer">
          <Image
            src={redOpen ? '/assets/redb.png' : '/assets/red.png'}
            alt="red"
            width={200}
            height={200}
            className="w-[35vw] sm:w-[14vw] md:w-[14vw] max-w-[300px]  transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
