import { useEffect, useState } from "react"
import { getApi } from "../utils/conexionAPI"
import {CardComicComponent} from "../components/CardComicComponent"


export const GridComics = () => {


    useEffect(() => {

        getComics()

    }, [])
    const [comics, setComics] = useState([])

    const getComics = async () => {
        const respuesta = await getApi("/v1/public/comics")
        const { data } = await respuesta.json()

        setComics(data.results)
    }
    console.log(comics);
    return (


        <div className="comicsGrid">
            {comics.map((comic) => (
                <CardComicComponent key={comic.id} cardContent={comic} />
            ))}
        </div>
    )
}