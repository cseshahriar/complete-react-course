import React, {Component} from 'react';
import "./Event.css";

class EventComponent extends Component {
    
    // click event handlers
    handleButtonClick = (event) => {
        console.log(event);
        console.log('button clicked');
    }

    handleInputClick = (event) => {
        console.log(event.target.value);
    }

    render() {
        return(
            <div>
                <h1>Event in react</h1>
                <button onClick={this.handleButtonClick}>Click Me</button>

                <input onChange={this.handleInputClick} type="text" placeholder='Please enter'/> 
            </div>
        );
    }
}

export default EventComponent;