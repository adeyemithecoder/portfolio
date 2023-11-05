import "./About.css";
import me from "../../img/m2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-img'>
            <img className='img' src={me} alt='' />
          </div>
        </div>
        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card'>
              <FaAward className='about-idon' />
              <h3>Experience</h3>
              <small>1+ year working</small>
            </article>
            <article className='about-card'>
              <FiUsers className='about-idon' />
              <h3>Clients</h3>
              <small>No Client Yet</small>
            </article>
            <article className='about-card'>
              <VscFolderLibrary className='about-idon' />
              <h3>Projects</h3>
              <small>10 completed projects</small>
            </article>
          </div>
          <p>
            Hey there! I am mathew adeyemi by the name. I started the journey of
            programming July, 2022. With the mission of becoming a person that
            capable of building app that can be used to make life easier and
            simple for the people, after I graduated as a computer science
            student at kwara state polytechnic ilorin.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
