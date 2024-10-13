import { useState, useEffect } from "react";
import EventCard from "./EventCard";

const EventsSection = ({ events }) => {
  const [visibleEvents, setVisibleEvents] = useState(6); // Default for desktop
  const [isMobile, setIsMobile] = useState(false);

  // Check if the window width is less than a certain value to determine mobile view
  const handleResize = () => {
    if (window.innerWidth < 768) {
      // Mobile breakpoint
      setIsMobile(true);
      setVisibleEvents(3); // Show 3 events on mobile
    } else {
      setIsMobile(false);
      setVisibleEvents(6); // Show 6 events on desktop
    }
  };

  useEffect(() => {
    handleResize(); // Check the size on component mount
    window.addEventListener("resize", handleResize); // Attach event listener

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const loadMoreEvents = () => {
    setVisibleEvents((prevVisible) => prevVisible + (isMobile ? 3 : 6)); // Load 3 more for mobile, 6 for desktop
  };

  return (
    <div className="bg-black py-12 w-full">
      {" "}
      {/* Full-width black background */}
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Events
      </h2>
      {/* Event cards area with full width and responsive grid */}
      <div className="flex justify-center">
        <div className="max-w-screen-xl w-full px-4">
          {" "}
          {/* Maximum width set with full padding */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(0, visibleEvents).map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
      {/* Load More Button */}
      {visibleEvents < events.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreEvents}
            className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
          >
            &#x2193; Load More Events
          </button>
        </div>
      )}
    </div>
  );
};

export default EventsSection;
