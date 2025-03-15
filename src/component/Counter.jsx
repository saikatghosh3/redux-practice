import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';  // ✅ Import Button component

const Counter = () => {
  // ✅ Set initial count to 0
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <div
        className="p-4 h-auto flex flex-col items-center
      justify-center space-y-5 bg-white rounded shadow"
      >
        <Count count={count} />

        <div className="flex space-x-3">
          {/* Pass handler function to Button */}
          <Button handler={handleIncrement}>Increment</Button>
          <Button type="danger" handler={handleDecrement}>
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
