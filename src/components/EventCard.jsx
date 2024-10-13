const EventCard = ({ event }) => {
    return (
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <img
          src={event.poster}
          alt={event.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-white mb-2">{event.name}</h3>
          <p className="text-gray-300 text-sm mb-4">{event.shortDesc}</p>
          <a
            href={event.communityLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Get More Info!
          </a>
        </div>
      </div>
    );
  };
  
  export default EventCard;
  