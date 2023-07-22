import mypic from "../../assets/hosein.png";
import Button from "../button/Button";
import PropType from "prop-types";

const Banner = ({ name, shortBio, bio, onClick }) => {
  return (
    <div className=" px-auto flex rounded-b-lg drop-shadow-sm bg-fixed justify-center mt-20 bg bg-gradient-to-br from-white from-25% via-purple-100 via-10% to-gray-50 to-40%  sm:flex-col-reverse md:flex-row lg:flex-row md:items-center ">
      <div className="flex items-start flex-col sm:m-6 md:m-12 gap-5 md:w-3/5 lg:w-3/5">
        <h2 className="font-YekanReg text-gray-400 text-3xl md:text-4xl">من</h2>
        <h1 className="font-YekanBd text-gray-500 text-6xl md:text-5xl lg:text-7xl">
          {name}
        </h1>
        <h1 className=" font-YekanReg text-primary text-2xl md:text-xl lg:text-4xl">
          {shortBio}
        </h1>
        <h2 className="font-YekanTn text-gray-900 text-xl md:text-lg lg:text-xl ">
          {bio}
        </h2>
        <Button onClick={onClick} text={"ارتباط با من"} />
      </div>
      <div className="md:w-2/5 lg:w-1/5 sm:p- md:p-12 lg:p-0">
        {/* <div className="w-2/5 h-full bg-sky-200 absolute top-0 left-0 self-center rounded-b-full"></div> */}
        <img
          src={mypic}
          className="w-full self-center shadow-gray-100 -z-50 shadow-2xl rounded-full outline outline-1 outline-gray-100"
        />
      </div>
    </div>
  );
};

Banner.PropType = {
  name: PropType.string,
  shortBio: PropType.string,
  bio: PropType.string,
  onClick: PropType.func,
};

export default Banner;
