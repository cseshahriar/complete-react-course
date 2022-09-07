import './App.css';
import React, {useEffect, useState} from 'react';

import {Country, } from './Country';

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


  // child to parent
  // handleAddCountry
  const handleAddCountry = (country) => {
    console.log('country added', country);
  }
  
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
        <MovieCounter></MovieCounter>
        
        <h1>Country loaded: {countries.length}</h1>
        <h4>Country added: </h4>
        {
          countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
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

function Country1(props) {
  const countryStyle = {
    border: '2px solid purple',
    margin: '10px',
    padding: '10px',
    width:"100%"
  }
  const flagStyle = {
    width: "250px",
    header: "40px"
  }
  // destructuring
  const {name, population, region, flag} = props.country
  // console.log(props.country);
  
  return <div style={countryStyle}>
    <h5>This is a {name}</h5>
    <img src={flag} alt={name} style={flagStyle} />
    <p>Population: {population}</p>
    <p>Region: {region}</p>
    <button>Add Country</button>

  </div>
}


export default App;