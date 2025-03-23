import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ui/productReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
