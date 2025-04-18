'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SceneSustainability() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      
      {/* 🌍 รูปพื้นหลัง sustain.png */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/assets/sustain.png"
          alt="background"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </motion.div>

      {/* ✅ ชั้นหน้า */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-10 pt-20">
        
        {/* 📝 Topic PNG */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/topicsustain.png"
            alt="topic"
            width={500}
            height={200}
            className="w-[40vw] max-w-[1000px] mx-auto"
          />
        </motion.div>

        {/* 📝 Textsustain PNG */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/textsustain.png"
            alt="textsustain"
            width={1000}
            height={600}
            className="w-[40vw] lg:w-[100x] lg:top-[150px]"
          />
        </motion.div>

        {/* 🖐 มือ + 🌎 โลก */}
        <div className="relative w-[80vw] max-w-[500px] mx-auto h-[800px] mt-6">
          
          {/* 🌎 โลก */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-[80px] left-1/2 -translate-x-1/2 -translate-y-[30%] z-0
              sm:top-[20px] sm:left-[10px] sm:w-[500px]
              md:top-[20px] md:left-[10px] md:w-[500px]
              lg:top-[70px] lg:left-[-150px] lg:w-[800px]"
          >
            <Image
              src="/assets/earth.png"
              alt="earth"
              width={200}
              height={200}
              className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[280px] mx-auto"
            />
          </motion.div>

          {/* 🖐 มือ */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-[50px] left-1 -translate-x-1/2 z-10
              sm:top-[20px] sm:left-[10px] sm:w-[500px]
              md:top-[20px] md:left-[10px] md:w-[500px]
              lg:top-[100px] lg:left-[10px] lg:w-[500px]"
          >
            <Image
              src="/assets/hand.png"
              alt="hand"
              width={400}
              height={400}
              className="w-[200px] sm:w-[280px] md:w-[350px] lg:w-[900px] xl:w-[460px] mx-auto"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
