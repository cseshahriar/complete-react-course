import React from 'react';

import { useSelector, useDispatch } from 'react-redux'

const Coin = () => {
    // access reducer
    const count = useSelector((state) => state.counter.count)


    return (
        <div>
            <span >Coin Count: { count }</span>
        </div>
    );
};

export default Coin;