import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    books:[],
    publicBooks:[],
}
 const bookSlice = createSlice({
    name:"books",
    initialState,
    reducers:{
        setBooks:(state, action)=>{
            state.books = action.payload;
        },
        setPublicBooks:(state, action) =>{
            state.publicBooks = action.payload;
        }
    }
})

const { reducer, actions} = bookSlice;

export const { setBooks, setPublicBooks } = actions;
export default reducer;