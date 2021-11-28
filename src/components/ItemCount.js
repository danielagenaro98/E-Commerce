import { useState } from 'react';

import classes from './ItemCount.module.scss';
import useCounter from './useCounter';

const ItemCount = ({ limit, initial }) => {
  const { counter, increment, decrement } = useCounter(initial);

  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="count-btn">
        Producto
      </label>
      <div className={classes['count-container']}>
        <button
          className={classes['count-btn']}
          onClick={counter > 0 && decrement}
        >
          -
        </button>
        <input className={classes['count-input']} type="text" value={counter} />
        <button
          className={classes['count-btn']}
          onClick={counter < limit && increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
