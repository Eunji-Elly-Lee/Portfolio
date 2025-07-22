import { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MdOutlineContactMail } from "react-icons/md";
import GoogleMapReact from 'google-map-react';
import './Contact.css';
import Marker from "./Marker";

function Contact() {
  const defaultProps = {
    center: {
      lat: 51.119,
      lng: -114.195,
    },
    location: {
      lat: 51.12031864514217,
      lng: -114.19514482867221,
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
      .then(() =>
        alert("Message sent!"),
        setName(""),
        setEmail(""),
        setMessage(""),
      )
      .catch((error) => alert(error));
  }

  return (
    <section id="contact">
      <div>
        <h2>
          <MdOutlineContactMail className="mb-2 me-2" />
          Contact Me
        </h2>
      </div>
      <Container>
        <Row className="d-flex justify-content-center mt-3">
          <Col md="7" lg="6" className="map-wrap ms-lg-4">
            <div className="map">
              <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_URL_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <Marker
                  lat={defaultProps.location.lat}
                  lng={defaultProps.location.lng}
                />
              </GoogleMapReact>
            </div>
            <Container className="info pt-3 rounded-2">
              <Row>
                <Col xs="6" className="align-self-center">
                  <h4>ADDRESS</h4>
                  <h5>ADDRESS</h5>
                  <p>
                    1315 Ranchlands Rd NW
                    <br />
                    Calgary, AB T3G 1N2
                  </p>
                </Col>
                <Col>
                  <h4>EMAIL</h4>
                  <h5>EMAIL</h5>
                  <a href="mailto:ellylee2020@gmail.com">
                    ellylee2020@gmail.com
                  </a>
                  <h4>PHONE</h4>
                  <h5>PHONE</h5>
                  <p>825-365-9828</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md="5" className="py-3 ps-lg-4">
            <form name="contact" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <h3>Hello!</h3>
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
                  value={name}
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
                  value={email}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button type="submit" className="submit-button mt-2 py-3">
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
