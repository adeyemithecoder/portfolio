import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocial = () => {
  return (
    <div className='header_social'>
      <a href='https://linkedin.com' target='_blank'>
        {" "}
        <BsLinkedin />{" "}
      </a>
      <a href='https://github.com/adeyemithecoder/' target='_blank'>
        {" "}
        <FaGithub />
      </a>
      <a href='https://wa.me/+2348109774285' target='_blank'>
        {" "}
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default HeaderSocial;
