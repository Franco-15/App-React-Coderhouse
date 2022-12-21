import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link}from "react-router-dom"

function NavBar(){
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href=""><img className='logo' src='https://res.cloudinary.com/dgk9fa4rw/image/upload/v1669930264/ImgAppReact/img/MDQ_Bebidas-r_atpaka.png' alt='logo'/></Navbar.Brand>
              <Nav className="me-auto">
                <Link to="vinos">Vinos</Link>
                <Link to="cervezas">Cervezas</Link>
                <Link to="aperitivos">Aperitivos</Link>
                <Link to="bebidasBlancas">Bebidas Blancas</Link>
                <Link to="energizantes">Energizantes</Link>
                <Link to="sinAlcohol">Sin Alcohol</Link>
              </Nav>
              <Nav>
                <Nav.Link href=""><CartWidget/></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
}

export default NavBar;