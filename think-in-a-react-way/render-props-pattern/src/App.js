import './App.css';
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";
function App() {
  return (
      <div className="App">
          {/* render props patterns */}
          {/*
            render props,
            ki render korbe seta bola thake, pass any function,
            render props define what will be render
          */}
          <Counter
              render={(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount}/>}
          />

          <HoverCounter
              render={(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount}/>}
          />
      </div>
  );
}

export default App;
