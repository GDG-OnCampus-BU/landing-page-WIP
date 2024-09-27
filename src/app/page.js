"use client"; 

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const hideNavbar = () => {
  if (typeof window !== "undefined") {
    const navbar = document.querySelector("nav");
    if (navbar) navbar.style.display = "none";
  }
};

export default function Home() {
  const router = useRouter();

  useEffect(() => {
  
    hideNavbar();

    
    return () => {
      const navbar = document.querySelector("nav");
      if (navbar) navbar.style.display = "flex";
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold">
        We are GDG-BU
      </h1>

      <button
        onClick={() => router.push("/home")}
        className="rounded-full border border-solid border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-lg sm:text-xl h-12 sm:h-14 px-6 sm:px-8 transition-colors"
      >
        Discover More
      </button>

      <Image
  src="/assets/image1.png" 
  alt="GDG BU Logo"
  width={900}
  height={1100}
/>

    </div>
  );
}
