import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((el) => el.id === id);
  };

  const cartLength = () => {
    return cart.reduce((acc, el) => acc + el.cantidad, 0);
  };

  const cleanCart = () => {
    setCart([]);
  };

  const cartTotal = () => {
    return cart.reduce((total, el) => total + el.precio * el.cantidad, 0);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        isInCart,
        cartLength,
        cleanCart,
        cartTotal,
        removeFromCart,
      }}
    >
      {' '}
      {children}{' '}
    </CartContext.Provider>
  );
};
