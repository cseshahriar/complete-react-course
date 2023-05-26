import { configureStore } from '@reduxjs/toolkit';

// import resources
import counterReducer  from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';

// store
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer
    },
})
