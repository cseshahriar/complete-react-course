import React, {Component} from 'react';
import "./Event.css";

class EventComponent extends Component {
    
    // click event handlers
    handleButtonClick = (event) => {
        console.log(event);
        console.log('button clicked');
    }

    render() {
        return(
            <div>
                <h1>Event in react</h1>
                <button onClick={this.handleButtonClick}>Click Me</button>
            </div>
        );
    }
}

export default EventComponent;