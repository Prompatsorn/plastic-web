'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

export default function Scene3R() {
  const [activeImage, setActiveImage] = useState<string | null>('reuse'); // default แสดง reuse

  const handleToggle = (key: string) => {
    if (activeImage !== key) {
      setActiveImage(key); // ไม่ toggle กลับ ถ้ากดปุ่มเดิม
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center bg-white justify-center px-4 pt-0 overflow-hidden">

      {/* Background image */}
      <Image
        src="/assets/3r.jpg"
        alt="background 3r"
        fill
        className="object-cover object-top"
      />

      <div className="flex flex-col items-center justify-center mt-10">
        
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center 
                    gap-24 sm:gap-24 lg:gap-40 xl:gap-44 mb-6">
          
          {/* ♻️ Reuse */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative top-[8px] sm:top-[-30px] md:top-[-35px] xl:top-[-60px] 2xl:top-[-70px]"
          >
            <Image
              src={activeImage === 'reuse' ? '/assets/ruy.png' : '/assets/ru.png'}
              alt="reuse"
              width={120}
              height={120}
              className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[200px] 2xl:w-[300px] cursor-pointer hover:scale-105 transition"
              onClick={() => handleToggle('reuse')}
            />
          </motion.div>

          {/* 🧃 Reduce */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative top-[10px] sm:top-[-30px] md:top-[-35px] xl:top-[-60px] 2xl:top-[-70px]"
          >
            <Image
              src={activeImage === 'reduce' ? '/assets/rdy.png' : '/assets/rd.png'}
              alt="reduce"
              width={120}
              height={120}
              className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[200px]  2xl:w-[300px] cursor-pointer hover:scale-105 transition"
              onClick={() => handleToggle('reduce')}
            />
          </motion.div>

          {/* 🧴 Recycle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative top-[10px] sm:top-[-30px] md:top-[-35px]  xl:top-[-60px] 2xl:top-[-70px]"
          >
            <Image
              src={activeImage === 'recycle' ? '/assets/rcy.png' : '/assets/rc.png'}
              alt="recycle"
              width={120}
              height={120}
              className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[200px]  2xl:w-[300px] cursor-pointer hover:scale-105 transition"
              onClick={() => handleToggle('recycle')}
            />
          </motion.div>
        </div>

        {/* 📦 เนื้อหาหลังคลิก */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="z-10 flex flex-col items-center space-y-4 -mt-2"
        >
          {activeImage === 'reduce' && (
            <Image
              src="/assets/rd1.png"
              alt="reduce1"
              width={300}
              height={200}
              quality={100}
              unoptimized
              className="w-[220px] sm:w-[350px] md:w-[360px] lg:w-[700px] 2xl:w-[1000px]"
            />
          )}
          {activeImage === 'reuse' && (
            <Image
              src="/assets/ru1.png"
              alt="reuse1"
              width={300}
              height={200}
              quality={100}
              unoptimized
              className="w-[220px] sm:w-[350px] md:w-[360px] lg:w-[700px] 2xl:w-[1000px]"
            />
          )}
          {activeImage === 'recycle' && (
            <Image
              src="/assets/rc1.png"
              alt="recycle1"
              width={300}
              height={200}
              quality={100}
              unoptimized
              className="w-[220px] sm:w-[350px] md:w-[360px] lg:w-[700px] 2xl:w-[1000px]"
            />
          )}
        </motion.div>

      </div>

    </section>
  );
}
