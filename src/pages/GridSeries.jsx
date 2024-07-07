import { useEffect, useState } from "react"
import { getApi } from "../utils/conexionAPI"
import { Card } from "../components/Card"


export const GridSeries = () => {

    const [series, setSeries] = useState([])

    useEffect(() => {

        getApi("/v1/public/series").then((data) => {
            setSeries(data.results)
        })

    },[])
    return (
        
        <div className="comicsGrid">
            {series.map((serie) => (
                <Card key={serie.id} cardContent={serie} />
            ))}
        </div>
    )
}