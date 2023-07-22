import { useState } from "react";
import PropType from "prop-types";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const Skill = ({ title, description, skills }) => {
  const [expanded, setExpanded] = useState(false);

  const handleSkils = () => {
    if (skills) {
      return skills.map((skill, i) => {
        return (
          <div key={i} className="flex flex-row items-center gap-2">
            <div className="p-1.5 bg-primary rounded-full"></div>
            <h2 className="font-YekanReg text-sm text-gray-600">{skill}</h2>
          </div>
        );
      });
    }
  };

  return (
    <div
      className={` bg-white shadow-lg flex flex-col relative  rounded-2xl overflow-hidden transition-all duration-500 ease-in-out ${
        expanded
          ? `sm:h-1/2 lg:h-96 outline outline-2 outline-primary drop-shadow-2xl shadow-0`
          : `h-48`
      }`}
    >
      <div
        onClick={() => setExpanded(!expanded)}
        className={`  text-white flex relative flex-row justify-between items-center rounded-t-2xl px-6 py-3 ${
          expanded ? `bg-primary` : `bg-primaryLight`
        }`}
      >
        <h1 className="font-YekanReg select-none text-2xl">{title}</h1>
        {expanded ? (
          <MdOutlineKeyboardArrowUp size={24} />
        ) : (
          <MdOutlineKeyboardArrowDown size={24} />
        )}
      </div>
      <div className={`flex flex-col gap-2  p-6  `}>
        <h2 className="text-gray-600 text-lg font-YekanReg">{description}</h2>
        <hr className="h-0.5 bg-slate-300" />
        <h1 className="font-YekanReg text-xl">برخی مهارتها</h1>
        <div
          className={`w-full bg-gradient-to-t from-white absolute  h-20 bottom-0 left-0 right-0 ${
            expanded && `hidden`
          }`}
        ></div>
        <section
          className={`grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 `}
        >
          {handleSkils()}
        </section>
      </div>
    </div>
  );
};

Skill.PropType = {
  title: PropType.string,
  description: PropType.string,
  skills: PropType.string,
};

export default Skill;
