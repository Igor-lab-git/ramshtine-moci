import { configureStore } from "@reduxjs/toolkit";
import { userReduser } from "./user/userReduser";


 const store = configureStore({
    reducer: {
        users: userReduser
    },
})

export default store;