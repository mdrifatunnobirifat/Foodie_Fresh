import Image from "next/image";
import Searchbar from "./Searchbar";
export default function Hero() {
  return (
    <div className="bg-[#ecfadc]  text-center py-10  space-y-20 ">
        <div>
           <h1 className=" font-bold font-sans text-emerald-800  text-2xl md:text-4xl lg:text-5xl">Locally Produced <br/>Delivered Direct To<br/> Your Door</h1>
           <p className="mt-4">Using Next.js & Tailwind</p>
        </div>
        <div>
            <Searchbar/>
        </div>
        <div className=" overflow-hidden  rounded-t-full ">
          <div className="  items-center justify-items-center">
              <Image src="/vecteezy_fast-delivery-by-scooter-on-mobile-e-commerce-concept_17732847.jpg" alt="image" width={700} height={200}
              className=" object-cover w-full h-auto"/>
          </div>
        </div>
        
       
    </div>
  );
}
