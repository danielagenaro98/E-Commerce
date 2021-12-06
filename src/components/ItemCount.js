import classes from './ItemCount.module.scss';

const ItemCount = ({ counter, increment, decrement, handleAddCart }) => {
  return (
    <div className={classes.container}>
      <div className={classes['count-container']}>
        <button className={classes['count-btn']} onClick={decrement}>
          -
        </button>
        <input
          className={classes['count-input']}
          type="text"
          value={counter}
          onChange={() => counter}
        />
        <button className={classes['count-btn']} onClick={increment}>
          +
        </button>
      </div>
      <br />
      <button className={classes.btn} onClick={handleAddCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
