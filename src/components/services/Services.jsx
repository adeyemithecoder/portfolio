import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What i Offer</h5>
      <h2>Services</h2>
      <div className="container service-contauner">
        <article className="service">
          <div className="service-head">
            <h3>Web Application Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Building dynamic web apps using the MERN stack with **Next.js**
                for server-side rendering and API handling.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Custom web solutions optimized for performance and hosted on
                **Vercel**.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Secure backend development with **Node.js**, **Express.js**, and
                **PostgreSQL**.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Efficient database management using **Prisma** for seamless
                interaction.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Scalable deployment on **Vercel** with **PostgreSQL**
                integration.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>Full-Stack Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Comprehensive full-stack solutions with front-end development
                using **React.js** and back-end development with **Node.js** and
                **Express.js** for building efficient, dynamic applications.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Utilizing **Next.js** for server-side rendering and API routes,
                enhancing application performance and SEO.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Seamless integration of backend services using **Node.js**,
                **Express.js**, and database management with **Prisma** and
                **PostgreSQL**.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Optimizing applications for security, performance, and
                scalability across all layers.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service-head">
            <h3>Consultation and Maintenance</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Providing expert consultation on technology stack choices,
                including **React.js**, **Next.js**, **PostgreSQL**, **Prisma**,
                and **Vercel** for deployment, ensuring the best tools for your
                project.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Offering strategic advice on system architecture, performance
                optimization, and scalability for future growth.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Regular maintenance, updates, and proactive troubleshooting to
                keep your applications secure and running smoothly.
              </p>
            </li>

            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                24/7 support for critical issues, offering fast response times
                to minimize downtime.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
