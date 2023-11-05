import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What i Offer</h5>
      <h2>Services</h2>
      <div className='container service-contauner'>
        <article className='service'>
          <div className='service-head'>
            <h3>Web App Development</h3>
          </div>
          <ul className='service-list'>
            <li>
              <BiCheck size={30} className='service-list-icon' />{" "}
              <p>
                I specialize in developing dynamic and interactive web
                applications using the MERN stack
              </p>
            </li>
            <li>
              <BiCheck size={30} className='service-list-icon' />{" "}
              <p>
                Custom web application development tailored to your business
                needs.
              </p>
            </li>
            <li>
              <BiCheck size={30} className='service-list-icon' />{" "}
              <p>
                Responsive and user-friendly front-end development with React.
              </p>
            </li>
            <li>
              <BiCheck size={30} className='service-list-icon' />{" "}
              <p>Efficient back-end services with Node.js and Express.js</p>
            </li>
            <li>
              <BiCheck size={30} className='service-list-icon' />{" "}
              <p>Seamless database management with MongoDB</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service-head'>
            <h3>Full-Stack Development</h3>
          </div>
          <ul className='service-list'>
            <li>
              <BiCheck size={30} className='service-list-icon' />{" "}
              <p>End-to-end solutions for your web development projects.</p>
            </li>
            <li>
              <BiCheck size={30} className='service-list-icon' />{" "}
              <p>
                From concept to deployment, I handle both front-end and back-end
                development.
              </p>
            </li>
            <li>
              <BiCheck size={30} className='service-list-icon' />{" "}
              <p>
                Ensuring a consistent and cohesive user experience across your
                application.
              </p>
            </li>
            <li>
              <BiCheck size={30} className='service-list-icon' />{" "}
              <p>
                Implementing security measures to protect your data and users.
              </p>
            </li>
            <li>
              <BiCheck size={30} className='service-list-icon' />{" "}
              <p>Optimizing application performance and scalability.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service-head'>
            <h3>Consultation and Maintenance</h3>
          </div>
          <ul className='service-list'>
            <li>
              <BiCheck size={30} className='service-list-icon' />{" "}
              <p>
                Expert guidance in choosing the right technology stack for your
                project.
              </p>
            </li>
            <li>
              <BiCheck size={30} className='service-list-icon' />{" "}
              <p>
                Code reviews and optimization to improve your existing
                applications.
              </p>
            </li>
            <li>
              <BiCheck size={30} className='service-list-icon' />{" "}
              <p>
                Regular updates, bug fixes, and maintenance services to keep
                your app up and running smoothly.
              </p>
            </li>
            <li>
              <BiCheck size={30} className='service-list-icon' />{" "}
              <p>
                Scalability planning and implementation for growing businesses.
              </p>
            </li>
            <li>
              <BiCheck size={30} className='service-list-icon' />{" "}
              <p>24/7 support and troubleshooting for critical issues.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
