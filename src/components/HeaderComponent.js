import { Container, Nav, Navbar } from "react-bootstrap";
import PhantasiaLogo from "../assets/PhantasiaLogo.jpg";

const Header = () => {
  return (
    <>
      <Navbar className="sticky-top mb-5" expand="sm">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={PhantasiaLogo}
              height="50"
              width="50"
              alt="Phantasia Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/regions" className="ps-4">
                Regions
              </Nav.Link>
              <Nav.Link href="/tours" className="ps-4">
                Tours
              </Nav.Link>
              <Nav.Link href="/faqs" className="ps-4">
                FAQs
              </Nav.Link>
              <Nav.Link href="/aboutUs" className="ps-4">
                About Us
              </Nav.Link>
              <Nav.Link href="/blog" className="ps-4">
                Blog
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
