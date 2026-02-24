import Image from "next/image";
import Searchbar from "./Searchbar";

export default function Hero() {
  return (
    <div className="bg-[#ecfadc] text-center pb-0 py-10 space-y-20">
      <div>
        <h1 className="font-bold font-sans text-emerald-800 text-2xl md:text-4xl lg:text-5xl">
          Locally Produced <br />Delivered Direct To<br /> Your Door
        </h1>
        <p className="mt-4">Using Next.js & Tailwind</p>
      </div>
      <div>
        <Searchbar />
      </div>
      <div className="relative flex justify-center overflow-hidden">
        <div
          className="bg-[#1B2E27] w-full 2xl:w-[130vh]   h-[50vh] md:h-[55vh]  2xl:h-[50vh] rounded-t-full"
          style={{
          
            borderRadius: "60% 60% 0 0 / 40% 40% 0 0",
          }}
        />
        <div className="absolute bottom-0  translate-y-1/3 w-full flex justify-center items-center">
      <Image 
        src="/b6ef1cc1-9990-4b22-9688-35e909ed0acd-removebg-preview.png" 
        alt="shopping bag" 
        width={500} 
        height={500}
        className="object-contain w-[90%] md:w-[60%] lg:w-[50%] h-auto"
      />
    </div>
      </div>
    </div>
  );
}