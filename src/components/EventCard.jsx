import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[#32cd32]">
      <img
        src={event.poster}
        alt={event.name}
        className="w-full h-48 object-contain opacity-90 hover:opacity-100 transition-opacity"
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold text-white mb-2">{event.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{event.shortDesc}</p>
        <a
          href={event.communityLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-900 transition-all"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default EventCard;
