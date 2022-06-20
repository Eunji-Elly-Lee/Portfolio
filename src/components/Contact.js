import { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MdOutlineContactMail } from "react-icons/md";
import GoogleMapReact from 'google-map-react';
import './Contact.css';

function Contact() {
  const defaultProps = {
    center: {
      lat: 51.1203028,
      lng: -114.1973809
    },
    zoom: 14
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" && email === "" && message === "") {
      return;
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact">
      <div>
        <h1>
          <MdOutlineContactMail className="mb-2 mb-sm-3 me-2" />
          Contact Me
        </h1>
      </div>
      <Container>
        <Row className="d-flex justify-content-center mt-3">
          <Col md="7" lg="6" className="map-wrap ms-lg-4">
            <div className="map">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              />
            </div>
            <Container className="info">
              <Row>
                <Col>
                  <h4>ADDRESS</h4>
                  <p>
                    1315 Ranchlands
                    <br />
                    Rd NW
                    <br />
                    Calgary, AB
                  </p>
                </Col>
                <Col>
                  <h4>EMAIL</h4>
                  <a href="mailto:eunji.lee@edu.sait.ca">
                    eunji.lee@edu.sait.ca
                  </a>
                  <h4>PHONE</h4>
                  <p>825-365-9828</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md="5" className="py-3 ps-lg-4">
            <form name="contact" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <h2>Hello!</h2>
              <p>
                I am looking forward to this great opportunity
                to share my passion and skills with you.
              </p>
              <div>
                <label htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button type="submit" variant="success" className="mt-2">
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
