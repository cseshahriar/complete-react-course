import React, {Component} from "react";
import Profile from "./profile/index";
// import Skills from './profile/Skills';

import MyProps from './props';

const MyComponent = () => <h1>My Component</h1>;

const ChildComponent = props => (
    <div>
        <h3>I am child component</h3>
        <p>I don't know what to do</p>
        {props.children}
    </div>
)

class Child extends React.Component {
    render() {
        this.props.func(this)
        return <h1>I am child component</h1>
    }
}

const myHeaderCss = {
    color: 'blue',
    fontWeight: 700,
    fontFamily: 'Helvetica',
    fontSize: '36px'
}
const anotherHeaderCss = {
    color: 'green',
    fontWeight: 500,
    fontFamily: 'Arial',
    fontSize: '32px'
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

    // state is component self data
    
    // constructor
    constructor(props) {
        super(props)
        this.count = 0 // property
        // this.state = {
        //     count: 0
        // }
    }

    // property new style
    countProperty = 10

    state = {
        finalCount: 0,
        lotOfProperties: {},
        timerCount: 0
    };

    // function pass child component
   getContext(context) {
       console.log(context);
   }
    
    incrementCount = () => {    
        this.setState({timerCount: this.state.timerCount + 1});
    };
    
    decrementCount = () => {   
        if(this.state.timerCount > 0) {
            this.setState({timerCount: this.state.timerCount - 1 });
        } 
    };
    
    // ====================== timer ===========================================
    intervalId = null;
    startTimer = () => {
        if(this.state.timerCount > 0 && !this.intervalId) {
            this.intervalId = setInterval(() => {
                this.setState(
                    {timerCount: this.state.timerCount - 1},
                    () => {
                        if(this.state.timerCount == 0) {
                            alert('Timer Finished');
                            clearInterval(this.intervalId);
                            this.intervalId = null;
                        }
                    }
                );
            }, 1000) // update every 1 second
        }
    }

    stopTimer = () => {
        if(this.intervalId) {
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    }
    resetTimer = () => {
        this.setState({timerCount: 0});
        clearInterval(this.intervalId)
        this.intervalId = null
    }

   render() {
        this.getContext(this); 
        console.log(this.count);

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

                <ChildComponent>
                    <h2>Hello, I am from parent</h2>
                    <h4>I am child of  child component</h4>
                </ChildComponent>


                <h1>Count {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({count: this.state.count + 1});
                }}>Increment</button>

                <h1>Count {this.state.finalCount}</h1>
                <button onClick={
                    () => {
                        this.setState(prev => {
                            return {
                                finalCount: prev.finalCount + 1
                            }
                        }, () => {
                            console.log(this.state.finalCount)
                        })
                    }
                }>Increment</button>


                {/** state counter project */}
                <h1>Simple Timer</h1>
                <button onClick={this.incrementCount} style={{marginRight: '10px'}}>+</button> 
                <span>{this.state.timerCount}</span>
                <button onClick={this.decrementCount} style={{marginLeft: '10px', marginRight: '10px'}}>-</button>
                
                <button onClick={this.startTimer} style={{marginRight: '10px'}}>Start</button>
                <button onClick={this.stopTimer} style={{marginRight: '10px'}}>Stop</button>
                <button onClick={this.resetTimer} style={{marginRight: '10px'}}>Reset</button>

                {/** inline style */}
                <h1 style={myHeaderCss}>Inline style</h1>
                <h2 style={anotherHeaderCss}>Another Header Tag</h2>
                <h3 style={
                    {color: 'orange',
                    fontWeight: 500,
                    fontFamily: 'Arial',
                    fontSize: '32px'}}>Third Header</h3>
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

/**
 * There are four main method to style react app
 * - Inline
 * - CSS class
 * - CSS Module
 * - JSS(style Component)
 */