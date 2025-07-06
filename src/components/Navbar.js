import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineLanguage } from "react-icons/md";
import "./NavBar.css";

function NavBar({ useKorean, setUseKorean }) {
  let scroll_position = 0;
  const [mouseAction, setMouseAction] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const onMouseOverOut = () => {
    if (scrolling) {
      return;
    }
    setMouseAction((current) => !current);
  };

  const setYOffset = () => {
    if (window.innerWidth < 768) {
      return -220;
    } else {
      return 50;
    }
  };

  const onScrollToSection = (id) => {
    if (id === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      const yOffset = setYOffset();
      const yPosition =
        section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  const checkPosition = (scroll_pos) => {
    if (scroll_pos >= 0.5) {
      setScrolling(true);
    } else {
      setScrolling(false);
      setMouseAction(false);
    }
  };

  window.addEventListener("scroll", function (e) {
    scroll_position = window.scrollY;
    window.requestAnimationFrame(function () {
      checkPosition(scroll_position);
    });
  });

  return (
    <Navbar
      expand="md"
      sticky="top"
      expanded={expanded}
      onMouseOver={onMouseOverOut}
      onMouseOut={onMouseOverOut}
      className={
        scrolling
          ? "bg-dark scrolling"
          : mouseAction
            ? "bg-dark mouse-hover"
            : "default"
      }
    >
      <Container>
        <Navbar.Brand href="#">
          <span>{useKorean ? "이은지" : "Elly Lee"}</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="fs-6"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onClick={() => setExpanded(false)}>
            <Nav.Link active="true" onClick={() => onScrollToSection("about")}>
              <span>About</span>
            </Nav.Link>
            <Nav.Link
              active="true"
              onClick={() => onScrollToSection("projects")}
            >
              <span>Projects</span>
            </Nav.Link>
            <Nav.Link active="true" onClick={() => onScrollToSection("skills")}>
              <span>Skills</span>
            </Nav.Link>
            <Nav.Link
              active="true"
              onClick={() => onScrollToSection("contact")}
            >
              <span>Contact</span>
            </Nav.Link>
          </Nav>
          <Nav className="flex-row gap-3 gap-md-0">
            <Nav.Link
              href="https://www.linkedin.com/in/eunji-elly-lee/"
              target="_blank"
              active="true"
            >
              <span>
                <BsLinkedin />
              </span>
            </Nav.Link>
            <Nav.Link
              href="https://github.com/Eunji-Elly-Lee"
              target="_blank"
              active="true"
            >
              <span>
                <BsGithub />
              </span>
            </Nav.Link>
            <Nav.Link onClick={() => setUseKorean(!useKorean)}>
              <span><MdOutlineLanguage />{useKorean ? "EN" : "KO"}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
