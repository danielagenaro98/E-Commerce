import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getItem } from '../helpers/getData';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    getItem(Number(itemId)).then((resp) => {
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
