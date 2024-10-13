import React from 'react';
import Link from 'next/link';

// EventCard component
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

// EventsSection component
const EventsSection = ({ events }) => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Mock data for events
const eventsData = [
  {
    name: "Gen AI Study Jams",
    poster: "https://via.placeholder.com/400x200.png?text=Gen+AI+Study+Jams",
    shortDesc: "An event about AI that explores the latest developments in generative AI technologies.",
    communityLink: "https://community.dev/genai-study-jams"
  },
  {
    name: "Web Dev Workshop",
    poster: "https://via.placeholder.com/400x200.png?text=Web+Dev+Workshop",
    shortDesc: "Hands-on workshop covering modern web development techniques and best practices.",
    communityLink: "https://community.dev/web-dev-workshop"
  },
  // Add more events as needed
];

// Main EventsPage component
export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">GDG Events</h1>
          <nav className="mt-4">
            <Link href="/" className="text-blue-400 hover:text-blue-300">Home</Link>
          </nav>
        </div>
      </header>
      <main>
        <EventsSection events={eventsData} />
      </main>
      <footer className="bg-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-300">
          <p>&copy; 2024 GDG Events. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}