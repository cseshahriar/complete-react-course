import logo from './logo.svg';
import './App.css';

// component is reusable 
function App() {
  // data
  const nayoks = ['Jashim', 'Deepjol', 'Bapparaz'];

  return (
    <div className="App">
      <Nayok name='Jasim' age='20'></Nayok>
      <Nayok name='Sakib' age='20'></Nayok>
      <Nayok name='Salman' age=''></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

export default App;
