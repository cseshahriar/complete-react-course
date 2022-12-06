import './App.css';
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
function App() {
  return (
    <div className="App">
        {/*
              Hire order component
             A higher order component is a function that takes a component as parameter and
             returns a new component
         */}

        <ClickCounter/>
        <HoverCounter/>
    </div>
  );
}

export default App;
