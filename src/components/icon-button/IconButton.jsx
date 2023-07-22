import PropType from "prop-types";

const IconButtion = ({ children, link }) => {
  return (
    <a
      href={link}
      className="flex flex-row p-3 font-YekanTn accent-white text-gray-800 gap-3 text-3xl justify-center items-center hover:animate-bounce"
    >
      {children}
    </a>
  );
};

IconButtion.PropType = {
  children: PropType.element,
  link: PropType.string,
};

export default IconButtion;
