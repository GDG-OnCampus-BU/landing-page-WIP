"use client";

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
    <div
      className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 text-center"
      style={{
        backgroundImage: `url('/assets/image1.png')`, 
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
      }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-white">
        We are GDG-BU
      </h1>

      <button
        onClick={() => router.push("/home")}
        className="rounded-full border border-solid border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-lg sm:text-xl h-12 sm:h-14 px-6 sm:px-8 transition-colors"
      >
        Discover More
      </button>
    </div>
  );
}
