import { useState } from 'react';

type UseCounterProps = {
  initialState?: number;
};

function useCounter({ initialState = 0 }: UseCounterProps = {}) {
  const [count, setCount] = useState(initialState);

  const decrement = () => setCount((prevState) => prevState - 1);
  const increment = () => setCount((prevState) => prevState + 1);
  return { count, decrement, increment };
}

export default useCounter;
