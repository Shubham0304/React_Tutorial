
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
export const Navbar = () => {

    return (
        <div>
            <Link to="/"> Home </Link>
            <Link to="/login"> Login </Link>
            <div>
                <h1>Logged In User is : </h1>
                <p> {auth.currentUser?.displayName}</p>
                <img src= {auth.currentUser?.photoURL || ""} width="100" height="100" alt='User Profile Pic'/>
            </div>
        </div>
    ) 
}