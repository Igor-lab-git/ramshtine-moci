import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllUsers = createAsyncThunk('users/filedfetch', async() => {
    const respons = await fetch('https://mocki.io/v1/5e4768bc-3571-4a82-8653-1284e42b0c7d');
    return await respons.json();
  }

)   