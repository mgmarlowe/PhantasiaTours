import { Col, Container, Row } from "react-bootstrap";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

const Home = () => {
  return (
    <>
      <div>
        <div
          className="bg-light p-5 rounded-lg min-vh-100 text-center m-0 d-flex flex-column justify-content-center"
          id="homeJumbo"
        >
          <h2 id="homeName" className="">
            Phantasia
          </h2>
          <h2 className="homeTag">.</h2>
          <h2 className="homeTag">.</h2>
          <h2 className="homeTag">The only</h2>
          <h2 className="homeTag">limit</h2>
          <h2 className="homeTag">is your</h2>
          <h2 className="homeTag">imagination...</h2>
        </div>
      </div>
      <Header />
      <Container>
        <Row className="mt-5">
          <Col className="text-center">
            <h3>Why us?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pretium, orci et elementum ornare, elit erat cursus nisl, ut
              tempus justo magna eget dui. Suspendisse potenti. Cras a ligula
              turpis. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec eu varius neque. Mauris
              interdum finibus magna, vel porttitor erat tincidunt eu. Integer
              sed erat metus. Fusce eu convallis felis.
            </p>
          </Col>
          <Col className="text-center">
            <h3>Travel at Your Leisure</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pretium, orci et elementum ornare, elit erat cursus nisl, ut
              tempus justo magna eget dui. Suspendisse potenti. Cras a ligula
              turpis.
            </p>
          </Col>
          <Col className="text-center">
            <h3>Hassle-Free</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pretium, orci et elementum ornare, elit erat cursus nisl, ut
              tempus justo magna eget dui. Suspendisse potenti. Cras a ligula
              turpis. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec eu varius neque. Mauris
              interdum finibus magna, vel porttitor erat tincidunt eu. Integer
              sed erat metus. Fusce eu convallis felis. In vel purus id urna
              iaculis tempus.
            </p>
          </Col>
        </Row>
      </Container>
      {/* TODO: Featured section: Region, Tour, and Blog post. */}
      <Footer />
    </>
  );
};

export default Home;
