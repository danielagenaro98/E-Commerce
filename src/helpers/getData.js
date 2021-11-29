import { stock } from '../data/stock';

export const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 1000);
  });
};

export const getItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock.find((el) => el.id === id));
    }, 1000);
  });
};
