import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import classes from './Navbar.module.scss';

const Navbar = (props) => {
  return (
    <header className={classes.container}>
      <h2 className={classes.brand}>{props.brand}</h2>
      <div className={classes['nav-container']}>
        <nav>
          <ul className={classes.list}>
            <li>
              <a className={classes.item} href="/">
                Productos
              </a>
            </li>
            <li>
              <a className={classes.item} href="/">
                Nosotros
              </a>
            </li>
            <li>
              <a className={classes.item} href="/">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <ShoppingCartIcon sx={{ color: 'white', fontSize: 25 }} />
      </div>
    </header>
  );
};

export default Navbar;
