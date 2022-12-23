import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './ItemDetailContainer.css';
import { Container } from 'react-bootstrap';

function ItemDetailContainer({ drinks }) {
    let itemId = useParams();
    const item = drinks.find((drink) => drink.id === itemId.itemId);
    return (
        <div className='bodyDetail'>
            <Card className='cardDetail'>
                <Card.Img className='imgDetail' variant="top" src={item.img.src} alt={item.img.alt} />
                <Container className='containerDetail'>
                    <Card.Body>
                        <Card.Title>{item.nombre.toUpperCase()}</Card.Title>
                        <Card.Text>
                            {item.descripcion}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className='listDescriptionItem'>{`Tipo: ${item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1)}`}</ListGroup.Item>
                        <ListGroup.Item className='listDescriptionItem'>{`Precio: $${item.precio}`}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body className='buttonDetail'>
                        <Button variant="primary">Agregar al carrito</Button>
                    </Card.Body>
                </Container>
            </Card>
        </div>

    );
}

export default ItemDetailContainer;