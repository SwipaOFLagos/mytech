

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { PageTheme } from "../contexts/ThemeContext";
import { useContext } from "react";

function Menu() {
  // use theme context
  const { theme, toggleTheme } = useContext(PageTheme);
  console.log(theme);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>📚</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                Home
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/about" style={{ textDecoration: "none" }}>
                About
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/product" style={{ textDecoration: "none" }}>
                Product
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/blog" style={{ textDecoration: "none" }}>
                Blogs
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/register" style={{ textDecoration: "none" }}>
                Register
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                Login
              </NavLink>
            </Nav.Link>

            <div className="text-dark" onClick={toggleTheme}>
              {theme === "light" ? (
                <MdOutlineLightMode className="icon" />
              ) : (
                <MdDarkMode className="icon" />
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;