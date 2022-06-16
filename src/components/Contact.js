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
    zoom: 15
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
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
        <Row>
          <Col md="7" className="map-wrap">
            <div className="map">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBon6OoczyZU8dza4yDw-CsfyzJjXgVNKQ" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              />
            </div>
          </Col>
          <Col md="5" className="form-wrap pt-3 pb-4">
            <form netlify name="contact" onSubmit={handleSubmit}>
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
                <label htmlFor="message" className="label">
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
