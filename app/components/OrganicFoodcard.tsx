import Image from "next/image";
interface CardProps {
  h: string;
}

export default function OrganicFoodcard({h}:CardProps)
{
    return (
    <div className="flex items-center   py-1 lg:py-3 ">
      
     <div className="flex items-center justify-center  w-5 lg:w-6 h-5 lg:h-6 rounded-full bg-emerald-700  group-hover:bg-white transition-colors">
        <Image 
          src="/tick-svgrepo-com.svg" 
          alt="tick mark" 
          width={16}  
          height={16} 
          className="object-contain invert group-hover:invert-0" 
        />
      </div>
      <div className="  px-1 flex-1">
        <h5 className="font-bold text-xs lg:text-base text-emerald-950 group-hover:text-white">{h}</h5>
      </div>
    </div>
  );

}