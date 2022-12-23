import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ProductCard.css';


function ProductCard({ drinkItems }) {
    const { nombre, img, id } = drinkItems;
    return (
        <Card className='productCard' style={{ width: '16rem' }}>
            <Card.Img className='cardImg' variant="top" src={img.src} alt={img.alt} />
            <Card.Body className='cardBody'>
                <Card.Title>{nombre.toUpperCase()}</Card.Title>
                <Link to={`/item/${id}`}>
                    <Button variant="primary">Comprar</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;