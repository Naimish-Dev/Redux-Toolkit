
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";
const Store=configureStore({

    reducer :{

        // when we need to store data  first of all import useSelecter to get data from our Store and pass insid of useSelecter function with state parametar and get Rducer Data like store.cart 
        // when data update the useSelect outometacely chang and update 
        cart: CartSlice,

        // all created Slices import insid of this reducer object like this
        product:ProductSlice
    },
})


export default Store;