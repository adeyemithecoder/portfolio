import one from "../../img/Mathew-Adeyemi-Resume.pdf";

const CTa = () => {
  return (
    <div className="cta">
      <a href={one} className="btn" download>
        Download Cv
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTa;
