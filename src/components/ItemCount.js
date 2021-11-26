import { useState } from 'react';

import classes from './ItemCount.module.scss';

const ItemCount = ({ limit, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleChangeValue = (value) => {
    let new_value = Number(count) + Number(value);
    if (new_value >= 0 && new_value <= Number(limit)) {
      setCount(new_value);
    }
  };

  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="count-btn">
        Producto
      </label>
      <div className={classes['count-container']}>
        <button
          className={classes['count-btn']}
          onClick={() => {
            handleChangeValue(-1);
          }}
        >
          -
        </button>
        <input className={classes['count-input']} type="text" value={count} />
        <button
          className={classes['count-btn']}
          onClick={() => {
            handleChangeValue(1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
