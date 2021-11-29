import Item from './Item';
import classes from './ItemList.module.scss';

const ItemList = ({ items }) => {
  return (
    <div className={classes.container}>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;
