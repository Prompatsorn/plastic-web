'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function SceneBeach2() {
  const [showBig1, setShowBig1] = useState(true);
  const [showBig2, setShowBig2] = useState(true);
  const [showBig3, setShowBig3] = useState(true);
  const [showBig4, setShowBig4] = useState(true);
  const [showBig5, setShowBig5] = useState(true);

  const allClicked = !showBig1 && !showBig2 && !showBig3 && !showBig4 && !showBig5;

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* 🔳 พื้นหลังหลัก */}
      <Image
        src="/assets/beach2.png"
        alt="beach2 background"
        fill
        className={`object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
          allClicked ? 'opacity-0' : 'opacity-100'
        }`}
        priority
      />

      {/* 🔳 พื้นหลัง thankyou ที่เฟดขึ้นมา */}
      <Image
        src="/assets/thankyou.png"
        alt="thankyou"
        fill
        className={`object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
          allClicked ? 'opacity-100' : 'opacity-0'
        }`}
        priority
      />

<div className="relative w-full h-screen">
  {/* 📝 หัวข้อ */}
  {!allClicked && (
    <div className="absolute top-[40%] right-[10%] w-[100vw] max-w-[650px]
    sm:top-[45%] sm:right-[5%] sm:w-[40%]
    md:top-[50%] md:right-[10%] md:w-[40%]
     lg:top-[350px] lg:right-[80px] lg:w-[900px]
  
    ">
      <Image
        src="/assets/savegabage.png"
        alt="topic"
        width={1000}
        height={500}
      />
    </div>
  )}
</div>
      {/* 🗑️ ขยะที่คลิกแล้วหาย */}
      {!allClicked && showBig1 && (
        <Image
          src="/assets/big1.png"
          alt="big1"
          width={150}
          height={150}
          className="absolute cursor-pointer animate-bounce 
          lg:top-[100px] lg:left-[250px] lg:w-[200px]
           md:top-[130px] md:left-[650px] md:w-[100px]
           sm:top-[80px] sm:left-[600px] sm:w-[100px]"
          onClick={() => setShowBig1(false)}
        />
      )}
      {!allClicked && showBig2 && (
        <Image
          src="/assets/big2.png"
          alt="big2"
          width={150}
          height={150}
          className="absolute cursor-pointer animate-bounce
           lg:top-[450px] lg:left-[1200px] lg:w-[200px] 
           md:top-[300px] md:left-[630px] md:w-[100px]
          sm:top-[220px] sm:left-[600px] sm:w-[100px]"
          onClick={() => setShowBig2(false)}
        />
      )}
      {!allClicked && showBig3 && (
        <Image
          src="/assets/big3.png"
          alt="big3"
          width={150}
          height={150}
          className="absolute cursor-pointer animate-bounce 
          lg:top-[500px] lg:right-[1150px] lg:w-[200px] 
          md:top-[300px] md:right-[630px] md:w-[100px]
          sm:top-[200px] sm:right-[600px] sm:w-[100px]"
          onClick={() => setShowBig3(false)}
        />
      )}
      {!allClicked && showBig4 && (
        <Image
          src="/assets/big4.png"
          alt="big4"
          width={150}
          height={150}
          className="absolute cursor-pointer animate-bounce 
          lg:top-[150px] lg:right-[400px] lg:w-[200px] 
          md:top-[130px] md:right-[430px] md:w-[100px]
          sm:top-[120px] sm:right-[400px] sm:w-[100px]"
          onClick={() => setShowBig4(false)}
        />
      )}
      {!allClicked && showBig5 && (
        <Image
          src="/assets/big5.png"
          alt="big5"
          width={150}
          height={150}
          className="absolute cursor-pointer animate-bounce 
          lg:top-[300px] lg:right-[800px] lg:w-[150px] 
          md:top-[130px] md:right-[700px] md:w-[100px]
          sm:top-[80px] sm:right-[600px] sm:w-[100px]"
          onClick={() => setShowBig5(false)}
        />
      )}
    </section>
  );
}

