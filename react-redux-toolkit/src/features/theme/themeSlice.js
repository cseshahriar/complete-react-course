import { createSlice } from '@reduxjs/toolkit'

// state names
const initialState = { color: '', }

export const themeSlice = createSlice({
    name: 'theme', // name
    initialState,
    reducers: {
        changeTextColor: (state, action) => {
            console.log('called')
            state.color = action.payload
        },
    },
})

// reducer functions
export const { changeTextColor } = themeSlice.actions

export default themeSlice.reducer