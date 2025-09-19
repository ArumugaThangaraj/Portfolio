import "../App.css";
import { Navbar, Nav, Container } from "react-bootstrap";


const MyNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="c-navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle className="toggle-btn" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
