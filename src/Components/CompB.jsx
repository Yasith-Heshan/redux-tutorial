import {Auth} from "../AppContextProvider";


const CompB = ()=>{
    const {userName} = Auth();
    return (
        <>
            <p>{userName}</p>
        </>
    )
}

export default CompB;