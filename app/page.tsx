import Image from "next/image";
export default function Footer() {
  return (
    <div className=" text-center  py-5 px-2 md:px-5 lg:px-10 bg-emerald-950">
      
      {/* 1st div*/}
      <div className="flex flex-col md:flex-row w-full justify-evenly text-left gap-3">
        <div className="flex flex-col">
          <div className="flex flex-row items-start gap-1">
            <Image src="/food-delivery_9510856.png" alt="icon" width={46} height={38}
                     className="object-contain"/>
             <h1 className="lg:text-3xl text-2xl text-white font-bold font-sans">Foodie Fresh</h1>
          </div>
              <p className="text-xs lg:text-sm text-white">Foodie e oodie oodie <br/>oodie oodie ooe oodie <br/> oodie oodie oodie oooodie oodie oodie oodie oodie Fresh</p>
              <br></br>
                <h1 className="text-sm lg:text-md text-white font-bold font-sans">Follow Us</h1>
                <div className="flex flex-row gap-2 justify-center md:justify-start">
                    <Image src="facebook-svgrepo-com.svg" alt="facebook" width={30} height={30} 
                    className="object-contain inline-block filter invert" />
                    <Image src="twitter-svgrepo-com.svg" alt="twitter" width={27} height={30} 
                    className="object-contain inline-block filter invert" />
                    <Image src="instagram-svgrepo-com.svg" alt="instagram" width={35} height={30} 
                    className="object-contain inline-block filter invert" />
                </div>
        </div>

        <div className="text-neutral-300 font-sans">
           <h1 className="text-lg font-bold py-2">Company</h1>
           <ul className="text-sm list-none space-y-2">
             <li>About us</li>
             <li>Delivery Information</li>
             <li>Privacy Policy</li>
             <li>Terms & Conditions</li>
             <li>Contact Us</li>
             <li>FAQ</li>
           </ul>
        </div>

        <div className="text-neutral-300 font-sans">
           <h1 className="text-lg font-bold py-2">Account</h1>
           <ul className="text-sm list-none space-y-2">
             <li>Sign In</li>
             <li>View Cart</li>
             <li>My Wishlist</li>
             <li>Track My Order</li>
             <li>Help Ticket</li>
             <li>Shipping Details</li>
             <li>Compare Products</li>
           </ul>
        </div>

        <div className="text-neutral-300 font-sans">
           <h1 className="text-lg font-bold py-2">Corporate</h1>
           <ul className="text-sm list-none space-y-2">
             <li>Become a Merchant</li>
             <li>Become a Rider</li>
             <li>Foodeliver Business</li>
             <li>Foodeliver Careers</li>
             <li>Our Suppliers</li>
             <li>Accessibility</li>
             <li>Promises</li>
           </ul>
        </div>

        <div className="text-neutral-300 font-sans">
           <h1 className="text-lg font-bold py-2">Address</h1>
           <ul className="text-sm list-none space-y-2">
             <li className="flex flex-row gap-2 justify-center md:justify-start">
               <Image src="/map-pin-alt-svgrepo-com.svg" alt="map icon" width={23} height={23}
                className="object-contain inline-block invert"/>
              <span>Linsedt,23/234, London ,Dhaka</span>
             </li>
             <li className="flex flex-row gap-2 justify-center md:justify-start">
               <Image src="/phone-svgrepo-com.svg" alt="phone icon" width={23} height={23}
                className="object-contain inline-block invert"/>
              <span>010101010101</span>
             </li>
             <li className="flex flex-row gap-2 justify-center md:justify-start">
               <Image src="/mail-svgrepo-com.svg" alt="mail icon" width={23} height={23}
                className="object-contain inline-block invert"/>
              <span>Linsedt@gmail.com</span>
             </li>
             <li className="flex flex-row gap-2 justify-center md:justify-start">
               <Image src="/clock-square-svgrepo-com.svg" alt="clock icon" width={23} height={23}
                className="object-contain inline-block invert"/>
              <span>10.00-20.00, Mon-Sat</span>
             </li>
           </ul>
        </div> 
      </div>

      {/* 2nd div*/}
      <div className="flex flex-col md:flex-row w-full justify-baseline py-3 md:px-10 text-left sm:gap-30 md:gap-90">
         <div className="text-neutral-300 font-sans text-center">
           <h1 className="text-xl font-bold py-2">Get Our App From</h1>
           <ul className="text-sm list-none space-y-2">
             <li className="flex justify-center md:justify-start">
               <Image src="/getitonGoogle.png" alt="google play" width={150} height={50} className="object-contain"/>
             </li>
             <li className="flex justify-center md:justify-start">
               <Image src="/getitonAppstore.png" alt="app store" width={150} height={50} className="object-contain"/>
             </li>
           </ul>
          </div>

          <div className="text-neutral-300 font-sans md:text-left text-center">
           <h1 className="text-xl font-bold py-2">Scan QR Code</h1>
           <ul className="text-sm list-none space-y-1">
            <li className="flex justify-center md:justify-start">
              <Image src="/qr-code-svgrepo-com.svg" alt="qr code" width={80} height={50} className="object-contain filler invert"/>
            </li>
           </ul>
          </div>
      </div>

      {/*3rd div */}
      <div className="flex flex-col-reverse md:flex-row  pt-10  justify-between  items-center   gap-10 md:gap-30">
        <div className="text-sm text-white">
            © 2023, Fooddeliver - Sustainable Food To Your Door All rights reserved
        </div>
          
        <div className="flex flex-col items-center">
            <div className="text-md text-white">Secured Payment Gateways</div>
            <div className="flex flex-row justify-center gap-5">
                 <Image src="/visa-svgrepo-com.svg" alt="visa" width={50} height={50} className="object-contain"/>
                 <Image src="/mastercard-svgrepo-com.svg" alt="mastercard" width={50} height={50} className="object-contain"/>
                 <Image src="/american-express-svgrepo-com.svg" alt="american express" width={50} height={50} className="object-contain"/>
           </div>
        </div>
      </div>
    </div>
  );
}