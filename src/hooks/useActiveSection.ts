import { useEffect, useState } from "react";

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("");

  const debounce = <T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): T => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (this: unknown, ...args: Parameters<T>): void {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    } as T;
  };

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

  const debouncedUpdateNavigation = debounce(updateNavigation, 100);

  useEffect(() => {
    updateNavigation();
    window.addEventListener("scroll", debouncedUpdateNavigation);

    return () => {
      window.removeEventListener("scroll", debouncedUpdateNavigation);
    };
  }, []);

  return activeSection;
};

export default useActiveSection;
