import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Timestamp, collection, addDoc } from 'firebase/firestore/lite';
import { db } from '../firebase/config';
import { Link } from 'react-router-dom';
import classes from './Checkout.module.scss';

export const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [values, setValues] = useState({
    nombre: '',
    email: '',
    tel: '',
  });
  const { cart, cartTotal, cleanCart } = useContext(CartContext);

  const submitOrder = (buyer) => {
    const order = {
      buyer: buyer,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.nombre.length > 4 && values.email.length > 5) {
      submitOrder(values);
    } else {
      alert('Campos inválidos');
    }
  };

  const handleValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {orderId ? (
        <div className={classes.container}>
          <h2 className={classes.title}>¡Gracias por su compra!</h2>
          <p className={classes.content}>Su numero de compra es: {orderId}</p>
          <Link to="/" className={classes.btn}>
            Volver al inicio
          </Link>
        </div>
      ) : (
        <div className={classes.container}>
          <h2 className={classes.title}>Resumen de compra</h2>
          <form onSubmit={handleSubmit} className={classes.container}>
            <input
              className={classes.content}
              type="text"
              placeholder="Nombre y apellido"
              name="nombre"
              value={values.nombre}
              onChange={handleValues}
            />
            <input
              className={classes.content}
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleValues}
            />
            <input
              className={classes.content}
              type="tel"
              placeholder="Telefono"
              name="tel"
              value={values.tel}
              onChange={handleValues}
            />
            <button type="submit" className={classes.btn}>
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
