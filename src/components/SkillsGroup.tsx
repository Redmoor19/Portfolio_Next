import { AnimatePresence } from "framer-motion";
import * as motion from "framer-motion/client";
import { GroupField } from "@prismicio/client";
import IconCard from "./IconCard";
import {
  Simplify,
  SkillsSliceDefaultPrimaryFrontendItem,
} from "../../prismicio-types";

type SkillsGroupProps = {
  title: string;
  skills: GroupField<Simplify<SkillsSliceDefaultPrimaryFrontendItem>>;
};

const SkillsGroup = ({ skills, title }: SkillsGroupProps) => {
  return (
    <div>
      <h3 className="text-center font-lexend text-2xl text-slate-100 py-4">
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-3">
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
    </div>
  );
};

export default SkillsGroup;
