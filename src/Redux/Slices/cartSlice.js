import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        // actions-add to cart,remove cart ,increment cart, empty cart
        // add to cart
        addToCart:(state,action)=>{
            const exsitingItem=state.find(item=>item.id==action.payload.id)
            if(exsitingItem){
            //   quantity incre,price update
            exsitingItem.quantity+=1
            exsitingItem.totalprice=exsitingItem.price*exsitingItem.quantity
            }else{
                // 
                  state.push({...action.payload,quantity:1,totalprice:action.payload.price})
            }
        },
        removeItem:(state,action)=>{
             return state.filter(item=>item.id!=action.payload)
        },
        incrementItem:(state,action)=>{
            const exsitingItem=state.find(item=>item.id==action.payload.id)
            if(exsitingItem){
            //   quantity incre,price update
            exsitingItem.quantity+=1
            exsitingItem.totalprice=exsitingItem.price*exsitingItem.quantity
            }
        },
         decrementCart:(state,action)=>{
            const exsitingItem=state.find(item=>item.id==action.payload.id)
            if(exsitingItem){
            if(exsitingItem.quantity>1){
                //   quantity incre,price update
            exsitingItem.quantity-=1
            exsitingItem.totalprice=exsitingItem.price*exsitingItem.quantity
            }
            }
        },
        emptyCart:(state)=>{
            return[]
        }
    }

})



export const {addToCart,removeItem,incrementItem,decrementCart,emptyCart}=cartSlice.actions
export default cartSlice.reducer