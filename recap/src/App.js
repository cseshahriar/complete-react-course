import logo from './logo.svg';
import './App.css';

// component is reusable 
function App() {
  return (
    <div className="App">
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

    </div>
  );
}

// component
function Nayok() {
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px',
    padding: '20px'
  }

  return <div style={nayokStyle}>
    <h1>Ami Khol Nayak</h1> 
    <p>I have done 5 movies</p>
  </div> 
}

export default App;
