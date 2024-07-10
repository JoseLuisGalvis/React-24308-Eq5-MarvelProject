import { useState } from "react";
import { Container, Navbar, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import '../App.jsx';
import "../App.css";

const CustomNavbar = () => {
  const [activeSection] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Navbar className="navbar w-100 custom-navbar" expand="lg">
        <NavbarToggler onClick={toggle} className="custom-toggler" />
        <Collapse isOpen={isOpen} navbar className="text-white">
          <Nav className="d-flex justify-content-center w-100">
            <NavItem className={activeSection === "inicio"? "active" : ""}>
              <span className="nav-link" onClick={() => navigate("/")}>
                <p>Inicio</p>
              </span>
            </NavItem>
            <NavItem className={activeSection === "comics"? "active" : ""}>
              <span className="nav-link text-white" onClick={() => navigate("/Comics")}>
                <p>Comics</p>
              </span>
            </NavItem>
            <NavItem className={activeSection === "movies"? "active" : ""}>
              <span className="nav-link text-white" onClick={() => navigate("/Characters")}>
                <p>Characters</p>
              </span>
            </NavItem>
            <NavItem className={activeSection === "characters"? "active" : ""}>
              <span className="nav-link text-white" onClick={() => navigate("/Series")}>
                <p>Series</p>
              </span>
            </NavItem>
            <NavItem className={activeSection === "footer"? "active" : ""}>
              <span className="nav-link text-white" onClick={() => navigate("/Contacto")}>
                <p>Contacto</p>
              </span>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default CustomNavbar;