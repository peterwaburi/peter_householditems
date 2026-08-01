import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import BrandLogo from "../branding/BrandLogo";
import PrimaryButton from "../ui/PrimaryButton";
import "../../styles/navbar.css";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="bluewave-navbar"
      collapseOnSelect
      sticky="top"
      bg="white"
      variant="light"
    >
      <Container>

        <Navbar.Brand as={Link} to="/">
          <BrandLogo />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navbar"
          className="border-0 shadow-none"
        />

        <Navbar.Collapse id="main-navbar">

          <Nav className="mx-auto">

            <Nav.Link
              as={NavLink}
              to="/"
              end
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/services"
            >
              Services
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/shop"
            >
              Shop
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
            >
              About
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
            >
              Contact
            </Nav.Link>

          </Nav>

          <div className="nav-action">
            <PrimaryButton>
              Book a Service
            </PrimaryButton>
          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;