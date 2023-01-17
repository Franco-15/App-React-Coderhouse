import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar({ drinks, cartLength }) {
  const categoriesRepeat = drinks.map((drink) => drink.category);
  const categories = [...new Set(categoriesRepeat)];

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand href="">
            <img
              className="logo"
              src="https://res.cloudinary.com/dgk9fa4rw/image/upload/v1669930264/ImgAppReact/img/MDQ_Bebidas-r_atpaka.png"
              alt="logo"
            />
          </Navbar.Brand>
        </Link>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {categories.map((category) => {
              return (
                <Link
                  className="catLinks"
                  key={category}
                  to={`/category/${category}`}
                >
                  {category}
                </Link>
              );
            })}
          </Nav>
          <Nav className="navbarCartWidget">
          <Nav.Link href="">
            <CartWidget  cartLength={cartLength}/>
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
