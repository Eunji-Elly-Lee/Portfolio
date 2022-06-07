import { Col, Button } from 'react-bootstrap';
import PropTypes from "prop-types";

function Project({image, subtitle, title, description, link, code}) {
  return (
    <Col lg="5" className="project m-2 p-0">
      <div className="description">
        <h5>{subtitle}</h5>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <Button className="me-1 mx-sm-1" variant="success" href={link} target="_blank">
            View
          </Button>
          <Button className="mx-sm-1" variant="outline-success" href={code} target="_blank">
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
  link: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
}

export default Project;
