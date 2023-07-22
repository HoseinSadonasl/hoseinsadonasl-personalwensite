import Card from "../Card/Card";
import IconButtion from "../icon-button/IconButton";
import { FaGithub } from "react-icons/fa";
import cafebazar from "../../assets/bazaar.png";
import roozane from "../../assets/roozane.jpg";
import dakhl from "../../assets/dakhl.jpg";
import drizzle from "../../assets/drizzle.jpg";
import PropType from "prop-types";

const Project = ({ name, description, links }) => {
  const handleImage = () => {
    switch (name) {
      case "روزانه":
        return projectIcon(roozane);

      case "دخل":
        return projectIcon(dakhl);

      case "drizzle":
        return projectIcon(drizzle);

      default:
        null;
        break;
    }
  };

  const projectIcon = (url) => {
    return (
      <img src={url} className="rounded-xl self-center w-24 bg-slate-200" />
    );
  };

  return (
    <Card hasHover={true}>
      <div className=" min-h-[480px] flex flex-col gap-3 p-8 justify-between">
        <div className="flex flex-col gap-3">
          {handleImage()}
          <h3 className="text-4xl text-center font-YekanReg text-gray-600">
            {name && name}
          </h3>
          <h3 className="text-l text-center font-Yekanre text-gray-600">
            {description && description}
          </h3>
        </div>
        <div className="w-full flex flex-row justify-center">
          {links && links.github && (
            <IconButtion link={links.github}>
              <FaGithub color="black" size={24} />
            </IconButtion>
          )}
          {links && links.cafebazaar && (
            <IconButtion link={links.cafebazaar}>
              <img className="rounded-xl w-8 bg-slate-200" src={cafebazar} />
            </IconButtion>
          )}
        </div>
      </div>
    </Card>
  );
};

Project.PropType = {
  name: PropType.string,
  description: PropType.string,
  links: PropType.string,
};

export default Project;
