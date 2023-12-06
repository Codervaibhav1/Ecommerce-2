import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData, fetchElectronincs } from "./productService";

export const productSlice = createSlice({
    name:'products',
    initialState:{
        isLoading:false,
        isError:false,
        isSuccess:false,
        products:[
            // {
            //     "id": 1,
            //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            //     "price": 109.95,
            //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            //     "category": "men's clothing",
            //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            //     "rating": {
            //         "rate": 3.9,
            //         "count": 120
            //     }
            // },
        ]
    },
    reducers:{

    },
    extraReducers: (builder) =>{
     builder
     .addCase(getData.pending  , state =>{
        state.isLoading = true
     })
     .addCase(getData.fulfilled , (state , action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.products = action.payload
     })
     .addCase(getData.rejected , state =>{
        state.isError = true
     })
    }
})

export default productSlice.reducer

export const getData = createAsyncThunk('products' , async()=>{
    try {
         return await fetchData() 
    } catch (error) {
        
    }
})
const getElectronics = createAsyncThunk('electronic', async()=>{
    try {
        return await fetchElectronincs()
    } catch (error) {
        
    }
})