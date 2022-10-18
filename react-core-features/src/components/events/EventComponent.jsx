import React, {Component} from 'react';
import "./Event.css";

class EventComponent extends Component {
    
    // click event handlers
    handleButtonClick = (event) => {
        console.log(event);
        console.log('button clicked');
    }

    // two way data binding
    handleInputClick = (event) => {
        console.log(event.target.value);
        this.setState({ name: event.target.value });
    }
    handleFocus = (event) => {
        console.log('I am focused event');
    }
    handleBlur = (event) => {
        if(!this.state.name) {
            alert('Please enter your name');
        }
        console.log('I am blur event');
    }


    state = { // v-model
        name: '' 
    }


    render() {
        return(
            <div>
                <h1>Event in react</h1>
                <button onClick={this.handleButtonClick}>Click Me</button>
                

                {/* must on change for input with state */}
                <input 
                onChange={this.handleInputClick}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                type="text" placeholder='Please enter' value={this.state.name}/> 
                {/**  two way data binding */}
                {this.state.name && <p>Welcome {this.state.name}</p>} {/* conditional rendering */}

            </div>
        );
    }
}

export default EventComponent;