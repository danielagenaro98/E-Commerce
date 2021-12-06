import ItemCount from './ItemCount';
import classes from './Item.module.scss';
import { useNavigate } from 'react-router';
import useCounter from './useCounter';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  const { addCart, isInCart } = useContext(CartContext);

  const { counter, increment, decrement } = useCounter(0, 10);

  const navigate = useNavigate();

  const handleback = () => {
    navigate(-1);
  };

  const handleAddCart = () => {
    counter > 0 &&
      addCart({
        id: item.id,
        precio: item.precio,
        nombre: item.nombre,
        cantidad: counter,
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.information}>
        <h2 className={classes.name}>{item.nombre}</h2>
        <p className={classes.size}>Cantidad: {item.cantidad}</p>
        <p className={classes.price}>Precio: ${item.precio}</p>
      </div>
      {!isInCart(item.id) ? (
        <div>
          <ItemCount
            increment={increment}
            decrement={decrement}
            handleAddCart={handleAddCart}
            counter={counter}
          />
        </div>
      ) : (
        <Link to="/cart" className={classes.btn}>
          Terminar mi compra
        </Link>
      )}

      <br />
      <br />

      <button className={classes.btn} onClick={handleback}>
        Volver
      </button>
    </div>
  );
};

export default ItemDetail;
