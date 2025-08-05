import { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MdOutlineContactMail } from "react-icons/md";
import GoogleMapReact from 'google-map-react';
import './Contact.css';
import { translations } from "../translations";
import Marker from "./Marker";

function Contact({ useKorean }) {
  const getTrans = (key) => translations.contact[key][useKorean ? "ko" : "en"];

  const defaultProps = {
    center: {
      lat: 37.670,
      lng: 127.046,
    },
    location: {
      lat: 37.689862,
      lng: 127.046085,
    },
    zoom: 11
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
      .then(() => {
        alert("Message sent!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => alert(error));
  }

  return (
    <section id="contact">
      <div>
        <h2 className="text-center">
          <MdOutlineContactMail className="mb-1 mb-lg-2 me-2" />
          Contact Me
        </h2>
      </div>
      <Container className="mt-5 pt-lg-3">
        <Row>
          <Col lg="5" className="position-relative ps-lg-4">
            <div className="map w-100 mx-auto overflow-hidden">
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
            <div className="map-sub-container p-3 text-md-center text-lg-start">
              <p className="m-0">
                <span>LOCATION:</span> Seoul, Korea
              </p>
              <p className="m-0">
                <span>EMAIL: </span>
                <a href="mailto:ellylee2020@gmail.com">ellylee2020@gmail.com</a>
              </p>
            </div>
          </Col>
          <Col lg="7" className="mt-4 mt-lg-0 px-md-4">
            <h3>Hello!</h3>
            <p>{getTrans("description")}</p>
            <form data-netlify="true" name="contact" onSubmit={handleSubmit} className="mt-4 pe-lg-5">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-row my-2 d-flex align-items-center">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-row my-2 d-flex align-items-center">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-row my-2 d-flex align-items-center">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button type="submit" className="button primary mt-3 py-3">
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
