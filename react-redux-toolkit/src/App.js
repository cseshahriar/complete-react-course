import React from "react";
import './App.css';

import Counter from './features/counter/Counter';
import Coin from "./features/coin/Coin";
import Theme from "./features/theme/Theme";
function App() {

    return (
        <div className="App">
          <header className="App-header">
              <h1>React Redux Toolkit</h1>
              <Counter />
              <Coin />
              <Theme />
          </header>
        </div>
    );
}

export default App;
