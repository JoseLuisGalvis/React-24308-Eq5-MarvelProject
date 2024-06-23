import 'react';
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  return (
    <footer id="footer" >
      <Container className="footer d-flex flex-wrap flex-md-nowrap">
        <Row className="footerRow align-items-start w-100">
          <Col xs="12" className="footer-section">
            <h4>Acerca de</h4>
            <h5 className="contactText">Curso de Especialización: React</h5>
            <h6 className="contactText">Comisión N° 24308 - Equipo N° 5</h6>
          </Col>
        </Row>
        <Row className="footerRow align-items-start w-100">
          <Col xs="12" className="footer-section text-center">
            <h4>Contacto</h4>
            <br></br>
            <h6 className="contact contactText">
              Codo a Codo 4.0 | CABA | Argentina
            </h6>
          </Col>
        </Row>
        <Row className="footerRow align-items-start w-100">
          <Col xs="12" className="footer-section redes-sociales">
            <h4>Redes Sociales</h4>
            <div>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  title="Ir a Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} size="3x" className="icon" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Ir a Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} size="3x" className="icon" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Ir a Instagram"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="3x"
                    className="icon"
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="Ir a LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="3x" className="icon" />
                </a>
              </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
