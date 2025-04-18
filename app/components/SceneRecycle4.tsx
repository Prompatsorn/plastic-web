'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SceneRecycle4 () {
  const [leftBottleClicked, setLeftBottleClicked] = useState(false);
  const [rightBottleClicked, setRightBottleClicked] = useState(false);

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

      {/* 🧴 ขวดรีไซเคิลด้านซ้าย */}
      <motion.div
        className="absolute lg:top-96 sm:top-44 md:top-48 lg:left-[13%] md:left-[13%]  sm:left-[12%] z-20"
        animate={{ y: leftBottleClicked ? -40 : 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
        onClick={() => setLeftBottleClicked(true)}
      >
        <Image
          src="/assets/leftbottle.png"
          alt="leftbottle"
          width={500}
          height={500}
          className="cursor-pointer w-[30vw] sm:w-[80px] md:w-[80px] lg:w-[150px] h-auto"
        />
      </motion.div>

    
      {/* ✏️ ตำแหน่งข้อความของขวดซ้าย */}
      <motion.div
        className="absolute bottom-[40%]  top-8 left-[8%] lg:left-[15%] md:left-[15%] sm:left-[15%] z-30"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={leftBottleClicked ? "/assets/texttyping4-1.png" : "/assets/typing.gif"}
          alt="left typing"
          width={250}
          height={120}
          className="w-[40vw] sm:w-[250px] md:w-[300px] lg:w-[600px] h-auto"
        />
      </motion.div>

      {/* 🧴 ขวดใหม่ด้านขวา */}
      <motion.div
        className="absolute  right-[10%] lg:top-[450px] md:top-60 top-52 sm:right-[25%] z-20"
        animate={{ x: rightBottleClicked ? 60 : 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
        onClick={() => setRightBottleClicked(true)}
      >
        <Image
          src="/assets/newbottle.png"
          alt="newbottle"
          width={80}
          height={120}
          className="cursor-pointer w-[15vw] lg:w-[120px] md:w-[60px] sm:w-[60px] h-auto"
        />
      </motion.div>

      {/* ✏️ ตำแหน่งข้อความของขวดขวา */}
      <motion.div
        className="absolute bottom-[40%] top-10 right-[9%] sm:right-[10%] z-30"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={rightBottleClicked ? "/assets/texttyping4-2.png" : "/assets/typing.gif"}
          alt="right typing"
          width={250}
          height={120}
          className="w-[40vw] max-w-[500px] min-w-[300px] h-auto"
        />
      </motion.div>
    </div>
  );
};




