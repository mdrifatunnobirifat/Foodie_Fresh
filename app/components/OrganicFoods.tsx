import Image from "next/image";

export default function OrganicFoods() {
    return(
        <div className="flex flex-col w-full py-5">
            {/*upper div */}
            <div className="flex flex-row items-center justify-center   ">
                <div className=" bg-emerald-200 px-30 py-34">
                    <h1>Organic Fresh Foods</h1>
                    <h1>Organic Fresh Foods <br/> fresh foods fresh foods<br/> food amijc ciux idn uxh</h1>

                </div>

                <div className=" bg-emerald-100  ">
                    <Image src="/organicfruits.png" alt="pic" width={410} height={370}
                    className="object-contain"/>
                </div>
            </div>


            {/*lower div */}
            <div className="flex flex-row items-center justify-center ">
                <div className="bg-emerald-100">
                    <Image src="/organicfruitbasket.png" alt="pic" width={400} height={370}
                    className="object-contain"/>
                </div>

                <div className="items-center bg-white px-40 py-34">
                    <h1>bottom right</h1>
                </div>
            </div>
        </div>

    );
}