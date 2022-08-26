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

  const products = [
    {name: 'Product 1', price: '100'},
    {name: 'Product 2', price: '120'},
    {name: 'Product 1', price: '130'},
  ]

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
        
        {/* props pass , props means properties, similer in component dynamic data  */} 
        <Person name="Shahriar hosen 1" age="28"></Person>
        <Person name="Shahriar hosen 2" age="29"></Person>

        <Human name="Shahriar Hosen" job="Backend Developer"></Human>
        <Human name="Shahriar Hosen" job="Web Developer"></Human>

        {/* product component */}
        <div style={{width: '100%'}}>
          <Product name="Photoshop" price="$90.00"></Product>
          <Product name="Kitkat" price="$50.00"></Product>
          <Product name="PDF Reader" price="$30.00"></Product>

          {/* loop */}

        </div>

      </header>
    </div>
  );
  
  // function component
  function Person(props) {
    const personStyle = {
      border: '2px solid green',
      margin: '10px',
      padding: '10px'
    }

    return <div style={{border: '1px solid green', padding: '10px', margin: '10px'}}>
      <h1 style={personStyle}>Name: {props.name}</h1> {/** props received */}
      <h3>Hero of the year age {props.age}</h3>
    </div> 
  };

  function Human(props) {
    return <div style={{border: '2px solid yellow', padding: '10px', margin: '10px'}}>
      <h3>Name: {props.name}</h3>
      <h3>Name: {props.job}</h3>
    </div>
  }


  function Product(props) {
    const productStyle = {
      border: '1px solid gray',
      borderRadius: '5px',
      backgroundColor: 'green',
      height: '300px',
      width: '300px',
      float: 'left',
      margin: '15px',
      padding: '15px',
    }

    // destructuring properties
    const {name, price } = products[0]
    console.log(name, price)
    
    return(
      <div style={productStyle}>
        <h3>Name: {props.name}</h3>
        <h2>Price: {props.price}</h2>
        <button>Buy now</button>
      </div>
    )
  };

}

export default App;
