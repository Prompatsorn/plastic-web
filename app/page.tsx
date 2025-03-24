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
  const [bottleSearchImage, setBottleSearchImage] = useState(
    "/assets/bottlesearch.png"
  );
  const [gImage] = useState("/assets/g220.gif");
  const [showBig1, setShowBig1] = useState(true);
  const [showBig2, setShowBig2] = useState(true);
  const [showBig3, setShowBig3] = useState(true);
  const [showBig4, setShowBig4] = useState(true);
  const [showBig5, setShowBig5] = useState(true);
  const allImagesClicked =
    !showBig1 && !showBig2 && !showBig3 && !showBig4 && !showBig5;
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [carPosition, setCarPosition] = useState(0); // ตำแหน่งเริ่มต้นของรถ
  const [isFalling, setIsFalling] = useState(false);
  const [xPos, setXPos] = useState(0); // ตำแหน่งรถ
  const [moved, setMoved] = useState(false); // ป้องกันขยับซ้ำ
  const [isLocked, setIsLocked] = useState(false); // ล็อกหน้าจอขณะรถเคลื่อนที่
  const [isTopicWaterVisible, setIsTopicWaterVisible] = useState(false);
  const [isTextWallVisible, setIsTextWallVisible] = useState(false);
  const [isTextGabageVisible, setIsTextGabageVisible] = useState(false);
  const [isTextTale1Visible, setIsTextTale1Visible] = useState(false);
  const [isTextTale2Visible, setIsTextTale2Visible] = useState(false);
  const [isTextBeachVisible, setIsTextBeachVisible] = useState(false);
  const [isSavegabageVisible, setIsSavegabageVisible] = useState(false);

  const [isPlasticTaoVisible, setIsPlasticTaoVisible] = useState(true);
  const [isTextPlasticVisible, setIsTextPlasticVisible] = useState(false);

  const [isGif, setIsGif] = useState(false);
  const [shifted, setShifted] = useState(false);
  const [isTypingVisible, setIsTypingVisible] = useState(true); // สถานะสำหรับควบคุมการแสดงภาพ
  const [isMoved, setIsMoved] = useState(false); // เปลี่ยนชื่อให้ไม่ซ้ำ
  const [showWorld, setShowWorld] = useState(false);
  const [showText, setShowText] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isFading, setIsFading] = useState(false);
  const [isYekkayaFront, setIsYekkayaFront] = useState(true);
  const [activeImage, setActiveImage] = useState<string | null>("rdy");

  const [position, setPosition] = useState(700); // ค่าเริ่มต้นของ right
  const [translateY, setTranslateY] = useState("translateY(0px)"); // ค่าเริ่มต้นของตำแหน่ง Y
  const [isImageChanged, setIsImageChanged] = useState(false); // เปลี่ยนชื่อจาก isActivated

  const [isFlipped, setIsFlipped] = useState(false);
  const [backImagePosition, setBackImagePosition] = useState({
    top: 945,
    right: 110,
  });

  useEffect(() => {
    setBackImagePosition((prev) => ({ ...prev })); // ✅ ใช้ state updater เพื่อให้ ESLint ไม่แจ้งเตือน
  }, []);

  const [isImageVisible, setIsImageVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsImageVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleToggle = (image: string | null) => {
    setActiveImage(activeImage === image ? null : image);
  };

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        // เลื่อนลง -> รถขยับไปขวา 300px และยกตัวขึ้น 50px
        setPosition(400);
        setTranslateY("translateY(-50px)");
      } else {
        // เลื่อนขึ้น -> รถกลับตำแหน่งเดิมและอยู่ระดับเดิม
        setPosition(700);
        setTranslateY("translateY(0px)");
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleEnd = () => {
    setIsFading(true); // เริ่มให้วิดีโอจางหายไป
  };

  const handleNewClick = () => {
    setIsMoved((prev) => !prev); // สลับสถานะระหว่าง true/false
  };

  const onPlasticTaoClick = () => {
    setIsPlasticTaoVisible(false); // ซ่อน plastictao.png
    setIsTextPlasticVisible(true); // แสดง texttaoplastic.png
  };

  useEffect(() => {
    const handleScroll = () => {
      // Existing scroll handling logic...
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const topicWaterElement = document.getElementById("topicWaterImage");
      const textWallElement = document.getElementById("textWallImage");
      const textGabageElement = document.getElementById("textGabageImage");
      const textTale1Element = document.getElementById("textTale1Image");
      const textTale2Element = document.getElementById("textTale2Image");
      const textBeachElement = document.getElementById("textBeachImage");
      const savegabageElement = document.getElementById("savegabageImage");
      const windowHeight = window.innerHeight;

      if (topicWaterElement) {
        const rect = topicWaterElement.getBoundingClientRect();
        setIsTopicWaterVisible(
          rect.top < windowHeight * 0.8 && rect.bottom > 0
        );
      }

      if (textWallElement) {
        const rect = textWallElement.getBoundingClientRect();
        setIsTextWallVisible(rect.top < windowHeight * 0.8 && rect.bottom > 0);
      }

      if (textGabageElement) {
        const rect = textGabageElement.getBoundingClientRect();
        setIsTextGabageVisible(
          rect.top < windowHeight * 0.8 && rect.bottom > 0
        );
      }

      if (textTale1Element) {
        const rect = textTale1Element.getBoundingClientRect();
        setIsTextTale1Visible(rect.top < windowHeight * 0.8 && rect.bottom > 0);
      }

      if (textTale2Element) {
        const rect = textTale2Element.getBoundingClientRect();
        setIsTextTale2Visible(rect.top < windowHeight * 0.8 && rect.bottom > 0);
      }

      if (textBeachElement) {
        const rect = textBeachElement.getBoundingClientRect();
        setIsTextBeachVisible(rect.top < windowHeight * 0.8 && rect.bottom > 0);
      }

      if (savegabageElement) {
        const rect = savegabageElement.getBoundingClientRect();
        setIsSavegabageVisible(
          rect.top < windowHeight * 0.8 && rect.bottom > 0
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0.5 && !moved) {
        setIsLocked(true); // 🔒 ล็อกการเลื่อน
        setXPos(300); // 🚗 ขยับไป 300px
        setMoved(true); // กันไม่ให้ขยับซ้ำ

        // 📜 หลังจาก 1 วินาที ให้เลื่อนหน้าเว็บลงไปที่ตำแหน่ง 2000px แล้วปลดล็อก
        setTimeout(() => {
          window.scrollTo({
            top: 1200,
            behavior: "smooth",
          });

          // 🔓 ปลดล็อกหลังจากเลื่อนเสร็จ
          setTimeout(() => {
            setIsLocked(false);
          }, 1000);
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [moved]);

  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLocked]);

  const handleSealClick = () => {
    setIsFalling(true);
    setTimeout(() => {
      setIsFalling(false); // ซ่อนหลังจาก 5 วินาที
    }, 5000);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // เลื่อนขึ้นไปบนสุด
  };
  const handleScrollDown = () => {
    window.scrollTo({ top: 4200, behavior: "smooth" }); // เลื่อนไปที่ตำแหน่ง 5000px
  };
  const handleScrollToBottom = () => {
    window.scrollTo({ top: 10100, behavior: "smooth" }); // เลื่อนไปด้านล่างสุดของหน้า
  };

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
    const audioElement = audioRef.current; // ✅ ก๊อปปี้ค่าไว้ก่อน

    return () => {
      audioElement?.pause(); // ✅ ใช้ค่าที่ก๊อปปี้ไว้ แทนการเข้าถึง audioRef.current ตรงๆ
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
    setC1Image((prev) =>
      prev === "/assets/c1.png" ? "/assets/cb1.png" : "/assets/c1.png"
    );
  };

  const toggleC2Image = () => {
    setC2Image((prev) =>
      prev === "/assets/c2.png" ? "/assets/cb2.png" : "/assets/c2.png"
    );
  };

  const toggleYlb1Image = () => {
    setYlb1Image((prev) =>
      prev === "/assets/yl1.png" ? "/assets/ylb1.png" : "/assets/yl1.png"
    );
  };

  const toggleBlueImage = () => {
    setBlueImage((prev) =>
      prev === "/assets/blue.png" ? "/assets/blueb.png" : "/assets/blue.png"
    );
  };

  const toggleGreenImage = () => {
    setGreenImage((prev) =>
      prev === "/assets/green.png" ? "/assets/greenb.png" : "/assets/green.png"
    );
  };

  const toggleRedImage = () => {
    setRedImage((prev) =>
      prev === "/assets/red.png" ? "/assets/redb.png" : "/assets/red.png"
    );
  };

  const toggleBottleImage = () => {
    setBottleImage((prev) =>
      prev === "/assets/bottle.png"
        ? "/assets/bottleblack.png"
        : "/assets/bottle.png"
    );
  };
  const toggleBottleSearchImage = () => {
    setBottleSearchImage((prev) =>
      prev === "/assets/bottlesearch.png"
        ? "/assets/bottlesearchblack.png"
        : "/assets/bottlesearch.png"
    );
  };
  const handleFlaskClick = () => {
    setShifted((prev) => !prev); // สลับสถานะระหว่าง true/false
    setIsTypingVisible((prev) => !prev); // สลับการแสดงผลระหว่าง typing และ text1
  };

  const handleClick = () => {
    if (showWorld) {
      // ถ้ากดอีกครั้งให้ซ่อนรูปทั้งหมด
      setShowText(false);
      setTimeout(() => {
        setShowWorld(false);
      }, 500); // ให้ world หายก่อน textworld 0.5 วินาที
    } else {
      // ถ้ากดครั้งแรกให้ world ขึ้นก่อน แล้ว textworld ขึ้นหลัง 1 วิ
      setShowWorld(true);
      setTimeout(() => {
        setShowText(true);
      }, 1000);
    }
  };

  return (
    <div
      id="home"
      className="w-full relative"
      style={{ width: "100vw", height: "100vh" }}
    >
      <video
        ref={videoRef}
        src="/assets/Door.mp4"
        muted
        onClick={handlePlay} // คลิกเพื่อเล่น
        onEnded={handleEnd} // เมื่อเล่นจบ ให้จางหายไป
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
          zIndex: 50,
          cursor: "pointer",
          opacity: isFading ? 0 : 1, 
          transition: "opacity 2s ease-out", 
        }}
        className="w-full h-full md:w-[932px]h-[100px]"
      />

      <Image
        src="/assets/home.jpg"
        alt="home"
        width={1920}
        height={1000}
        priority
      />
      <Image
        id="topicImage"
        src="/assets/topic.png"
        alt="topic"
        width={500}
        height={500}
        className="absolute top-[80px] right-[550px] md:right-[300px] md:w-[300px] md:top-[50px]"
      />
      <Image
        src="/assets/paiwood.png"
        alt="paiwood"
        width={100}
        height={100}
        className="absolute top-[650px] right-[770px]  animate-[bounce_1s_infinite] md:top-[350px] md:right-[400px] md:w-[80px]"
      />
      <Image
        src="/assets/car.png"
        alt="car"
        width={150}
        height={150}
        className="absolute top-[470px] right-[1050px] 2xl:top-[500px] md:top[0px] md:right-[0px]"
        style={{
          position: "absolute",
          transform: `translateX(${xPos}px)`,
          transition: "transform 1s ease-in-out",
        }}
      />

      <button
        onClick={togglePlay}
        className="fixed top-24 right-4 w-12 h-12 bg-transparent z-50 flex flex-col items-center gap-2"
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
        className="fixed top-4 right-4 w-12 h-12 bg-transparent z-50 flex flex-col items-center gap-2 cursor-pointer "
      >
        <Image src="/assets/menu.png" alt="menu" width={200} height={200} />
      </div>

      <div>
        {isMenuVisible && (
          <div className="fixed top-4 right-20 bg-transparent z-50 flex flex-col items-center ">
            <Image
              src="/assets/main.png"
              alt="main"
              width={200}
              height={200}
              className="cursor-pointer image-hover-scale"
              onClick={handleScrollTop}
            />
            <Image
              src="/assets/effect.png"
              alt="effect"
              width={200}
              height={200}
              className="cursor-pointer image-hover-scale"
              onClick={handleScrollDown} // กดแล้วเลื่อนไปที่ตำแหน่ง 4150px
            />
            <Image
              src="/assets/howto.png"
              alt="howto"
              width={200}
              height={200}
              className="cursor-pointer image-hover-scale"
              onClick={handleScrollToBottom} // กดแล้วเลื่อนไปหน้าสุดท้าย
            />
          </div>
        )}
      </div>

      <audio ref={audioRef} src="/assets/music.mp3" loop />

      <div className="relative">
        <Image
          src="/assets/water2.jpg"
          alt="images"
          width={1920}
          height={1000}
        />
        <Image
          id="topicWaterImage"
          src="/assets/topicwater.png"
          alt="topicwater"
          width={1000}
          height={1000}
          className={`absolute top-9 left-72 transition-transform duration-500 ease-out 
          ${
            isTopicWaterVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        />
        <Image
          src="/assets/bt.png"
          alt="images"
          width={500}
          height={500}
          className="absolute top-[200px] left-[600px] transform  transition-opacity duration-300 hover:opacity-0 animate-[wiggle_1s_ease-in-out_infinite]"
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
        <Image
          src="/assets/question.png"
          alt="question"
          width={100}
          height={100}
          className="absolute top-[200px] right-[500px] animate-[wiggle_0.5s_ease-in-out_infinite]"
        />
        <div className="absolute top-96 right-20 flex flex-col items-center gap-6">
          <div className="relative">
            <Image
              src={c1Image}
              alt="c1 image"
              width={500}
              height={500}
              onClick={toggleC1Image}
              className="cursor-pointer image-hover-scale hover:opacity-80 active:scale-95 transition-all glow-effect"
              title="คลิกเพื่อเลือก C1 Image"
            />
          </div>

          <div className="relative">
            <Image
              src={c2Image}
              alt="c2 image"
              width={500}
              height={500}
              onClick={toggleC2Image}
              className="cursor-pointer image-hover-scale hover:opacity-80 active:scale-95 transition-all glow-effect"
              title="คลิกเพื่อเลือก C2 Image"
            />
          </div>
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
          id="textWallImage"
          src="/assets/textwall3.png"
          alt="textwall3"
          width={1000}
          height={1000}
          className={`absolute top-28 left-80 transition-transform duration-500 ease-out 
          ${
            isTextWallVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        />
        <Image
          src={ylb1Image}
          alt="ylb1 image"
          width={200}
          height={200}
          className="absolute left-[180px] top-64 object-cover image-hover-scale"
          onClick={toggleYlb1Image}
        />
        <Image
          src={bluebImage}
          alt="blue"
          width={200}
          height={200}
          className="absolute left-[520px] top-64 object-cover transform  rotate-10 image-hover-scale"
          onClick={toggleBlueImage}
        />
        <Image
          src={greenImage}
          alt="green"
          width={200}
          height={200}
          className="absolute right-[540px] top-64 object-cover transform rotate-10 image-hover-scale"
          onClick={toggleGreenImage}
        />
        <Image
          src={redImage}
          alt="red"
          width={200}
          height={200}
          className="absolute right-[200px] top-64 object-cover transform rotate-10 image-hover-scale "
          onClick={toggleRedImage}
        />
      </div>

      <div className="relative mt-0">
        <Image
          src="/assets/gabage.jpg"
          alt="gabage"
          width={1920}
          height={1000}
          className="object-cover w-full h-full"
        />
        <Image
          id="textGabageImage"
          src="/assets/textgabage.png"
          alt="textgabage"
          width={700}
          height={700}
          className={`absolute top-20 right-44 transition-transform duration-500 ease-out 
          ${
            isTextGabageVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        />
        <Image
          src={bottleImage}
          alt="bottle"
          width={800}
          height={800}
          className="absolute top-56 left-52 image-hover-scale glow-white"
          onClick={toggleBottleImage}
        />

        <Image
          src={bottleSearchImage}
          alt="bottlesearch"
          width={1000}
          height={1000}
          className="absolute top-[750px] left-52 cursor-pointer image-hover-scale glow-yellow"
          onClick={toggleBottleSearchImage}
        />
        <div className="relative mt-0">
          <Image
            src="/assets/tala.jpg"
            alt="tala"
            width={1920}
            height={1000}
            className="object-cover w-full h-full"
          />
          <Image
            src="/assets/fongnum.png"
            alt="fongnum"
            width={800}
            height={800}
            className="absolute top-[1380px] left-[800px] animate-blink"
          />
          <Image
            src="/assets/fongnum.png"
            alt="fongnum"
            width={1000}
            height={1000}
            className="absolute top-[1180px] left-1 animate-blink"
          />
          <Image
            src={isGif ? "/assets/wefish.gif" : "/assets/wefish.png"}
            alt="wefish"
            width={350}
            height={350}
            className="absolute top-[1750px] left-[310px] animate-[wiggle_1s_ease-in-out_infinite]"
            onClick={() => setIsGif(true)}
          />

          <Image
            id="textTale1Image"
            src="/assets/texttale1.png"
            alt="texttale1"
            width={700}
            height={700}
            className={`absolute top-[480px] right-80 cursor-pointer transition-transform duration-500 ease-out 
          ${
            isTextTale1Visible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
          />

          <Image
            src="/assets/texttaoplastic.png"
            alt="texttaoplastic"
            width={300}
            height={300}
            className="absolute top-[1780px] left-[1060px]"
          />

          {/* ภาพ taonoi */}
          <Image
            src="/assets/taonoi.png"
            alt="taonoi"
            width={300}
            height={300}
            className="absolute top-[1800px] left-[800px] cursor-pointer transition-transform duration-500 animate-[wiggle_1s_ease-in-out_infinite] "
          />

          {/* ภาพ plastictao */}
          {isPlasticTaoVisible && (
            <Image
              src="/assets/plastictao.png"
              alt="plastictao"
              width={250}
              height={250}
              className="absolute top-[1800px] left-[800px] transition-transform duration-[1500ms] ease-out animate-[wiggle_1s_ease-in-out_infinite]"
              onClick={onPlasticTaoClick} // เรียกฟังก์ชันเมื่อคลิก
            />
          )}
          {/* แสดง texttaoplastic.png เมื่อ isTextPlasticVisible เป็น true */}
          {isTextPlasticVisible && (
            <Image
              src="/assets/texttale2down.png"
              alt="texttaledown"
              width={550}
              height={550}
              className="absolute top-[1560px] left-[240px] "
            />
          )}
          <Image
            id="textTale2Image"
            src="/assets/texttale2.png"
            alt="texttale2"
            width={700}
            height={700}
            className={`absolute top-[1350px] left-44 cursor-pointer transition-transform duration-500 ease-out 
          ${
            isTextTale2Visible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
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
            className="absolute top-[1300px] right-28 cursor-pointer transition-opacity duration-300 hover:opacity-0"
          />
          <Image
            src="/assets/openbottleback.gif"
            alt="openbottleback"
            width={400}
            height={400}
            className="absolute top-[1300px] right-28 cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100"
          />
          <Image
            src="/assets/tao.gif"
            alt="taogif"
            width={400}
            height={400}
            className="absolute top-[900px] right-[1000px] cursor-pointer transition-opacity duration-300 hover:opacity-0"
          />
          <Image
            src="/assets/taoback.gif"
            alt="taoback"
            width={400}
            height={400}
            className="absolute top-[900px] right-[1000px] cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100"
          />
          {/* แสดง microbt.png เมื่อ isFlipped === false */}
          {!isFlipped && (
            <Image
              src="/assets/microbt.png"
              alt="microbt"
              width={800}
              height={800}
              style={{
                top: `${backImagePosition.top}px`,
                right: `${backImagePosition.right}px`,
              }}
              className="absolute cursor-pointer image-hover-scale glow-white"
              onClick={() => setIsFlipped(true)}
            />
          )}

          {/* แสดง microbtback.png เมื่อ isFlipped === true */}
          {isFlipped && (
            <Image
              src="/assets/microbtback.png"
              alt="microbtback"
              width={800}
              height={800}
              style={{
                top: `${backImagePosition.top}px`,
                right: `${backImagePosition.right}px`,
              }}
              className="absolute cursor-pointer no-glow"
              onClick={() => setIsFlipped(false)}
            />
          )}
          <div className="relative mt-0">
            <Image
              src="/assets/beach.jpg"
              alt="beach"
              width={1920}
              height={1000}
              className="object-cover w-full h-full"
            />

            <Image
              id="textBeachImage"
              src="/assets/textbeach.png"
              alt="textbeach"
              width={700}
              height={700}
              className={`absolute top-[1300px] left-[780px] transition-transform duration-500 ease-out 
          ${
            isTextBeachVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
            />
            <Image
              src="/assets/wan.png"
              alt="wan"
              width={500}
              height={500}
              className="absolute top-[150px] left-[700px]  "
            />
            <div>
              {/* Seal */}
              <Image
                src="/assets/seal.png"
                alt="seal"
                width={500}
                height={500}
                className="absolute top-[1200px] left-[200px] cursor-pointer transition-opacity duration-300 animate-[wiggle_1s_ease-in-out_infinite]"
                onClick={handleSealClick}
              />

              {/* Big images */}
              {[
                "big1",
                "big2",
                "big3",
                "big4",
                "big5",
                "big2",
                "big3",
                "big1",
              ].map((name, index) => (
                <Image
                  key={index}
                  src={`/assets/${name}.png`}
                  alt={name}
                  width={150}
                  height={150}
                  className={`absolute top-[1000px] ${
                    index >= 6
                      ? `right-[${index === 6 ? 20 : 200}px]`
                      : `left-[${200 + index * 200}px]`
                  } 
      cursor-pointer transition-all duration-[2000ms] ${
        isFalling ? "translate-y-[800px] opacity-0" : ""
      }`}
                />
              ))}
            </div>
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
              {/* อื่น ๆ */}
              <Image
                id="savegabageImage"
                src="/assets/savegabage.png"
                alt="savegabage"
                width={300}
                height={300}
                className={`absolute top-[60px] right-[200px] cursor-pointer transition-transform duration-500 ease-out ${
                  isSavegabageVisible
                    ? "scale-100 opacity-100"
                    : "scale-50 opacity-0"
                }`}
              />
              {/* อื่น ๆ */}
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
                  className="absolute top-[180px] right-[400px] cursor-pointer transition-opacity duration-300"
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
              <Image
                src={
                  isYekkayaFront
                    ? "/assets/yekkaya.png"
                    : "/assets/yekkayaback.png"
                }
                alt="yekkaya"
                width={800}
                height={800}
                className="absolute top-[400px] left-[2050px] cursor-pointer image-hover-scale"
                onClick={() => setIsYekkayaFront(!isYekkayaFront)}
              />
              <Image
                src="/assets/recycle1.jpg"
                alt="recycle1"
                width={1920}
                height={1000}
                className="object-cover w-[1920px] h-full"
              />
              <Image
                src="/assets/recycle12.jpg"
                alt="recycle12"
                width={1920}
                height={1000}
                className="object-cover w-[1920px] h-full"
              />
              <Image
                src="/assets/lang.png"
                alt="lang"
                width={800}
                height={800}
                className="absolute top-[575px] left-[3700px]"
              />
              <Image
                src="/assets/btsleep.png"
                alt="btsleep"
                width={300}
                height={300}
                className={`absolute top-[590px] left-[3750px] cursor-pointer transition-transform duration-1000 z-10 
          animate-glow ${shifted ? "translate-x-[300px]" : "translate-x-0"}`}
                onClick={handleFlaskClick}
              />
              {isTypingVisible ? ( // ตรวจสอบสถานะเพื่อแสดงภาพ
                <Image
                  src="/assets/typing.gif"
                  alt="typing"
                  width={700}
                  height={700}
                  className="absolute top-[300px] left-[3750px]"
                />
              ) : (
                <Image
                  src="/assets/text1.png"
                  alt="text1"
                  width={700}
                  height={700}
                  className="absolute top-[240px] left-[3750px]"
                />
              )}
              <Image
                src="/assets/plasticbottleone.png"
                alt="pbtone"
                width={400}
                height={400}
                className="absolute top-[120px] left-[4480px] cursor-pointer glow-effect"
                onClick={() => setIsImageChanged(!isImageChanged)}
                title="คลิกเพื่อเปลี่ยนภาพ"
              />

              {/* BTGO - Moves Up and Fades Out */}
              <Image
                src="/assets/btgo.png"
                alt="btgo"
                width={100}
                height={100}
                className={`absolute left-[4635px] transition-all duration-[2000ms] ease-linear ${
                  isImageChanged
                    ? "top-[200px] opacity-0"
                    : "top-[400px] opacity-100"
                }`}
              />
              <Image
                src={
                  isImageChanged ? "/assets/text2.png" : "/assets/typing.gif"
                }
                alt="typing"
                width={600} // กำหนดความกว้างตรงนี้
                height={150} // กำหนดความสูงตรงนี้
                className={`absolute transition-all duration-1000 ${
                  isImageChanged
                    ? "top-[80px] left-[5000px]"
                    : "h-[100px] top-[100px] left-[5000px]"
                }`}
              />
              <Image
                src="/assets/new.png"
                alt="new"
                width={1000}
                height={1000}
                className="absolute top-[280px] left-[4850px] cursor-pointer glow-effect"
                onClick={handleNewClick}
              />

              <Image
                src="/assets/btpt.png"
                alt="btpt"
                width={40}
                height={40}
                className={`absolute top-[400px] left-[5250px] transition-transform duration-1000 ${
                  isMoved ? "translate-x-[500px]" : "translate-x-0"
                }`} // เลื่อนเมื่อ isMoved เป็น true
              />
              <Image
                src="/assets/wallnew.jpg"
                alt="wallnew"
                width={1920}
                height={1000}
                className="object-cover w-[1920px] h-full"
              />
              <Image
                src="/assets/textwallnew.png"
                alt="textwallnew"
                width={600}
                height={600}
                className="absolute top-[60px] left-[6380px]"
              />
              <Image
                src="/assets/kapao.png"
                alt="kapao"
                width={300}
                height={300}
                className="absolute top-[280px] left-[6205px] transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-100"
              />
              <Image
                src="/assets/kapaoback.png"
                alt="kapaoback"
                width={300}
                height={300}
                className="absolute top-[190px] left-[6160px] transition-transform duration-500 ease-in-out scale-100 opacity-0 hover:scale-110 hover:opacity-100"
              />
              <Image
                src="/assets/btblue.png"
                alt="btblue"
                width={300}
                height={300}
                className="absolute top-[300px] left-[6540px] transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-100 "
              />
              <Image
                src="/assets/btblueback.png"
                alt="btblueback"
                width={340}
                height={340}
                className="absolute top-[190px] left-[6520px] transition-transform duration-500 ease-in-out scale-100 opacity-0 hover:scale-110 hover:opacity-100"
              />
              <Image
                src="/assets/sh.png"
                alt="sh"
                width={300}
                height={300}
                className="absolute top-[280px] left-[6870px] transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-100 "
              />
              <Image
                src="/assets/shback.png"
                alt="shback"
                width={300}
                height={300}
                className="absolute top-[190px] left-[6915px] transition-transform duration-500 ease-in-out scale-100 opacity-0 hover:scale-110 hover:opacity-100"
              />
            </div>

            <div
              className="absolute top-[300px] left-[30px] cursor-pointer"
              onClick={moveCar}
            >
              <Image
                src="/assets/carpao.png"
                alt="carpao"
                width={700}
                height={700}
                className="relative z-10" // carpao อยู่ด้านหน้า
              />
              <Image
                src="/assets/kaya.png"
                alt="kaya"
                width={300}
                height={300}
                className="absolute top-[-130px] left-[60px] z-0 animate-[wiggle_0.8s_ease-in-out_infinite]" // kaya อยู่ด้านหลัง
                onClick={moveCar}
              />
            </div>
          </div>
        </div>
        <div className="relative min-h-screen w-full">
          {/* รูปพื้นหลัง */}
          <Image
            src="/assets/bg4.jpg"
            alt="bg4"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />

          {/* รูป textworld.png */}
          <div className="relative z-10 flex items-center justify-center h-screen">
            <Image
              src="/assets/textworld.png"
              alt="textworld"
              width={800}
              height={800}
              className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            {/* textworld2.png แสดงหลัง 1 วินาที */}
            <Image
              src="/assets/textworld2.png"
              alt="textworld2"
              width={400}
              height={400}
              className={`absolute top-44 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${
                showText ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* hand.png (ปุ่มกด toggle) */}
            <Image
              src="/assets/hand.png"
              alt="hand"
              width={550}
              height={550}
              className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse cursor-pointer"
              onClick={handleClick}
            />

            {/* world.png แสดงก่อน */}
            <Image
              src="/assets/world.png"
              alt="world"
              width={500}
              height={500}
              className={`absolute top-[430px] left-[780px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${
                showWorld ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>

        <div>
          <Image
            src="/assets/wall5.jpg"
            alt="wall5"
            width={1920}
            height={1000}
            className="object-cover w-[1920px] h-full"
          />
          {/* RDY Image Toggle */}
          <Image
            src={activeImage === "rdy" ? "/assets/rdy.png" : "/assets/rd.png"}
            alt="rdy"
            width={200}
            height={200}
            className="absolute top-[7580] left-[300] cursor-pointer"
            onClick={() => handleToggle("rdy")}
          />
          {activeImage === "rdy" && (
            <>
              <Image
                src="/assets/rd1.png"
                alt="rd1"
                width={750}
                height={750}
                className="absolute transition-opacity duration-500 top-[7800] left-[475]"
              />
              <Image
                src="/assets/rdtext.png"
                alt="rdtext"
                width={460}
                height={460}
                className="absolute transition-opacity duration-500 top-[7794] left-[580]  shadow-[4px_-4px_8px_rgba(0,0,0,0.1)]"
              />
              <Image
                src="/assets/rdtext1.png"
                alt="rdtext1"
                width={450}
                height={450}
                className="absolute transition-opacity duration-500 top-[7800] left-[580]"
              />
            </>
          )}

          {/* RUY Image Toggle */}
          <Image
            src={activeImage === "ruy" ? "/assets/ruy.png" : "/assets/ru.png"}
            alt="ruy"
            width={200}
            height={200}
            className="absolute top-[7580] left-[700] cursor-pointer"
            onClick={() => handleToggle("ruy")}
          />
          {activeImage === "ruy" && (
            <>
              <Image
                src="/assets/ru1.png"
                alt="ru1"
                width={750}
                height={750}
                className="absolute transition-opacity duration-500 top-[7725] left-[450]"
              />
              <Image
                src="/assets/rutext.png"
                alt="rut"
                width={460}
                height={460}
                className="absolute transition-opacity duration-500 top-[7794] left-[580]  shadow-[4px_-4px_8px_rgba(0,0,0,0.1)]"
              />
              <Image
                src="/assets/rutext1.png"
                alt="rut1"
                width={460}
                height={460}
                className="absolute transition-opacity duration-500 top-[7795] left-[580]"
              />
            </>
          )}

          {/* RCY Image Toggle */}
          <Image
            src={activeImage === "rcy" ? "/assets/rcy.png" : "/assets/rc.png"}
            alt="rcy"
            width={200}
            height={200}
            className="absolute top-[7580] left-[1100] cursor-pointer"
            onClick={() => handleToggle("rcy")}
          />
          {activeImage === "rcy" && (
            <>
              <Image
                src="/assets/rc1.png"
                alt="rc1"
                width={910}
                height={910}
                className="absolute transition-opacity duration-500 top-[7720] left-[366]"
              />
              <Image
                src="/assets/rctext.png"
                alt="rct"
                width={465}
                height={465}
                className="absolute transition-opacity duration-500 top-[7795] left-[565]  shadow-[4px_-4px_8px_rgba(0,0,0,0.1)]"
              />
              <Image
                src="/assets/rctext1.png"
                alt="rct1"
                width={440}
                height={440}
                className="absolute transition-opacity duration-500 top-[7795] left-[580]"
              />
            </>
          )}
        </div>
        <div className="relative mt-0">
          <Image
            src="/assets/wall6.jpg"
            alt="wall6"
            width={1920}
            height={1000}
            className="object-cover w-full h-full"
          />

          <div ref={ref} className="absolute top-[115px] right-[350px]">
            <Image
              src="/assets/textwall6.png"
              alt="textwall6"
              width={500}
              height={500}
              className={`transition-all duration-700 ease-out ${
                isImageVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-20 scale-90 opacity-0"
              }`}
            />
          </div>
          <Image
            src="/assets/carwall6.png"
            alt="carwall6"
            width={150}
            height={150}
            style={{
              right: `${position}px`,
              transform: translateY, // ใช้ translateY เพื่อให้รถยกขึ้น
            }}
            className="absolute top-[650px] transition-all duration-500"
          />
        </div>

        <div className="relative mt-0">
          <Image
            src="/assets/pojadtum.png"
            alt="pojadtum"
            width={150}
            height={150}
            className="absolute top-[750px] right-[750px]"
          />
          <Image
            src="/assets/last1.png"
            alt="last"
            width={1920}
            height={1000}
            className="object-cover w-full h-full"
          />
          <Image
            src="/assets/retern.png"
            alt="retern"
            width={70}
            height={70}
            className="absolute top-[100px] right-[800px] animate-spin cursor-pointer"
            onClick={scrollToTop}
          />
        </div>
        <div className="relative mt-0">
          <Image
            src="/assets/lastlast.jpg"
            alt="lastlast"
            width={1920}
            height={1000}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
