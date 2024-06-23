import { useState } from "react";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  Modal,
  Button,
  Alert,
} from "reactstrap";
import marvelLogo from '/images/marvel.jpeg';
import '../App.css';

const CustomNavbarSuperior = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleMouseEnter = () => setIsOpen(true);

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 5000);
    return () => clearTimeout(timer);
  };

  return (
    <Container id="inicio">
      <Nav className="navbar-superior d-flex justify-content-between ml-auto">
        <NavItem>
          <NavLink href="#inicio">Log In | Join</NavLink>
        </NavItem>
        <NavItem className="logo">
          <NavLink
            href="#inicio"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={marvelLogo} 
              alt="Marvel Logo"
              height="60"
              style={{ cursor: "pointer" }}
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#inicio">Marvel Unlimited</NavLink>
        </NavItem>
      </Nav>

      {/* Modal */}
      <Modal isOpen={isOpen} toggle={toggle} centered>
        <div className="modal-header">
          <h5 className="modal-title">Welcome!</h5>
          <button type="button" className="close" onClick={toggle}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <Alert color="info">You are in the Wonderful World of MARVEL</Alert>
        </div>
        <div className="modal-footer">
          <Button color="primary" onClick={toggle}>
            Close
          </Button>{" "}
        </div>
      </Modal>
    </Container>
  );
};

export default CustomNavbarSuperior;
