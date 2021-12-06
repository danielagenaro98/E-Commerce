import { Link } from 'react-router-dom';
import classes from './Item.module.scss';

const Item = ({ item }) => {
  return (
    <div className={classes.container}>
      <div className={classes.information}>
        <h2 className={classes.name}>{item.nombre}</h2>
        <p className={classes.size}>Cantidad: {item.cantidad}</p>
        <p className={classes.price}>Precio: ${item.precio}</p>
      </div>
      <Link to={`/detail/${item.id}`} className={classes.btn}>
        Ver mas
      </Link>
    </div>
  );
};

export default Item;
