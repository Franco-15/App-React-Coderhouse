import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom"

function NavBar({ drinks }) {

  const categoriesRepeat = drinks.map((drink) => drink.tipo);
  const categories = [...new Set(categoriesRepeat)];

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to='/'>
            <Navbar.Brand href=""><img className='logo' src='https://res.cloudinary.com/dgk9fa4rw/image/upload/v1669930264/ImgAppReact/img/MDQ_Bebidas-r_atpaka.png' alt='logo' /></Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            {categories.map((category) => {
              return (
                <Link className='catLinks' key={category} to={`/category/${category}`}>{category}</Link>
              )
            })}
          </Nav>
          <Nav>
            <Nav.Link href=""><CartWidget /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;