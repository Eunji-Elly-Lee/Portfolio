import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css';
import snapshot from '../src_assets/snapshot.jpg';

function About() {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col md className="profile">
            <h1>
              Hi, I'm Eunji Elly Lee.
              <br />
              I love to write code!
            </h1>
            <p>
              I'm a new graduate who successfully completed the Software Development major
              in the Information Technology program at SAIT.
              I truly enjoy writing code and developing websites and web applications
              using Java, JavaScript, Python, React, and SQL.
              Also, making applications awesome using Bootstrap and CSS is so much fun for me.
            </p>
            <div>
              <Button className="button" variant="success" href="#contact">Work With Me</Button>
              <Button className="button" variant="outline-success" href="#projects">See My Projects</Button>
            </div>
          </Col>
          <Col md className="snap">
            <img alt="snapshot" src={snapshot} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
