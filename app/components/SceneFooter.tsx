'use client';

import Image from 'next/image';

export default function SceneFooter() {
  return ( 
    <section className="relative w-full h-auto overflow-hidden">
              {/* 🔳 พื้นหลัง */}
              <Image
                src="/assets/footer.png"
                alt="footer background"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                priority
              />

    </section>
  );
}

