import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:{},
}
 const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUsers:(state, action)=>{
            state.user = action.payload;
        }
    }
})

const { reducer, actions} = userSlice;

export const { setUsers } = actions;
export default reducer;