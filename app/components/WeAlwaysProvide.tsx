import Image from "next/image";

export default function WeAlwaysProvide() {
  return (

    <div className="flex flex-col bg-[#ecfadc]  items-center justify-center py-10  ">
        <div className=" flex flex-col lg:flex-row w-fullS  py-5 items-center text-center lg:text-left  justify-center">
            <h1 className="text-2xl  lg:text-3xl font-bold text-emerald-950 text-left  ">We Always Provide <br/> You The Best In town</h1>
            <p className="text-gray-700 text-xs md:text-md items-center   ml-2 md:ml-10  p-1">We Always Provide We Always Provide We Always Provide <br/>We Always Provide We Always Provide Always Provide <br/>We Always Provide We Always Provide </p>
        </div>

        <div className="flex w-xs md:w-lg h-auto lg:w-3xl">
        <Image src="/WhatWeProvide.png" alt="pic" width={700} height={400}
        className="object-cover"/>

        </div>

        <div  className="flex flex-col-reverse lg:flex-row w-2xl lg:w-2xl  py-5 items-center text-center lg:text-left  gap-3 mmd:gap-5 lg:gap-5  ">
            <button className="text-xs md:text-md bg-emerald-800 text-white px-2 md:px-5  py-1 md:py-2  rounded-full  text-md hover:bg-emerald-700 transition  whitespace-nowrap ">
              Partner with us
            </button>
            <div className="flex flex-col items-center space-y-3 ">
                 <div className="h-px  w-full lg:w-lg bg-emerald-800 py-0.4" />
                 <div className="flex flex-col md:flex-row  space-y-1 md:space-x-5 lg:space-x-5  ml-5 lg:ml-15">
                    <h1 className="font-sans text-xs md:text-md  lg:text-lg font-bold text-emerald-950 text-left"><span className="text-xs md:text-md lg:text-lg font-bold text-emerald-500 text-left">5+ </span>Years Experience</h1>
                    <h1 className="font-sans text-xs md:text-md   lg:text-lg font-bold text-emerald-950 text-left"><span className=" text-xs md:text-md lg:text-lg font-bold text-emerald-500 text-left">100+ </span> Young Riders</h1>
                    <h1 className="font-sans text-xs md:text-md   lg:text-lg font-bold text-emerald-950 text-left"><span className=" text-xs md:text-md lg:text-lg font-bold text-emerald-500 text-left">5K+ </span> Regular Customers </h1>
                 </div>
                 <div className="h-px  w-full lg:w-lg bg-emerald-800 py-0.4 " />
            </div>   
        </div>

    </div>



  );
}
   