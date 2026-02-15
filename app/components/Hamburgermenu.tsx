"use client";

import Image from "next/image";
import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggle}
        className="p-2 text-emerald-800 focus:outline-none"
      >
        <Image
          src="/menu-svgrepo-com.svg"
          alt="menu"
          width={30}
          height={30}
          className={`transition-transform duration-300 ${isOpen ? "rotate-90 opacity-50" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-emerald-100 shadow-2xl rounded-lg flex flex-col p-4 space-y-4 z-100">
          <a className="text-emerald-800 font-medium hover:text-emerald-500" onClick={() => setIsOpen(false)}>Home</a>
          <a className="text-emerald-800 font-medium hover:text-emerald-500" onClick={() => setIsOpen(false)}>About</a>
          <a className="text-emerald-800 font-medium hover:text-emerald-500" onClick={() => setIsOpen(false)}>Shop</a>
          <a className="text-emerald-800 font-medium hover:text-emerald-500" onClick={() => setIsOpen(false)}>Contact</a>
          <a className="text-emerald-800 font-medium hover:text-emerald-500" onClick={() => setIsOpen(false)}>
                 <Image src="/shopping-bag-svgrepo-com.svg" alt="icon" width={30} height={30}
                     className="object-contain"/>
          </a> 
          <a className="text-emerald-800 font-medium hover:text-emerald-500" onClick={() => setIsOpen(false)}>
                 <Image src="/person-male-svgrepo-com.svg" alt="icon" width={30} height={30}
                     className="object-contain"/>
          </a> 
          
          {/* Action button specifically for mobile view */}
          <button className="bg-emerald-800 text-white px-4 py-2 rounded-full text-sm hover:bg-emerald-700 transition w-full">
            Partner with us
          </button>
        </div>
      )}
    </div>
  );
}