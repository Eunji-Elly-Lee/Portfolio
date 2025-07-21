import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { translations } from "../translations";
import "./About.css";

function About({ useKorean }) {
  const text = "Keep Going!";
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const getTrans = (key) => translations.about[key][useKorean ? "ko" : "en"];

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
            <h1>{getTrans("title")}</h1>
            <p className={`mt-3 mb-4 ${useKorean ? "mb-md-5" : ""}`}>
              {getTrans("paragraph1")}
              <br />
              {getTrans("paragraph2")}
            </p>
            <div>
              <Button
                className="button primary mt-1 me-2 py-3"
                href="#contact"
                type="button"
              >
                Work With Me
              </Button>
              <Button
                className="button secondary mt-1 py-3"
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
