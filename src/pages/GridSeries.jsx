import { useEffect, useState } from "react"
import { getApi } from "../utils/conexionAPI"
import {CardSerieComponent} from "../components/CardSerieComponent"


export const GridSeries = () => {


    useEffect(() => {

        getSeries()

    }, [])
    const [series, setSeries] = useState([])

    const getSeries = async () => {
        const respuesta = await getApi("/v1/public/series")
        const { data } = await respuesta.json()

        setSeries(data.results)
    }
    console.log(series);
    return (


        <div className="comicsGrid">
            {series.map((serie) => (
                <CardSerieComponent key={serie.id} cardContent={serie} />
            ))}
        </div>
    )
}