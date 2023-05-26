import { createSlice } from "@reduxjs/toolkit";


// initial state
const initialState = [
    {id: '1', title: 'Learn Redux', content: 'Learn Redux toolkit'},
    {id: '2', title: 'Learn Redux toolkit', content: 'Learn Redux toolkit'},
]

const postsSlice = createSlice({
    name: 'posts',
    initialState, // initial data
    reducers: {
        postAdded(state, action) {
            state.push(action.payload); // payload is form data
        }
    }
})


export const selectAllPosts = (state) => state.posts; // return all posts

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
