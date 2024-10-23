import { GroupField } from "@prismicio/client";
import * as motion from "framer-motion/client";

import {
  Simplify,
  SkillsSliceDefaultPrimaryFrontendItem,
} from "../../../prismicio-types";
import { AnimatePresence } from "framer-motion";
import IconCard from "./IconCard";

type AdditionalSkillsProps = {
  skills: GroupField<Simplify<SkillsSliceDefaultPrimaryFrontendItem>>;
};

const AdditionalSkills = ({ skills }: AdditionalSkillsProps) => {
  return (
    <div className="flex gap-3 flex-wrap">
      <AnimatePresence>
        {skills.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.random(), duration: 1 }}
          >
            <IconCard thumbnail={item.thumbnail} title={item.title} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default AdditionalSkills;
