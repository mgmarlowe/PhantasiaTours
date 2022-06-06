import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <Container>
          <Row>
            <Col className="text-center">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="#">Story Info</Link>
                </li>
                <li>
                  <Link to="#">Booksellers</Link>
                </li>
                <li>
                  <Link to="#">Creator Pages</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
              </ul>
            </Col>
            <Col className="text-center">
              <h5>Find Us</h5>
              <a href="https://github.com/mgmarlowe/Phantasia">
                <GoMarkGithub className="fs-2" />
              </a>
              <a href="https://www.linkedin.com/in/melyssa-marlowe-8798a0211/">
                <GrLinkedin className="fs-2 ms-3" />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
