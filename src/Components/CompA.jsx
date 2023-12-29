import CompB from "./CompB";
import {Auth} from "../AppContextProvider";


const CompA = ()=>{
    const {setUserName} = Auth();
    return (
      <>
        <input onChange={(e)=>{
            setUserName(e.target.value)
        }}/>
          <CompB/>
      </>
    );
}

export default CompA