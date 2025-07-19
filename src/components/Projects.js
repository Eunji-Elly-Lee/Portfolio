import { HiOutlineLightBulb } from "react-icons/hi";
import { Container, Row } from 'react-bootstrap';
import { projects } from "../data";
import './Projects.css';
import Project from "./Project"

function Projects() {
  return (
    <section id="projects">
      <div>
        <h2>
          <HiOutlineLightBulb className="mb-2 mb-sm-3 me-2" />
          My Projects
        </h2>
        <p className="section-description">
          I am dedicated to self-development and professional growth and
          <br />
          have continuously worked on projects using various languages.
        </p>
      </div>
      <Container>
        <Row className="justify-content-center">
          {projects.map((project) => (
            <Project
              key={project.title}
              image={project.image}
              subtitle={project.subtitle}
              title={project.title}
              description={project.description}
              code={project.code}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
