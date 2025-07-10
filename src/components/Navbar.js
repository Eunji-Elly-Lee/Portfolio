import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineLanguage } from "react-icons/md";
import "./NavBar.css";

function NavBar({ useKorean, setUseKorean, expanded, setExpanded }) {
  const [mouseAction, setMouseAction] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const onMouseOverOut = () => {
    if (window.innerWidth < 768) return;
    if (scrolling) return;
    setMouseAction((current) => !current);
  };

  const setYOffset = () => {
    if (window.innerWidth < 768) {
      return -330;
    } else {
      return 10;
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

  useEffect(() => {
    const handleScroll = () => {
      const scroll_position = window.scrollY;
      window.requestAnimationFrame(() => checkPosition(scroll_position));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="md"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
      onMouseOver={onMouseOverOut}
      onMouseOut={onMouseOverOut}
      className={
        `position-fixed w-100 nav-default
        ${(scrolling || mouseAction || expanded) ? "bg-dark nav-active"
          : ""
        }`
      }
    >
      <Container>
        <Navbar.Brand href="#" onClick={() => setExpanded(false)}>
          <span className="fs-3 fw-bold">{useKorean ? "이은지" : "Elly Lee"}</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="fs-6"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onClick={() => setExpanded(false)}>
            <Nav.Link as="button" type="button" onClick={() => onScrollToSection("about")}>
              <span>About</span>
            </Nav.Link>
            <Nav.Link as="button" type="button" onClick={() => onScrollToSection("projects")}>
              <span>Projects</span>
            </Nav.Link>
            <Nav.Link as="button" type="button" onClick={() => onScrollToSection("skills")}>
              <span>Skills</span>
            </Nav.Link>
            <Nav.Link as="button" type="button" onClick={() => onScrollToSection("contact")}>
              <span>Contact</span>
            </Nav.Link>
          </Nav>
          <Nav className="d-flex flex-row align-items-center gap-3 gap-md-0">
            <Nav.Link
              href="https://www.linkedin.com/in/eunji-elly-lee/"
              target="_blank"
            >
              <span><BsLinkedin /></span>
            </Nav.Link>
            <Nav.Link
              href="https://github.com/Eunji-Elly-Lee"
              target="_blank"
            >
              <span><BsGithub /></span>
            </Nav.Link>
            <Nav.Link as="button" type="button" onClick={() => setUseKorean(!useKorean)}>
              <span className="d-flex align-items-center lang-toggle">
                <MdOutlineLanguage />{useKorean ? "EN" : "KO"}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
