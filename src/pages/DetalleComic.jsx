// DetalleComic.js
import { useState, useEffect } from "react";
import { getApi } from "../utils/conexionAPI";
import { useParams } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

export const DetalleComic = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getApi(`/v1/public/comics/${comicId}`)
      .then((data) => {
        setComic(data.results[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [comicId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container className="detalle-comic">
      <Row>
      <Col md="4" className="mb-4 col-md-12">
          <Card className="h-100">
            <CardImg top src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
            <CardBody>
              <CardTitle tag="h5">{comic.title}</CardTitle>
              <CardText>{comic.description}</CardText>
              <CardText>
                <strong>Fecha de publicación:</strong> {comic.dates[0].date}
              </CardText>
              <CardText>
                <h5>Creators:</h5>
                <ul>
                  {comic.creators.items.map((creator) => (
                    <li key={creator.resourceURI}>{creator.name}</li>
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