import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './ItemDetailContainer.css';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function ItemDetailContainer({ drinks }) {
    const [quantify, setQuantify] = useState(1)
    
    const incrCant = () => setQuantify(quantify + 1)
    const decrCant = () => setQuantify(quantify - 1)

    useEffect(()=>{
        setQuantify(1);
    },[])

    let itemId = useParams();
    const item = drinks.find((drink) => drink.id === itemId.itemId);
    return (
        <div className='bodyDetail'>
            <Card className='cardDetail'>
                <div className='imgBox'>
                    <Card.Img className='imgDetail' variant="top" src={item.img.src} alt={item.img.alt} />
                </div>
                <Container className='containerDetail'>
                    <Card.Body>
                        <Card.Title>{item.name.toUpperCase()}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className='listDescriptionItem'>{`Tipo: ${item.category.charAt(0).toUpperCase() + item.category.slice(1)}`}</ListGroup.Item>
                        <ListGroup.Item className='listDescriptionItem'>{`Precio: $${item.price}`}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body className='quantify'>
                        <Button variant="primary" disabled={quantify===1} onClick={decrCant}>-</Button>
                        <div className='logQuantify'>{quantify}</div>
                        <Button variant="primary"  onClick={incrCant}>+</Button>
                    </Card.Body>
                    <Card.Body className='buttonDetail'>
                        <Button variant="primary">Agregar al carrito</Button>
                    </Card.Body>
                </Container>
            </Card>
        </div>

    );
}

export default ItemDetailContainer;