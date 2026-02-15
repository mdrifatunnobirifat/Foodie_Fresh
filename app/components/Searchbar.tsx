  import Image from "next/image";
export default function Searchbar() {
  return (

 <div className="px-4">
  <div className="flex items-center  bg-white rounded-full p-2 shadow-md border border-emerald-900 w-full max-w-xl mx-auto">
           <div className="hidden xs:flex ml-2 md:ml-4 flex">
               <Image src="/map-pin-alt-svgrepo-com.svg" alt="map icon" width={25} height={25}
                className="object-contain"/>
           </div>
           <div className="flex-1  ">
                <input  type="address" placeholder="Enter address to find nearby shops " className="w-full p-2  md:p-3 text-sm md:text-base outline-none bg-transparent text-gray-700 placeholder-gray-900  ml-2 md:ml-3 "/>
           </div>
           <div className="flex ">
               <button className="bg-emerald-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base ">Shop now</button>
           </div>
           <div>
            
           </div>
       </div>
       </div>
  );
}