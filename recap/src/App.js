import './App.css';
import React, {useEffect, useState} from 'react';

// component is reusable 
function App() {
  const [users, setUsers] = useState([]);

  // data load 
  useEffect(() => { // auto call
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(error => console.log(error));
  }, []);


  
  // country api fetch
  const [countries, setCountries] = useState([]);

  useEffect(() => { 
    fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(
      data => {
        setCountries(data)
      }
    )
    .catch(error => console.log(error));
  }, [])



  return (
    <div className="App">
      <header className="App-header">
      {
        users.map(user => <Nayok name={user.name} age={user.age} key={user.id}></Nayok>)
      }
        
        {/* <Nayok name='Sakib' age='20'></Nayok>
        <Nayok name='Salman' age=''></Nayok> */}
        
        <MovieCounter></MovieCounter>
        
        <h1>Country loaded: {countries.length}</h1>
        {
          countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
        }
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

function Country(props) {

  const countryStyle = {
    border: '2px solid purple',
    margin: '20px',
    padding: '20px',
    width:"400px",
  }
  const flagStyle = {
    width: "250px",
    header: "100px"
  }
  // destructuring
  const {name, population, region, flag} = props.country
  // console.log(props.country);
  
  return <div style={countryStyle}>
    <h5>This is a {name}</h5>
    <img src={flag} alt={name} style={flagStyle} />
    <p>Population: {population}</p>
    <p>Region: {region}</p>

  </div>
}


export default App;