import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import bookReducer from "../features/books/bookSlice";
import cartReducer from "../features/cart/cartSlice";
import borrowReducer from "../features/borrow/borrowSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
const persistConfig = {
  key: "carts",
  storage,
};

const rootReducer = combineReducers({
  userInfo: userReducer,
  bookInfo: bookReducer,
  cartInfo: persistReducer(persistConfig, cartReducer),
  borrowInfo: borrowReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
export const persisitor = persistStore(store);
