import { useEffect, useState } from "react"
import { getApi } from "../utils/conexionAPI"
import { Card } from "../components/Card"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"


export const GridSeries = () => {

    const [series, setSeries] = useState([])

    useEffect(() => {

        getApi("/v1/public/series").then((data) => {
            setSeries(data.results)
        })

    }, [])
    return (

        <div className="comicsGrid">
            <Container className="d-flex felx-colum">
                <Row>
                    <Row className="d-flex">
                        {series.map((serie) => (
                            <Col md="3" key={serie.id}>
                                <Link to={`/comics/${serie.id}`}>
                                    <Card key={serie.id} cardContent={serie} />
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Row>
            </Container>
        </div>
    )
}