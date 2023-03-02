import { createSlice } from '@reduxjs/toolkit'

// state names
const initialState = { count: 0, }

export const counterSlice = createSlice({
    name: 'counter', // name
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            if(state.count !== 0) {
                state.count -= 1
            }
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        },
    },
})

// reducer functions
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer