import Image from "next/image";
import { Providecard } from "./Providecard";

export default function WeAlways() {

  const Item=[
    {title:"Great Daily Deal", para:"mdj smdj msdj msdjf sdmjf",icon:"/handshake-svgrepo-com.svg"},
    {title:"Delivery", para:"mdj smdj msdj msdjf sdmjf",icon:"/map-pointer-svgrepo-com.svg"},
    {title:"Best Prices Ever", para:"mdj smdj msdj msdjf sdmjf",icon:"/sale-shop-event-svgrepo-com.svg"}
    
]
  return (
    <div className="bg-[#1b4332] text-white px-4 lg:px-20 font-sans min-h-screen flex flex-col">
      
      <div className="text-center w-full p-5 mt-10">
        <h1 className="text-xl lg:text-5xl md:text-3xl font-bold p-4">
          We Always Provide <br /> You The Best In Town
        </h1>
        <p className="text-gray-300 text-sm md:text-md lg:text-2xl leading-relaxed max-w-lg mx-auto">
          isu dbci dfuh viudfv diuvd viud iuc ce rue cry crytguc ceyrg
        </p>
      </div>

      
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-6 md:gap-10 w-full mt-auto">
          
          {Item.map((item)=>(
                    <Providecard
                       title={item.title}
                       description={item.para}
                       icon={item.icon}
                       />
                ))}
          
          
      </div>
    </div>
  );
}