
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth';

export const Navbar = () => {

    const [user] = useAuthState(auth);

    const signUserOut = async() => {
        await signOut(auth);
    }

    return (
        <div>
            <Link to="/"> Home </Link>
            
            {!user? <Link to="/login"> Login </Link> : <Link to="/createpost"> Create Post </Link>}

            <div>
                {user && (
                <>
                    <h1>Logged In User is : </h1>
                    <p> {user?.displayName}</p>
                    <img src= {user?.photoURL || ""} width="100" height="100" alt='User Profile Pic'/>
                    <button onClick={signUserOut}>Log Out</button>
                    
                </>
                )}
                
            </div>
        </div>
    ) 
}