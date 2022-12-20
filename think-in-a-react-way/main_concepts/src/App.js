import './App.css';

function App() {
    /*
    * It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
    * JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.
    */

    const name = "Shahriar Hosen";
    const element = <h1>{name}</h1>;

    return (
        <div className="App">
          <header className="App-header">
            {element}
          </header>
        </div>
    );
}

export default App;
