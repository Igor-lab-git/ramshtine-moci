import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProduct = createAsyncThunk('product/fetch', async() => {
    const respons = await fetch('https://mocki.io/v1/1bf55cca-5e47-4363-a8f8-0b8cdb3583ae');
    return respons.json();
  }

) 