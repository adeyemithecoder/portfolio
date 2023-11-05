import CTa from "./CTa";
import "./Header.css";
import one from "../../img/m1.jpg";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hey there! I am</h5>
        <h1>Mathew Adeyemi</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTa />
        <HeaderSocial />
        <div className='me'>
          <img className='meImg' src={one} alt='' />
        </div>
        <a href='#contact' className='scroll_down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
