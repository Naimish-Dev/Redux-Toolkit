import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//**  this methode use to data used more then one component 
//**  so we directly fetch data here and sotre data and also use anywhere in project 


// useing this methode we can not chang Propaty of array like Statuses.ERROR = "Success"
// use anyehere by export  to check fetchdata Status
export const Statuses = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
})

const ProductSlice = createSlice({

    name: "Product",
    initialState: {
        data: [],
        status: Statuses.IDLE
    },
    // reducers: {
    //     //  we can`t call api(request make sideeffect so that)from here because reducer is syncronase pure function
    //     // we used  Thunks for request apis (it`s called middleware)
    //     setProduct(state, action) {
    //         state.data = action.payload
    //     },

    //     setStatus(state, action) {
    //         state.status = action.payload
    //     }
    // },

   // second approch reducer 
    extraReducers:(builder)=>{
builder
    .addCase(fetchProducts.pending,(state,action)=>{
        state.status = Statuses.LOADING 
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
        state.status = Statuses.IDLE
        state.data =action.payload 
    })
    .addCase(fetchProducts.rejected ,(state,action)=>{
        state.status = Statuses.ERROR 
    })
    }




})

export const { setProduct, setStatus } = ProductSlice.actions
export default ProductSlice.reducer;

// // two types to used Thunks, its a one tiypes of funtion
// // 1 
// // we also pass parameters fetchProducts=(get parameter from call this function)

// export const fetchProducts = () => {

//     // it return one function 
//     // they have two parameteres like Usedispatch 2.=> parameter whis pass throw parent function  
//     return async function fetchproductThunks(dispatch, getState) {
//         // const props = getState().params
//         dispatch(setStatus(Statuses.LOADING))
//         try {
//             const RowData = await fetch("https://fakestoreapi.com/products");
//             const RealData = await RowData.json()
            
//             dispatch(setProduct(RealData))
//             dispatch(setStatus(Statuses.IDLE))
//         }catch(e){
//             console.log(e)
//          dispatch(setStatus(Statuses.ERROR))
//         }
//     }
// }


// 2 approct
// create for bater Error hendler 

 export const fetchProducts=createAsyncThunk('products/fetch',async ()=>{
     const RowData = await fetch("https://fakestoreapi.com/products");
     const RealData = await RowData.json()
     return RealData
 });
