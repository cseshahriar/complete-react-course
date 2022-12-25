// import { createStore } from 'redux';

// // Reducer Manage the state and Return the newly updated state.
// // counter reducer
// const reducerFn = (state={counter: 0}, action) => {
//     // synchronously function
//     // we should not muted the original state
//     if(action.type === 'INCREMENT') {
//         return {counter: state.counter + 1 }
//     } else if(action.type === 'DECREMENT') {
//         return {counter: state.counter - 1 }
//     } else if(action.type === 'ADDVALUE') {
//         return {counter: state.counter + action.payload}
//     }

//     return state;
// }

// // create store
// const store = createStore(reducerFn);
// export default store;


// redux toolkit
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increment(state, action) {
            state.counter++;
        },
        decrement(state, action) {
            state.counter--;
        },
        addValue(state, action) {
            state.counter += action.payload
        }
    }
});


export const actions = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;
