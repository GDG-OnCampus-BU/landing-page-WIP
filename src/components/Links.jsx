"use client";

import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";

const hyperlinks = [
  {
    name: "Hacktoberfest'24 Repos",
    href: "https://github.com/GDG-OnCampus-BU/HacktoberFest/",
    icon: (
      <p className="font-mono text-lime-400 font-bold w-8 h-8 text-3xl text-center bg-transparent italic">
        H
      </p>
    ),
    bgcolor: "text-lime-400 border-2 border-lime-400 hover:bg-lime-400/15",
  },
  {
    name: "Junior Core Forms",
    href: "https://forms.gle/AGnZKZiE1SjMPLpw8",
    icon: <TbListDetails className="w-8 h-8 text-violet-400" />,
    bgcolor:
      "text-violet-400 border-2 border-violet-400 hover:bg-violet-400/15",
  },
  {
    name: "Whatsapp",
    href: "https://chat.whatsapp.com/Coiz2mWaHIQJs1c91jrYsB",
    icon: <FaWhatsapp className="w-8 h-8 text-emerald-400" />,
    bgcolor:
      "text-emerald-400 border-2 border-emerald-400 hover:bg-emerald-400/15",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/gdgbu_/",
    icon: <FaInstagram className="w-8 h-8 text-pink-500" />,
    bgcolor: "text-pink-500 border-2 border-pink-500 hover:bg-pink-500/15",
  },
  {
    name: "Community.dev",
    href: "https://gdg.community.dev/gdg-on-campus-bennett-university-greater-noida-india/",
    icon: (
      <p className="font-mono text-sky-400 font-bold w-8 h-8 text-3xl flex justify-center items-center">
        &lt;&gt;
      </p>
    ),
    bgcolor: "text-sky-400 border-2 border-sky-400 hover:bg-sky-400/15",
  },
];

const Links = () => {
  return (
    <div className="flex flex-col items-center p-4 gap-8 w-full">
      {/* Heading for Links Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Useful Links
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
        {hyperlinks.map((link, index) => (
          <Link
            key={index}
            name={link.name}
            href={link.href}
            icon={link.icon}
            bgcolor={link.bgcolor}
          />
        ))}
      </div>
    </div>
  );
};

const Link = ({ name, href, icon, bgcolor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transform hover:scale-105 transition-transform duration-300 ease-in-out`}
    >
      <div
        className={`${bgcolor} bg-transparent border rounded-2xl p-4 flex items-center justify-between gap-x-6 md:flex-col md:items-center md:gap-y-4`}
      >
        {icon}
        <p
          className={`text-base md:text-lg lg:text-xl font-medium text-center`}
        >
          {name}
        </p>
      </div>
    </a>
  );
};

export default Links;
