import { createSlice } from "@reduxjs/toolkit";
import { getAllProduct } from "./thunk";


interface IData {
    id: number;
    name: string;
    email: string;
}

interface IState {
    data: IData[];
    loading: boolean;
    error: string | null;
}

const initialState: IState = {
    data: [],
    loading: false,
    error: null,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllProduct.pending, (state) => {
            state.loading = true
        })
        .addCase(getAllProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getAllProduct.rejected, (state, action) => {
            state.loading = true;
            state.error = action.error.message || 'Faled to fetch';
        })
    }
});

export const productReducer = productSlice.reducer;