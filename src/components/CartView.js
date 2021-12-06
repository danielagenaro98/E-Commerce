import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import classes from './CartView.module.scss';

const CartView = () => {
  const { cart, cartTotal, cleanCart, removeFromCart } =
    useContext(CartContext);
  return (
    <div className={classes.container}>
      {cart.length === 0 ? (
        <>
          <h2 className={classes.title}>Tu carrito esta vacio</h2>
          <Link to="/" className={classes.btn}>
            Volver
          </Link>
        </>
      ) : (
        <>
          <h2 className={classes.title}>Tu Compra</h2>
          <hr />
          {cart.map((el) => (
            <div key={el.id} className={classes.container}>
              <h3 className={classes.subtitle}>{el.nombre}</h3>
              <p className={classes.content}>Cantidad: {el.cantidad}</p>
              <p className={classes.content}>Precio: ${el.precio}</p>
              <button
                className={classes.btn}
                onClick={() => {
                  removeFromCart(el.id);
                }}
              >
                <DeleteIcon sx={{ color: 'black', fontSize: 25 }} />
              </button>
            </div>
          ))}
          <h4 className={classes.total}>Total: ${cartTotal()}</h4>
          <button onClick={cleanCart} className={classes.btn}>
            Vaciar Carrito
          </button>
          <br />
          <br />
          <Link to="/checkout" className={classes.btn}>
            Terminar mi compra
          </Link>
        </>
      )}
    </div>
  );
};

export default CartView;
