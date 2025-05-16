'use client';

import Image from 'next/image';
import { useState } from "react";

export default function SceneQuestion() {
  const [c1Image, setC1Image] = useState("/assets/c1.png");
  const [c2Image, setC2Image] = useState("/assets/c2.png");

  const toggleC1Image = () => {
    setC1Image((prev) =>
      prev === "/assets/c1.png" ? "/assets/cb1.png" : "/assets/c1.png"
    );
  };

  const toggleC2Image = () => {
    setC2Image((prev) =>
      prev === "/assets/c2.png" ? "/assets/cb2.png" : "/assets/c2.png"
    );
  };



  return (
    <section className="relative w-full h-auto overflow-hidden">
      {/* พื้นหลังคำถาม */}
      <Image
        src="/assets/what.jpg"
        alt="what"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
        priority
      />

      {/* หัวข้อคำถาม */}
      <div className="absolute top-[20%] right-[10%] sm:right-[30%] md:right-[30%] w-[25vw] max-w-[50px] animate-bounce">
        <Image
          src="/assets/question.png"
          alt="question icon"
          width={100}
          height={100}
          className="cursor-pointer hover:scale-105 transition"
        />
      </div>

      {/* ตัวเลือกคำตอบ */}
      <div className="absolute top-[60%] right-[10%] sm:right-[5%] 2xl:right-[5%] -translate-y-1/2 flex flex-col gap-4 w-[80vw] sm:w-[30%] md:w-[30%] 2xl:w-[40%] max-w-[500px]  min-w-[240px]">
      <Image
              src={c1Image}
              alt="c1 image"
              width={400}
              height={100}
              onClick={toggleC1Image}
              className="cursor-pointer image-hover-scale hover:opacity-80 active:scale-95 transition-all glow-effect"
              title="คลิกเพื่อเลือก C1 Image"
            />

<Image
              src={c2Image}
              alt="c2 image"
              width={400}
              height={100}
              onClick={toggleC2Image}
              className="cursor-pointer image-hover-scale hover:opacity-80 active:scale-95 transition-all glow-effect"
              title="คลิกเพื่อเลือก C2 Image"
            />

      </div>
    </section>
  );
}

