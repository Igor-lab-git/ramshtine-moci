import { configureStore } from "@reduxjs/toolkit";
import { userReduser } from "./user/userReduser";


 const store = configureStore({
    reducer: {
        user: userReduser
    },
})

export default store;