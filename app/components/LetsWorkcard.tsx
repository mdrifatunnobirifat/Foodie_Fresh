import Image from "next/image";

interface LetsWorkscardProps{
    icon:string;
    title:string;
    description:string;
}

export default function LetsWorkcard({icon,title,description}:LetsWorkscardProps){
     return (
        <div className="flex flex-col items-start  bg-white  w-full p-3">
         
       
          <div className="  md:p-2 lg:p-4 flex items-center justify-center rounded-full w-full ">
            <Image 
              src={icon} 
              alt={title}
              width={50} 
              height={50} 
              className="object-contain w-full h-auto"
            />
          </div>
    
        
          <div className="flex flex-col  text-left px-3 py-5 ">
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl font-sans text-[#1b4332] group-hover:text-amber-400 transition-colors ">
              {title}
            </h3>
            <p className="text-xs md:text-sm lg:text-md text-[#2d5a44] group-hover:text-amber-400 transition-colors leading-relaxed ">
              {description}
            </p>
          </div>

          <button className="text-xs md:text-sm bg-emerald-800 text-white px-2  md:px-6  py-1 md:py-2  rounded-full  text-md hover:bg-emerald-700 transition  whitespace-nowrap ">
                Get started
            </button>


        </div>
      );

}