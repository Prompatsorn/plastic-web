
"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null); 
  const [c1Image, setC1Image] = useState("/assets/c1.png");
  const [c2Image, setC2Image] = useState("/assets/c2.png");
  const [ylb1Image, setYlb1Image] = useState("/assets/yl1.png");
  const [bluebImage, setBlueImage] = useState("/assets/blue.png");
  const [greenImage, setGreenImage] = useState("/assets/green.png");
  const [redImage, setRedImage] = useState("/assets/red.png");
  const [bottleImage, setBottleImage] = useState("/assets/bottle.png"); 
  const [bottleSearchImage, setBottleSearchImage] = useState("/assets/bottlesearch.png");
  const [gImage] = useState("/assets/g220.gif");
  const [showBig1, setShowBig1] = useState(true);
  const [showBig2, setShowBig2] = useState(true);
  const [showBig3, setShowBig3] = useState(true);
  const [showBig4, setShowBig4] = useState(true);
  const [showBig5, setShowBig5] = useState(true);
  const allImagesClicked = !showBig1 && !showBig2 && !showBig3 && !showBig4 && !showBig5;
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [carPosition, setCarPosition] = useState(0); // ตำแหน่งเริ่มต้นของรถ
  


  const moveCar = () => {
    setCarPosition((prev) => {
      if (prev === 0) {
        // ถ้าอยู่ที่จุดเริ่มต้น ให้เลื่อนไป 1300px
        return 1300;
      } else if (prev === 1300) {
        // ถ้าอยู่ที่ 1300px ให้กลับไปที่จุดเริ่มต้น
        return 0;
      }
      return prev;
    });
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible); // เปลี่ยนค่าจะแสดง/ซ่อนรูปภาพ
  };
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);
  

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleC1Image = () => {
    setC1Image((prev) => (prev === "/assets/c1.png" ? "/assets/cb1.png" : "/assets/c1.png"));
  };

  const toggleC2Image = () => {
    setC2Image((prev) => (prev === "/assets/c2.png" ? "/assets/cb2.png" : "/assets/c2.png"));
  };

  const toggleYlb1Image = () => {
    setYlb1Image((prev) => (prev === "/assets/yl1.png" ? "/assets/ylb1.png" : "/assets/yl1.png"));
  };

  const toggleBlueImage = () => {
    setBlueImage((prev) => (prev === "/assets/blue.png" ? "/assets/blueb.png" : "/assets/blue.png"));
  };

  const toggleGreenImage = () => {
    setGreenImage((prev) => (prev === "/assets/green.png" ? "/assets/greenb.png" : "/assets/green.png"));
  };

  const toggleRedImage = () => {
    setRedImage((prev) => (prev === "/assets/red.png" ? "/assets/redb.png" : "/assets/red.png"));
  };

  const toggleBottleImage = () => {
    setBottleImage((prev) => (prev === "/assets/bottle.png" ? "/assets/bottleblack.png" : "/assets/bottle.png"));
  };
  const toggleBottleSearchImage = () => {
    setBottleSearchImage((prev) => prev === "/assets/bottlesearch.png" ? "/assets/bottlesearchblack.png" : "/assets/bottlesearch.png");
  };

  return (
    <div id = "home" className="w-full relative">
      <Image
        src="/assets/home.jpg"
        alt="images"
        width={1920}
        height={1000}
        priority
      />
      <Image
        src="/assets/topic.png"
        alt="images"
        width={700}
        height={500}
        className="absolute top-12 right-16"
      />

      <button
        onClick={togglePlay}
        className="fixed top-4 right-4 w-12 h-12 bg-transparent z-50 flex flex-col items-center gap-2"
      >
        <Image
          src={isPlaying ? "/assets/sound1.png" : "/assets/sound-stop.png"}
          alt="sound icon"
          width={50}
          height={50}
        />
      </button>

      <div
        onClick={toggleMenu}
        className="fixed top-24 right-4 w-12 h-12 bg-transparent z-50 flex flex-col items-center gap-2 cursor-pointer"
      >
        <Image
          src="/assets/menu.png"
          alt="menu"
          width={200}
          height={200}
        />
      </div>

      return (
    <div>
      <button onClick={toggleMenu}>Toggle Menu</button> {/* ปุ่มเพื่อ toggle ค่า isMenuVisible */}

      {isMenuVisible && (  // ถ้า isMenuVisible เป็น true จะแสดงรูปภาพ
        <div className="fixed top-24 right-20 flex flex-col items-center">
          <Image
            src="/assets/main.png"
            alt="main"
            width={200}
            height={200}
          />
        </div>
      )}
    </div>
  );
        <audio 
          ref={audioRef} 
          src="/assets/music.mp3" 
          loop 
        />

        <div className="relative">
          <Image 
            src="/assets/water2.jpg" 
            alt="images" 
            width={1920} 
            height={1000} 
          />
           <Image
            src="/assets/bt.png"
            alt="images"
            width={500}
            height={500}
            className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hover:opacity-0"
          />
          <Image
            src="/assets/textbt.png"
            alt="image"
            width={1500}
            height={1500}
            className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-0 hover:opacity-100"
          />
        </div>

        <div className="relative mt-0 flex flex-col items-center">
          <Image 
            src="/assets/what.jpg" 
            alt="New Image"
            width={1920}
            height={1000} 
            className="w-full h-full" 
          />
          <div className="absolute top-96 right-20 flex flex-col items-center gap-6">
            <Image 
              src={c1Image} 
              alt="c1 image" 
              width={500} 
              height={500} 
              onClick={toggleC1Image} 
              className="cursor-pointer image-hover-scale " 
            />
            <Image 
              src={c2Image} 
              alt="c2 image" 
              width={500} 
              height={500} 
              onClick={toggleC2Image} 
              className="cursor-pointer image-hover-scale " 
            />
          </div>
        </div>

        <div className="relative mt-0">
          <Image 
            src="/assets/wall3.jpg" 
            alt="wall3" 
            width={1920} 
            height={1000} 
            className="object-cover w-full h-full" 
          />
          <Image 
            src={ylb1Image} 
            alt="ylb1 image" 
            width={250} 
            height={250} 
            className="absolute left-[200px] top-52 object-cover image-hover-scale" 
            onClick={toggleYlb1Image} 
          />
          <Image 
            src={bluebImage} 
            alt="blue" 
            width={250} 
            height={250} 
            className="absolute left-[550px] top-52 object-cover transform  rotate-10 image-hover-scale" 
            onClick={toggleBlueImage} 
          />
          <Image 
            src={greenImage} 
            alt="green" 
            width={250} 
            height={250} 
            className="absolute right-[580px] top-52 object-cover transform rotate-10 image-hover-scale" 
            onClick={toggleGreenImage} 
          />
          <Image 
            src={redImage} 
            alt="red" 
            width={250} 
            height={250} 
            className="absolute right-[200px] top-52 object-cover transform rotate-10 image-hover-scale " 
            onClick={toggleRedImage} 
          />
        </div>

        <div className="relative mt-0">
        <Image 
            src="/assets/garbage.jpg" 
            alt="garbage" 
            width={1920} 
            height={1000} 
            className="object-cover w-full h-full" 
          />
          <Image 
            src={bottleImage} 
            alt="bottle" 
            width={1000} 
            height={1000} 
            className="absolute top-56 left-52 " 
            onClick={toggleBottleImage}
          />
          <Image 
            src={bottleSearchImage} 
            alt="bottlesearch" 
            width={1000} 
            height={1000} 
            className="absolute top-[880px] left-52 cursor-pointer image-hover-scale" 
            onClick={toggleBottleSearchImage} 
          />
           <div className="relative mt-0">
          <Image 
            src="/assets/tale.jpg" 
            alt="tale" 
            width={1920} 
            height={1000} 
            className="object-cover w-full h-full" 
          />
          <Image 
          src={gImage} 
          alt="g220" 
          width={400} 
          height={400} 
          className="absolute top-[480px] left-24 cursor-pointer" 
        />
        <Image 
          src="/assets/gback220.gif" 
          alt="gback220" 
          width={400} 
          height={400} 
          className="absolute top-[480px] left-24 cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100" 
        />
        <Image 
          src="/assets/openbottle.gif" 
          alt="openbottle" 
          width={400} 
          height={400} 
          className="absolute top-[1500px] right-28 cursor-pointer transition-opacity duration-300 hover:opacity-0" 
        />
        <Image 
          src="/assets/openbottleback.gif" 
          alt="openbottleback" 
          width={400} 
          height={400} 
          className="absolute top-[1500px] right-28 cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100" 
        />
        <Image 
          src="/assets/tao.gif" 
          alt="openbottle" 
          width={400} 
          height={400} 
          className="absolute top-[2000px] right-[850px] cursor-pointer transition-opacity duration-300 hover:opacity-0" 
        />
        <Image 
          src="/assets/taoback.gif" 
          alt="openbottleback" 
          width={400} 
          height={400} 
          className="absolute top-[2000px] right-[850px] cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100" 
        />
        <div className="relative mt-0">
          <Image 
            src="/assets/beach.jpg" 
            alt="beach" 
            width={1920} 
            height={1000} 
            className="object-cover w-full h-full" 
          />
          <Image 
            src="/assets/clock.gif" 
            alt="clock" 
            width={400} 
            height={400} 
            className="absolute top-[500px] left-[250px] cursor-pointer transition-opacity duration-300 hover:opacity-0" 
          />
          <Image 
            src="/assets/clockback.gif" 
            alt="clockback" 
            width={400} 
            height={400} 
            className="absolute top-[500px] left-[250px] cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100" 
          />
          <div className="relative mt-0">
          <Image 
            src="/assets/sai.jpg" 
            alt="sai" 
            width={1920} 
            height={1000} 
            className="object-cover w-full h-full" 
          />
          {showBig1 && (
          <Image 
            src="/assets/big1.png" 
            alt="big1" 
            width={200} 
            height={200} 
            className="absolute top-[100px] left-[250px] cursor-pointer transition-opacity duration-300 animate-bounce" 
            onClick={() => setShowBig1(false)}
          />
        )}
        {showBig2 && (
          <Image 
            src="/assets/big2.png" 
            alt="big2" 
            width={200} 
            height={200} 
            className="absolute top-[450px] left-[300px] cursor-pointer transition-opacity duration-300 animate-bounce" 
            onClick={() => setShowBig2(false)}
          />
        )}
        {showBig3 && (
          <Image 
            src="/assets/big3.png" 
            alt="big3" 
            width={200} 
            height={200} 
            className="absolute top-[500px] right-[250px] cursor-pointer transition-opacity duration-300 animate-bounce " 
            onClick={() => setShowBig3(false)}
          />
        )}
        {showBig4 && (
          <Image 
            src="/assets/big4.png" 
            alt="big4" 
            width={200} 
            height={200} 
            className="absolute top-[150px] right-[350px] cursor-pointer transition-opacity duration-300 animate-bounce" 
            onClick={() => setShowBig4(false)}
          />
        )}
        {showBig5 && (
          <Image 
            src="/assets/big5.png" 
            alt="big5" 
            width={150} 
            height={150} 
            className="absolute top-[300px] right-[800px] cursor-pointer transition-opacity duration-300 animate-bounce" 
            onClick={() => setShowBig5(false)}
          />
        )}
         {allImagesClicked && (
          <Image 
            src="/assets/thankyou.png" 
            alt="thankyou" 
            width={1000} 
            height={1000} 
            className="absolute top-[230px] right-[500px] cursor-pointer transition-opacity duration-300" 
          />
        )}
          </div>
          </div>
          <div className="w-full h-screen overflow-x-scroll relative">
      <div
        className="absolute top-0 left-0 h-full  flex transition-transform duration-300"
        style={{ transform: `translateX(-${carPosition}px)` }}
      >
        <Image 
          src="/assets/street.jpg" 
          alt="street" 
          width={1920} 
          height={1000} 
          className="object-cover w-[1920px] h-full" 
        />
        <Image 
          src="/assets/street2.jpg" 
          alt="street2" 
          width={1920} 
          height={1000} 
          className="object-cover w-[1920px] h-full" 
        />
    </div>
    <div className="absolute top-[250px] left-[50px] cursor-pointer" onClick={moveCar}>
        <Image 
          src="/assets/car.png" 
          alt="car" 
          width={700} 
          height={700} 
        />
      </div>

          </div> 
          </div> 
        </div> 
      </div>
  );
} 