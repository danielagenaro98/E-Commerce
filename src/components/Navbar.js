import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';

import classes from './Navbar.module.scss';

const Navbar = (props) => {
  return (
    <header className={classes.container}>
      <Link to="/">
        <h2 className={classes.brand}>{props.brand}</h2>
      </Link>
      <div className={classes['nav-container']}>
        <nav>
          <ul className={classes.list}>
            <li>
              <Link className={classes.item} to="/category/frutosSecos">
                Frutos Secos
              </Link>
            </li>
            <li>
              <Link className={classes.item} to="/category/mixes">
                Mixes
              </Link>
            </li>
            <li>
              <Link className={classes.item} to="/">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <Link className={classes.item} to="/cart">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
