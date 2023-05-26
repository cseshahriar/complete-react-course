import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { 
    increment, decrement, reset, incrementByAmount 
}  from './counterSlice';

// component
const Counter = () => {  
    // We can read data from the store with useSelector
    const count = useSelector((state) => state.counter.count)

    // dispatch actions using useDispatch (চালান/সম্পাদন)
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset); // action broadcast
    }

    return (
        <section>
            <p>{ count }</p>
            <div>
                <button className='btn btn-primary' onClick={() => dispatch(increment())}>Increment</button>
                <button className='btn btn-danger ms-2' onClick={() => dispatch(decrement())}>Decrement</button>
                
                <input className='form-control mt-2 mb-2' type="number" value={incrementAmount} 
                    onChange={(e) => setIncrementAmount(e.target.value)} />
            

                <button className='btn btn-primary' onClick={() => dispatch(resetAll())}>Reset</button>
                <button className='btn btn-danger ms-2' onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
            </div>
        </section>
    );
};

export default Counter;
