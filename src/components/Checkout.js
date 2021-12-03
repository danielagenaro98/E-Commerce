import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Timestamp, collection, addDoc } from 'firebase/firestore/lite';
import { db } from '../firebase/config';
import { Link } from 'react-router-dom';

export const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const { cart, cartTotal, cleanCart } = useContext(CartContext);

  const submitOrder = () => {
    const order = {
      buyer: {
        name: 'Daniela genaro',
        email: 'dani@hotmail.com',
        tel: 15589290,
      },
      items: cart,
      total: cartTotal(),
      date: Timestamp.fromDate(new Date()),
    };

    const ordersRef = collection(db, 'ordenes');

    addDoc(ordersRef, order).then((res) => {
      setOrderId(res.id);
      cleanCart();
    });
  };
  return (
    <div>
      {orderId ? (
        <div>
          <h2>¡Gracias por su compra!</h2>
          <br />
          <br />
          <p>Su numero de compra es: {orderId}</p>
          <br />
          <hr />
          <Link to="/">Volver al inicio</Link>
        </div>
      ) : (
        <div>
          <h2>Resumen de compra</h2>
          <hr />
          <button onClick={submitOrder}>Finalizar compra</button>
        </div>
      )}
    </div>
  );
};
