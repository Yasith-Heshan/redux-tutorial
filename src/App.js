import './App.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewCustomer, removeCustomer} from "./store/custormerSlice";
import {addNewProduct, removeProduct} from "./store/productSlice";

function App() {
    const [customer, setCustomer] = useState('');
    const [product, setProduct] = useState('');
    const {customerCount,customerList} = useSelector(store=>store.customerSlice);
    const {productCount,productList} = useSelector(store=>store.productSlice);
    const dispatch = useDispatch();

    return (

        <div className="App">
           <input onChange={(e)=>setCustomer(e.target.value)}/>
            <button onClick={()=>dispatch(addNewCustomer(customer))}>Add Customer</button>
            <button onClick={()=>dispatch(removeCustomer(customer))}>Remove Customer</button>
            <h3>Number of customers:{customerCount}</h3>
            <h3>Customer List:</h3>
            <ul>
                {
                    customerList.map(
                        (customer,index)=><li key={index}>{customer}</li>
                    )
                }
            </ul>
            <br/>
            <br/>
            <input onChange={(e)=>setProduct(e.target.value)}/>
            <button onClick={()=>dispatch(addNewProduct(product))}>Add Product</button>
            <button onClick={()=>dispatch(removeProduct(product))}>Remove Product</button>
            <h3>Number of products:{productCount}</h3>
            <h3>Product List:</h3>
            <ul>
                {
                    productList.map(
                        (product,index)=><li key={index}>{product}</li>
                    )
                }
            </ul>
        </div>

    );
}

export default App;
