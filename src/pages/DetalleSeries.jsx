import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card as RCard, CardImg, CardBody, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import { getApi } from "../utils/conexionAPI"

export const DetalleSeries = () => {
  const { serieId } = useParams();
  const [serie, setSerie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getApi(`/v1/public/series/${serieId}`)
   .then((data) => {
        setSerie(data.results[0]);
        setLoading(false);
      })
   .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [serieId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container className="comicsGrid" id="detalle-serie">
      <Row>
        <Col md="4" className="mb-4 col-md-12">
          <RCard className="h-100">
            <CardImg top src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`} alt={serie.name} height={"100%"} />
            <CardBody>
              <CardTitle tag={"h5"}>{serie.name || serie.title}</CardTitle>
              <CardText>{serie.description || serie.variantDescription || serie.endYear}</CardText>
            </CardBody>
          </RCard>
        </Col>
      </Row>
    </Container>
  );
};