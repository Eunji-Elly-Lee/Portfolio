import { Container, Row, Col } from "react-bootstrap";
import { GrTechnology } from "react-icons/gr";
import { translations } from "../translations";
import { skills } from "../data";
import "./Skills.css";
import TechStack from "./TechStack";

function Skills({ useKorean }) {
  const getTrans = (key) => translations.projects[key][useKorean ? "ko" : "en"];

  return (
    <section id="skills">
      <div>
        <h2>
          <GrTechnology className="mb-2 me-2" />
          My Skills
        </h2>
        <p className="section-description mx-auto mb-4 mb-md-5">
          {getTrans("description")}
        </p>
      </div>
      <Container>
        <Row className="my-2 p-4">
          <Col lg="4">
            <h3 className="text-lg-start">Front-End Development</h3>
          </Col>
          <Col lg="8">
            <TechStack skills={skills.frontend} />
          </Col>
        </Row>
        <Row className="p-4">
          <Col lg="4">
            <h3 className="text-lg-start">Back-End Development</h3>
          </Col>
          <Col lg="8">
            <TechStack skills={skills.backend} />
          </Col>
        </Row>
        <Row className="p-4">
          <Col lg="4">
            <h3 className="text-lg-start">Tools & Platforms</h3>
          </Col>
          <Col lg="8">
            <TechStack skills={skills.tools} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
