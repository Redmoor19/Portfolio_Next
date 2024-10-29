"use client";

import { Content, GroupField, KeyTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Simplify } from "../../prismicio-types";

type TabsProps = {
  experience: GroupField<
    Simplify<Content.ExperienceSliceDefaultPrimaryExperienceItem>
  >;
};

const Tabs = ({ experience }: TabsProps) => {
  const [active, setActive] = useState(() => experience.at(0));

  function setActiveTab(tabtitle: KeyTextField) {
    const tab = experience.find((item) => item.tabtitle === tabtitle);
    setActive(tab);
  }

  function isActive(tabtitle: KeyTextField) {
    if (tabtitle === active?.tabtitle) {
      return "text-slate-200 cursor-not-allowed";
    } else return "";
  }

  return (
    <div className="grid grid-cols-[1fr_3fr] gap-3 lg:gap-7 w-full lg:w-2/3">
      <ul className="flex flex-col gap-3 text-slate-400">
        {experience.map((item) => (
          <li
            className={`cursor-pointer hover:text-slate-200 ${isActive(item.tabtitle)}`}
            key={item.tabtitle}
            onClick={() => setActiveTab(item.tabtitle)}
          >
            <p className=" text-lg font-lexend">{item.tabtitle}</p>
          </li>
        ))}
      </ul>
      <TabItem tabItem={active} />
    </div>
  );
};

type TabItemProps = {
  tabItem?: Simplify<Content.ExperienceSliceDefaultPrimaryExperienceItem>;
};

const TabItem = ({ tabItem }: TabItemProps) => {
  if (tabItem === undefined) return null;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={tabItem.tabtitle}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold font-lexend text-slate-100 mb-2">
          {tabItem.role}
          <span className="text-slate-400"> ({tabItem.employment_type})</span>
        </h2>
        <p className="font-grotesk text-slate-200 mb-7">
          {tabItem.company} | {tabItem.location} | {tabItem.time_period}
        </p>
        <PrismicRichText
          field={tabItem.achievements}
          components={{
            listItem: ({ children }) => <li className="">{children}</li>,
            list: ({ children }) => (
              <ul className="font-grotesk text-slate-300 list-disc flex flex-col gap-3 pl-4">
                {children}
              </ul>
            ),
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Tabs;
