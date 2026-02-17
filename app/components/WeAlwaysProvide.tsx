import Image from "next/image";

export default function WeAlwaysProvide() {
  return (

    <div className="flex flex-col bg-[#ecfadc]  items-center justify-center  py-10  ">
        <div className=" flex flex-col lg:flex-row w-5xl  py-5 items-center text-center lg:text-left  justify-center">
            <h1 className="text-3xl  lg:text-5xl font-bold text-emerald-950 text-left  ">We Always Provide <br/> You The Best In town</h1>
            <p className="text-gray-700 text-sm items-center ml-10  p-1">We Always Provide We Always Provide We Always Provide <br/>We Always Provide We Always Provide Always Provide <br/>We Always Provide We Always Provide </p>
        </div>

        <div className="flex">
        <Image src="/vecteezy_fast-delivery-by-scooter-on-mobile-e-commerce-concept_17732847.jpg" alt="pic" width={900} height={400}
        className="object-cover"/>

        </div>

        <div  className="flex flex-col-reverse lg:flex-row w-3xl lg:w-4xl  py-5 items-center text-center lg:text-left  space-x-3 space-y-3 lg:space-y-0">
            <button className=" bg-emerald-800 text-white px-3 md:px-8 lg:px-10 py-3  rounded-full  text-md hover:bg-emerald-700 transition  whitespace-nowrap ">
              Partner with us
            </button>
            <div className="flex flex-col items-center space-y-3 ">
                 <div className="h-px  w-full lg:w-160 bg-emerald-800 py-0.4" />
                 <div className="flex flex-row  space-x-2 md:space-x-5 lg:space-x-10  ml-5 lg:ml-15">
                    <h1 className="font-sans  text-xs md:text-lg  lg:text-2xl font-bold text-emerald-950 text-left"><span className="text-xs md:text-lg lg:text-2xl font-bold text-emerald-500 text-left">5+ </span>Years Experience</h1>
                    <h1 className="font-sans text-xs md:text-lg lg:text-2xl font-bold text-emerald-950 text-left"><span className=" text-xs md:text-lg lg:text-2xl font-bold text-emerald-500 text-left">100+ </span> Young Riders</h1>
                    <h1 className="font-sans text-xs md:text-lg   lg:text-2xl font-bold text-emerald-950 text-left"><span className=" text-xs md:text-lg lg:text-2xl font-bold text-emerald-500 text-left">5K+ </span> Regular Customers </h1>
                 </div>
                 <div className="h-px  w-full lg:w-160 bg-emerald-800 py-0.4" />
            </div>

              
        </div>

    </div>



  );
}
   