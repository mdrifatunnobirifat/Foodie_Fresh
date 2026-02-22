import Image from "next/image";

interface ProvideCardProps {
  title: string;
  description: string;
  icon: string;
}

export function Providecard({ title, description, icon }: ProvideCardProps) {
  return (
    <div className="flex flex-col items-center bg-[#e9f5db]  py-4 md:py-20   rounded-xl md:rounded-t-full  cursor-pointer transition-all group  w-70 md:w-screen">
     
   
      <div className="  p-2 md:pb-5 lg:pb-10 flex items-center justify-center  ">
        <Image 
          src={icon} 
          alt={title}
          width={48} 
          height={48} 
          className="object-contain"
        />
      </div>

    
      <div className="flex flex-col items-center text-center px-2">
        <h3 className="font-bold text-md md:text-lg lg:text-xl text-[#1b4332] group-hover:text-amber-400 transition-colors ">
          {title}
        </h3>
        <p className="text-sm md:text-md lg:text-lg text-[#2d5a44] group-hover:text-amber-400 transition-colors leading-relaxed ">
          {description}
        </p>
      </div>
    </div>
  );
}