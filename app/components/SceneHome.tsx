'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function SceneHome() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [showRotateNotice, setShowRotateNotice] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleEnd = () => {
    setIsFading(true);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    return () => {
      audioElement?.pause();
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        audioRef.current?.pause();
      } else {
        videoRef.current.play();
        audioRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const checkDevice = () => {
      const isMobile = window.innerWidth <= 1024;
      const isPortrait = window.matchMedia('(orientation: portrait)').matches;
      setShowRotateNotice(isMobile && isPortrait);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, []);

  
   
  return (
    <div
      id="scene-home"
      className="w-full h-screen relative overflow-hidden"
    >
      {showRotateNotice && (
        <div className="fixed inset-0 bg-[#0078B7] bg-opacity-95 z-[999] flex flex-col justify-center items-center">
          <Image
            src="/assets/rotate.gif"
            alt="rotate"
            width={300}
            height={300}
            className="mb-6"
          />
        </div>
      )}

      <video
        ref={videoRef}
        src="/assets/Door.mp4"
        muted
        onClick={handlePlay}
        onEnded={handleEnd}
        className={`absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer transition-opacity duration-1000 ${
          isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      <div className="relative w-full h-auto overflow-hidden">
        <Image
          src="/assets/banner.jpg"
          alt="banner"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />

        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 z-10 w-fit">
          <Image
            src="/assets/topic.png"
            alt="topic"
            width={500}
            height={500}
            className="w-[40vw] max-w-[1000px] min-w-[150px] h-auto"
          />
          {/* ลบ car.png ออกไป */}
          <Image
            src="/assets/scroll down.png"
            alt="topic"
            width={200}
            height={200}
            className="absolute top-[230%] left-[35%] w-1/5 h-auto lg:w-28 lg:top-[230%] sm:w-14 animate-bounce"
          />
        </div>

        <button
          onClick={togglePlay}
          className="fixed top-16 right-4 z-20 w-10 h-10 sm:w-10 sm:h-10"
        >
          <Image
            src={isPlaying ? '/assets/soundon.png' : '/assets/soundstop.png'}
            alt="sound"
            width={50}
            height={50}
          />
        </button>

        <div
          onClick={toggleMenu}
          className="fixed top-4 right-6 bg-transparent z-20 flex flex-col items-center gap-2 cursor-pointer sm:right-4 w-10 h-10 sm:w-10 sm:h-10"
        >
          <Image src="/assets/menu.png" alt="menu" width={48} height={48} />
        </div>

        {/* 📚 เมนูย่อย */}
        {isMenuVisible && (
          <div className="fixed top-20 right-4 sm:right-16 sm:top-5 z-20 flex flex-col items-end">
            <a href="#scene-home">
              <Image
                src="/assets/main.png"
                alt="main"
                width={50}
                height={50}
                className="cursor-pointer image-hover-scale sm:w-[100px] sm:h-[30px]"
              />
            </a>
            <a href="#scene-bottletrash">
              <Image
                src="/assets/effect.png"
                alt="effect"
                width={50}
                height={50}
                className="cursor-pointer image-hover-scale transition sm:w-[100px] sm:h-[30px]"
              />
            </a>
            <a href="#scene-recycle1">
              <Image
                src="/assets/howto.png"
                alt="howto"
                width={50}
                height={50}
                className="cursor-pointer image-hover-scale transition sm:w-[100px] sm:h-[30px]"
              />
            </a>
            <a href="#scene-producer">
              <Image
                src="/assets/pujad.png"
                alt="pujad"
                width={50}
                height={50}
                className="cursor-pointer image-hover-scale transition sm:w-[100px] sm:h-[30px]"
              />
            </a>
          </div>
        )}

        <audio ref={audioRef} src="/assets/music.mp3" loop />
      </div>
    </div>
  );
}
