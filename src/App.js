import './App.css';
import CompA from "./Components/CompA";
import {createContext, useState} from "react";

export const UserContext = createContext({});
function App() {
    const [userName, setUserName] = useState('');

    return (
        <UserContext.Provider value={{userName,setUserName}}>
            <div className="App">
                <CompA/>
            </div>
        </UserContext.Provider>
    );
}

export default App;
