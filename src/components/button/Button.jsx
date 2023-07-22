import PropType from "prop-types";
const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary shadow-md hover:bg-primaryDark font-YekanReg hover:shadow-lg px-4 py-2 text-lg text-white transition ease-in-out delay-50 rounded-xl"
    >
      {text}
    </button>
  );
};

Button.PropType = {
  text: PropType.string.isRequired,
  onClick: PropType.func.isRequired,
};

export default Button;
