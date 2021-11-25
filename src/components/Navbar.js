import classes from './Navbar.module.scss';

const Navbar = (props) => {
  return (
    <header className={classes.container}>
      <h2 className={classes.brand}>{props.brand}</h2>
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
    </header>
  );
};

export default Navbar;
