"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import EventsSection from "@/components/EventsSection";
import Links from "@/components/Links";

export default function Home() {
  const publicPath = process.env.NEXT_PUBLIC_PUBLIC_PATH ;
  const [eventsData, setEventsData] = useState([]);
  useEffect(() => {
    const fetchEventsData = async () => {
      const response = await fetch(publicPath+"/data/events.json");
      const data = await response.json();
      setEventsData(data);
    };

    fetchEventsData();
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("more-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.scrollBy({
          top: -1,
          behavior: "smooth",
        });
      }, 600);
    }
  };
  return (
    <>
      <Navbar />

      <div
        className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 text-center"
        style={{
          // we are hardcoding the image url here due to gh pages and next contraints
          backgroundImage: `url('https://gdg-oncampus-bu.github.io/landing-page/assets/image1.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          We are GDG-BU
        </h1>

        <button
          onClick={scrollToSection}
          className="rounded-full border border-solid border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-lg sm:text-xl h-12 sm:h-14 px-6 sm:px-8 transition-colors"
        >
          Discover More
        </button>
      </div>

      {/* Second Section */}
      <div
        id="more-section"
        className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-50 text-center"
      >
        <EventsSection events={eventsData} />
      </div>

      {/* Links Section */}
      <div className="bg-gray-900 py-12">
        <Links />
      </div>
    </>
  );
}
