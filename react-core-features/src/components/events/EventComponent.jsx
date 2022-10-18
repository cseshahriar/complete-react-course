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
    state = { // v-model
        name: 'Shahriar Hosen' 
    }

    render() {
        return(
            <div>
                <h1>Event in react</h1>
                <button onClick={this.handleButtonClick}>Click Me</button>
                
                
                {/* must on change for input with state */}
                <input onChange={this.handleInputClick} type="text" placeholder='Please enter' value={this.state.name}/> 
                {/**  two way data binding */}
                <p>{this.state.name}</p>

            </div>
        );
    }
}

export default EventComponent;