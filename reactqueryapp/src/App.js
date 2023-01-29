import React, {useState, useEffect } from "react";
import './App.css';
import { useQuery } from 'react-query';

const fetcher = (url) => {
    return fetch(url)
            .then(response => response.json())
}

function App() {
    const [state, setState ] = useState(false);

    const {isLoading, data, error } = useQuery(
          ['github-data', 'facebook/react'],
        () => fetcher("https://api.github.com/repos/facebook/react")
      )

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    if(error) {
        return <h2>{error}</h2>
    }

  return (
    <div className="App">
      <header className="App-header">
          <h1>React query</h1>
            <p>{ data && data.name }</p>
      </header>
    </div>
  );
}

export default App;
