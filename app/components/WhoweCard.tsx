import Image from "next/image";
interface CardProps {
  h: string;
  p: string;
}

export default function WhoweCard({h,p}:CardProps)
{
    return (
    <div className="flex items-center bg-[#e5fae9] hover:bg-[#23803a]  p-0.5 md:p-7 rounded-xl cursor-pointer transition-all group w-full">
      
      <div className="bg-white  h-10 md:h-12 w-10 md:w-12 rounded-full flex items-center justify-center overflow-hidden p-1 shadow-sm">
        <Image src="/food-svgrepo-com.svg" alt="icon" width={40} height={40} 
        className="object-contain"/>
      </div>
      <div className=" flex-1">
        <h3 className=" text:xs md:text-lg lg:text-xl font-sans font-bold text-emerald-950 group-hover:text-white">{h}</h3>
        <p className="text-xs md:text-sm font-sans group-hover:text-white/80">{p}</p>
      </div>
      <div className="bg-emerald-700 p-2 rounded-full group-hover:bg-white">
        <Image src="/right-arrow-svgrepo-com.svg" alt="arrow" width={15} height={15} 
        className="object-contain"/>
      </div>
      

    </div>
  );

}