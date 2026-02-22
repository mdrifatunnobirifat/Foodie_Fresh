import Image from "next/image";
import WhoweCard from "./WhoweCard";

export default function WhoweAre() {
const Item=[
    {id:"1",heading:"Real Product", para:"mdj smdj msdj msdjf sdmjf"},
    { id:"2",heading:"Real Product", para:"mdj smdj msdj msdjf sdmjf"},
    {id:"3",heading:"Real Product", para:"mdj smdj msdj msdjf sdmjf"}
    
]

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-0 py-10 ">
{/* Left*/}
      <div className=" flex flex-col w-full lg:w-1/2  items-center lg:items-baseline-last text-center lg:text-center ml-0 lg:ml-10 ">
        <h1 className="text-3xl  lg:text-4xl font-bold text-emerald-950 text-left">Who We Are & <br/>What We Do</h1>
        <p className="text-gray-700">Welcome to our delivery service.<br/>Welcome to our delivery service.</p>
         <div className="flex flex-col items-center lg:items-start space-y-4   w-full md:w-lg mx-auto lg:mx-0 ">

            {Item.map((item)=>(
                <WhoweCard
                   key={item.id}
                   h={item.heading}
                   p={item.para}
                   />
            ))}

         </div>
        
      </div>

{/* Right*/}
      <div className="hidden lg:block lg:w-1/2 relative h-75 md:h-125 w-full"> 
        <Image src="/WhoweAre.png" alt="Delivery scooter icon" fill
          className="object-contain" />
      </div>
    </div>
  );
}