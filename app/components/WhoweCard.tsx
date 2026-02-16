import Image from "next/image";
interface CardProps {
  h: string;
  p: string;
}

export default function WhoweCard({h,p}:CardProps)
{
    return (
    <div className="flex items-center bg-[#c8ef9b] hover:bg-[#23803a] p-2 rounded-xl cursor-pointer transition-all group w-1/2 ">
      
      <div className="bg-white p-2 rounded-full border-b-2">
        <Image src="/food-svgrepo-com.svg" alt="icon" width={22} height={22} />
      </div>
      <div className="ml-10 flex-1">
        <h3 className="font-bold text-emerald-950 group-hover:text-white">{h}</h3>
        <p className="text-sm group-hover:text-white/80">{p}</p>
      </div>
      <div className="bg-emerald-700 p-2 rounded-full group-hover:bg-white">
        <Image src="/right-arrow-svgrepo-com.svg" alt="arrow" width={13} height={13} />
      </div>
      

    </div>
  );

}