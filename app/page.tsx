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
  const [isImageChanged, setIsImageChanged] = useState(false); // เปลี่ยนชื่อจาก isActivated
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "scale-100");
          } else {
            entry.target.classList.remove("opacity-100", "scale-100");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);


  const [isFlipped, setIsFlipped] = useState(false);


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
        
      } else {
        // เลื่อนขึ้น -> รถกลับตำแหน่งเดิมและอยู่ระดับเดิม
        setPosition(700);
        
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
      if (window.scrollY > 0.1 && !moved) {
        setIsLocked(true); // 🔒 ล็อกการเลื่อน
        setXPos(300); // 🚗 ขยับไป 300px
        setMoved(true); // กันไม่ให้ขยับซ้ำ

        // 📜 หลังจาก 1 วินาที ให้เลื่อนหน้าเว็บลงไปที่ตำแหน่ง 2000px แล้วปลดล็อก
        setTimeout(() => {
          window.scrollTo({
            top: 1000,
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
    window.scrollTo({ top: 2000, behavior: "smooth" }); // เลื่อนไปที่ตำแหน่ง 5000px
  };
  const handleScrollToBottom = () => {
    window.scrollTo({ top: 4000, behavior: "smooth" }); // เลื่อนไปด้านล่างสุดของหน้า
  };

  const moveCar = () => {
    setCarPosition((prev) => {
      if (prev === 0) {
        // ถ้าอยู่ที่จุดเริ่มต้น ให้เลื่อนไป 1300px
        return 700;
      } else if (prev === 700) {
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
        className="lg:w-[500px] absolute lg:top-[100px] lg:right-[850px] md:right-[300px] md:w-[300px] md:top-[50px] "
      />
      <Image
        src="/assets/paiwood.png"
        alt="paiwood"
        width={100}
        height={100}
        className="absolute lg:top-[750px] lg:right-[1000px] lg:w-[100px]  animate-[bounce_1s_infinite] md:top-[350px] md:right-[400px] md:w-[80px]"
      />
      <Image
        src="/assets/car.png"
        alt="car"
        width={150}
        height={150}
        className="absolute lg:top-[580px] lg:right-[1200px] lg:w-[150px]  md:top-[280px] md:right-[700px] md:w-[90px]"
        style={{
          position: "absolute",
          transform: `translateX(${xPos}px)`,
          transition: "transform 1s ease-in-out",
        }}
      />

      <button
        onClick={togglePlay}
        className="fixed lg:top-24 lg:right-4 lg:w-12 lg:h-12 bg-transparent z-50 flex flex-col items-center gap-2  md:top-[60px] md:right-[380px] md:w-[30px]"
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
        className="fixed lg:top-4 lg:right-4 lg:w-12 lg:h-12 bg-transparent z-50 flex flex-col items-center gap-2 cursor-pointer md:top-[20px] md:right-[380px] md:w-[30px]"
      >
        <Image src="/assets/menu.png" alt="menu" width={200} height={200} />
      </div>

      <div>
        {isMenuVisible && (
          <div className="fixed top-4 right-20 bg-transparent z-50 flex flex-col items-center  md:top-[20px] md:right-[420px] md:w-[80px]">
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

      <div className="relative lg:w-[w-full] md:w-[932px]h-[100px] ">
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
          className={`absolute lg:top-9 lg:left-[450px] lg:w-[1000px] transition-transform duration-500 ease-out  md:top-[60px] md:right-[200px] md:w-[500px]
           
          ${
            isTopicWaterVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        />
        <Image
          src="/assets/bt.png"
          alt="images"
          width={200}
          height={200}
          className="absolute lg:top-[300px] lg:left-[700px] lg:w-[400px] transform  transition-opacity duration-300 hover:opacity-0 animate-[wiggle_1s_ease-in-out_infinite] md:top-[170px] md:right-[350px] md:w-[250px]"
        />
        <Image
          src="/assets/textbt.png"
          alt="image"
          width={1000}
          height={1000}
          className="absolute lg:top-[500px] lg:left-[850px] lg:w-[1500px] transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-100 opacity-0 hover:opacity-100 md:top-[300px] md:left-[450px] md:w-[800px]"
        />
      </div>

      <div className="relative mt-0 flex flex-col items-center ">
        <Image
          src="/assets/what.jpg"
          alt="New Image"
          width={1920}
          height={1000}
          className="w-full h-full  md:w-[932px]h-[100px]"
        />
        <Image
          src="/assets/question.png"
          alt="question"
          width={100}
          height={100}
          className="absolute lg:top-[300px] lg:w-[100px] lg:right-[650px] animate-[wiggle_0.5s_ease-in-out_infinite]  md:top-[130px] md:right-[300px] md:w-[60px]"
        />
        <div className="absolute lg:top-96 lg:right-20 lg:w-[500px] flex flex-col items-center gap-6 md:top-[250px] md:right-[50px] md:w-[320px]">
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
          className="object-cover w-full h-full md:w-[932px]h-[100px] lg:w-full"
        />
        <Image
          id="textWallImage"
          src="/assets/textwall3.png"
          alt="textwall3"
          width={1000}
          height={1000}
          className={`absolute lg:top-28 lg:left-[450px] lg:w-[1000px] transition-transform duration-500 ease-out  md:top-[80px] md:left-56 md:w-[500px]
          ${
            isTextWallVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        />
        <Image
          src={ylb1Image}
          alt="ylb1 image"
          width={200}
          height={200}
          className="absolute lg:left-[210px] lg:top-64 op-64 object-cover lg:w-[250px] image-hover-scale  md:top-[150px] md:left-[105px] md:w-[120px]"
          onClick={toggleYlb1Image}
        />
        <Image
          src={bluebImage}
          alt="blue"
          width={200}
          height={200}
          className="absolute lg:left-[625px] lg:top-64 lg:w-[250px] object-cover transform  rotate-10 image-hover-scale  md:top-[150px] md:left-[300px] md:w-[120px] "
          onClick={toggleBlueImage}
        />
        <Image
          src={greenImage}
          alt="green"
          width={200}
          height={200}
          className="absolute lg:right-[630px] lg:top-64 lg:w-[250px] object-cover transform rotate-10 image-hover-scale md:top-[150px] md:right-[310px] md:w-[120px]"
          onClick={toggleGreenImage}
        />
        <Image
          src={redImage}
          alt="red"
          width={200}
          height={200}
          className="absolute lg:right-[225px] lg:top-64 lg:w-[250px] object-cover transform rotate-10 image-hover-scale  md:top-[150px] md:right-[110px] md:w-[120px]"
          onClick={toggleRedImage}
        />
      </div>

      <div className="relative mt-0">
        <Image
          src="/assets/gabage.jpg"
          alt="gabage"
          width={1920}
          height={1000}
          className="object-cover w-full h-full  md:w-[932px]h-[100px] lg:w-full "
        />
        <Image
          id="textGabageImage"
          src="/assets/textgabage.png"
          alt="textgabage"
          width={700}
          height={700}
          className={`absolute lg:top-20 lg:right-44 lg:w-[700px] transition-transform duration-500 ease-out md:top-[40px] md:right-[120px] md:w-[400px] 
          ${
            isTextGabageVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        />
        <Image
          src={bottleImage}
          alt="bottle"
          width={800}
          height={800}
          className="absolute lg:top-56 lg:left-52 lg:w-[800px] cursor-pointer image-hover-scale glow-white  md:top-[120px] md:left-[140px] md:w-[400px] "
          onClick={toggleBottleImage}
        />

        <Image
          src={bottleSearchImage}
          alt="bottlesearch"
          width={1000}
          height={1000}
          className="absolute lg:top-[750px] lg:left-52 lg:w-[1000px] cursor-pointer image-hover-scale glow-yellow md:top-[400px] md:left-[140px] md:w-[550px]"
          onClick={toggleBottleSearchImage}
        />
        <div className="relative mt-0">
          <Image
            src="/assets/tala.jpg"
            alt="tala"
            width={1920}
            height={1000}
            className="object-cover w-full h-full md:w-[932px]h-[100px] lg:w-full "
          />
          <Image
            src="/assets/fongnum.png"
            alt="fongnum"
            width={800}
            height={800}
            className="absolute lg:top-[1380px] lg:left-[800px] animate-blink md:top-[400px] md:left-[20px] md:w-[550px] "
          />
          <Image
            src="/assets/fongnum.png"
            alt="fongnum"
            width={1000}
            height={1000}
            className="absolute top-[1180px] left-1 animate-blink md:top-[400px] md:left-[400px] md:w-[500px]"
          />
          <Image
            src={isGif ? "/assets/wefish.gif" : "/assets/wefish.png"}
            alt="wefish"
            width={350}
            height={350}
            className="absolute lg:top-[1750px] lg:left-[310px] lg:w-[350px] animate-[wiggle_1s_ease-in-out_infinite] md:top-[1000px] md:left-[100px] md:w-[200px]"
            onClick={() => setIsGif(true)}
          />

          <Image
            id="textTale1Image"
            src="/assets/texttale1.png"
            alt="texttale1"
            width={700}
            height={700}
            className={`absolute lg:top-[500px] lg:right-[450px] lg:w-[700px] cursor-pointer transition-transform duration-500 ease-out md:top-[280px] md:right-[140px] md:w-[500px] 
          ${
            isTextTale1Visible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
          />

          <Image
            src="/assets/texttaoplastic.png"
            alt="texttaoplastic"
            width={300}
            height={300}
            className="absolute lg:top-[1780px] lg:left-[1060px] lg:w-[300px]  md:top-[1050px] md:left-[600px] md:w-[200px] "
          /> 

          {/* ภาพ taonoi */}
          <Image
            src="/assets/taonoi.png"
            alt="taonoi"
            width={300}
            height={300}
            className="absolute lg:top-[1800px] lg:left-[1050px]  lg:w-[300px] cursor-pointer transition-transform duration-500 animate-[wiggle_1s_ease-in-out_infinite]  md:top-[1050px] md:left-[500px] md:w-[200px] "
          />

          {/* ภาพ plastictao */}
          {isPlasticTaoVisible && (
            <Image
              src="/assets/plastictao.png"
              alt="plastictao"
              width={250}
              height={250}
              className="absolute lg:top-[1800px] lg:left-[1050px] lg:w-[250px] transition-transform duration-[1500ms] ease-out animate-[wiggle_1s_ease-in-out_infinite] md:top-[1050px] md:left-[460px] md:w-[200px]"
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
              className="absolute lg:top-[1560px] lg:left-[240px] lg:w-[500px] md:top-[0px] md:left-[0px] md:w-[500px]  "
            />
          )}
          <Image
            id="textTale2Image"
            src="/assets/texttale2.png"
            alt="texttale2"
            width={700}
            height={700}
            className={`absolute lg:top-[1350px] lg:left-44 lg:w-[700px] cursor-pointer transition-transform duration-500 ease-out  md:top-[780px] md:left-[130px] md:w-[450px]
          ${
            isTextTale2Visible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
          />

          <Image
            src={gImage}
            alt="g220"
            width={400}
            height={400}
            className="absolute lg:top-[480px] lg:left-24 lg:w-[400px] cursor-pointer md:top-[280px] md:left-[40px] md:w-[230px] "
          />
          <Image
            src="/assets/gback220.gif"
            alt="gback220"
            width={400}
            height={400}
            className="absolute lg:top-[480px] lg:left-24 lg:w-[400px] cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100 md:top-[280px] md:left-[40px] md:w-[230px] "
          />
          <Image
            src="/assets/openbottle.gif"
            alt="openbottle"
            width={400}
            height={400}
            className="absolute lg:top-[1300px] lg:right-28 lg:w-[400px] cursor-pointer transition-opacity duration-300 hover:opacity-0 md:top-[700px] md:right-[40px] md:w-[230px]"
          />
          <Image
            src="/assets/openbottleback.gif"
            alt="openbottleback"
            width={400}
            height={400}
            className="absolute lg:top-[1300px] lg:right-28 lg:w-[400px] cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100 md:top-[700px] md:right-[40px] md:w-[230px] "
          />
          <Image
            src="/assets/tao.gif"
            alt="taogif"
            width={400}
            height={400}
            className="absolute lg:top-[900px] lg:left-[100px] lg:w-[400px] cursor-pointer transition-opacity duration-300 hover:opacity-0 md:top-[520px] md:left-[40px] md:w-[230px]"
          />
          <Image
            src="/assets/taoback.gif"
            alt="taoback"
            width={400}
            height={400}
            className="absolute lg:top-[900px] lg:left-[100px] lg:w-[400px] cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100 md:top-[520px] md:left-[40px] md:w-[230px]"
          />
          {/* แสดง microbt.png เมื่อ isFlipped === false */}
          {!isFlipped && (
            <Image
              src="/assets/microbt.png"
              alt="microbt"
              width={800}
              height={800}
              // style={{
              //   top: `${backImagePosition.top}px`,
              //   right: `${backImagePosition.right}px`,
              // }}
              className="absolute cursor-pointer image-hover-scale glow-white md:top-[1050px] md:right-[160px] md:w-[600px] lg:top-[1700px] lg:right-[900px] lg:w-[800px] "
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
              // style={{
              //   top: `${backImagePosition.top}px`,
              //   right: `${backImagePosition.right}px`,
              // }}
              className="absolute cursor-pointer no-glow md:top-[1050px] md:right-[160px] md:w-[600px] lg:top-[100px] lg:w-[800px] "
              onClick={() => setIsFlipped(false)}
            />
          )}
          <div className="relative mt-0">
            <Image
              src="/assets/beach.jpg"
              alt="beach"
              width={1920}
              height={1000}
              className="object-cover w-full h-full  md:w-[932px]h-[100px]  "
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
              className="absolute top-[150px] left-[700px]  md:top-[40px] md:left-[400px] md:w-[320px] "
            />
            <div>
              {/* Seal */}
              <Image
                src="/assets/seal.png"
                alt="seal"
                width={500}
                height={500}
                className="absolute top-[1200px] left-[200px] cursor-pointer transition-opacity duration-300 animate-[wiggle_1s_ease-in-out_infinite] md:top-[700px] md:left-[100px] md:w-[300px] "
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
                  className={`absolute top-[1000px] md:top-[560px] md:left-[100px] md:w-[100px] ${
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
              className="absolute top-[500px] left-[250px] cursor-pointer transition-opacity duration-300 hover:opacity-0  md:top-[200px] md:left-[100px] md:w-[300px]"
            />
            <Image
              src="/assets/clockback.gif"
              alt="clockback"
              width={400}
              height={400}
              className="absolute top-[500px] left-[250px] cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100 md:top-[200px] md:left-[100px] md:w-[300px]"
            />
            <div className="relative mt-0">
              <Image
                src="/assets/sai.jpg"
                alt="sai"
                width={1920}
                height={1000}
                className="object-cover w-full h-full  md:w-[932px]h-[100px] "
              />
              {/* อื่น ๆ */}
              <Image
                id="savegabageImage"
                src="/assets/savegabage.png"
                alt="savegabage"
                width={300}
                height={300}
                className={`absolute top-[60px] right-[200px] cursor-pointer transition-transform duration-500 ease-out  md:top-[40px] md:left-[650px] md:w-[150px] ${
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
                  className="absolute top-[100px] left-[250px] cursor-pointer transition-opacity duration-300 animate-bounce md:top-[130px] md:left-[650px] md:w-[140px]"
                  onClick={() => setShowBig1(false)}
                />
              )}
              {showBig2 && (
                <Image
                  src="/assets/big2.png"
                  alt="big2"
                  width={200}
                  height={200}
                  className="absolute top-[450px] left-[300px] cursor-pointer transition-opacity duration-300 animate-bounce  md:top-[300px] md:left-[630px] md:w-[140px]"
                  onClick={() => setShowBig2(false)}
                />
              )}
              {showBig3 && (
                <Image
                  src="/assets/big3.png"
                  alt="big3"
                  width={200}
                  height={200}
                  className="absolute top-[500px] right-[250px] cursor-pointer transition-opacity duration-300 animate-bounce  md:top-[300px] md:right-[630px] md:w-[140px]"
                  onClick={() => setShowBig3(false)}
                />
              )}
              {showBig4 && (
                <Image
                  src="/assets/big4.png"
                  alt="big4"
                  width={200}
                  height={200}
                  className="absolute top-[150px] right-[350px] cursor-pointer transition-opacity duration-300 animate-bounce md:top-[130px] md:right-[430px] md:w-[140px]" 
                  onClick={() => setShowBig4(false)}
                />
              )}
              {showBig5 && (
                <Image
                  src="/assets/big5.png"
                  alt="big5"
                  width={150}
                  height={150}
                  className="absolute top-[300px] right-[800px] cursor-pointer transition-opacity duration-300 animate-bounce md:top-[130px] md:right-[700px] md:w-[140px]"
                  onClick={() => setShowBig5(false)}
                />
              )}
              {allImagesClicked && (
                <Image
                  src="/assets/thankyou.png"
                  alt="thankyou"
                  width={1000}
                  height={1000}
                  className="absolute top-[180px] right-[400px] cursor-pointer transition-opacity duration-300 md:top-[130px] md:right-[200px] md:w-[600px]"
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
                className="object-cover w-[1920px] h-full md:w-[932px]h-[100px]"
              />
              <Image
                src="/assets/street2.jpg"
                alt="street2"
                width={1920}
                height={1000}
                className="object-cover w-[1920px] h-full md:w-[932px]h-[100px]"
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
                className="absolute top-[400px] left-[2050px] cursor-pointer image-hover-scale  md:top-[230px] md:left-[1200px] md:w-[600px]"
                onClick={() => setIsYekkayaFront(!isYekkayaFront)}
              />
              <Image
                src="/assets/recycle1.jpg"
                alt="recycle1"
                width={1920}
                height={1000}
                className="object-cover w-[1920px] h-full md:w-[932px]h-[100px]"
              />
              <Image
                src="/assets/recycle12.jpg"
                alt="recycle12"
                width={1920}
                height={1000}
                className="object-cover w-[1920px] h-full md:w-[932px]h-[100px]"
              />
              <Image
                src="/assets/lang.png"
                alt="lang"
                width={800}
                height={800}
                className="absolute top-[575px] left-[3700px] md:top-[340px] md:left-[2200px] md:w-[500px]"
              />
              <Image
                src="/assets/btsleep.png"
                alt="btsleep"
                width={300}
                height={300}
                className={`absolute top-[590px] left-[3750px] cursor-pointer transition-transform duration-1000 z-10 
          animate-glow  md:top-[345px] md:left-[2230px] md:w-[200px] ${shifted ? "translate-x-[245px]" : "translate-x-0"}`}
                onClick={handleFlaskClick}
              />
              {isTypingVisible ? ( // ตรวจสอบสถานะเพื่อแสดงภาพ
                <Image
                  src="/assets/typing.gif"
                  alt="typing"
                  width={700}
                  height={700}
                  className="absolute top-[300px] left-[3750px]  md:top-[150px] md:left-[2300px] md:w-[500px]"
                />
              ) : (
                <Image
                  src="/assets/text1.png"
                  alt="text1"
                  width={700}
                  height={700}
                  className="absolute top-[240px] left-[3750px] md:top-[150px] md:left-[2300px] md:w-[500px]"
                />
              )}
              <Image
                src="/assets/plasticbottleone.png"
                alt="pbtone"
                width={400}
                height={400}
                className="absolute top-[120px] left-[4480px] cursor-pointer glow-effect md:top-[80px] md:left-[2690px] md:w-[230px]"
                onClick={() => setIsImageChanged(!isImageChanged)}
                title="คลิกเพื่อเปลี่ยนภาพ"
              />

              {/* BTGO - Moves Up and Fades Out */}
              <Image
                src="/assets/btgo.png"
                alt="btgo"
                width={100}
                height={100}
                className={`absolute left-[4635px] transition-all duration-[2000ms] ease-linear md:top-[200px] md:left-[2780px] md:w-[50px] ${
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
                width={700} // กำหนดความกว้างตรงนี้
                height={700} // กำหนดความสูงตรงนี้
                className={`absolute transition-all duration-1000 md:top-[50px] md:left-[2960px] md:w-[400px] md:h-[80px] ${
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
                className="absolute top-[280px] left-[4850px] cursor-pointer glow-effect  md:top-[180px] md:left-[2920px] md:w-[550px] "
                onClick={handleNewClick}
              />

              <Image
                src="/assets/btpt.png"
                alt="btpt"
                width={40}
                height={40}
                className={`absolute top-[400px] left-[5250px] transition-transform duration-1000  md:top-[245px] md:left-[3150px] md:w-[25px] ${
                  isMoved ? "translate-x-[250px]" : "translate-x-0"
                }`} // เลื่อนเมื่อ isMoved เป็น true
              />
              <Image
                src="/assets/wallnew.jpg"
                alt="wallnew"
                width={1920}
                height={1000}
                className="object-cover w-[1920px] h-full md:w-[932px]h-[100px]"
              />
              <Image
                src="/assets/textwallnew.png"
                alt="textwallnew"
                width={600}
                height={600}
                className="absolute top-[60px] left-[6380px]  md:top-[30px] md:left-[3750px] md:w-[400px] "
              />
              <Image
                src="/assets/kapao.png"
                alt="kapao"
                width={300}
                height={300}
                className="absolute top-[280px] left-[6205px] transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-100 md:top-[170px] md:left-[3680px] md:w-[180px] "
              />
              <Image
                src="/assets/kapaoback.png"
                alt="kapaoback"
                width={300}
                height={300}
                className="absolute top-[190px] left-[6160px] transition-transform duration-500 ease-in-out scale-100 opacity-0 hover:scale-110 hover:opacity-100 md:top-[100px] md:left-[3650px] md:w-[180px] "
              />
              <Image
                src="/assets/btblue.png"
                alt="btblue"
                width={300}
                height={300}
                className="absolute top-[300px] left-[6540px] transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-100 md:top-[180px] md:left-[3880px] md:w-[180px] "
              />
              <Image
                src="/assets/btblueback.png"
                alt="btblueback"
                width={340}
                height={340}
                className="absolute top-[190px] left-[6520px] transition-transform duration-500 ease-in-out scale-100 opacity-0 hover:scale-110 hover:opacity-100 md:top-[120px] md:left-[3880px] md:w-[180px] "
              />
              <Image
                src="/assets/sh.png"
                alt="sh"
                width={300}
                height={300}
                className="absolute top-[280px] left-[6870px] transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-100  md:top-[170px] md:left-[4075px] md:w-[180px] "
              />
              <Image
                src="/assets/shback.png"
                alt="shback"
                width={300}
                height={300}
                className="absolute top-[190px] left-[6915px] transition-transform duration-500 ease-in-out scale-100 opacity-0 hover:scale-110 hover:opacity-100 md:top-[110px] md:left-[4100px] md:w-[180px]"
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
                className="relative z-10 md:top-[-80px] md:right-[-10px] md:w-[400px]" // carpao อยู่ด้านหน้า
              />
              <Image
                src="/assets/kaya.png"
                alt="kaya"
                width={300}
                height={300}
                className="absolute top-[-130px] left-[60px] z-0 animate-[wiggle_0.8s_ease-in-out_infinite] md:top-[-150px] md:right-[-10px] md:w-[200px]" // kaya อยู่ด้านหลัง
                onClick={moveCar}
              />
            </div>
          </div>
        </div>
        <div className="relative min-h-screen w-full md:w-[932px]h-[100px]">
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
              className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2  md:top-[30px] md:right-[10px] md:w-[500px] "
            />
            {/* textworld2.png แสดงหลัง 1 วินาที */}
            <Image
              src="/assets/textworld2.png"
              alt="textworld2"
              width={400}
              height={400}
              className={`absolute top-44 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500  md:top-[90px] md:right-[10px] md:w-[200px] ${
                showText ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* hand.png (ปุ่มกด toggle) */}
            <Image
              src="/assets/hand.png"
              alt="hand"
              width={550}
              height={550}
              className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse cursor-pointer md:top-[310px] md:right-[10px] md:w-[350px]"
              onClick={handleClick}
            />

            {/* world.png แสดงก่อน */}
            <Image
              src="/assets/world.png"
              alt="world"
              width={500}
              height={500}
              className={`absolute top-[430px] left-[780px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500  md:top-[230px] md:left-[460px] md:w-[280px] ${
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
            className="absolute top-[7580] left-[300] cursor-pointer md:top-[4410px] md:left-[170px] md:w-[140px]"
            onClick={() => handleToggle("rdy")}
          />
          {activeImage === "rdy" && (
            <>
              <Image
                src="/assets/rd1.png"
                alt="rd1"
                width={750}
                height={750}
                className="absolute transition-opacity duration-500 top-[7800] left-[475] md:top-[4510px] md:left-[245px] md:w-[500px]"
              />
              <Image
                src="/assets/rdtext.png"
                alt="rdtext"
                width={460}
                height={460}
                className="absolute transition-opacity duration-500 top-[7794] left-[580]  shadow-[4px_-4px_8px_rgba(0,0,0,0.1)] md:top-[4510px] md:left-[320px] md:w-[300px]"
              />
              <Image
                src="/assets/rdtext1.png"
                alt="rdtext1"
                width={450}
                height={450}
                className="absolute transition-opacity duration-500 top-[7800] left-[580] md:top-[4530px] md:left-[345px] md:w-[250px] "
              />
            </>
          )}

          {/* RUY Image Toggle */}
          <Image
            src={activeImage === "ruy" ? "/assets/ruy.png" : "/assets/ru.png"}
            alt="ruy"
            width={200}
            height={200}
            className="absolute top-[7580] left-[700] cursor-pointer md:top-[4410px] md:left-[400px] md:w-[140px] "
            onClick={() => handleToggle("ruy")}
          />
          {activeImage === "ruy" && (
            <>
              <Image
                src="/assets/ru1.png"
                alt="ru1"
                width={750}
                height={750}
                className="absolute transition-opacity duration-500 top-[7725] left-[450] md:top-[4460px] md:left-[233px] md:w-[500px]"
              />
              <Image
                src="/assets/rutext.png"
                alt="rut"
                width={460}
                height={460}
                className="absolute transition-opacity duration-500 top-[7794] left-[580]  shadow-[4px_-4px_8px_rgba(0,0,0,0.1)] md:top-[4510px] md:left-[320px] md:w-[300px]"
              />
              <Image
                src="/assets/rutext1.png"
                alt="rut1"
                width={460}
                height={460}
                className="absolute transition-opacity duration-500 top-[7795] left-[580] md:top-[4530px] md:left-[345px] md:w-[250px] "
              />
            </>
          )}

          {/* RCY Image Toggle */}
          <Image
            src={activeImage === "rcy" ? "/assets/rcy.png" : "/assets/rc.png"}
            alt="rcy"
            width={200}
            height={200}
            className="absolute top-[7580] left-[1100] cursor-pointer md:top-[4410px] md:left-[625px] md:w-[140px] "
            onClick={() => handleToggle("rcy")}
          />
          {activeImage === "rcy" && (
            <>
              <Image
                src="/assets/rc1.png"
                alt="rc1"
                width={910}
                height={910}
                className="absolute transition-opacity duration-500 top-[7720] left-[366] md:top-[4474px] md:left-[210px] md:w-[550px] "
              />
              <Image
                src="/assets/rctext.png"
                alt="rct"
                width={465}
                height={465}
                className="absolute transition-opacity duration-500 top-[7795] left-[565]  shadow-[4px_-4px_8px_rgba(0,0,0,0.1)] md:top-[4510px] md:left-[320px] md:w-[300px] "
              />
              <Image
                src="/assets/rctext1.png"
                alt="rct1"
                width={440}
                height={440}
                className="absolute transition-opacity duration-500 top-[7795] left-[580] md:top-[4530px] md:left-[345px] md:w-[250px] "
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

          <div ref={ref} className="absolute top-[115px] right-[350px] md:top-[20px] md:right-[270px] md:w-[200px]">
            <Image
              src="/assets/textwall6.png"
              alt="textwall6"
              width={500}
              height={500}
              className={`transition-all duration-700 ease-out   ${
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
            }}
            className="absolute top-[650px] transition-all duration-500 md:top-[310px] md:left-[420px] md:w-[100px] "
          />
        </div>

        <div className="relative mt-0">
          <Image
            src="/assets/pojadtum.png"
            alt="pojadtum"
            width={150}
            height={150}
            className="absolute top-[750px] right-[750px] md:top-[500px] md:right-[410px] md:w-[100px] "
          />
             <Image
      ref={imgRef}
      src="/assets/lasttopic.png"
      alt="lasttopic"
      width={400}
      height={400}
      className="absolute top-[200px] right-[250px] opacity-0 scale-100 transition-all duration-[1500ms] ease-in-out"
    />
          <Image
            src="/assets/last1.png"
            alt="last"
            width={1920}
            height={1000}
            className="object-cover w-full h-full"
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
           
          <Image
            src="/assets/fotter.jpg"
            alt="lastlast"
            width={1920}
            height={1000}
            className="object-cover w-full h-full"
          />
          <Image
            src="/assets/retern.png"
            alt="retern"
            width={70}
            height={70}
            className="absolute top-[480px] right-[420px]  cursor-pointer md:top-[450px] md:right-[410px] md:w-[100px]"
            onClick={scrollToTop}
          />
        </div>
      </div>
    </div>
  );

}