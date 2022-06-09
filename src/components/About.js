import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col md="8" className="profile pt-2 pt-xl-3">
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
              <Button className="button my-1 me-1" variant="success" href="#contact">
                Work With Me
              </Button>
              <Button className="button" variant="outline-success" href="#projects">
                See My Projects
              </Button>
            </div>
          </Col>
          <Col md="4" className="snap text-center align-self-center">
            <img alt="snapshot" src={`${process.env.PUBLIC_URL}/assets/snapshot.jpg`} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
