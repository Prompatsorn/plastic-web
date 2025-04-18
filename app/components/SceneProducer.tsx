'use client';

import Image from 'next/image';

export default function SceneSea2() {
  return ( 
    <section  id="scene-producer" className="relative w-full h-auto overflow-hidden">
              {/* 🔳 พื้นหลัง */}
              <Image
                src="/assets/producer.png"
                alt="producer background"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                priority
              />

    </section>
  );
}
