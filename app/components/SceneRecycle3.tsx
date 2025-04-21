'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function SceneRecycle3() {
  const [showExplanation, setShowExplanation] = useState(false);

  const handleTypingClick = () => {
    if (showExplanation) {
      setShowExplanation(false);
    } else {
      setTimeout(() => setShowExplanation(true), 1000);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🔲 พื้นหลัง */}
      <Image
        src="/assets/recycle3.png"
        alt="recycle3 background"
        fill
        className="object-cover"
        priority
      />

      {/* 💬 typing หรือ text - กดได้ */}
      <div
        className="absolute bottom-[30%] right-[10%] z-30 cursor-pointer"
        onClick={handleTypingClick}
      >
        {!showExplanation ? (
          <Image
            src="/assets/typing.gif"
            alt="typing hint"
            width={600}
            height={400}
            className="w-[70vw] sm:w-[40vw] md:w-[40vw] xl:w-[700px] max-w-[800px] h-auto"
          />
        ) : (
          <Image
            src="/assets/texttyping3.png"
            alt="text explanation"
            width={600}
            height={400}
            className="w-[70vw] sm:w-[40vw] md:w-[40vw] xl:w-[700px] max-w-[800px] h-auto"
          />
        )}
      </div>
    </section>
  );
}
