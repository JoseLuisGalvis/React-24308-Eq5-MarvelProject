import { useEffect, useState } from "react"
import { getApi } from "../utils/conexionAPI"
import { Card } from "../components/Card"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"


export const GridComics = () => {

    const [comics, setComics] = useState([])

    useEffect(() => {

        getApi("/v1/public/comics").then((data) => {
            setComics(data.results)
        })

    }, [])
    return (
        <div className="comicsGrid">
            <Container className="d-flex felx-colum">
                <Row>
                    <Row className="d-flex">
                        {comics.map((comic) => (
                            <Col md="3" key={comic.id}>
                                <Link to={`/comics/${comic.id}`}>
                                    <Card key={comic.id} cardContent={comic} />
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Row>
            </Container>
        </div>
    )
}