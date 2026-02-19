import Image from "next/image";

export default function WeAlwaysProvide() {
  return (

    <div className="flex flex-col bg-[#ecfadc]  items-center justify-between xl:px-45 py-6 overflow-hidden   ">
        <div className=" flex flex-col lg:flex-row w-full  py-5 items-center text-center  justify-center lg:space-x-30  ">
            <h1 className="text-xl  lg:text-3xl font-bold text-emerald-950 text-left  ">We Always Provide <br/> You The Best In town</h1>
            <p className="text-gray-700 text-xs md:text-sm text-center lg:text-left max-w-md">We Always Provide We Always Provide We Always Provide <br/>We Always Provide We Always Provide Always Provide <br/>We Always Provide We Always Provide </p>
        </div>

        <div className="flex w-full md:w-full lg:w-full justify-center p-2 md:px-10 lg:p-0">
        <Image src="/WhatWeProvide.png" alt="pic" width={800} height={400}
        className="object-contain"/>

        </div>

        <div  className="flex flex-col-reverse lg:flex-row w-full  py-5   items-center justify-center md:space-x-10">
            <button className="text-xs md:text-sm bg-emerald-800 text-white px-2  md:px-6  py-1 md:py-2  rounded-full  text-md hover:bg-emerald-700 transition  whitespace-nowrap  ">
              Partner with us
            </button>
            <div className="flex flex-col  w-full lg:w-xl  justify-center py-4 ">
                 <div className="h-px  w-full lg:w-xl bg-emerald-800 " />
                 <div className="flex  flex-row  text-center  justify-center w-full gap-4 md:gap-7 lg:gap-20">
                    <h1 className="font-sans py-3 text-xs md:text-md lg:text-xl font-bold text-emerald-950  sm:text-center "><span className="text-xs md:text-md lg:text-xl font-bold text-emerald-500 text-left  ">5+ </span>Years Experience</h1>
                    <h1 className="font-sans py-3 text-xs md:text-md lg:text-xl font-bold text-emerald-950  sm:text-center"><span className=" text-xs md:text-md lg:text-xl  font-bold text-emerald-500 text-left ">100+ </span> Young Riders</h1>
                    <h1 className="font-sans py-3 text-xs md:text-md lg:text-xl font-bold text-emerald-950  sm:text-center"><span className=" text-xs md:text-md lg:text-xl  font-bold text-emerald-500 text-left ">5K+ </span> Regular Customers </h1>
                 </div>
                 <div className="h-px  w-full   bg-emerald-800 " />
            </div>   
        </div>

    </div>



  );
}
   