import logo from './logo.svg';
import './App.css';

function App() {
  // variables
  var name ="Shahriar";
  // objects
  var person = {
    name: "Shahriar",
    job: "Programmer",
    age: 29,
  }

  var style = {
    color: 'green',
    fontSize: '60px',
    border: '1px solid green',
    padding: '15px',
    borderRadius: '5px',
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>

        <h1  style={style}>My first react heading</h1>
        <p style={{backgroundColor: 'cyan', color: 'black', padding:'10px', borderRadius: '5px'}}>
          My first react paragraph
        </p>
        <p>Expression { 2 + 3}</p>
        <p>Expression {(2+5)*25+65}</p>
        <p>Name { name }</p>
        <p>Name {person.name}, Job {person.job}, Age {person.age}</p>
        
        <Person></Person>
        <Person></Person>

      </header>
    </div>
  );
  
  // function component
  function Person() {
    const personStyle = {
      border: '2px solid green',
      margin: '10px',
      padding: '10px'
    }

    return <div style={{border: '1px solid green', padding: '10px', margin: '10px'}}>
      <h1 style={personStyle}>Name: Person Component</h1>
      <h3>Hero of the year</h3>
    </div> 
  };

}

export default App;
