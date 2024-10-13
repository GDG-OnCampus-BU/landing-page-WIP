"use client";

import Navbar from "@/components/Navbar";
import EventsSection from "@/components/EventsSection"; // Import EventsSection, which includes EventCard and Events
import Links from "@/components/Links"; // If you have Links component

// Mock event data for the EventCard component
const eventsData = [
  {
    name: "Gen AI Study Jams",
    poster: "https://via.placeholder.com/400x200.png?text=Gen+AI+Study+Jams",
    shortDesc:
      "An event about AI that explores the latest developments in generative AI technologies.",
    communityLink: "https://community.dev/genai-study-jams",
  },
  {
    name: "Web Dev Workshop",
    poster: "https://via.placeholder.com/400x200.png?text=Web+Dev+Workshop",
    shortDesc:
      "Hands-on workshop covering modern web development techniques and best practices.",
    communityLink: "https://community.dev/web-dev-workshop",
  },
  {
    name: "Gen AI Study Jams",
    poster: "https://via.placeholder.com/400x200.png?text=Gen+AI+Study+Jams",
    shortDesc:
      "An event about AI that explores the latest developments in generative AI technologies.",
    communityLink: "https://community.dev/genai-study-jams",
  },
  {
    name: "Web Dev Workshop",
    poster: "https://via.placeholder.com/400x200.png?text=Web+Dev+Workshop",
    shortDesc:
      "Hands-on workshop covering modern web development techniques and best practices.",
    communityLink: "https://community.dev/web-dev-workshop",
  },
  {
    name: "Gen AI Study Jams",
    poster: "https://via.placeholder.com/400x200.png?text=Gen+AI+Study+Jams",
    shortDesc:
      "An event about AI that explores the latest developments in generative AI technologies.",
    communityLink: "https://community.dev/genai-study-jams",
  },
  {
    name: "Web Dev Workshop",
    poster: "https://via.placeholder.com/400x200.png?text=Web+Dev+Workshop",
    shortDesc:
      "Hands-on workshop covering modern web development techniques and best practices.",
    communityLink: "https://community.dev/web-dev-workshop",
  },{
    name: "Gen AI Study Jams",
    poster: "https://via.placeholder.com/400x200.png?text=Gen+AI+Study+Jams",
    shortDesc:
      "An event about AI that explores the latest developments in generative AI technologies.",
    communityLink: "https://community.dev/genai-study-jams",
  },
  {
    name: "Web Dev Workshop",
    poster: "https://via.placeholder.com/400x200.png?text=Web+Dev+Workshop",
    shortDesc:
      "Hands-on workshop covering modern web development techniques and best practices.",
    communityLink: "https://community.dev/web-dev-workshop",
  },
];

export default function Home() {
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
        className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 text-center"
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
