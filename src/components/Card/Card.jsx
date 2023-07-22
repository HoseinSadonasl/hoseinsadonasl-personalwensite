import PropType from "prop-types";
const Card = ({ children, hasHover, position, outline, bottom }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${
        position &&
        position === ` absolute ` &&
        position + ` left-auto right-auto ${bottom} w-4/5 `
      } shadow-lg ${
        hasHover &&
        `hover:-translate-y-3 hover:scale-110 duration-300 hover:outline outline-2 outline-primary hover:drop-shadow-2xl `
      }  bg-gradient-to-br from-white from-30% via-gray-50 via-30% to-gray-50 to-40%  text-lg text-black rounded-2xl ${
        outline && `outline outline-2 outline-primary`
      } `}
    >
      {children}
    </div>
  );
};

Card.PropType = {
  children: PropType.element,
  hasHover: PropType.bool,
  position: PropType.string,
  outline: PropType.string,
  bottom: PropType.string,
};

export default Card;
