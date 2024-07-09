import { useEffect, useRef } from "react";
import CustomNavbarSuperior from "./components/CustomNavbarSuperior";
import CustomNavbar from "./components/CustomNavbar";
//import MarvelView from "./components/MarvelView";
//import Section from "./components/Section";
import Footer from "./components/Footer";
import "./App.css";
//import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import { PaginaPrincipalCopy } from "./pages/PaginaPrincipalCopy";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { GridCaracteres } from "./pages/GridCaracteres";
import { GridComics } from "./pages/GridComics";
import { GridSeries } from "./pages/GridSeries";
import {DetalleCaracter} from "./pages/DetalleCaracter"
import {DetalleSerie} from "./pages/DetalleSeries"
import {DetalleComic} from "./pages/DetalleComic"

const App = () => {

  const comicsRef = useRef(null);
  const moviesRef = useRef(null);
  const charactersRef = useRef(null);

  /*useEffect(() => {
    AOS.init({
      disable: false,
      offset: 200,
      duration: 1000,
    });
  }, []);*/

  return (
    <div>
      <CustomNavbarSuperior />
      <CustomNavbar

        comicsRef={comicsRef}
        moviesRef={moviesRef}
        charactersRef={charactersRef}

      />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<PaginaPrincipalCopy />} />
          <Route path="/Characters" element={<GridCaracteres />} />
          <Route path="/Comics" element={<GridComics />} />
          <Route path="/Series" element={<GridSeries />} />
          <Route path="/Characters/:id" element={<DetalleCaracter/>} />
          <Route path="/Comics/:id" element={<DetalleComic/>} />
          <Route path="/Series/:id" element={<DetalleSerie/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
