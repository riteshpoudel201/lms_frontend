import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  borrow: [],
  allBorrow:[],
  message:"",
  recentBorrow: [],
};
const bookSlice = createSlice({
  name: "borrow",
  initialState,
  reducers: {
    setBorrow: (state, action) => {
      state.borrow = action.payload;
    },
    setAllBorrow: (state, action) => {
      state.allBorrow = action.payload.data;
      state.message = action.payload.message;
    },
    
    setRecentBorrow: (state, action) => {
      state.recentBorrow = action.payload;
    },
    clearRecentBorrow: (state) => {
      state.recentBorrow = [];
    },
  },
});

const { reducer, actions } = bookSlice;

export const { setBorrow, setAllBorrow, setAllBorrowError, setRecentBorrow, clearRecentBorrow } = actions;
export default reducer;
