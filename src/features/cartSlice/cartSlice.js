import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItem:[]
    },
    reducers:{
        add: (state , action)=>{
            const existingItem = state.cartItem.find(item => item.id === action.payload.id);
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.cartItem.push({ ...action.payload, quantity: 1 });
            }
        },
        remove: (state , action)=>{
            return{
                ...state,
                cartItem:state.cartItem.filter(item => item.id !== action.payload )
            }
        },
        increment: (state, action) => {
            const itemToIncrement = state.cartItem.find(item => item.id === action.payload);
      
            if (itemToIncrement) {
              itemToIncrement.quantity += 1;
            }
          },
          decrement: (state, action) => {
            const itemToDecrement = state.cartItem.find(item => item.id === action.payload);
      
            if (itemToDecrement && itemToDecrement.quantity > 0) {
              itemToDecrement.quantity -= 1;
            }
          },
        
    },
    extraReducers : builder =>{

    }
})
export const {add , remove , increment , decrement} = cartSlice.actions
export default cartSlice.reducer