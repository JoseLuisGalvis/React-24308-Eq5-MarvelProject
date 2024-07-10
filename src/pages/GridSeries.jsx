// GridSeries.js
import { useEffect, useState } from "react";
import { getApi } from "../utils/conexionAPI";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useLocation } from "react-router-dom";

export const GridSeries = () => {
  const [series, setSeries] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getApi("/v1/public/series").then((data) => {
      setSeries(data.results);
    });
  }, [location]);

  return (
    <div className="comicsGrid" id="footer">
      <Container className="d-flex felx-colum">
        <Row>
          <Row className="d-flex">
            {series.map((serie) => (
              <Col md="3" key={serie.id}>
                <Link to={`/series/${serie.id}`}>
                  <Card key={serie.id} cardContent={serie} />
                </Link>
              </Col>
            ))}
          </Row>
        </Row>
      </Container>   
    </div>
  );
};