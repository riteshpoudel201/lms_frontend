import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  borrow: [],
  recentBorrow: [],
};
const bookSlice = createSlice({
  name: "borrow",
  initialState,
  reducers: {
    setBorrow: (state, action) => {
      state.borrow = action.payload;
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

export const { setBorrow, setRecentBorrow, clearRecentBorrow } = actions;
export default reducer;
