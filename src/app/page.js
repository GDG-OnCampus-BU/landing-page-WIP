"use client";

import Navbar from "@/components/Navbar";
import Links from "../components/Links";
export default function Home() {
  // Function to scroll to the section
  const scrollToSection = () => {
    const section = document.getElementById("more-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        // this method is used to move down the nav when clicked on button.
        window.scrollBy({
          top: -2,
          behavior: "smooth",
        });
      }, 600);
    }
  };

  return (
    <>
      <Navbar />
      {/* First Section */}
      <div
        className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 text-center"
        style={{
          backgroundImage: `url('/assets/image1.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <h1 className="rounded-full border border-solid border-transparent bg-foreground text-background hover:bg-[#FF0000] dark:hover:bg-[#FF0000] text-lg sm:text-xl h-12 sm:h-14 px-6 sm:px-8 transition-colors">
          GDG-BU
        </h1>

        <button
          onClick={scrollToSection}
          className="rounded-full border border-solid border-transparent bg-foreground text-background hover:bg-[#FF0000] dark:hover:bg-[#FF0000] text-lg sm:text-xl h-12 sm:h-14 px-6 sm:px-8 transition-colors"
        >
          Discover++
        </button>
      </div>

      {/* Second Section */}
      <div
        id="more-section"
        className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          HUTTT
        </h2>
        <Links></Links>
        <p className="text-lg sm:text-xl text-gray-600">
          Here&apos;s more information about GDG-BU and what we do.
        </p>
      </div>
    </>
  );
}
