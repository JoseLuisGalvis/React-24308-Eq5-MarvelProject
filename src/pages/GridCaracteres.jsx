import { useEffect, useState } from "react"
import { getApi } from "../utils/conexionAPI"
import {CardCharacterComponent} from "../components/CardCharacterComponent"


export const GridCaracteres = () => {


    useEffect(() => {

        getCharacters()

    }, [])
    const [characters, setCharacters] = useState([])

    const getCharacters = async () => {
        const respuesta = await getApi("/v1/public/characters")
        const { data } = await respuesta.json()

        setCharacters(data.results)
    }
    //console.log(characters[0].thumbnail);
    return (


        <div className="charactersGrid">
            {characters.map((character) => (
                <CardCharacterComponent key={character.id} cardContent={character} />
            ))}
        </div>
    )
}
//   setCharacters(getCharactersAxios("/v1/public/characters"))  