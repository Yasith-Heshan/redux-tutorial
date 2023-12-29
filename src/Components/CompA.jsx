import CompB from "./CompB";
import {useContext} from "react";
import {UserContext} from "../App";

const CompA = ()=>{
    const {setUserName}  = useContext(UserContext);
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