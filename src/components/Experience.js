import PropTypes from "prop-types";

function Experience({ company, role, location, period, stack, description }) {
  return (
    <div className="experience-container mx-auto">
      <h3>{company}</h3>
      <p className="fs-4 fw-bolder">{role}</p>
      <div className="experience-sub-container d-flex flex-wrap justify-content-center">
        <p>{location}</p>
        <p>{period}</p>
      </div>
      <p className="fs-6">{stack}</p>
      <ul className="ps-lg-5 text-start">
        {description.map((point, index) => (
          <li key={index} className="my-2">{point}</li>
        ))}
      </ul>
    </div>
  );
}

Experience.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired
}

export default Experience;
