import classes from './ItemCount.module.scss';
import useCounter from './useCounter';

const ItemCount = ({ limit, initial }) => {
  const { counter, increment, decrement } = useCounter(initial, limit);

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
    </div>
  );
};

export default ItemCount;
