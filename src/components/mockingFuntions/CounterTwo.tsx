import React from "react";
type CounterTwoProps = {
  count: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
};

function CounterTwo({ count, handleIncrement, handleDecrement }: CounterTwoProps) {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{count}</p>
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
    </div>
  );
}

export default CounterTwo;
