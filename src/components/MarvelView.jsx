import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";


const videoSrc = '../images/MARVEL_INTRO.mp4';

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

const MarvelView = () => {
  useEffect(() => {
    AOS.init({
      disable: false,
      offset: 200,
      duration: 1000,
    });
  }, []);

  return (
    <Container >
      <Row>
        <Col md="12">
          <div style={{ position: "relative", height: "80vh" }}>
            <BackgroundVideo />
            <div
              className="vertical-center horizontal-center"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-duration="3000"
                style={{ marginBottom: 10, marginTop: -50, color: "white" }}
              >
                <h1>Marvel Universe</h1>
                <p>Welcome to the Marvel Universe!</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MarvelView;
