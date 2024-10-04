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
            <h3>Frontend Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Crafting dynamic and responsive user interfaces using
                **Vue.js**, **React.js**, and **Next.js**, tailored to deliver
                an optimal user experience across devices.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Leveraging **Next.js** for server-side rendering, static site
                generation, and enhanced SEO performance.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Creating scalable, component-based architectures with **Vue.js**
                and **React.js** to improve maintainability and performance.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Ensuring seamless integration with backend services and APIs,
                enabling rich, interactive web experiences.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Secure backend development using **Node.js**, **Express.js**,
                and databases like **PostgreSQL** and **MongoDB**.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Building RESTful APIs and GraphQL services for seamless
                integration with frontend applications.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Implementing efficient database management with **Prisma** for
                SQL databases and **Mongoose** for NoSQL databases.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Authentication and authorization using **JWT** and **OAuth** for
                secure user management.
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
                Comprehensive full-stack solutions with **Vue.js** for frontend
                and **Node.js** with **Express.js** for backend development.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Server-side rendering using **Nuxt.js** to enhance performance,
                SEO, and seamless frontend-backend integration.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Optimized full-stack applications, ensuring security,
                performance, and scalability across all layers.
              </p>
            </li>
            <li>
              <BiCheck size={30} className="service-list-icon" />{" "}
              <p>
                Integration of **PostgreSQL** and **MongoDB** for efficient data
                storage and retrieval.
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
