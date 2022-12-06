import {Component} from 'react';

class Counter extends Component { // common component receive a render function
    state = {
        count: 0
    }
    incrementCount = () => {
        this.setState((prevState) => ({count: prevState.count + 1}));
    }
    render() {
        const {children} = this.props;
        const {count} = this.state;
        return children(count, this.incrementCount);
    }
}

export default Counter;