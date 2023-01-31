import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function NavBar() {
  const { products:drinks } = useContext(CartContext);
  const categoriesRepeat = drinks.map((drink) => drink.category);
  const categories = [...new Set(categoriesRepeat)];
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              className="logo"
              src="https://res.cloudinary.com/dgk9fa4rw/image/upload/v1669930264/ImgAppReact/img/MDQ_Bebidas-r_atpaka.png"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="navCollapse" id="responsive-navbar-nav">
          <Nav className="me-auto">
            {categories.map((category) => {
              return (
                <Link
                  className="catLinks"
                  to={`/category/${category}`}
                  key={category}
                >
                  {category}
                </Link>
              );
            })}
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
