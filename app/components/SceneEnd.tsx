'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function SceneEnd() {
  const [isTopicVisible, setIsTopicVisible] = useState(false);
  
  const topicRef = useRef<HTMLDivElement>(null);
 

  // แสดง topicend เมื่อเลื่อนถึง
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsTopicVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (topicRef.current) observer.observe(topicRef.current);
    return () => observer.disconnect();
  }, []);


  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white flex items-center justify-center">
      {/* พื้นหลัง */}
      <Image
        src="/assets/end.png"
        alt="end"
        fill
        className="object-cover"
        priority
      />

    {/* topicend */}
<div
  ref={topicRef}
  className="absolute top-0 left-1/2 transform -translate-x-1/2"
>
  <Image
    src="/assets/topicend.png"
    alt="topicend"
    width={500}
    height={300}
    className={`w-[250px] sm:w-[300px] md:w-[300px] lg:w-[500px]
      transition-all duration-700 ease-out
      ${isTopicVisible
        ? 'translate-y-0 scale-100 opacity-100'
        : 'translate-y-5 scale-95 opacity-0'
      }`}
  />
</div>



    
    </section>
  );
}
