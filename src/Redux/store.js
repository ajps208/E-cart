import {configureStore} from "@reduxjs/toolkit"
import wishlist from "./Slice/wishlist"
const store=configureStore({
    reducer:{
        wishlistReducer:wishlist

    }
})
export default store
