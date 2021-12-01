import ItemCount from './ItemCount';
import classes from './Item.module.scss';
import { useNavigate } from 'react-router';
import useCounter from './useCounter';

const ItemDetail = ({ item }) => {
  const { counter, increment, decrement } = useCounter(0, 10);

  const navigate = useNavigate();

  const handleback = () => {
    navigate(-1);
  };

  const handleAddCart = () => {
    console.log('Item agregado', {
      id: item.id,
      precio: item.price,
      nombre: item.name,
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
      <div>
        <ItemCount
          increment={increment}
          decrement={decrement}
          handleAddCart={handleAddCart}
          counter={counter}
        />
      </div>
      <br />
      <button onClick={handleback}>Volver</button>
    </div>
  );
};

export default ItemDetail;
