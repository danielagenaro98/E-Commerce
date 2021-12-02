import { collection, getDoc, doc } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db } from '../firebase/config';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    const productosRef = collection(db, 'productos');
    const docRef = doc(productosRef, itemId);
    getDoc(docRef).then((doc) => {
      setItem({ id: doc.id, ...doc.data() });
    });
  }, [itemId]);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
