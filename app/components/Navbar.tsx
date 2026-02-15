import Image from "next/image";
export default function Navbar() {
  return (
    <div className="flex items-center justify-between  p-5 bg-transparent">
        <div className="flex felx-row items-center space-x-2 px-10">
            <Image src="/food-delivery_9510856.png" alt="icon" width={50} height={50}
             className="object-contain"/>
            <h1 className="font-bold font-sans text-3xl text-emerald-800 ">Foodelivar</h1>
        </div>
      
       <div className=" flex items-center font-bold font-sans text-emerald-800 space-x-10">
        <button>Home</button>
        <button>About</button>
        <button>
         <select>
            <option value="Categories">Categories</option>
            <option value="item2">Item2</option>
            <option value="item3">Item3</option>
            <option value="item4">Item4</option>
         </select>
         </button>
        <button>Blog</button>
        <button>Contact</button>
     
       <button><Image src="/shopping-bag-svgrepo-com.svg" alt="icon" width={30} height={30}
            className="object-contain"/></button>
       <button><Image src="/person-male-svgrepo-com.svg" alt="icon" width={30} height={30}
             className="object-contain"/></button>
        
         </div>
      <div className="px-10"> 
        <button className="bg-emerald-800 text-white p-3 rounded-full ">Partner with us</button>
      </div>
    </div>
  );
}
