import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  // receive value from store
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();



  const increment = () => {
    dispatch({type: 'INCREMENT'});
  }

  const decrement = () => { 
    dispatch({type: 'DECREMENT'});
  }

  const addValue = () => {
    dispatch({type: 'ADDVALUE', payload: 10});
  }

  return (
    <div className="App"> 
        <h1>Counter App: </h1>
        <h2>{counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={addValue}>Add Value</button>
    </div>
  );
}

export default App;
