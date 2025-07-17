import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./About.css";

function About() {
  const text = "Keep Going!";
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

useEffect(() => {
  let index = 0;

  const interval = setInterval(() => {
    const nextChar = text[index];

    if (nextChar) {
      setDisplayedText((prev) => prev + nextChar);
      index++;
    } else {
      clearInterval(interval);
      setTimeout(() => setCursorVisible(false), 1000);
    }
  }, 200);

  return () => clearInterval(interval);
}, []);

  return (
    <section id="about">
      <Container>
        <Row className="flex-row-reverse gap-4 gap-md-5 gap-lg-0">
          <Col lg="4" className="snap text-center align-self-center">
            <img
              alt="snapshot"
              src={`${process.env.PUBLIC_URL}/assets/snapshot.jpg`}
              className="w-100 h-100"
            />
          </Col>
          <Col lg="8" className="profile">
            <p className="fs-1 fw-bolder">
              {displayedText}
              {cursorVisible && <span className="typing-cursor ms-1">|</span>}
            </p>
            <h1>I'm Elly, a rapidly growing developer.</h1>
            <p>
              I thrive on the excitement of learning new technologies and
              embracing challenges head-on. One of my greatest joys is crafting
              clean, elegant code that not only works efficiently but also looks
              wonderful. When faced with a problem, I dive deep into analysis
              and enjoy sharing my insights and solutions with others.
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
                className="button primary my-1 me-2 py-3"
                href="#contact"
                type="button"
              >
                Work With Me
              </Button>
              <Button
                className="button secondary py-3"
                href="https://elly-lee.notion.site/Elly-s-Notion-19c40f00887d4b5baad95b41fa154a9a"
                target="_blank"
                type="button"
              >
                See My Blog
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
