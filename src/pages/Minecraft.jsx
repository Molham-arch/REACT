import React from 'react';
import { Container, Row, Col, Card, Button, CardImg } from 'react-bootstrap';
import { FaUmbrella } from 'react-icons/fa';

const hostingPackages = [
  { name: 'Wood', ram: '1 GB', price: '€ 3,50' },
  { name: 'Stone', ram: '2 GB', price: '€ 6,50' },
  { name: 'Coal', ram: '3 GB', price: '€ 9,50' },
  { name: 'Iron', ram: '4 GB', price: '€ 12,50' },
  { name: 'Lapis', ram: '5 GB', price: '€ 15,00' },
  { name: 'Gold', ram: '6 GB', price: '€ 18,00' },
  { name: 'Diamond', ram: '8 GB', price: '€ 24,00' },
  { name: 'Emerald', ram: '10 GB', price: '€ 30,00' },
  { name: 'Sand', ram: '12 GB', price: '€ 35,00' },
  { name: 'Clay', ram: '14 GB', price: '€ 40,00' },
  { name: 'Granite', ram: '16 GB', price: '€ 45,00' },
  { name: 'Diorite', ram: '20 GB', price: '€ 55,00' },
];

const Minecraft = () => {
  return (
    <Container fluid className="py-5">
      {/* Header */}
      <Row className="text-center mb-4">
        <Col>
          <h1 className="fw-bold">
            Minecraft
            <br />
            <span className="text-warning">server hosting</span>
          </h1>
          <p className="text-muted">
            Krachtige serverhosting met fantastische ondersteuning. Sluit je aan
            bij 50.000+ spelers die GameGrid vertrouwen.
          </p>
          <Button variant="dark" className="me-2">
            Bekijk pakketten
          </Button>
          <Button variant="outline-secondary">Bekijk alle features</Button>
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
                src="/media/minecraft6.png"
                alt="Minecraft characters"
                className="img-fluid mt-3"
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
                src="/media/minecraft4.png"
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

                  <img
                    src="/media/minecraft5.webp"
                    alt="box"
                    className="img-fluid"
                    style={{
                      maxHeight: '80px',
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                    }}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Pakketten */}

      <Row className="justify-content-center">
        <h2 className="fw-bolder text-center mt-5">
          Kies je Minecraft server hosting pakket
        </h2>
        <p className="text-center">
          We hebben een pakket voor elk type Minecraft server. Kies het
          RAM-niveau dat bij je past.
        </p>
        {hostingPackages.map((pack, index) => (
          <Col xs={6} sm={4} md={3} lg={2} key={index} className="mb-4">
            <Card className="text-center h-100 shadow-sm">
              <Card.Body>
                <Card.Title className=" fw-semibold">{pack.name}</Card.Title>
                <Card.Text className=" fw-semibold"> {pack.ram} RAM</Card.Text>
                <h3 className=" fw-bold">{pack.price}</h3>
                <small className="text-muted">per maand</small>
                <div className="mt-3">
                  <Button variant="dark" size="sm">
                    Bestel nu
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Footer */}
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
            src="/media/minecraft3.png"
            alt="Support"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Minecraft;
