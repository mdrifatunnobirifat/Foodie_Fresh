import Image from "next/image";

interface ProvideCardProps {
  title: string;
  description: string;
  icon: string;
}

export function Providecard({ title, description, icon }: ProvideCardProps) {
  return (
    <div className="flex flex-col items-center bg-[#e9f5db] hover:bg-[#2d5a44]    py-12 md:py-20 lg:py-30  rounded-xl md:rounded-t-full  cursor-pointer transition-all group w-full  gap-3">
     
   
      <div className="bg-white rounded-full p-1 flex items-center justify-center  w-15 lg:w-20  h-15 lg:h-20  shadow-sm group-hover:shadow-md transition-shadow">
        <Image 
          src={icon} 
          alt={title}
          width={48} 
          height={48} 
          className="object-contain w-15 h-15"
        />
      </div>

    
      <div className="flex flex-col items-center text-center px-2">
        <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-[#1b4332] group-hover:text-white transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm md:text-base lg:text-xl text-[#2d5a44] group-hover:text-white/90 transition-colors leading-relaxed max-w-[250px]">
          {description}
        </p>
      </div>
    </div>
  );
}