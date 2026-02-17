import Image from "next/image";
import WhoweCard from "./WhoweCard";

export default function WhoweAre() {
const Item=[
    {heading:"Real Product", para:"mdj smdj msdj msdjf sdmjf"},
    {heading:"Real Product", para:"mdj smdj msdj msdjf sdmjf"},
    {heading:"Real Product", para:"mdj smdj msdj msdjf sdmjf"}
    
]

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-0 py-10  ">
{/* Left*/}
      <div className=" flex flex-col w-full lg:w-1/2  items-center lg:items-baseline-last text-center lg:text-center ml-0 lg:ml-10 ">
        <h1 className="text-3xl  lg:text-4xl font-bold text-emerald-950 text-left">Who We Are & <br/>What We Do</h1>
        <p className="text-gray-700">Welcome to our delivery service.<br/>Welcome to our delivery service.</p>
         <div className="flex flex-col items-center lg:items-start space-y-4 max-w-sm md:max-w-lg mx-auto lg:mx-0 w-full">

            {Item.map((item)=>(
                <WhoweCard
    
                   h={item.heading}
                   p={item.para}
                   />
            ))}

         </div>
        
      </div>

{/* Right*/}
      <div className="hidden lg:block lg:w-1/2 relative h-[300px] md:h-[500px] w-full"> 
        <Image src="/WhoweAre.png" alt="Delivery scooter icon"fill
          className="object-contain" />
      </div>
    </div>
  );
}