import { configureStore } from "@reduxjs/toolkit";

// counter reducer
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer, // counter
    }
})