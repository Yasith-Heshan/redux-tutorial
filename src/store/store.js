import {configureStore} from "@reduxjs/toolkit";
import customerSliceReducer from './custormerSlice';
import productSliceReducer from './productSlice'

const store = configureStore(
    {
        reducer: {
            customerSlice: customerSliceReducer,
            productSlice:productSliceReducer,
        }
    }
);

export default store;