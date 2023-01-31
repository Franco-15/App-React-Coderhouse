import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { warning } from "../toast";

function Form() {
  const { generateOrder } = useContext(CartContext);
  let email = "";
  let emailRepeat = "";

  const handleChangeEmail = (e) => {
    email = e.target.value;
    console.log(email);
  };

  const handleChangeEmailRepeat = (e) => {
    emailRepeat = e.target.value;
    console.log(emailRepeat);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (email === emailRepeat) {
      generateOrder();
    } else {
      warning("Los emails no coinciden. Intente nuevamente");
    }
  };

  return (
    <form className="formFields" onSubmit={handleSubmit}>
      <input className="formField" type="text" placeholder="Nombre" required />
      <input
        className="formField"
        type="text"
        placeholder="Apellido"
        required
      />
      <input
        className="formField"
        type="number"
        placeholder="Telefono"
        required
      />
      <input
        className="formField"
        type="email"
        onChange={handleChangeEmail}
        placeholder="Email"
        required
      />
      <input
        className="formField"
        type="email"
        onChange={handleChangeEmailRepeat}
        placeholder="Repetir email"
        required
      />
      <Button className="formField" variant="primary" type="submit">
        Confirmar compra
      </Button>
    </form>
  );
}

export default Form;
