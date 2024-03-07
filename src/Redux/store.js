import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from './slices/Wishlist'
import cartslice from "./slices/cartslice";

const store = configureStore({
    reducer:{
            wishlistReducer: wishlistSlice,
            cartReducer:cartslice
    }
})

export default store