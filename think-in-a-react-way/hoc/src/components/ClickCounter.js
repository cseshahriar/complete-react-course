import React, {Component} from 'react';
import withCounter from "./HOC/withCounter";

const ClickCounter = ({count, incrementCount}) => {
    return (
        <div style={{padding:'15px'}}>
            <button type="button" onClick={incrementCount}>Clicked {count} times</button>
        </div>
    );
}

export default  withCounter(ClickCounter);