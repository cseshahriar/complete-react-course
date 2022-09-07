import React from 'react';

function Country(props) {
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
    console.log('props', props);
    // parent to child
    const handleAddCountry = props.handleAddCountry
    
    // destructuring
    const {name, population, region, flag} = props.country
    
    return <div style={countryStyle}>
      <h5>This is a {name}</h5>
      <img src={flag} alt={name} style={flagStyle} />
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
    </div>
  };

  export default Country;