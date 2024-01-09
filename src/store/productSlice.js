import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    productCount: 0,
    productList: [],
}

const productSlice = createSlice(
    {
        name: 'product',
        initialState,
        reducers: {
            addNewProduct: (state, action) => {
                console.log(action.type);
                state.productCount+=1;
                state.productList = [...state.productList,action.payload];
            },
            removeProduct:(state,action)=>{
                state.productCount-=1;
                state.productList = state.productList.filter(
                    product=> product!==action.payload
                )
            }
        }
    }
)

export const {addNewProduct,removeProduct} = productSlice.actions;
export default productSlice.reducer;