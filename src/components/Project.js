import { Container, Row, Col, Button } from 'react-bootstrap';
import PropTypes from "prop-types";

function Project({ title, stack, image, description, github }) {
  return (
    <Container className="project-container my-5 my-lg-4 p-3 shadow-sm">
      <h3>{title}</h3>
      <Row>
        <Col lg="4" xxl="5">
          <div className="screenshot mt-2">
            <img
              alt={title}
              src={image}
              className="w-100 h-100"
            />
          </div>
        </Col>
        <Col lg="8" xxl="7">
          <div className="description-card h-100 mt-3 mt-lg-2 text-start overflow-scroll">
            <p className="description">{description}</p>
            <p className="fs-6">{stack}</p>
            <Button className="button secondary py-3" href={github} target="_blank">
              GitHub
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
}

export default Project;
