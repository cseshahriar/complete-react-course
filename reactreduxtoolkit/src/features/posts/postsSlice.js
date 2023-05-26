import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

// initial state
const initialState = [
    {id: '1', title: 'Learn Redux', content: 'Learn Redux toolkit', date: sub(new Date(), { minutes: 10}).toISOString()},
    {id: '2', title: 'Learn Redux toolkit', content: 'Learn Redux toolkit', date: sub(new Date(), { minutes: 10}).toISOString()},
]

const postsSlice = createSlice({
    name: 'posts',
    initialState, // initial data
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload); // payload is form data
            },
            prepare(title, content, userId, date) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toDateString(),
                        userId
                    }
                }
            }
        }
    }
})
  

export const selectAllPosts = (state) => state.posts; // return all posts

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
