import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./ItemDetailContainer.css";
import { Container } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { getProductById } from "../db/api-firabase";
import Loading from "./Loading";

function ItemDetailContainer() {
  const { addItemCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [drink, setDrink] = useState({});
  const [loading, setLoading] = useState(true);
  const incrCant = () => {
    setQuantity(quantity + 1);
  };
  const decrCant = () => {
    setQuantity(quantity - 1);
  };

  let id = useParams();

  useEffect(() => {
    getProductById(id.itemId)
      .then((data) => {
        setDrink(data.data());
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  console.log(drink);

  return (
    <div className="bodyDetail">
      {loading ? (
        <Loading />
      ) : drink ? (
        <Card className="cardDetail">
          <div className="imgBox">
            <Card.Img
              className="imgDetail"
              variant="top"
              src={drink.img.src}
              alt={drink.img.alt}
            />
          </div>
          <Container className="containerDetail">
            <Card.Body>
              <Card.Title>{drink.name.toUpperCase()}</Card.Title>
              <Card.Text>{drink.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="listDescriptionItem">{`Tipo: ${
                drink.category.charAt(0).toUpperCase() + drink.category.slice(1)
              }`}</ListGroup.Item>
              <ListGroup.Item className="listDescriptionItem">{`Precio: $${drink.price}`}</ListGroup.Item>
            </ListGroup>
            <Card.Body className="selectQuantify">
              <Card.Text className="selectQuantifyText">Cantidad:</Card.Text>
              <Card.Body className="quantity">
                <Button
                  className="selectQuantifyButton"
                  variant="primary"
                  disabled={quantity === 1 || drink.stock === 0}
                  onClick={decrCant}
                >
                  -
                </Button>
                <div className="logQuantify">{quantity}</div>
                <Button
                  className="selectQuantifyButton"
                  variant="primary"
                  disabled={quantity === drink.stock || drink.stock === 0}
                  onClick={incrCant}
                >
                  +
                </Button>
              </Card.Body>
              <Card.Text className="selectQuantifyText">
                {drink.stock && drink.stock <= 5
                  ? `¡Ultimas ${drink.stock} unidades!`
                  : `Stock: ${drink.stock}`}
              </Card.Text>
            </Card.Body>
            <Card.Body className="buttonDetail">
              <Button
                disabled={drink.stock === 0}
                variant="primary"
                onClick={() => {
                  addItemCart({ ...drink, quantity: quantity, id: id.itemId });
                }}
              >
                {drink.stock ? "Agregar al carrito" : "Sin stock"}
              </Button>
            </Card.Body>
          </Container>
        </Card>
      ) : (
        <div className="notFound">Producto no encontrado!</div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
