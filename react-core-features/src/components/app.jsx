import React, {Component} from "react";

class App extends Component { // class base/stateful, smart component
    // component have to layer 1. data 2. representation

    // 1.Data and logic layer (optional)
    /**
    * 1. State
    * 2. Variable or Properties
    * 3. Function or Methods
    * 4. Life Cycle methods
    */

    // 2.Representation
    /**
    * 5. JSX
    */
    render() {
        // JSX is a React extension to the JavaScript language syntax which provides a way to structure component rendering using syntax familiar to many developers. It is similar in appearance to HTML. 
        // React extension to the JavaScript
        // JSX stands for JavaScript XML.
        // JSX makes it easier to write and add HTML in React.
        // we can write html and js both easier


        // js version
        // return React.createElement('div', {className: 'App'}, [
        //     React.createElement('h1', null, 'What is JXS?'),
        //     React.createElement('p', null, "JSX is asesome and it's means javascript extension")
        // ])
        
        
        // jsx version
        return(
            <div className="App">
                <h1>What is JSX?</h1>
            </div>
        ) 
    }
}

export default App;

// there are two different components
// 1. class base component
// 2. function base component


// functional component has no data layer
// functional component
// functional component is also called dump component
// only for view then use functional component
// functioal component use when make ui generation no logic
function MyFunctionBaseComponent() {
    const name = "shahriar";
    return <h1>Hello React, You are awesome {{ name }}</h1>
}

const AnotherFunctionalComponent = () => {
    <h1>Hello React, You are awesome</h1>
}