import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Product.css';


function Product({ drinkItems }) {
    const { id, name, img} = drinkItems;
    return (
        <Card className='productCard' style={{ width: '14rem' }}>
            <Card.Img className='cardImg' variant="top" src={img.src} alt={img.alt} />
            <Card.Body className='cardBody'>
                <Card.Title>{name.toUpperCase()}</Card.Title>
                <Link to={`/item/${id}`}>
                    <Button variant="primary">Comprar</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default Product;