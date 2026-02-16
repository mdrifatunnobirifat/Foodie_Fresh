import Image from "next/image";
import WhoweCard from "./WhoweCard";

export default function WhoweAre() {
const items=[
    {heading:"Real Product", para:"mdj smdj msdj msdjf sdmjf"},
    {heading:"Real Product", para:"mdj smdj msdj msdjf sdmjf"},
    {heading:"Real Product", para:"mdj smdj msdj msdjf sdmjf"}
    
]

  return (
    <div className="flex flex-row items-center px-4 py-4 max-w-full">
{/* Left*/}
      <div className=" w-full lg:w-1/2">
        <h1 className="text-3xl font-bold text-emerald-950">Who We Are &<br/>What We Do</h1>
        <p className="mt-1 text-gray-700">Welcome to our delivery service.<br/>Welcome to our delivery service.</p>
         <div className="space-y-4">
            {items.map((item)=>(
                <WhoweCard
                   h={item.heading}
                   p={item.para}
                   />
            ))}

         </div>
        <div>

        </div>
      </div>

{/* Right*/}
      <div className=" hidden lg:block lg:w-1/2 relative h-[300px] md:h-[500px]"> 
        <Image src="/vecteezy_fast-delivery-by-scooter-on-mobile-e-commerce-concept_17732847.jpg" alt="Delivery scooter icon"fill
          className="object-contain" />
      </div>
    </div>
  );
}