import IconButtion from "../icon-button/IconButton";
import PropType from "prop-types";

import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";

const Contact = ({ color, call }) => {
  return (
    <div className="grid columns-4 md:flex flex-row justify-center items-center">
      <div className="col-span-4">
        {call && (
          <IconButtion link={""}>
            <FaPhone color={color} fontSize={24} />
            989168398153+
          </IconButtion>
        )}
      </div>

      <IconButtion
        link={"https://www.linkedin.com/in/hosein-sadon-asl-034539182/"}
      >
        <FaLinkedin color={color} fontSize={24} />
      </IconButtion>
      <IconButtion link={"https://github.com/HoseinSadonasl"}>
        <FaGithub color={color} fontSize={24} />
      </IconButtion>
      <IconButtion link={"https://wa.me/message/RL5LIROQPKYDC1"}>
        <FaWhatsapp color={color} fontSize={24} />
      </IconButtion>
      <IconButtion link={""}>
        <FaInstagram color={color} fontSize={24} />
      </IconButtion>
    </div>
  );
};

Contact.PropType = {
  color: PropType.string,
};

export default Contact;
