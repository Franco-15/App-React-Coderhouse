import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';


function NavBar(){
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href=""><img className='logo' src='https://res.cloudinary.com/dgk9fa4rw/image/upload/v1669930264/ImgAppReact/img/MDQ_Bebidas-r_atpaka.png' alt='logo'/></Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="">Vinos</Nav.Link>
                <Nav.Link href="">Cervezas</Nav.Link>
                <Nav.Link href="">Aperitivos</Nav.Link>
                <Nav.Link href="">Bebidas Blancas</Nav.Link>
                <Nav.Link href="">Energizantes</Nav.Link>
                <Nav.Link href="">Sin Alcohol</Nav.Link>
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