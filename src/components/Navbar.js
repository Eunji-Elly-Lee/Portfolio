import { useState } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import './NavBar.css';

function NavBar() {
  let scroll_position = 0;
  const [mouseAction, setMouseAction] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const onMouseOverOut = () => {
    if (scrolling) {
      return;
    }
    setMouseAction(current => !current);
  }

  const checkPosition = (scroll_pos) => {
    if (scroll_pos >= 0.5) {
      setScrolling(true);
    } else {
      setScrolling(false);
      setMouseAction(false);
    }
  }

  window.addEventListener('scroll', function(e) {
    scroll_position = window.scrollY;
    window.requestAnimationFrame(function() {
      checkPosition(scroll_position);
    });
  });

  return (
    <Navbar
      expand="md" sticky="top"
      onMouseOver={onMouseOverOut} onMouseOut={onMouseOverOut}
      className={scrolling ? "bg-dark scrolling" : (mouseAction ? "bg-dark mouse-hover" : "default")}
    >
      <Container>
        <Navbar.Brand href="#">
          <span>Eunji Elly Lee</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" active="true">
              <span>About</span>
            </Nav.Link>
            <Nav.Link href="#projects" active="true">
              <span>Projects</span>
            </Nav.Link>
            <Nav.Link href="#skills" active="true">
              <span>Skills</span>
            </Nav.Link>
            <Nav.Link href="#contact" active="true">
              <span>Contact</span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/eunji-elly-lee/" target="_blank" active="true">
              <span><BsLinkedin /></span>
            </Nav.Link>
            <Nav.Link href="https://github.com/Eunji-Elly-Lee" target="_blank" active="true">
             <span><BsGithub /></span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
