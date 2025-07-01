import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
const logo = '/media/logo.png';
import { FaHome, FaHammer, FaBuilding } from 'react-icons/fa';

const Navigation = () => (
  <Navbar expand="lg" bg="light" variant="light" className="shadow-sm">
    <Container>
      <Navbar.Brand as={NavLink} to="/">
        <img src={logo} alt="Game Grid Logo" width="100" className="me-2" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/">
            <FaHome size={20} className="me-3 text-muted" />
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/minecraft">
            <FaHammer size={20} className="me-3 text-muted" />
            Minecraft
          </Nav.Link>
          <Nav.Link as={NavLink} to="/design">
            <FaBuilding size={20} className="me-3 text-muted" />
            Domein
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
