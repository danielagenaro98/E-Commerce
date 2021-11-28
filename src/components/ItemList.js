import Item from './Item';
import classes from './ItemList.module.scss';

const ItemList = ({ items }) => {
  return (
    <div className={classes.container}>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default ItemList;
