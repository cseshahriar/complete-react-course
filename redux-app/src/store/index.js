import { createStore } from 'redux';

// Reducer Manage the state and Return the newly updated state.
// counter reducer
const reducerFn = (state={counter: 0}, action) => {
    // synchronously function
    // we should not muted the original state
    if(action.type === 'INCREMENT') {
        return {counter: state.counter + 1 }
    } else if(action.type === 'DECREMENT') {
        return {counter: state.counter - 1 }
    } else if(action.type === 'ADDVALUE') {
        return {counter: state.counter + action.payload}
    }

    return state;
}

// create store
const store = createStore(reducerFn);
export default store;