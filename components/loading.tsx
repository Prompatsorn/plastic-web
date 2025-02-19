import Image from "next/image";
import { useState, useEffect } from "react";

const LoadIngPage = () => {

      const [loading, setLoading] = useState(true);
      const [animate, setAnimate] = useState(false);
      const [isOpen, setIsOpen] = useState(false); // สถานะการเปิดประตู
      const [showHand, setShowHand] = useState(true); // แสดง hand
      const [showLight, setShowLight] = useState(false); // แสดง light

      useEffect(() => {
        if (!loading) {
          setTimeout(() => setAnimate(true), 1000); // เริ่ม animation หลังจาก loading เสร็จ
        }
      }, [loading]);
    
    
      const handleDoorClick = () => {
        setIsOpen(true); // ตั้งค่าสถานะเป็นเปิด
        setShowHand(false); // ซ่อน hand
        setShowLight(true); // แสดง light
    
        // ตั้งค่าให้ light หายไปหลังจาก 1 วินาที
        setTimeout(() => {
          setShowLight(false);
        }, 1000);
      };
    return(
            <div>
                <div id="home" className="w-full relative">
                      {/* ภาพ doorleft (เปิดออกซ้าย) */}
                      <Image
                        src="/assets/doorleft.png"
                        alt="doorleft"
                        width={820}
                        height={800}
                        priority
                        onClick={handleDoorClick}
                        className={`absolute left-[-25px] inset-0 z-0 transition-transform duration-500 cursor-pointer ${
                          isOpen ? "translate-x-[-100%]" : ""
                        }`}
                      />
                      {/* ภาพ doorright (เปิดออกขวา) */}
                      <Image
                        src="/assets/doorright.png"
                        alt="doorright"
                        width={820}
                        height={800}
                        priority
                        onClick={handleDoorClick}
                        className={`absolute left-[790px] inset-0 z-0 transition-transform duration-500 cursor-pointer ${
                          isOpen ? "translate-x-[100%]" : ""
                        }`}
                      />
                
                     {/* mek ลอยขึ้น & ลง */}
                     <Image
                        src="/assets/mektop.png"
                        alt="mektop"
                        width={1920}
                        height={1000}
                        priority
                        className={`absolute top-0 inset-0 z-0 transition-transform duration-1000 ${
                          isOpen ? "-translate-y-[100%]" : ""
                        }`}
                      />
                      <Image
                        src="/assets/mekdown.png"
                        alt="mekdown"
                        width={1920}
                        height={1000}
                        priority
                        className={`absolute top-96 inset-0 z-0 transition-transform duration-1000 ${
                          isOpen ? "translate-y-[100%]" : ""
                        }`}
                      />
                      {/* แสดง light เมื่อเปิดประตู */}
                      {showLight && (
                        <Image
                          src="/assets/light.png"
                          alt="home"
                          width={1920}
                          height={1000}
                          priority
                          className="absolute inset-0 z-10"
                        />
                      )}
                
                      {/* แสดง hand จนกว่าจะกดเปิดประตู */}
                      {showHand && (
                        <Image
                          src="/assets/hand.gif"
                          alt="hand"
                          width={80}
                          height={80}
                          className="absolute inset-0 z-0 top-[600px] left-[750px]"
                        />
                      )}
                       </div>
                    {/* ครอบทุกอย่างให้อยู่บน door */}
                    <div className="absolute inset-0">
                      {loading && (
                        <Image
                          src="/assets/loading.png"
                          alt="loading"
                          width={100}
                          height={100}
                          className="absolute top-72 left-1/2 transform -translate-x-1/2 z-50  animate-pulse duration-1000"
                          style={{ opacity: loading ? 1 : 0 }}
                          onLoad={() => setTimeout(() => setLoading(false), 7000)} // Simulate loading time
                        />
                      )}
                      <Image
                        src="/assets/mek1.png"
                        alt="mek1"
                        width={1000}
                        height={1000}
                        className={`absolute top-0 right-[600px] z-10 transition-all duration-[5000ms] ${
                          animate ? "-translate-x-[100vw] opacity-0" : ""
                        }`}
                      />
                      <Image
                        src="/assets/mek2.png"
                        alt="mek2"
                        width={1200}
                        height={1000}
                        className={`absolute top-20 left-[500px] z-10 transition-all duration-[5000ms] ${
                          animate ? "translate-x-[100vw] opacity-0" : ""
                        }`}
                      />
                      <Image
                        src="/assets/mek3.png"
                        alt="mek3"
                        width={1200}
                        height={1000}
                        className={`absolute top-20 left-[300px] z-10 transition-all duration-[5000ms] ${
                          animate ? "translate-x-[100vw] opacity-0" : ""
                        }`}
                      />
                    </div>
            </div>
    )
}
export default LoadIngPage