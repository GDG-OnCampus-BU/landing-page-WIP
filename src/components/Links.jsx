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
      <p className="font-mono text-lime-400 font-bold w-8 h-8 text-3xl text-center align-middle bg-transparent italic">
        H
      </p>
    ),
    bgcolor: "text-lime-400 border-2 border-lime-400 hover:bg-lime-400/15",
  },
  {
    name: "Junior  Forms",
    href: "https://forms.gle/AGnZKZiE1SjMPLpw8",
    icon: <TbListDetails className="w-8 h-8 text-violet-400"></TbListDetails>,
    bgcolor:
      "text-violet-400 border-2 border-violet-400 hover:bg-violet-400/15",
  },
  {
    name: "Whatsapp",
    href: "https://chat.whatsapp.com/Coiz2mWaHIQJs1c91jrYsB",
    icon: <FaWhatsapp className="w-8 h-8 text-emerald-400"></FaWhatsapp>,
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
      <p className="font-mono text-sky-400 font-bold w-8 h-8 text-3xl bg-transparent  flex justify-center items-center">
        &lt;&gt;
      </p>
    ),
    bgcolor: "text-sky-400 border-2 border-sky-400 hover:bg-sky-400/15",
  },
];
const Links = () => {
  return (
    <div className="flex md:flex-row md:justify-around flex-col items-center p-4 gap-8">
      {hyperlinks.map((link, index) => {
        return (
          <Link
            key={index}
            name={link.name}
            href={link.href}
            icon={link.icon}
            bgcolor={link.bgcolor}
          ></Link>
        );
      })}
    </div>
  );
};

export default Links;

const Link = ({ name, href, icon, bgcolor }) => {
  return (
    <a href={href} target="_blank">
      <div
        className={` ${bgcolor} bg-transparent hover:scale-110  transform translate duration-300 ease-in-out  w-80 justify-between md:w-fit min-h-fit py-4 flex md:justify-around gap-x-6 items-center px-5 py- rounded-2xl`}
      >
        {icon}
        <p
          className={` text-lg text-nowrap md:text-xl lg:text-2xl font-medium block md:hidden lg:block`}
        >
          {name}
        </p>
      </div>
    </a>
  );
};
