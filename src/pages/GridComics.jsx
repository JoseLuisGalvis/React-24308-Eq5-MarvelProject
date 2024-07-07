import { useEffect, useState } from "react"
import { getApi } from "../utils/conexionAPI"
import { Card } from "../components/Card"


export const GridComics = () => {

    const [comics, setComics] = useState([])

    useEffect(() => {

        getApi("/v1/public/comics").then((data) => {
            setComics(data.results)
        })

    },[])
    return (


        <div className="comicsGrid">
            {comics.map((comic) => (
                <Card key={comic.id} cardContent={comic} />
            ))}
        </div>
    )
}