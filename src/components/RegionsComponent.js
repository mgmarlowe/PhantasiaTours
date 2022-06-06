import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrls";
import { selectAllRegions } from "../features/regionsSlice";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Topper from "./HeaderTopper";

const RenderRegions = ({ region }) => {
  return (
    <Card>
      <Link to={`/regions/${region.id}`}>
        <Card.Img
          variant="top"
          src={region.image}
          alt={region.name}
          width="100"
        />
        <Card.Body className="text-center">
          <Card.Title>{region.name}</Card.Title>
          <Card.Text>{region.description}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

const Regions = (props) => {
  const regions = selectAllRegions();

  return (
    <>
      <Topper />
      <Header />
      <Container>
        <Row>
          <Col className="text-center mb-4">
            <h2>Regions</h2>
            <h4>Wider areas</h4>
          </Col>
        </Row>
        <Row>
          {regions.map((region) => {
            return (
              <Col md={6} className="mb-4" key={region.id}>
                <RenderRegions region={region} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Regions;
