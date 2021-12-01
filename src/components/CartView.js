import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const CartView = () => {
  const { cart, cartTotal, cleanCart, removeFromCart } =
    useContext(CartContext);
  return (
    <div>
      {cart.length === 0 ? (
        <>
          <h2>Tu carrito esta vacio</h2>
          <br />
          <br />
          <Link to="/"> Volver </Link>
        </>
      ) : (
        <>
          <br />
          <h2>Tu Compra</h2>
          <br />
          <hr />
          {cart.map((el) => (
            <div key={el.id}>
              <h3>{el.nombre}</h3>
              <p>${el.precio}</p>
              <p>Cantidad: {el.cantidad}</p>
              <br />
              <button
                onClick={() => {
                  removeFromCart(el.id);
                }}
              >
                <DeleteIcon sx={{ color: 'red', fontSize: 25 }} />
              </button>
            </div>
          ))}
          <hr />
          <br />
          <h4>Total: ${cartTotal()}</h4>
          <br />
          <br />
          <button onClick={cleanCart}>Vaciar Carrito</button>
          <br />
          <br />
          <button>Terminar mi compra</button>
        </>
      )}
    </div>
  );
};

export default CartView;
