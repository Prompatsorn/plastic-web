'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function SceneNewBottle() {
  const [isTopicVisible, setIsTopicVisible] = useState(false);
  const topicRef = useRef<HTMLDivElement>(null);

  const [isHoveringKapao, setIsHoveringKapao] = useState(false);
  const [isHoveringBottle, setIsHoveringBottle] = useState(false);
  const [isHoveringShirt, setIsHoveringShirt] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsTopicVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (topicRef.current) observer.observe(topicRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white flex items-center justify-center border-4">

      {/* พื้นหลัง */}
      <Image
        src="/assets/wallnew.jpg"
        alt="wallnew"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />

      {/* หัวข้อ */}
      <div
        ref={topicRef}
        className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-[60vw] sm:w-[40vw] max-w-[500px] z-10"
      >
        <Image
          src="/assets/topicwallnew.png"
          alt="text"
          width={600}
          height={600}
          className={`w-full transition-all duration-700 ease-out ${
            isTopicVisible
              ? 'translate-y-0 scale-100 opacity-100'
              : 'translate-y-10 scale-95 opacity-0'
          }`}
        />
      </div>

    {/* กล่องรวมภาพทั้งหมด */}
<div className="relative z-10 w-full h-[60vh] pt-[40vh]">

{/* --- KAPAO --- */}
<div
  className="absolute w-[30%] left-[22%] top-[12%]
             sm:w-[18%] sm:left-[20%] sm:top-[30%]
             md:w-[20%] md:left-[19%] md:top-[30%]
            
             xl:w-[20%] xl:left-[14%] xl:top-[35%]
             2xl:w-[20%] 2xl:left-[19%] 2xl:top-[30%]"
  onMouseEnter={() => setIsHoveringKapao(true)}
  onMouseLeave={() => setIsHoveringKapao(false)}
>
  <Image src="/assets/kapao.png" alt="kapao" width={300} height={300} className="w-full" />
</div>

<div
  className="absolute w-[30%] left-[20%] top-[15%]
             sm:w-[18%] sm:left-[18%] sm:top-[15%]
             md:w-[18%] md:left-[18%] md:top-[15%]
             
             xl:w-[22%] xl:left-[11%] xl:top-[15%]
             2xl:w-[18%] 2xl:left-[18%] 2xl:top-[13%]"
  onMouseEnter={() => setIsHoveringKapao(true)}
  onMouseLeave={() => setIsHoveringKapao(false)}
>
  <Image
    src="/assets/kapaoback.png"
    alt="kapaoback"
    width={300}
    height={300}
    className={`transition duration-300 w-full ${
      isHoveringKapao ? 'opacity-100 scale-110' : 'opacity-0'
    }`}
  />
</div>

{/* --- BOTTLE --- */}
<div
  className="absolute w-[20%] top-[20%] left-[43%]
             sm:w-[18%] sm:top-[40%] sm:left-[42%]
             md:w-[18%] md:top-[40%] md:left-[42%]
            
             xl:w-[20%] xl:top-[40%] xl:left-[41%]
             2xl:w-[17%] 2xl:top-[38%] 2xl:left-[42%]"
  onMouseEnter={() => setIsHoveringBottle(true)}
  onMouseLeave={() => setIsHoveringBottle(false)}
>
  <Image src="/assets/btblue.png" alt="btblue" width={300} height={300} className="w-full" />
</div>

<div
  className="absolute w-[20%] top-[20%] left-[43%]
             sm:w-[20%] sm:top-[15%] sm:left-[40%]
             md:w-[20%] md:top-[15%] md:left-[40%]
             
             xl:w-[24%] xl:top-[18%] xl:left-[38%]
             2xl:w-[20%] 2xl:top-[13%] 2xl:left-[40%]"
  onMouseEnter={() => setIsHoveringBottle(true)}
  onMouseLeave={() => setIsHoveringBottle(false)}
>
  <Image
    src="/assets/btblueback.png"
    alt="btblueback"
    width={340}
    height={340}
    className={`w-full transition duration-300 ${
      isHoveringBottle ? 'opacity-100 scale-110' : 'opacity-0'
    }`}
  />
</div>

{/* --- SHIRT --- */}
<div
  className="absolute w-[20%] top-[35%] left-[63%]
             sm:w-[18%] sm:top-[32%] sm:left-[62%]
             md:w-[18%] md:top-[32%] md:left-[62%]
            
             xl:w-[20%] xl:top-[35%] xl:left-[65%]
             2xl:w-[16%] 2xl:top-[30%] 2xl:left-[63%]"
  onMouseEnter={() => setIsHoveringShirt(true)}
  onMouseLeave={() => setIsHoveringShirt(false)}
>
  <Image
    src="/assets/sh.png"
    alt="sh"
    width={300}
    height={300}
    className="w-full"
  />
  <div
    className="absolute w-[20%] top-[35%] left-[63%]
               sm:w-[100%] sm:top-[-18%] sm:left-[10%]
               md:w-[100%] md:top-[-18%] md:left-[10%]
            
               xl:w-[110%] xl:top-[-22%] xl:left-[8%]
               2xl:w-[110%] 2xl:top-[-18%] 2xl:left-[12%]"
    onMouseEnter={() => setIsHoveringShirt(true)}
    onMouseLeave={() => setIsHoveringShirt(false)}
  >
    <Image
      src="/assets/shback.png"
      alt="shback"
      width={300}
      height={300}
      className={`w-full transition duration-300 ${
        isHoveringShirt ? 'opacity-100 scale-110' : 'opacity-0'
      }`}
    />
        </div>
        </div>
      </div>
    </section>
  );
}
