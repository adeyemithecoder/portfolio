import { BsWhatsapp } from "react-icons/bs";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer-logo'>
        ADEYEMI
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          {" "}
          <a href='#about'>About</a>
        </li>
        <li>
          {" "}
          <a href='#experience'>Experience</a>
        </li>
        <li>
          {" "}
          <a href='#testimonial'>Testimonial</a>
        </li>
        <li>
          {" "}
          <a href='#services'>Services</a>
        </li>
        <li>
          {" "}
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          {" "}
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='footer-social'>
        <a
          href='https://facebook.com'
          // onClick={() => setActivrNav("#")}
          // className={activrNav === "#" ? "active" : ""}
        >
          <FaFacebook />
        </a>
        <a href='https://wa.me/+2348109774285'>
          <BsWhatsapp />
        </a>
        <a href='mailto:mathewadeyemi7654@gmail.com'>
          <MdOutlineEmail />
        </a>
      </div>
      <div className='footer-copyright'>
        <small>
          &lt;&lt;&lt; &copy; Mathew Adeyemi. All right reserved. &gt;&gt;&gt;
        </small>
      </div>
    </footer>
  );
};

export default Footer;
