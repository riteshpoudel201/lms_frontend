import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    books:{},
}
 const bookSlice = createSlice({
    name:"books",
    initialState,
    reducers:{
        setBooks:(state, action)=>{
            state.books = action.payload;
        }
    }
})

const { reducer, actions} = bookSlice;

export const { setBooks } = actions;
export default reducer;