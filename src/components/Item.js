import ItemCount from './ItemCount';
import classes from './Item.module.scss';

const Item = ({ item }) => {
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
    </div>
  );
};

export default Item;
