import ItemCount from './ItemCount';
import classes from './Item.module.scss';
import { useNavigate } from 'react-router';

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();

  const handleback = () => {
    navigate(-1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.information}>
        <h2 className={classes.name}>{item.nombre}</h2>
        <p className={classes.size}>Cantidad: {item.cantidad}</p>
        <p className={classes.price}>Precio: ${item.precio}</p>
      </div>
      <div>
        <ItemCount limit={10} initial={0} />
      </div>
      <button>Agregar al carrito</button>
      <br />
      <br />
      <button onClick={handleback}>Volver</button>
    </div>
  );
};

export default ItemDetail;
