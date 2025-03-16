import {  createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "./thunk";

export interface Users  {
    id: number,
    name: string,
    email: string;
}

export interface UserData {
    data: Users[];
    loading: boolean;
    error: string | null;
}

const initialState: UserData = {
    data: [],
    loading: false,
    error: null,
};


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllUsers.pending, (state) => {
            state.loading = true;
        })
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getAllUsers.rejected, (state, action) => {
            state.loading = true;
            state.error = action.error.message || 'Failed to fetch';
        })
    }
})

export const userReduser = userSlice.reducer;