import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    customerCount:0,
    customerList:[],
}
const custormerSlice = createSlice(
    {
        name: 'customer',
        initialState,
        reducers:{
            addNewCustomer:(state,action)=>{
                state.customerCount+=1;
                state.customerList = [...state.customerList,action.payload]
            },
            removeCustomer:(state,action)=>{
                state.customerCount-=1;
                state.customerList = state.customerList.filter(item=>item!==action.payload);
            }
        }
    }
)

export const {addNewCustomer, removeCustomer} = custormerSlice.actions;
export default custormerSlice.reducer;