'use client';

import Image from 'next/image';

export default function SceneReturn() {
  const handleBackClick = () => {
    const homeSection = document.getElementById('scene-home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* 🔳 พื้นหลัง */}
      <Image
        src="/assets/return.png" 
        alt="return background"
        fill
        className="object-cover"
        priority
      />

      {/* 🔙 ปุ่มย้อนกลับ */}
      <div
        className="absolute bottom-10 lg:left-[800px] sm:left-[380px] md:left-[400px] -translate-x-1/2 z-50 animate-bounce"
        onClick={handleBackClick}
      >
        <Image
          src="/assets/buttonreturn.png" 
          alt="button"
          width={150}
          height={150}
          className="w-[90px] sm:w-[100px] md:w-[120px] lg:w-[200px] xl:w-[170px] 2xl:w-[190px]"
        />
      </div>
    </section>
  );
}

