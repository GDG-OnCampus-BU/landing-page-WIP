import React, { useState } from "react";
import Events from "./Events";

const EventsSection = ({ events }) => {
  // State to track how many events are shown initially
  const [visibleEvents, setVisibleEvents] = useState(6);

  // Function to load more events
  const loadMoreEvents = () => {
    setVisibleEvents((prev) => prev + 6); // Load 6 more events
  };

  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Upcoming Events
        </h2>

        {/* Render the Events component with only the visible events */}
        <Events events={events.slice(0, visibleEvents)} />

        {/* Display the "Next" arrow if there are more events to show */}
        {visibleEvents < events.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreEvents}
              className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition duration-300"
            >
              &#x2193; Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsSection;
