import "./About.css";
import me from "../../img/m2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img className="img" src={me} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-idon" />
              <h3>Experience</h3>
              <small>2+ year working</small>
            </article>
            <article className="about-card">
              <FiUsers className="about-idon" />
              <h3>Client</h3>
              <small>As Code Elevate</small>
            </article>
            <article className="about-card">
              <FiUsers className="about-idon" />
              <h3>Client</h3>
              <small>Torbita Limited.</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-idon" />
              <h3>Projects</h3>
              <small>10 completed projects</small>
            </article>
          </div>
          <p>
            {" "}
            Hello! I'm Mathew Adeyemi. I began my programming journey in July
            2022 with the goal of building applications that simplify and
            enhance everyday life. After earning my Higher National Diploma in
            Computer Science from Kwara State Polytechnic, Ilorin, I dedicated
            myself to mastering development skills that enable me to create
            impactful solutions.{" "}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
