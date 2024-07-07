import { useEffect, useState } from "react"
import { getApi } from "../utils/conexionAPI"
import {Card} from "../components/Card"


export const GridCaracteres = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {

        getApi("/v1/public/characters").then((data) => {
            setCharacters(data.results)
        })
    },[])    
    return (

<div className="charactersGrid">
            {characters.map((character) => (
                <Card key={character.id} cardContent={character} />
            ))}
        </div>
    )
}
 