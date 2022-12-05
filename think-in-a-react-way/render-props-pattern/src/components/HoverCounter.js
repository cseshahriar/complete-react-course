import React from 'react';
class HoverCounter extends React.Component {
    state = {
        count: 0
    }
    incrementCount = () => {
        this.setState((prevState) => ({count: prevState.count + 1}));
    }
    render() {
        const {count} = this.state;
        return (
            <div style={{padding:'15px'}}>
                <h1 type="button" onMouseOver={this.incrementCount}>Hovered {count} times</h1>
            </div>
        );
    }
}

export default HoverCounter;