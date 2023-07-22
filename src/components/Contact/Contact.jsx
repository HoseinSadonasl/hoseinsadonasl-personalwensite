import IconButtion from "../icon-button/IconButton";
import PropType from "prop-types";

import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";

const Contact = ({ color }) => {
  return (
    <div className="flex flex-row">
      <IconButtion link={""}>
        <FaPhone color={color} fontSize={24} />
        989168398153+
      </IconButtion>
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
