import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const Checkout = () => {
  const { cart } = useContext(CartContext);

  const getOrder = () => {
    const order = {
      buyer: {
        name: 'Daniela genaro',
        email: 'dani@hotmail.com',
        tel: 15589290,
      },
      items: cart,
    };

    console.log(order);
  };
  return (
    <div>
      <h2>Resumen de compra</h2>
      <hr />
      <button onClick={getOrder}>Finalizar compra</button>
    </div>
  );
};
