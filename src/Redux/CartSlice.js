import { createSlice } from "@reduxjs/toolkit";


// const initialState=[];



const CartSlice=createSlice({

name:"Cart-inside ",
initialState: [],
reducers:{
    add(state,action){
        // use in useContext && Redux
       // return state:[...state, action.payload]
        state.push(action.payload)
    },

    remove(state,action){
        return state.filter((item) => item.id !== action.payload)
    },

}

})
// export action form here and inport anywhere you want use with usedispatch function 
//actions is default propaty which represent all action(function) inside of reducers
// it also create acction and reducer behind the seen
export const {add, remove}=CartSlice.actions 


export default CartSlice.reducer;