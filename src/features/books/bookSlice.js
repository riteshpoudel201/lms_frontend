import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    books:[],
    publicBooks:[],
    book: {},
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
        },
        setSingleBook: (state, action) => {
            state.book = action.payload;
        }
    }
})

const { reducer, actions} = bookSlice;

export const { setBooks, setPublicBooks, setSingleBook } = actions;
export default reducer;