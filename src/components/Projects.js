import { HiOutlineLightBulb } from "react-icons/hi";
import { translations } from "../translations";
import { projects } from "../data";
import './Projects.css';
import Project from "./Project"

function Projects({ useKorean }) {
  const getTrans = (key) => translations.projects[key][useKorean ? "ko" : "en"];

  return (
    <section id="projects">
      <div>
        <h2>
          <HiOutlineLightBulb className="mb-2 me-2" />
          My Projects
        </h2>
        <p className="section-description mx-auto mb-4 mb-md-5">
          {getTrans("description")}
        </p>
      </div>
      {projects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          stack={project.stack}
          image={project.image}
          description={getTrans(project.id)}
          github={project.github}
          live={project.live || null}
        />
      ))}
    </section>
  );
}

export default Projects;
