const FlatButton = ({ text }) => {
  return (
    <button className="bg-white hover:bg-gray-50 font-YekanReg px-2 py-1 text-lg text-gray-700 hover:text-primary transition ease-in-out delay-50 rounded">
      {text}
    </button>
  );
};

export default FlatButton;
