import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {actions} from './store/index';

import './App.css';


function App() {
  // receive value from store
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();



  const increment = () => {
    dispatch(actions.increment());
  }

  const decrement = () => { 
    dispatch(actions.decrement());
  }

  const addValue = () => {
    dispatch(actions.addValue(10));
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
