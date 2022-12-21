import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProductCard.css';

function ProductCard({ drinkItems }) {
    const { nombre, precio, descripcion, img } = drinkItems;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img className='cardImg' variant="top" src={img.src} alt={img.alt} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>
                <Card.Text>
                    {precio}
                </Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;