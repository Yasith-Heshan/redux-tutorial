import {useContext} from "react";
import {UserContext} from "../App";

const CompB = ()=>{
    const {userName}  = useContext(UserContext);

    return (
        <>
            <p>{userName}</p>
        </>
    )
}

export default CompB;
