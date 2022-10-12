import React, {Component} from "react";
import Profile from "./profile/index";
// import Skills from './profile/Skills';

import MyProps from './props';

const MyComponent = () => <h1>My Component</h1>;

class Child extends React.Component {
    render() {
        this.props.func(this)
        return <h1>I am child component</h1>
    }
}

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

    // function pass child component
   getContext(context) {
       console.log(context);
   }
   
   render() {
        this.getContext(this); 
    
        return (
            <div>
                <Profile/>
                {/*  
                <div style={{marginTop:'30px', marginBottom: '30px'}}>
                    <h3 style={{marginBottom: '20px'}}>List of Programmers</h3>
                    <MyProps name="Shahriar Hosen"/>
                    <MyProps name="Shorna"/>
                </div>
                 */}
                 <h1>Pass function as a props</h1>
                 <Child func={this.getContext}/>
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