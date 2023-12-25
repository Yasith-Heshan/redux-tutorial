import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {numberDecrement, numberIncrement} from "./store/store";

function App() {
    const number = useSelector((state) => state.number);
    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch();
    return (

        <div className="App">
            {number}
            <br/>
            <button onClick={() => {
                dispatch(numberIncrement())
            }}>Increment by 01
            </button>
            <button onClick={
                () => {
                    dispatch(numberDecrement())
                }
            }>Decrement by 01
            </button>
            <br/>
            <input value={userInput} onChange={(e)=>{setUserInput(e.currentTarget.value)}}/>
            <button onClick={()=>{
                dispatch(numberIncrement(parseInt(userInput)))
            }}>Increment</button>
            <button onClick={
                ()=>{
                    dispatch(numberDecrement(parseInt(userInput)))
                }
            }>Decrement</button>
        </div>

    );
}

export default App;
