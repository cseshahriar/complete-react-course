import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "0", 
        name: "dude Lebowski", 
    },
    {
        id: "1", 
        name: "neil Young",
    },
    {
        id: "2",
        name: "Deve Gray",
    },
]

const usersSlice = createSlice(
    {
        name: 'users',
        initialState,
        reducers: {

        }
    }
)

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;