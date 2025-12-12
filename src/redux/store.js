// store.js or redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./slice/customerSlice";
import cartSlice from "./slice/cartSlice";
// // import userSlice from "./slice/userSlice";


const store = configureStore({
    reducer: {
        customer: customerSlice,
        cart: cartSlice,
        // user: userSlice // Uncomment when ready
    },
    devTools: import.meta.env.NODE_ENV !== "production",
});

export default store;
