import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUmbrella, FaCog } from 'react-icons/fa';

const Home = () => {
  return (
    <Container fluid className="py-5">
      {/* Header */}
      <Row className="text-center mb-4">
        <Col>
          <h1 className="fw-bold">
            De ultieme hosting <br />
            <span className="text-warning">voor jouw project</span>
          </h1>
          <p>
            Lanceer vandaag nog je Minecraft server of VPS. Geniet van geweldige
            klantenservice, fantastische prestaties en het beste controlepaneel.
          </p>
          <Button variant="dark" className="me-2">
            Bekijk server hosting
          </Button>
          <Button variant="outline-secondary">Lanceer jouw VPS</Button>
        </Col>
      </Row>

      {/* Cards section */}
      <Row className="g-4 mb-5">
        {/* Minecraft Server Hosting */}
        <Col md={4}>
          <Card className="h-100 p-3">
            <Card.Body>
              <Card.Title>Minecraft server hosting</Card.Title>
              <Card.Text>
                Je eigen Minecraft server. Alle mods, versies en plugins. Java &
                Bedrock.
              </Card.Text>
              <Button variant="outline-dark" size="sm" className="mb-3">
                Bestel jouw server →
              </Button>
              <img
                src="/media/minecraft.webp"
                alt="Minecraft characters"
                className="img-fluid"
              />
            </Card.Body>
          </Card>
        </Col>

        {/* Virtual Private Servers */}
        <Col md={8}>
          <Card className="h-50 p-3">
            <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="mb-3 mb-md-0">
                <Card.Title>Virtual private servers</Card.Title>
                <Card.Text>
                  Schaalbare en krachtige VPS hosting voor elk project. Kies
                  tussen AMD Ryzen 9 of Intel Xeon CPU’s.
                </Card.Text>
                <Button variant="outline-dark" size="sm">
                  Bestel jouw VPS →
                </Button>
              </div>
              <img
                src="/media/rocket.svg"
                alt="Rocket"
                className="img-fluid"
                style={{ maxHeight: '80px' }}
              />
            </Card.Body>
          </Card>
          <Row className="g-4 mt-3">
            {/* Domeinnamen */}
            <Col md={6}>
              <Card className="h-100 p-3">
                <Card.Body>
                  <Card.Title>Domeinnamen</Card.Title>
                  <Card.Text>
                    Eerlijke en stabiele prijzen. Kies uit onze uitgebreide
                    lijst met TLD’s.
                  </Card.Text>
                  <Button variant="outline-dark" size="sm">
                    Registreer jouw domein →
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Webhosting */}
            <Col md={6}>
              <Card className="h-100 p-3">
                <Card.Body>
                  <Card.Title>Webhosting</Card.Title>
                  <Card.Text>
                    Onbeperkte webhosting. Kies je opslaglimiet en niets anders.
                  </Card.Text>
                  <Button variant="outline-dark" size="sm">
                    Je website hosten →
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Control Panel Section */}
      <Row className="align-items-center my-5">
        <Col md={6}>
          <FaCog size={50} className="text-muted mb-3" /> Edit
          <h2 className="fw-bold">In controle met ons fantastische paneel</h2>
          <p>
            Beheer je Minecraft server hosting, VPS en andere diensten met ons
            gebruiksvriendelijke controlepaneel. Ons paneel is in-house
            ontwikkeld om de beste ervaring te garanderen.
          </p>
          <ul>
            <li>
              Rijke aan features. We voegen voortdurend nieuwe features toe.
            </li>
            <li>Geen enkele vertraging bij het beheren van je diensten.</li>
          </ul>
          <Button variant="dark">Bekijk de demo</Button>
        </Col>
        <Col md={6}>
          <img
            src="/media/screen1.png"
            alt="Control panel"
            className="img-fluid"
          />
        </Col>
      </Row>

      {/* Support Section */}
      <Row className="align-items-center my-5">
        <Col md={6}>
          <img src="/media/screen2.png" alt="Support" className="img-fluid" />
        </Col>
        <Col md={6}>
          <FaUmbrella size={50} className="text-muted mb-3" /> Support
          <h2 className="fw-bold">Krijg geweldige hulp van experts</h2>
          <p>
            Ons team van experts staat klaar om je vragen te beantwoorden. We
            hebben ook een kennisbank vol met tutorials voor Minecraft server
            hosting, VPS, en nog veel meer.
          </p>
          <Button variant="dark">Bekijk de kennisbank</Button>
        </Col>
      </Row>
      <Row className="align-items-center my-5">
        <Col md={6}>
          <h2 className="fw-bold">Krijg geweldige hulp van experts</h2>
          <p>
            Ons team van experts staat klaar om je vragen te beantwoorden. We
            hebben ook een kennisbank vol met tutorials voor Minecraft server
            hosting, VPS, en nog veel meer.
          </p>
          <Button variant="dark">Bekijk de kennisbank</Button>
        </Col>
        <Col md={6}>
          <img
            src="/media/minecraft2.png"
            alt="Support"
            className="img-fluid"
          />
        </Col>
      </Row>

      {/* Bottom Cards Section */}
      <Row className="mb-5 mt-5 text-center justify-content-center">
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Virtual Private Server</Card.Title>
              <Card.Text>
                Krachtige en schaalbare VPS hosting voor elk project.
              </Card.Text>
              <Button variant="dark" size="sm" className="rounded-pill">
                Lanceer jouw VPS
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Virtual Private Server</Card.Title>
              <Card.Text>
                Krachtige en schaalbare VPS hosting voor elk project.
              </Card.Text>
              <Button variant="dark" size="sm" className="rounded-pill">
                Lanceer jouw VPS
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Webhosting</Card.Title>
              <Card.Text>
                Betrouwbare webhosting zonder onnodige beperkingen.
              </Card.Text>
              <Button variant="dark" size="sm" className="rounded-pill">
                Je website hosten
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
