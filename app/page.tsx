import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="w-full relative">
        <Image
          src={'/assets/pic1.jpg'}
          alt="images"
          width={1920}
          height={1000}
        />
        <div className="absolute top-32 right-32 text-white text-3xl font-bold cursor-pointer text-right">
          <p className="text-black text-center text-5xl">
            การเดินทาง<br />
            ของขวดพลาสติก<br />
            จากบ้านสู่การรีไซเคิล
          </p>
        </div>
      </div>
      <div>
        test
      </div>
    </div>
  );
}
