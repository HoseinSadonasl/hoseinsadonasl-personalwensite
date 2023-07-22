import logo from "../../assets/hsa.svg";
import Contact from "../Contact/Contact";
const Header = () => {
  return (
    <div className="shadow-md shadow-gray-100 fixed w-full z-50 max-w bg-white p-3 flex flex-row justify-between sm:px-6 md:px-12 lg:px-40">
      <img src={logo} className="w-10" />
      <nav className="bg-white flex flex-row text-black">
        <Contact />
      </nav>
    </div>
  );
};

export default Header;
