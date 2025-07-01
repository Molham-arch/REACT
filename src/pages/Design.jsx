import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaGlobe, FaMoneyBill, FaListAlt } from 'react-icons/fa';

const Minecraft = () => {
  return (
    <Container fluid className="py-5">
      {/* Header Section */}
      <Row className="text-center mb-4">
        <Col>
          <h1 className="fw-bold">
            Registreer <br />
            <span className="text-warning">jouw domein</span>
          </h1>
          <p>DNS-beheer, veel beschikbare TLD's en geweldige ondersteuning.</p>
          <Form>
            <Form.Control
              type="text"
              placeholder="Registreer een domeinnaam..."
              className="mx-auto w-50"
            />
          </Form>
        </Col>
      </Row>

      {/* Feature Cards Section */}
      <Row className="text-center justify-content-center mb-4">
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex align-items-center">
                <FaGlobe size={40} className="me-3 text-warning" />
                <div>
                  <Card.Title>DNS-beheer</Card.Title>
                  <Card.Text>
                    Elk domein wordt geleverd met DNS-beheer zonder extra
                    kosten.
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex align-items-center">
                <FaMoneyBill size={40} className="me-3 text-warning" />
                <div>
                  <Card.Title>Betrouwbare prijzen</Card.Title>
                  <Card.Text>
                    We houden onze prijzen voor elk TLD zo stabiel mogelijk.
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex align-items-center">
                <FaListAlt size={40} className="me-3 text-warning" />
                <div>
                  <Card.Title>21 beschikbare TLD's</Card.Title>
                  <Card.Text>
                    Kies uit onze uitgebreide lijst met beschikbare
                    topleveldomeinen.
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Minecraft;
