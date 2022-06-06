import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Topper = () => {
  return (
    <div className="bg-light p-5 rounded-lg" id="jumbotron">
      <Container>
        <Row>
          <Col md={6} className="align-self-center">
            <Link to="/">
              <img
                src="images/Phantasia.jpg"
                alt="Phantasia Logo"
                height="150"
              ></img>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Topper;
