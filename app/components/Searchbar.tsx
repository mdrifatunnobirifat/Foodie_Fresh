  import Image from "next/image";
export default function Searchbar() {
  return (
  <div className="flex items-center  bg-white rounded-full p-2 shadow-md border border-emerald-900 w-full max-w-xl mx-auto">
           <div className="flex ml-4">
               <Image src="/map-pin-alt-svgrepo-com.svg" alt="map icon" width={25} height={25}
                className="object-contain"/>
           </div>
           <div className="flex-1  ">
                <input  type="address" placeholder="Enter address to find nearby shops " className="flex p-3 outline-none bg-transparent text-gray-700 placeholder-gray-900 w-100 ml-5 "/>
           </div>
           <div className="flex ">
               <button className="bg-emerald-800 text-white p-3 rounded-full ">Shop now</button>
           </div>
           <div>
             

           </div>
       </div>
  );
}