import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import classes from './CartWidget.module.scss';

export const CartWidget = () => {
  const { cartLength } = useContext(CartContext);

  return (
    <div>
      <ShoppingCartIcon sx={{ color: 'white', fontSize: 25 }} />
      <span className={classes.length}>{cartLength()}</span>
    </div>
  );
};
