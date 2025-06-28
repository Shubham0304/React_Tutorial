import { ChangeProfile } from "./ChangeProfile";
import { useContext } from "react";
import {AppContext} from "../Forms-demo";

export const Profile = (props) => {
        const {username} = useContext(AppContext);
    return <div> Profile , Current User is {username}
     <ChangeProfile/>
     </div>
}