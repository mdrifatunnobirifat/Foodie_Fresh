import Image from "next/image";
import OrganicFoodcard from "./OrganicFoodcard";

export default function OrganicFoods() {
    const Item=[
    {id:"1",heading:"Real Product"},
    {id:"2",heading:"Real Product"},
    {id:"3",heading:"Real Product"}
    
]
    return(
        <div className="flex flex-col   w-full py-5 justify-center items-center ">
            {/*upper div */}
            <div className="flex   flex-col-reverse md:flex-row items-center justify-center   ">

                <div className=" bg-transparent  py-15 px-18  text-left  ">
             
                    <h1 className=" text-xl md:text-2xl  lg:text-3xl font-bold font-sans text-emerald-950  ">Organic <br/>Fresh Foods</h1>
                    <p className="text-gray-700  font-sans text-xs md:text-sm  ">Organic Fresh Foods <br/> fresh foods fresh foods<br/> food amijc ciux idn uxh</p><br/>
                    <div className="flex flex-row  text-sm gap-10">
                       <div >
                              {Item.map((item)=>(
                                        <OrganicFoodcard
                                           key={item.id}
                                           h={item.heading}
                                           />
                                    ))}

                        </div>
                        <div>
                             {Item.map((item)=>(
                                        <OrganicFoodcard
                                          key={item.id}
                                           h={item.heading}
                                           />
                                    ))}

                       </div>
                    </div>
                   

                </div>
                <div className="w-px  sm:h-30 lg:h-50 bg-emerald-800  m-auto" />
                <div className="relative " >  
                    <Image src="/organicfruits.png" alt="pic" width={410} height={370}
                    className="object-contain w-62.5 md:w-87.5 lg:w-102.5 h-auto mx-auto"/>
                    <div className="h-px sm:w-30 lg:w-50  bg-emerald-800  m-auto" />
                </div>
                 <div className="block sm:hidden h-px sm:w-30 lg:w-50  bg-emerald-800  m-auto" />
                 <div className="block sm:hidden w-px sm:h-30 lg:h-50  bg-emerald-800  m-auto" />
            </div>

            
         <div className="md:absolute flex flex-col items-center justify-center  gap-2">
    
             <button className="bg-emerald-800 text-white text-xs  md:text-sm w-15 md:w-20 lg:w-25  h-15 md:h-20 lg:h-24 rounded-full flex items-center justify-center hover:bg-emerald-700 transition">
                 Shop Now
             </button>
         </div>
            

            {/*lower div */}
            <div className="flex  flex-col-reverse md:flex-row items-center justify-center   ">
                
                <div >
                 
                 <div className="h-px sm:w-30 lg:w-50 bg-emerald-800 m-auto " />
                    <Image src="/organicfruitbasket.png" alt="pic" width={410} height={370}
                    className="object-contain w-62.5 md:w-87.5 lg:w-102.5 h-auto "/>  
                 </div>
                <div className="w-px  sm:h-30 lg:h-50 bg-emerald-800 m-auto  " />

                <div className="bg-white py-15 px-18 text-left ">
                    <h1 className="text-xl  lg:text-3xl font-bold font-sans text-emerald-950 ">More Than<br/>50 Products </h1>
                    <p className="text-gray-700  font-sans text-xs md:text-sm  max-w-md">Organic Fresh Foods <br/> fresh foods fresh foods<br/> food amijc ciux idn uxh</p><br/>
                    <div className="flex  flex-row text-sm  gap-10">
                       <div>
                              {Item.map((item)=>(
                                        <OrganicFoodcard
                                           key={item.id}
                                           h={item.heading}
                                           />
                                    ))}

                        </div>
                        <div>
                             {Item.map((item)=>(
                                        <OrganicFoodcard
                                           key={item.id}
                                           h={item.heading}
                                           />
                                    ))}

                       </div>
                    </div>
             

                </div>

                
            </div>
        </div>

    );
}