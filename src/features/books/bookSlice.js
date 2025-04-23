import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    books:[],
    publicBooks:[],
    book: {},
    cartItems: [],
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
        },
        setCartItems: (state, action)=>{
            state.cartItems = [...state.cartItems, action.payload]
        }
    }
})

const { reducer, actions} = bookSlice;

export const { setBooks, setPublicBooks, setSingleBook, setCartItems } = actions;
export default reducer;