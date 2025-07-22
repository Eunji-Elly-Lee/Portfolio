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
          <HiOutlineLightBulb className="mb-2 me-2" />
          My Projects
        </h2>
        <p className="section-description mx-auto mb-4 mb-md-5">
          I am dedicated to self-development and professional growth and
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
