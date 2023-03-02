import React, { useState } from "react";
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if(count !==0 ) {
            setCount(count - 1);
        }
    }

    return (
        <div className="App">
          <header className="App-header">
              <h1>React Redux Toolkit</h1>
              <div className="d-flex justify-content-around">
                  <button className='btn btn-sm btn-primary' onClick={increment}>Increment Value</button>

                  <p style={{margin: '10px'}}>{count}</p>

                  <button className='btn btn-sm btn-primary' onClick={decrement}
                  >Decrement Value</button>
              </div>
          </header>
        </div>
    );
}

export default App;
