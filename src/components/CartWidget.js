import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {
  const { cartLength } = useContext(CartContext);

  return (
    <div>
      <ShoppingCartIcon sx={{ color: 'white', fontSize: 25 }} />
      <span>{cartLength()}</span>
    </div>
  );
};
