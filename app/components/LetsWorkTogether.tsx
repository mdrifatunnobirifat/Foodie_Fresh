import Image from "next/image";
import LetsWorkcard from "./LetsWorkcard";

const Item=[
    {id:"1",image:"/partnerwithus.png", title:"Partner With Us", description:"xod xdu x oi vgi  cfvgji vfogn figvn boghmi cdubyvg cdbfg"},
    {id:"2",image:"/ridewithus.png", title:"Ride With Us", description:"xod xdu x oi vgi  cfvgji vfogn figvn boghmi cdubyvg cdbfg"},
]

export default function LetsWorkTogether() {
    return (
        <div className="flex flex-col items-center justify-center px-0 py-10 ">
            <div>
                <h1 className=" text-xl lg:text-3xl font-bold font-sans text-emerald-950 text-center ">Let's Work Together As <br/> Partner Or As Rider</h1>
                <p className="text-gray-700  font-sans text-xs md:text-sm text-center ">nksx cuni cnidu xicn idu cnidu xicn idu cnidu xicn idu <br/>unsu  cnidu xicn iducnidu xicn iduxyb  xtc yc uidr ien xyg </p>
            </div>

           
                <div className="flex  flex-col md:flex-row  items-center justify-center p-10">
                    {Item.map((item)=>(
                     <LetsWorkcard
                       
                        key={item.id}
                        icon={item.image}
                        title={item.title}
                        description={item.description}
                       />
                     ))}
               </div>

        </div>




    );
}