import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

// initial state
const initialState = [
    {
        id: '1', 
        title: 'Learn Redux', 
        content: 'Learn Redux toolkit',
        date: sub(new Date(), { minutes: 10}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: '2',
        title: 'Learn Redux',
        content: 'Learn Redux',
        date: sub(new Date(), { minutes: 5}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState, // initial data
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload); // payload is form data
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if(existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})
  

export const selectAllPosts = (state) => state.posts; // return all posts

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
