"use client";

import { useEffect, useState } from "react"; // Import useEffect and useState
import Navbar from "@/components/Navbar";
import EventsSection from "@/components/EventsSection"; // Import EventsSection, which includes EventCard and Events
import Links from "@/components/Links"; // If you have Links component

export default function Home() {
  const [eventsData, setEventsData] = useState([]); // State to hold events data

  // Function to fetch events data from the JSON file
  useEffect(() => {
    const fetchEventsData = async () => {
      const response = await fetch("/data/events.json"); // Adjust the path to your JSON file
      const data = await response.json();
      setEventsData(data);
    };
    
    fetchEventsData();
  }, []);

  // Function to scroll to the second section
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
      {/* Navbar */}
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
        {/* EventsSection component - Renders event cards */}
        <EventsSection events={eventsData} />
      </div>

      {/* Links Section */}
      <div className="bg-gray-900 py-12">
        <Links />
      </div>
    </>
  );
}
