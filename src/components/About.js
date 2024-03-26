import { Container, Row, Col, Button } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="8" className="profile pt-2">
            <h1>
              Keep Going!
              <br />
              I'm Elly, a junior developer on the rise.
            </h1>
            <p>
              I thrive on the excitement of learning new technologies
              and embracing challenges head-on. One of my greatest joys is
              crafting clean, elegant code that not only works efficiently but
              also looks wonderful. When faced with a problem, I dive deep into
              analysis and enjoy sharing my insights and solutions with others.
              <br />
              I'm always on the lookout for opportunities to share my passion
              and collaborate with like-minded individuals. Whether it's
              discussing the latest tech trends or tackling complex coding
              tasks, I'm eager to engage and contribute to the vibrant developer
              community.
              <br />
              Let's build something great together!
            </p>
            <div>
              <Button
                className="button my-1 me-1"
                variant="success"
                href="#contact"
              >
                Work With Me
              </Button>
              <Button
                className="button"
                variant="outline-success"
                href="https://elly-lee.notion.site/Elly-s-Notion-19c40f00887d4b5baad95b41fa154a9a"
                target="_blank"
              >
                See My Blog
              </Button>
            </div>
          </Col>
          <Col lg="4" className="snap text-center align-self-center">
            <img
              alt="snapshot"
              src={`${process.env.PUBLIC_URL}/assets/snapshot.jpg`}
              className="rounded-2"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
