import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'couter',
    initialState,
    reducers: {
        // reduce methods or actions
        increment: (state) => { // receive state
            state.count += 1
        },
        decrement: (state) => {
            if(state.count > 0) {
                state.count -= 1
            }
        }
    }
})

export  const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;