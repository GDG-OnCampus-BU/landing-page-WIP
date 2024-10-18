import { useState, useEffect } from "react";
import EventCard from "./EventCard";

const EventsSection = ({ events }) => {
  const [visibleEvents, setVisibleEvents] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      // Mobile breakpoint
      setIsMobile(true);
      setVisibleEvents(3);
    } else {
      setIsMobile(false);
      setVisibleEvents(6);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const loadMoreEvents = () => {
    setVisibleEvents((prevVisible) => prevVisible + (isMobile ? 3 : 6));
  };

  return (
    <div className="bg-black py-12 w-full">
      {" "}
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Events
      </h2>
      <div className="flex justify-center">
        <div className="max-w-screen-xl w-full px-4">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(0, visibleEvents).map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
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
