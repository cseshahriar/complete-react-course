import './App.css';
import {UserContextProvider} from "./components/UserContext";
import {Parent} from "./components/Example";

function App() {
  return (
      <UserContextProvider>
        <div className="App">
            <h1>Context API</h1>
            <Parent />
        </div>
      </UserContextProvider>
  );
}

export default App;