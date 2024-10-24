"use client";

import { useState, useEffect } from "react";

const links = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Portfolio",
    href: "#portfolio",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");

  const updateNavigation = () => {
    const sections = document.querySelectorAll("section");
    const halfWindowHeight = window.innerHeight / 2;
    const scrollTop = window.scrollY;

    const newActiveSection = Array.from(sections).reduce((closest, section) => {
      const offsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.id;

      const cond1 = offsetTop - halfWindowHeight < scrollTop;
      const cond2 = offsetTop + sectionHeight - halfWindowHeight > scrollTop;

      if (cond1 && cond2) {
        return sectionId;
      }
      return closest;
    }, activeSection);
    console.log(activeSection, newActiveSection);

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  useEffect(() => {
    setActiveSection("home");
    updateNavigation();
    window.addEventListener("scroll", updateNavigation);

    return () => {
      window.removeEventListener("scroll", updateNavigation);
    };
  }, []);

  return (
    <nav
      className={`h-screen fixed group/full z-50 w-20 top-0 right-0 duration-300 ${activeSection !== "home" ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <ul className="h-full flex flex-col items-center justify-center gap-7">
        {links.map((item) => (
          <li
            key={item.href}
            className={`relative w-3 h-3 group/item group-hover/full:w-5 group-hover/full:h-5 duration-150 rounded-full cursor-pointer flex justify-center items-center ${activeSection === item.href.slice(1) ? "bg-blue-500" : "bg-slate-50"}`}
          >
            <p className="text-slate-100 font-lexend absolute right-10 opacity-0 duration-300 hidden group-hover/item:opacity-100 group-hover/item:block">
              {item.title}
            </p>
            <a className="w-full h-full block" href={item.href}></a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
