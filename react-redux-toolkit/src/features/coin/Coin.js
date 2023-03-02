import React from 'react';

import { useSelector, useDispatch } from 'react-redux'

const Coin = () => {
    // access reducer
    const count = useSelector((state) => state.counter.count)
    const color = useSelector((state) => state.theme.color)

    return (
        <div>
            <span style={{color: color }}>Coin Count: { count }</span>
        </div>
    );
};

export default Coin;