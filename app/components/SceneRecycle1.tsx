'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function SceneRecycle1() {
  const [startMoving, setStartMoving] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isRecycleTopicVisible, setIsRecycleTopicVisible] = useState(false);
  const recycleTopicRef = useRef(null);

  useEffect(() => {
    const el = recycleTopicRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsRecycleTopicVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);
  const handleCarClick = () => {
    if (!startMoving) {
      setStartMoving(true);
      setTimeout(() => {
        const nextSection = document.getElementById('scene-recycle-2');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 3000);
    }
  };

  return (
    <>
      {/* Scene 1 */}
      <section id="scene-recycle1"  className="relative w-full min-h-screen overflow-hidden">
        <Image
          src="/assets/recycle1.png"
          alt="recycle background"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />

<div
        ref={recycleTopicRef}
        className={`absolute top-[20%] right-[10%] w-[60vw] max-w-[1000px] z-10 transition-all duration-700 ease-out delay-200 ${
          isRecycleTopicVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-10 scale-95 opacity-0'
        }`}
      >
        <Image
          src="/assets/topicrecycle1.png"
          alt="topic"
          width={1000}
          height={500}
          className="w-full h-auto"
        />
      </div>

        <div className="absolute top-[60%] right-[10%] w-[40vw] max-w-[1000px] z-10">
          <Image
            src="/assets/textrecycle1.png"
            alt="text"
            width={1000}
            height={500}
            className="w-full h-auto"
          />
        </div>

        <div
          onClick={handleCarClick}
          className={`absolute bottom-[10%] left-0 z-20 cursor-pointer transition-transform duration-[3000ms] ease-in-out ${
            startMoving ? 'translate-x-[100vw]' : ''
          }`}
        >
          
          
            <div className="relative w-[180px] sm:w-[300px] md:w-[320px] lg:w-[600px] xl:w-[650px] h-auto">
            <Image
              src="/assets/cargarbage.png"
              alt="car"
              width={1000}
              height={500}
              className="w-full h-auto relative z-20"
            />
          </div>
          <div className="absolute bottom-[85%] left-[15%] z-10">
  <Image
    src="/assets/garbage.png"
    alt="garbage"
    width={500}
    height={500}
    className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-auto animate-bounce"
  />
</div>
        </div>
      </section>

      {/* Scene 2 */}
      <section
        id="scene-recycle-2"
        className="relative w-full min-h-screen overflow-hidden"
      >
        <Image
          src="/assets/recycle2.png"
          alt="recycle background"
          width={1920}
          height={1197}
          className="w-full h-auto object-cover"
          priority
        />

        {/* 🗑️ garbage image */}
        <div
          className="absolute bottom-[15%] left-[10%] z-20 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setShowInfo(true)}
        >
          <Image
            src="/assets/garbage.png"
            alt="garbage"
            width={100}
            height={500}
            quality={100}
              unoptimized
            className=" sm:w-[300px] lg:w-[500px] md:w-[300px]"
          />
        </div>

       {/* 📷 info image shown on click */}
{showInfo && (
  <div
    className="absolute bottom-[30%] lg:top-96 sm:top-36 md:top-44 left-1/2 -translate-x-1/2 z-30 cursor-pointer"
    onClick={() => setShowInfo(false)}
  >
    <Image
      src="/assets/info.png"
      alt="info"
      width={350} // ลดขนาดลงจาก 400
      height={350} // ลดขนาดลงจาก 400
      className="w-[30vw] max-w-[400px] h-auto rounded-lg shadow-lg"
    />
  </div>
)}

      </section>
    </>
  );
}

