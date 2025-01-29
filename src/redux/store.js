import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice"
import bookReducer from "../features/users/bookSlice"
export default configureStore({
    reducer:{
        userInfo: userReducer ,
        bookInfo: bookReducer,
    }
})