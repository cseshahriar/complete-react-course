import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

const Counter = () => {
    // access reducer
    const count = useSelector((state) => state.counter.count) // state.slice.name
    // call reducer action function
    const dispatch = useDispatch()

    return (
        <div className="d-flex justify-content-around">
            <button className='btn btn-sm btn-primary' onClick={ () => dispatch(increment()) }>Increment Value</button>
            <button className='btn btn-sm btn-primary ms-1'
                    onClick={ () => dispatch(incrementByAmount(10)) }
            > Increment by 10</button>

            <p style={{margin: '10px'}}>Count {count}</p>

            <button className='btn btn-sm btn-primary' onClick={ () => dispatch(decrement()) }
            >Decrement Value</button>
        </div>
    );
};

export default Counter;