import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  borrow: [],
};
const bookSlice = createSlice({
  name: "borrow",
  initialState,
  reducers: {
    setBorrow: (state, action) => {
      state.books = action.payload;
    },
  },
});

const { reducer, actions } = bookSlice;

export const { setBorrow } = actions;
export default reducer;
