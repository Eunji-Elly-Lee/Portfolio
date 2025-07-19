import { Col } from "react-bootstrap";
import PropTypes from "prop-types";

function Skill({ icon: Icon, title }) {
  return (
    <Col xs="5" lg="3" className="bg-dark pt-2 pt-sm-3 pb-sm-1 rounded-3">
      <h3>
        <Icon className="icon mb-2 me-2" />
        {title}
      </h3>
    </Col>
  );
}

Skill.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

export default Skill;
