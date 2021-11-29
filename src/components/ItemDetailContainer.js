import { useEffect, useState } from 'react';
import { getItem } from '../helpers/getData';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getItem(1).then((resp) => {
      setItem(resp);
    });
  }, []);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
