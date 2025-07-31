import PropTypes from "prop-types";

function TechStack({ skills }) {
  return (
    <div className="skill-container mt-3 mt-lg-0 d-flex flex-wrap
      justify-content-center justify-content-lg-start">
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <span key={index} className="skill bg-dark">
            <Icon className="icon mb-1 me-2" />
            {skill.title}
          </span>
        );
      })}
    </div>
  );
}

TechStack.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TechStack;
