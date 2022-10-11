import React, {Component} from "react";

const MyComponent = () => <h1>My Component</h1>;

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
        // jsx
        const obj = {
            id:1,
            title: 'title 2'
        }
        const name = "Md Shahriar Hosen";
        const bio = <div>
            <h3>{name}</h3>
            <p>Fullstack Developer</p>
        </div>

        return (<div>
                <h1 title="title" {...obj}>Hello React, You are awesome</h1>
                <MyComponent/>
                <p>{ new Date().toDateString() }</p>
                <p>My name {name}</p>
                { bio }
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
// functional component use when make ui generation no logic
function MyFunctionBaseComponent() {
    const name = "shahriar";
    return <h1>Hello React, You are awesome {{ name }}</h1>
}

const AnotherFunctionalComponent = () => {
    <h1>Hello React, You are awesome</h1>
}