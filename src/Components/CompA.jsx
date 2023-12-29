import {Auth} from "../AppContextProvider";
import CompB from "./CompB";

const CompA = ()=>{
    const {setUserName}  = Auth();
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