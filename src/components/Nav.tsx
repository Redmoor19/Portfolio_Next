"use client";

import useActiveSection from "@/hooks/useActiveSection";
import {
  InfoIcon,
  CogIcon,
  BriefcaseIcon,
  StarIcon,
  UserPenIcon,
} from "lucide-react";

const links = [
  {
    title: "About",
    href: "#about",
    icon: InfoIcon,
  },
  {
    title: "Skills",
    href: "#skills",
    icon: CogIcon,
  },
  {
    title: "Experience",
    href: "#experience",
    icon: StarIcon,
  },
  {
    title: "Portfolio",
    href: "#portfolio",
    icon: BriefcaseIcon,
  },
  {
    title: "Contact",
    href: "#contact",
    icon: UserPenIcon,
  },
];

const Nav = () => {
  const activeSection = useActiveSection();

  function isPermitted(section: string) {
    return links.find((item) => item.href.slice(1) === section);
  }

  return (
    <div
      className={`duration-300 ${isPermitted(activeSection) ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <nav
        className={`h-screen hidden md:block fixed group/full z-50 w-12 top-0 right-0`}
      >
        <ul className="h-full flex flex-col items-center justify-center gap-7">
          {links.map((item) => (
            <li
              key={item.href}
              className={`relative w-3 h-3 group/item group-hover/full:w-5 group-hover/full:h-5 duration-150 rounded-full cursor-pointer flex justify-center items-center ${activeSection === item.href.slice(1) ? "bg-blue-500" : "bg-slate-50"}`}
            >
              <p className="text-slate-100 font-lexend absolute bg-slate-900/90 px-2 py-1 rounded right-10 opacity-0 duration-300 hidden group-hover/item:opacity-100 group-hover/item:block">
                {item.title}
              </p>
              <a className="w-full h-full block" href={item.href}></a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className={`fixed md:hidden w-full bg-slate-900 h-20 z-50 bottom-0`}>
        <ul className="flex justify-around items-center h-full">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`flex gap-2 items-center text-slate-100 duration-200 ${isActive ? "bg-slate-700 p-2 rounded" : ""}`}
                >
                  <link.icon size={30} />
                  {isActive && (
                    <p className="font-lexend text-lg">{link.title}</p>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
