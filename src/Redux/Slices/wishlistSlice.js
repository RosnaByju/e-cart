import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        // actions-add ,remove

        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        deleteItem:(state,action)=>{
          return state.filter(item=>item.id!==action.payload)
        }
       

    }
})
export const {addToWishlist,deleteItem,removeCart}=wishlistSlice.actions
export default wishlistSlice.reducer