// DetalleCharacter.js
import { useState, useEffect } from "react";
import { getApi } from "../utils/conexionAPI";
import { useParams } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

export const DetalleCaracter = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getApi(`/v1/public/characters/${characterId}`)
      .then((data) => {
        setCharacter(data.results[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [characterId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container className="detalle-character">
      <Row>
        <Col md="4" className="mb-4 col-md-12">
          <Card className="h-100">
            <CardImg top src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            <CardBody>
              <CardTitle tag="h5">{character.name}</CardTitle>
              <CardText>{character.description}</CardText>
              <CardText>
                <strong>Comics:</strong> {character.comics.available}
              </CardText>
              <CardText>
                <h5>Series:</h5>
                <ul>
                  {character.series.items.map((serie) => (
                    <li key={serie.resourceURI}>{serie.name}</li>
                  ))}
                </ul>
              </CardText>
              <CardText>
                <h5>Stories:</h5>
                <ul>
                  {character.stories.items.map((story) => (
                    <li key={story.resourceURI}>{story.name}</li>
                  ))}
                </ul>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};