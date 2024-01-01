import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div>
      <h1>計數器: {count}</h1>
      <button onClick={handleIncrement}>增加</button>
      <button onClick={handleDecrement}>減少</button>
    </div>
  );
}

export default Counter;
