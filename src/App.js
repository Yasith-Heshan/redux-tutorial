import './App.css';
import CompA from "./Components/CompA";
import {AppContextProvider} from "./AppContextProvider";

function App() {

    return (
        <AppContextProvider>
            <div className="App">
                <CompA/>
            </div>
        </AppContextProvider>
    );
}

export default App;
