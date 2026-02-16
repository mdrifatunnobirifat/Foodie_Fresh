import Image from "next/image";

export default function WhoweAre(){
    return (
        <div className="flex flex-col lg:flex-row bg-[#ecfadc] min-w-screen items-center">
          <div className="mx-auto ">
           
            <div className=" grid grid-cols-1  md:grid-cols-2 gap-2  lg:grid-cols-2 gap-2">
                
              <div className=" text-center space-y-2  space-x-5 min-w-full">
                 <h1 className="  text-left font-bold font-sans text-emerald-800  text-2xl md:text-3xl lg:text-4xl">Who We Are &<br/>What we Do</h1>
                 <h3 className="  text-left  text-gray-700 max-w-md">mixjewo ciuerhbivdj veurhgb vvd
                    vernoi cievrhi vdinruyvf veb vnhvd veiuhnvd 
                    vdnigniudvf vnfunvi mvidhin </h3>
          
                  <div className=" flex flex-row bg-[#c8ef9b] hover:bg-[#23803a] hover:translate-1 cursor-pointer rounded-lg w-100  p-x-2 space-x-4">
                    <div  className=" mx-1 my-4">
                        <Image src="/food-svgrepo-com.svg" alt="sidde image" width={40} height={5}
                          className="object-contain bg-white  border-b-2 rounded-full"/>
                    </div>
                     <div className="text-left m-2 ">
                        <p className="font-sans font-bold text-emerald-950 text-shadow-md">Real Product</p>
                        <p>this is just a demo demo demod emod emodedmo</p>
                      </div>
                      <div className="m-auto">
                         <Image src="/right-arrow-svgrepo-com.svg" alt="sidde image" width={30} height={5}
                           className="object-contain bg-emerald-700 border-b-5 rounded-full"/>
                      </div>
                  </div>


                  <div className=" flex bg-[#c8ef9b] hover:bg-[#23803a] hover:translate-1 cursor-pointer rounded-lg w-100 p-x-2 space-x-4 ">
                       <div  className=" mx-1 my-4">
                        <Image src="/food-svgrepo-com.svg" alt="sidde image" width={40} height={5}
                          className="object-contain bg-white  border-b-2 rounded-full"/>
                      </div>
                      <div className="text-left m-2 ">
                        <p className="font-sans font-bold text-emerald-950 text-shadow-md">Real Product</p>
                        <p>this is just a demo demo demod emod emodedmo</p>
                      </div>
                        <div className=" m-auto">
                         <Image src="/right-arrow-svgrepo-com.svg" alt="sidde image" width={30} height={5}
                           className="object-contain bg-emerald-700 border-b-5 rounded-full"/>
                      </div>
                  </div>


                  <div className="flex bg-[#c8ef9b] hover:bg-[#23803a] hover:translate-1 cursor-pointer rounded-lg w-100 p-x-2 space-x-4">
                       <div  className=" mx-1 my-4">
                         <Image src="/food-svgrepo-com.svg" alt="sidde image" width={40} height={5}
                           className="object-contain bg-white  border-b-2 rounded-full"/>
                       </div>
                      <div className="text-left m-2 ">
                        <p className="font-sans font-bold  text-emerald-950 text-shadow-md ">Real Product</p>
                        <p>this is just a demo demo demod emod emodedmo</p>
                      </div>
                        <div className=" m-auto">
                         <Image src="/right-arrow-svgrepo-com.svg" alt="sidde image" width={30} height={5}
                           className="object-contain bg-emerald-700 border-b-5 rounded-full"/>
                      </div>
                  </div>
                  
              </div>

              <div className=" lg:block lg:w-full relative min-h-1/2 ">
                  <Image src="/vecteezy_fast-delivery-by-scooter-on-mobile-e-commerce-concept_17732847.jpg" alt="sidde image" fill priority
                  className="object-cover"/>
              </div>
            </div>
           
          </div>
          <div>
           
          </div>
        </div>
      );


}