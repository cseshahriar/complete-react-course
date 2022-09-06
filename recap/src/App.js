import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

// component is reusable 
function App() {
  // data
  const nayoks = ['Jashim', 'Deepjol', 'Bapparaz'];

  return (
    <div className="App">

      <header className="App-header">
        <Nayok name='Jasim' age='20'></Nayok>
        <Nayok name='Sakib' age='20'></Nayok>
        <Nayok name='Salman' age=''></Nayok>
        
        <MovieCounter></MovieCounter>

      </header>

    </div>
  );
}

// component
function Nayok(props) {
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px',
    padding: '20px'
  }

  return <div style={nayokStyle}>
    <h1>Ami Nayok {props.name}</h1> 
    <p>I have done 5 movies in {props.age || 30} years</p>
  </div> 
}


// component
function MovieCounter() {
  // state
  const [count, setCount] = useState(0); 

  // function
  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return <div>
    <button onClick={increment}>Add Movie</button>
    <button onClick={decrement}>Remove Movie</button>
    <h5>Numbers of movies: {count}</h5>
    <MovieDisplay count={count}></MovieDisplay>
  </div>
}

function MovieDisplay(props) {
  return <h4>Movies I have acted: {props.count} </h4>
}


export default App;


