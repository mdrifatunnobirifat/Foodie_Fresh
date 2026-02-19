import Image from "next/image";
import { Providecard } from "./Providecard";

export default function WeAlways() {

  const Item=[
    {title:"Great Daily Deal", para:"mdj smdj msdj msdjf sdmjf",icon:"/handshake-svgrepo-com.svg"},
    {title:"Delivery", para:"mdj smdj msdj msdjf sdmjf",icon:"/map-pointer-svgrepo-com.svg"},
    {title:"Best Prices Ever", para:"mdj smdj msdj msdjf sdmjf",icon:"/sale-shop-event-svgrepo-com.svg"}
    
]
  return (
    <div className="bg-[#1b4332] text-white px-4 lg:px-20 font-sans pt-5 flex flex-col w-screen ">
      
      <div className="text-center w-full pb-10 lg:pb-15 ">
        <h1 className="text-xl lg:text-3xl md:text-2xl font-bold p-4">
          We Always Provide <br /> You The Best In Town
        </h1>
        <p className="text-gray-300 text-sm md:text-md lg:text-lg leading-relaxed max-w-lg mx-auto">
          isu dbci dfuh viudfv diuvd viud iuc ce rue cry crytguc ceyrg
        </p>
      </div>

      <div className="flex w-full md:w-full lg:w-full justify-center pb-3 md:pb-0 px-5 md:px-20 lg:px-30  xl:px-70 2xl:px-160">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-2 md:gap-3 w-full ">
          
          {Item.map((item)=>(
                    <Providecard
                       title={item.title}
                       description={item.para}
                       icon={item.icon}
                       />
                ))}
          
      </div>
      </div>
    </div>
  );
}