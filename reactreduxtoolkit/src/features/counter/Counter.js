import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement }  from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counterReducer.count)
    const dispatch = useDispatch();

    return (
        <section>
            <p>{ count }</p>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </section>
    );
};

export default Counter;
