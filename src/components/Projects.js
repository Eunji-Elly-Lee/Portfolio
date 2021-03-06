import { HiOutlineLightBulb } from "react-icons/hi";
import { Container, Row } from 'react-bootstrap';
import { projects } from "../data";
import './Projects.css';
import Project from "./Project"

function Projects() {
  return (
    <section id="projects">
      <div>
        <h1>
          <HiOutlineLightBulb className="mb-2 mb-sm-3 me-2" />
          My Projects
        </h1>
        <p className="section-description">
          I am dedicated to self-development and professional growth and
          <br />
          have continuously worked on projects in GitHub using various languages.
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
              link={project.link}
              code={project.code}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
