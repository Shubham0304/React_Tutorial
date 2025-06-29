import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";

export const Login  = () => {
  const [newUsername, setNewUserName ] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);


  return (
    <h1>
      {username}
      <input onChange={(e)=> {
        setNewUserName(e.target.value)
      }}></input>
      <button onClick={() => {
        dispatch(login({username: newUsername}))
      }}>Submit Login</button>
      <button onClick={()=>{
        dispatch(logout())
      }}>Logout</button>
    </h1>

  )
}