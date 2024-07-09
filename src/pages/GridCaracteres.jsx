import { useEffect, useState } from "react"
import { getApi } from "../utils/conexionAPI"
import { Card } from "../components/Card"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"

export const GridCaracteres = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {

        getApi("/v1/public/characters").then((data) => {
            setCharacters(data.results)
        })
    }, [])
    return (

        <div className="charactersGrid">
            <Container className="d-flex felx-colum">
                <Row>
                    <Row className="d-flex">
                        {characters.map((character) => (
                            <Col md="3" key={character.id}>
                                <Link to={`/Characters/${character.id}`}>
                                    <Card key={character.id} cardContent={character} />
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Row>
            </Container>
        </div>
    )
}

/* {characters.map((character) => (
    <Link to={`/Characters/${character.id}`}>
        <Card key={character.id} cardContent={character} />
    </Link>
))} */