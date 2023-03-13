import { GrTechnology } from "react-icons/gr";
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaNode, FaReact, FaJs, FaJava, FaPython, FaAws,
  FaGithub, FaStripe
} from "react-icons/fa";
import {
  SiRedux, SiOracle, SiMysql, SiMongodb, SiNetlify,
  SiFirebase, SiAdobexd, SiCanva, SiJekyll, SiDisqus
} from "react-icons/si";
import './Skills.css';

function Skills() {
  return (
    <section id="skills">
      <div>
        <h1>
          <GrTechnology className="mb-2 mb-sm-3 me-2" />
          My Skills
        </h1>
        <p className="section-description">
          I truly enjoy writing code and developing websites and web applications
          <br />
          using various languages, tools, and databases.
          <br />
          Also, making applications awesome using Bootstrap and CSS is so much fun for me.
          <br />
          I'm also very excited to continue learning new skills.
        </p>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <FaNode className="icon mb-2 mb-sm-2 me-2" />
              Node.js
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <FaReact className="icon mb-2 mb-sm-2 me-2" />
              React
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <SiRedux className="icon mb-2 mb-sm-2 me-2" />
              Redux
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <FaJs className="icon mb-2 mb-sm-2 me-2" />
              JavaScript
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <FaJava className="icon mb-2 mb-sm-2 me-2" />
              Java
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <FaPython className="icon mb-2 mb-sm-2 me-2" />
              Python
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <SiOracle className="icon mb-2 mb-sm-2 me-2" />
              Oracle
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <SiMysql className="icon mb-2 mb-sm-2 me-2" />
              MySQL
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <SiMongodb className="icon mb-2 mb-sm-2 me-2" />
              MongoDB
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <FaAws className="icon mb-2 mb-sm-2 me-2" />
              AWS
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <SiNetlify className="icon mb-2 mb-sm-2 me-2" />
              Netlify
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <SiFirebase className="icon mb-2 mb-sm-2 me-2" />
              Firebase
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <FaGithub className="icon mb-2 mb-sm-2 me-2" />
              GitHub
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <SiAdobexd className="icon mb-2 mb-sm-2 me-2" />
              AdobeXd
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <SiCanva className="icon mb-2 mb-sm-2 me-2" />
              Canva
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <SiJekyll className="icon mb-2 mb-sm-2 me-2" />
              Jekyll
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <SiDisqus className="icon mb-2 mb-sm-2 me-2" />
              Disqus
            </h2>
          </Col>
          <Col xs="5" lg="3" className="bg-dark m-2 pt-3">
            <h2>
              <FaStripe className="icon mb-2 mb-sm-2 me-2" />
              Stripe
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
