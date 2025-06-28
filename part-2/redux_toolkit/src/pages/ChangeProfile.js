import { useState } from "react";
import {AppContext} from "../Forms-demo";
import { useContext } from "react";


export const ChangeProfile = (props)=> {
        const {setUserName} = useContext(AppContext);
    const [newUsername,setNewUserName] = useState("");

    return (<div>
        <input onChange={(event)=> {
            setNewUserName(event.target.value);
        }} />
        <button onClick={()=>{setUserName(newUsername)}}>Change Username</button>
    </div>
    )


}