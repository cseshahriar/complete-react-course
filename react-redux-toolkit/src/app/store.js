import { configureStore } from "@reduxjs/toolkit";

// counter reducer
import counterReducer from '../features/counter/counterSlice'
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer, // counter
        theme: themeReducer
    }
})