
import Count from './Count';
import Button from './Button';  // ✅ Import Button component

const Counter = ({count, onIncrement, onDecrement}) => {
 

  return (
    <div>
      <div
        className="p-4 h-auto flex flex-col items-center
      justify-center space-y-5 bg-white rounded shadow"
      >
        <Count count={count} />

        <div className="flex space-x-3">
          {/* Pass handler function to Button */}
          <Button handler={onIncrement}>Increment</Button>
          <Button type="danger" handler={onDecrement}>
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
