import { forwardRef } from 'react';
import { Container, Row, Col } from "reactstrap";
import {Card} from "./Card";
import PropTypes from 'prop-types';
import '../App.css';

const SectionCopy = forwardRef(function Section({ id, title, cardsContent }, ref) {
  function handleNavigation(sectionId) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop,
        behavior: "smooth"
      });
    }
  }

  return (
    <div ref={ref} id={id}>
      <Container className="d-flex flex-column">
        <Row>
          <Col md="12" >
            <h2>{title}</h2>
          </Col>
        </Row>
        <Row className="d-flex">
          {cardsContent.map((cardContent) => (
            <Col md="3" key={cardContent.id}>
              <Card cardContent={cardContent} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col md="12" className="text-right">
            <div>
                <button className="btn btn-ligth mt-4 stylebutton" onClick={() => handleNavigation("inicio")}>
                  Ir al Inicio
                </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

SectionCopy.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SectionCopy;

