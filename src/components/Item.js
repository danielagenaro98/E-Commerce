import classes from './Item.module.scss';

const Item = ({ item }) => {
  return (
    <div className={classes.container}>
      <div className={classes.information}>
        <h2 className={classes.name}>{item.nombre}</h2>
        <p className={classes.size}>Cantidad: {item.cantidad}</p>
        <p className={classes.price}>Precio: ${item.precio}</p>
      </div>
      <button>Ver mas</button>
    </div>
  );
};

export default Item;
