import { useEffect, useRef, useState } from "react";
import MarvelView from "../components/MarvelView";
import SectionCopy from "../components/SectionCopy";
import AOS from "aos";
import "aos/dist/aos.css";
import { getApi } from "../utils/conexionAPI"
import { Link } from "react-router-dom"




export const PaginaPrincipalCopy = () => {

    const comicsRef = useRef(null);
    const moviesRef = useRef(null);
    const charactersRef = useRef(null);
    
    const [characters, SetCharacters] = useState([])
    const [comics, setComics] = useState([])
    const [series, setSeries] = useState([])

    useEffect(() => {


        getApi("/v1/public/characters?limit=4").then((data) => {
            SetCharacters(data.results)
        }),
            getApi("/v1/public/comics?limit=4").then((data) => {
                setComics(data.results)
            }),
            getApi("/v1/public/series?limit=4").then((data) => {
                setSeries(data.results)
            })

        AOS.init({
            disable: false,
            offset: 200,
            duration: 1000,
        });

    }, []);

    console.log(characters)
    console.log(comics);
    console.log(series);
    return (
        <>

            <MarvelView />
            <SectionCopy
                id="comics"
                ref={comicsRef}
                data-aos="fade-right"
                title="Comics"
                cardsContent={comics}
            />
            <SectionCopy
                id="movies"
                ref={moviesRef}
                data-aos="fade-right"
                title="Personajes"
                cardsContent={characters}
            />
            <SectionCopy
                id="characters"
                ref={charactersRef}
                data-aos="fade-right"
                title="Series"
                cardsContent={series}
            />
        
            
        </>
    )
}
