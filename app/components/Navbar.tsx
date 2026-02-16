import Image from "next/image";
import HamburgerMenu from "./Hamburgermenu";
export default function Navbar() {
  return (
    
    <div className="flex items-center  justify-between  p-6 md:p-8 lg:p-10 bg-[#ecfadc]">
        <div className="flex felx-row items-center space-x-2  md:px-4 lg:px-10">
            <Image src="/food-delivery_9510856.png" alt="icon" width={50} height={50}
             className="object-contain"/>
            <h1 className="font-bold font-sans  text-xl md:text-2xl lg:text-3xl text-emerald-800 ">Foodie Fresh</h1>
        </div>
      
       <div className="hidden xl:flex items-center font-bold font-sans text-emerald-800 md:space-x-3 lg:space-x-6 xl:space-x-10">
         <button className="text-sm lg:text-xl">Home</button>
         <button className="text-sm lg:text-xl">About</button>
         <button>
          <select className="bg-transparent  text-sm lg:text-xl outline-none cursor-pointer">
            <option value="Categories">Categories</option>
            <option value="item2">Item2</option>
            <option value="item3">Item3</option>
            <option value="item4">Item4</option>
          </select>
          </button>
         <button className="text-sm lg:text-xl">Blog</button>
         <button className="text-sm lg:text-xl">Contact</button>
         
            <button>
               <Image src="/shopping-bag-svgrepo-com.svg" alt="icon" width={40} height={40}
                  className="object-contain"/>
            </button>
            <button>
                <Image src="/person-male-svgrepo-com.svg" alt="icon" width={40} height={40}
                   className="object-contain"/>
            </button>
         
        </div>

        <div className="flex items-center space-x-2  md:space-x-4 md:px-10">
            <div className="xl:hidden ">
               <HamburgerMenu />
            </div>
        
          <button className="hidden xl:block bg-emerald-800 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm  lg:text-base md:text-base hover:bg-emerald-700 transition">
             Partner with us
          </button>
       
     </div>
    </div>
  );
}
