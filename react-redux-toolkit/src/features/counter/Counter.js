import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

const Counter = () => {
    // access reducer
    const count = useSelector((state) => state.counter.count)
    // call reducer method
    const dispatch = useDispatch()

    return (
        <div className="d-flex justify-content-around">
            <button className='btn btn-sm btn-primary' onClick={ () => dispatch(increment()) }>Increment Value</button>

            <p style={{margin: '10px'}}>Count {count}</p>

            <button className='btn btn-sm btn-primary' onClick={ () => dispatch(decrement()) }
            >Decrement Value</button>
        </div>
    );
};

export default Counter;