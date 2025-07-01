import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const logo = '/media/logo.png';


const Footer = () => {
  return (
    <footer className="bg-light py-5 mt-5 border-top">
      <Container>
        <Row className="align-items-start">
          {/* Logo */}
          <Col md={3} className="text-center text-md-start mb-4 mb-md-0">
            <img src={logo} alt="Game Grid " width={250} />
          </Col>

          {/* Links */}
          <Col md={3} className="text-center text-md-start mb-4 mb-md-0">
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="/minecraft" className="text-dark text-decoration-none">Minecraft</a></li>
              <li><a href="/design" className="text-dark text-decoration-none">Domein</a></li>

            </ul>
          </Col>

          {/* Description */}
          <Col md={6}>
            <p className="text-muted small">
              Welcome to Game Grid, your go-to platform for reliable and high-performance game server hosting. Since 2013, we have been dedicated to providing gamers with the best hosting experience, ensuring low latency and exceptional support.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
