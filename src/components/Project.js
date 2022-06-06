import { Col, Button } from 'react-bootstrap';
import PropTypes from "prop-types";

function Project({image, subtitle, title, description, link, code}) {
  return (
    <Col md="6">
      <img alt={title} src={image} />
      <div>
        <h3>{subtitle}</h3>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <Button href={link} target="_blank">View</Button>
          <Button href={code} target="_blank">Code</Button>
        </div>
      </div>
    </Col>
  );
}

Project.propTypes = {
  image: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
}

export default Project;
