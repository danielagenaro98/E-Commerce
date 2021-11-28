import { useEffect, useState } from 'react';
import { getData } from '../helpers/getData';
import ItemCount from './ItemCount';

import classes from './ItemListContainer.module.scss';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData().then((resp) => {
      setItems(resp);
    });
  }, []);

  return (
    <div className={classes.container}>
      <ItemCount limit={10} initial={0} />
    </div>
  );
};

export default ItemListContainer;
