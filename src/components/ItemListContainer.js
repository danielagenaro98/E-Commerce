import ItemCount from './ItemCount';

import classes from './ItemListContainer.module.scss';

const ItemListContainer = () => {
  return (
    <div className={classes.container}>
      <ItemCount limit={10} initial={0} onAdd="" />
    </div>
  );
};

export default ItemListContainer;
