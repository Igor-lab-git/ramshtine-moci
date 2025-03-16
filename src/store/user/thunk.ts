import { createAsyncThunk } from "@reduxjs/toolkit";
import { Users } from "./userReduser";

export const getAllUsers = createAsyncThunk('users/filedfetch', async() => {
    const respons = await fetch('https://mocki.io/v1/5e4768bc-3571-4a82-8653-1284e42b0c7d');
    return (await respons.json()) as Users[];
  }

)   