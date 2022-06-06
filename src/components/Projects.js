import { Container, Row } from 'react-bootstrap';
import { MdWeb } from "react-icons/md";
import { projects } from "../data";
import './Projects.css';
import Project from "./Project"

function Projects() {
  return (
    <section id="projects">
      <div>
        <MdWeb />
        <h1>
          My projects
        </h1>
        <p>
          I am dedicated to self-development and professional growth and
          have continuously worked on projects in GitHub using various languages.
        </p>
      </div>
      <Container> 
        <Row>      
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
