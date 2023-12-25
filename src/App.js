import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function App() {
    const number = useSelector((state) => state.number);
    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch();
    return (

        <div className="App">
            {number}
            <br/>
            <button onClick={() => {
                dispatch({
                    type: 'inc',
                })
            }}>Increment by 01
            </button>
            <button onClick={
                () => {
                    dispatch({
                        type: 'dec',
                    })
                }
            }>Decrement by 01
            </button>
            <br/>
            <input value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}/>
            <button onClick={()=>{
                dispatch({
                    type:'inc_by_number',
                    payload:parseInt(userInput),
                })
            }}>Increment</button>
            <button onClick={
                ()=>{
                    dispatch({
                        type:'dec_by_number',
                        payload:parseInt(userInput),
                    })
                }
            }>Decrement</button>
        </div>

    );
}

export default App;
