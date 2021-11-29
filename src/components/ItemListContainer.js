import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getData } from '../helpers/getData';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getData()
      .then((resp) => {
        if (id) {
          setItems(resp.filter((el) => el.category === id));
        } else {
          setItems(resp);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>{loading ? <h2>Cargando productos..</h2> : <ItemList items={items} />}</>
  );
};

export default ItemListContainer;
