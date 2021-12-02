import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db } from '../firebase/config';
import ItemList from './ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, 'productos');
    const q = id
      ? query(productosRef, where('category', '==', id))
      : productosRef;

    getDocs(q)
      .then((resp) => {
        const products = resp.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setItems(products);
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
