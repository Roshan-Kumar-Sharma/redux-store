import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootState } from './app/store';
import { increment, decrement } from './app/counterSlice';

function App() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-6xl font-bold mb-8">{counter}</div>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
