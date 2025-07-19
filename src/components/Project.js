import { Col, Button } from 'react-bootstrap';
import PropTypes from "prop-types";

function Project({image, subtitle, title, description, code}) {
  return (
    <Col lg="5" className="position-relative m-2 p-0">
      <div className="description">
        <h5>{subtitle}</h5>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <Button className="px-5" variant="outline-success" href={code} target="_blank">
            Code
          </Button>
        </div>
      </div>
      <div className="image-wrap">
        <img alt={title} src={image} />
      </div>
    </Col>
  );
}

Project.propTypes = {
  image: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
}

export default Project;
