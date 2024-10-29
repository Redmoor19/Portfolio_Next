import { useEffect, useState } from "react";

const useActiveSection = () => {
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

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  useEffect(() => {
    updateNavigation();
    window.addEventListener("scroll", updateNavigation);

    return () => {
      window.removeEventListener("scroll", updateNavigation);
    };
  }, []);

  return activeSection;
};

export default useActiveSection;
