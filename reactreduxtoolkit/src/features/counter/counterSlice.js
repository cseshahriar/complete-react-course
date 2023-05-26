import { createSlice } from "@reduxjs/toolkit";
/*
Redux Slices​
A "slice" is a collection of Redux reducer logic and actions for a single feature 
in your app, typically defined together in a single file. The name comes 
from splitting up the root Redux state object into multiple "slices" of state.
*/

const initialState = {
    count: 0
}

// reducer logic
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // actions
        increment: (state) => { // receive state
            state.count += 1
        },
        decrement: (state) => {
            if(state.count > 0) {
                state.count -= 1
            }
        },
        reset: (state) => {
            state.count = 0
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

export  const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;