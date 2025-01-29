import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    book:{},
}
 const bookSlice = createSlice({
    name:"book",
    initialState,
    reducers:{
        setBooks:(state, action)=>{
            state.book = action.payload;
        }
    }
})

const { reducer, actions} = bookSlice;

export const { setBooks } = actions;
export default reducer;