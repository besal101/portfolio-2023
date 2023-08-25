import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
//
import { skills } from "@modules/Home/config/constanst";
import { fadeTop, motionStep } from "@config/motion";

const Left = () => {
  return (
    <motion.div variants={fadeTop} {...motionStep} className="col-span-3">
      <div className="space-y-4 mt-7 text-slate-400">
        <p>
          Hello! My name is Bishal Khatri and I enjoy creating things that live
          on the internet. My interest in web development started back in 2014
          when I decided to try editing custom Mig33 themes — turns out hacking
          together a custom button taught me a lot about HTML & CSS!
        </p>
        <p>
          Fast-forward to today, and I’ve had the privilege of working at
          various companies, a start-up with my own idea and my own complete
          build, a huge IT corporation, and becaming a single IT person in an
          multinational company building complete webapp, mobile app and ERP
          systems.
        </p>

        <p>Here are a few technologies I’ve been working with recently:</p>

        <div className="__skills md:pr-56">
          <ul className="grid grid-cols-2 space-y-2">
            {skills.map((e: string, i: number) => (
              <li
                key={i}
                className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-sky-400"
              >
                {" "}
                <IoMdArrowDropright className="text-sky-400 text-xl" /> {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Left;
