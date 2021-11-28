import { useEffect, useState } from 'react';
import { getData } from '../helpers/getData';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData()
      .then((resp) => {
        setItems(resp);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>{loading ? <h2>Cargando productos..</h2> : <ItemList items={items} />}</>
  );
};

export default ItemListContainer;
