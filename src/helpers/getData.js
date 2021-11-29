import { stock } from '../data/stock';

export const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 2000);
  });
};

export const getItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock.find((el) => el.id === id));
    }, 2000);
  });
};
