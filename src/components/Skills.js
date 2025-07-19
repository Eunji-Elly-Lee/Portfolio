import { GrTechnology } from "react-icons/gr";
import { Container, Row } from "react-bootstrap";
import { skills } from "../data";
import "./Skills.css";
import Skill from "./Skill";

function Skills() {
  return (
    <section id="skills">
      <div>
        <h2>
          <GrTechnology className="mb-2 mb-sm-3 me-2" />
          My Skills
        </h2>
        <p className="section-description">
          I truly enjoy writing code and developing websites and web
          applications
          <br />
          using various languages, tools, and databases.
          <br />
          I'm also very excited to continue learning new skills.
        </p>
      </div>
      <Container>
        <Row className="gap-2 gap-lg-3 justify-content-center">
          {skills.map((skill, index) => (
            <Skill key={index} icon={skill.icon} title={skill.title} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
