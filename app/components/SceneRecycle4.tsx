'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SceneRecycle4() {
  const [leftBottleClicked, setLeftBottleClicked] = useState(false);
  const [rightBottleClicked, setRightBottleClicked] = useState(false);

  // ✅ toggle คลิกกลับได้
  const toggleLeft = () => {
    setLeftBottleClicked((prev) => !prev);
  };

  const toggleRight = () => {
    setRightBottleClicked((prev) => !prev);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 🌊 พื้นหลัง */}
      <Image
        src="/assets/recycle4.png"
        alt="factory background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* 💬 ขวดซ้าย - กดได้และกดกลับได้ */}
      <motion.div
        className="absolute bottom-[40%] top-10 left-[8%] lg:left-[15%] md:left-[10%] xl:left-[10%] 2xl:top-[8%] sm:left-[15%] z-30 cursor-pointer"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={toggleLeft}
      >
        <Image
          src={
            leftBottleClicked
              ? '/assets/texttyping4-1.png'
              : '/assets/typing.gif'
          }
          alt="left typing"
          width={250}
          height={120}
          className="w-[40vw] sm:w-[250px] md:w-[200px] lg:w-[600px] 2xl:w-[800px] h-auto"
        />
      </motion.div>

      {/* 💬 ขวดขวา - กดได้และกดกลับได้ */}
      <motion.div
        className="absolute bottom-[40%] top-10 right-[9%] sm:right-[5%] xl:top-[20%] 2xl:top-[15%] 2xl:left-[55%] z-30 cursor-pointer"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={toggleRight}
      >
        <Image
          src={
            rightBottleClicked
              ? '/assets/texttyping4-2.png'
              : '/assets/typing.gif'
          }
          alt="right typing"
          width={250}
          height={120}
          className="w-[40vw]  2xl:w-[1000px]   h-auto"
        />
      </motion.div>
    </div>
  );
}
