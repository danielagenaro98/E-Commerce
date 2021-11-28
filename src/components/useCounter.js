import { useState } from 'react';

const useCounter = (initial = 0, limit) => {
  const [counter, setCounter] = useState(initial);

  const increment = () => {
    if (counter < limit) setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return {
    counter,
    increment,
    decrement,
  };
};

export default useCounter;
