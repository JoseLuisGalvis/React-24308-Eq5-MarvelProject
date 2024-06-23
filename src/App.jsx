import { useEffect, useRef } from "react";
import CustomNavbarSuperior from "./components/CustomNavbarSuperior";
import CustomNavbar from "./components/CustomNavbar";
import MarvelView from "./components/MarvelView";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';

const App = () => {
  
  const comicsRef = useRef(null);
  const moviesRef = useRef(null);
  const charactersRef = useRef(null);

  useEffect(() => {
    AOS.init({
      disable: false,
      offset: 200,
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <CustomNavbarSuperior />
      <CustomNavbar

        comicsRef={comicsRef}
        moviesRef={moviesRef}
        charactersRef={charactersRef}

      />
      <MarvelView />
      <Section
        id="comics"
        ref={comicsRef}
        data-aos="fade-right"
        title="Comics"
        cards={[
          {
            image: { src: "/images/comic1.jpeg", alt: "Comic 1" },
            title: "Spiderman",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: { src: "/images/comic2.jpeg", alt: "Comic 2" },
            title: "X-Men",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: { src: "/images/comic3.jpeg", alt: "Comic 3" },
            title: "DareDevil",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: { src: "/images/comic4.jpeg", alt: "Comic 4" },
            title: "Hulk",
            text: "Lorem ipsum dolor sit amet",
          },
        ]}
      />
      <Section
        id="movies"
        ref={moviesRef}
        data-aos="fade-right"
        title="Movies"
        cards={[
          {
            image: { src: "/images/thor.jpeg", alt: "Thor" },
            title: "Movie 1",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: { src: "/images/avengers.jpeg", alt: "Avengers" },
            title: "Movie 2",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: { src: "/images/ironman.jpeg", alt: "Ironman" },
            title: "Movie 3",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: { src: "/images/capamerica.jpeg", alt: "CapAmerica" },
            title: "Movie 4",
            text: "Lorem ipsum dolor sit amet",
          },
        ]}
      />
      <Section
        id="characters"
        ref={charactersRef}
        data-aos="fade-right"
        title="Characters"
        cards={[
          {
            image: { src: "/images/spiderman.jpeg", alt: "Spiderman" },
            title: "Character 1",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: { src: "/images/xmen.jpeg", alt: "Xmen" },
            title: "Character 2",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: { src: "/images/daredevil.jpeg", alt: "Daredevil" },
            title: "Character 3",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: { src: "/images/hulk.jpeg", alt: "Hulk" },
            title: "Character 4",
            text: "Lorem ipsum dolor sit amet",
          },
        ]}
      />
      <Footer />
    </div>
  );
};

export default App;
