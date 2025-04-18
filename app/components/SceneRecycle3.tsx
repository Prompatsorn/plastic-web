'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SceneRecycle3() {
  const [showExplanation, setShowExplanation] = useState(false);
  const [bottleMoved, setBottleMoved] = useState(false);

  const handleBottleClick = () => {
    if (bottleMoved) {
      setBottleMoved(false);
      setShowExplanation(false);
    } else {
      setBottleMoved(true);
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

      {/* 💬 typing หรือ text */}
      <div className="absolute bottom-[30%] right-[10%] z-30">
        {!showExplanation ? (
          <Image
            src="/assets/typing.gif"
            alt="typing hint"
            width={600}
            height={400}
            className="w-[70vw] sm:w-[40vw] md:w-[40vw] lg:w-[800px] max-w-[800px] h-auto"
          />
        ) : (
          <Image
            src="/assets/texttyping3.png"
            alt="text explanation"
            width={600}
            height={400}
            className="w-[70vw] sm:w-[40vw] md:w-[40vw] lg:w-[800px] max-w-[800px] h-auto"
          />
        )}
      </div>

      {/* 🧴 ขวดที่คลิกได้ */}
<motion.div
  initial={{ x: 0 }}
  animate={bottleMoved ? { x: 300 } : { x: 0 }}
  transition={{ duration: 1, ease: 'easeInOut' }}
  onClick={handleBottleClick}
  className="absolute bottom-[15%] right-[50%] z-40 cursor-pointer"
>
  <Image
    src="/assets/bottleonslide.png"
    alt="bottle on slide"
    width={300}   
    height={300}
    className="w-[30vw] max-w-[500px] 
    lg:w-[300px]  
    sm:w-[150px]  
    md:w-[150px] 
    h-auto"
  />
</motion.div>
    </section>
  );
}

