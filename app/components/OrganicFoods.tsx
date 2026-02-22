import Image from "next/image";
import OrganicFoodcard from "./OrganicFoodcard";

export default function OrganicFoods() {
    const Item=[
    {id:"1",heading:"Real Product"},
    {id:"2",heading:"Real Product"},
    {id:"3",heading:"Real Product"}
    
]
    return(
        <div className="flex flex-col  w-full py-5 justify-center items-center ">
            {/*upper div */}
            <div className="flex flex-row items-center justify-center   ">
                <div className=" bg-white py-15 px-18 text-left  ">
                
                    <h1 className=" text-xl md:text-2xl  lg:text-3xl font-bold font-sans text-emerald-950 text-center lg:text-left ">Organic <br/>Fresh Foods</h1>
                    <p className="text-gray-700  font-sans text-xs md:text-sm text-center lg:text-left ">Organic Fresh Foods <br/> fresh foods fresh foods<br/> food amijc ciux idn uxh</p>
                    <div className="flex flex-row text-sm gap-10">
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

                <div className="hidden md:block">    
                    <Image src="/organicfruits.png" alt="pic" width={410} height={370}
                    className="object-contain"/>
                    <div className="h-px  w-full lg:w-xs bg-emerald-800 " />
                    <div className="w-py  bg-emerald-800 " />
                </div>
            </div>

            
            <div className=" absolute">
                <button className="bg-emerald-800 text-white text-sm w-17 lg:w-21 h-17 lg:h-21 rounded-full flex items-center justify-center hover:bg-emerald-700 transition">
                   Shop Now
                </button>
            </div>
            

            {/*lower div */}
            <div className="flex flex-row items-center justify-center   ">
                <div className="hidden md:block">
                    <div className="h-px  w-full lg:w-xs bg-emerald-800 " />
                    <Image src="/organicfruitbasket.png" alt="pic" width={410} height={370}
                    className="object-contain"/>
                    
                </div>

                <div className=" bg-white py-15 px-18 text-left ">
                    <h1 className="text-xl md:text-2xl   lg:text-3xl font-bold font-sans text-emerald-950 text-center lg:text-left">More Than<br/>50 Products </h1>
                    <p className="text-gray-700  font-sans text-xs md:text-sm text-center lg:text-left max-w-md">Organic Fresh Foods <br/> fresh foods fresh foods<br/> food amijc ciux idn uxh</p>
                    <div className="flex flex-row text-sm gap-10">
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