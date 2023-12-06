import { configureStore } from "@reduxjs/toolkit";
import productReducer from './shopSlice/productSlice'
import cartReducer from './cartSlice/cartSlice'
const store = configureStore({
    reducer:{
     products:productReducer,
     cart: cartReducer
    }
})

export default store