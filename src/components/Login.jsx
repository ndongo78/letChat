import {AiOutlineGoogle,FiFacebook} from 'react-icons/all'
import 'firebase/compat/app'
import firebase from 'firebase/compat/app'
import { auth } from '../services/Firebase'



const Login = () => {
    return (
        <div id='login-page'>
            <div id='login-card'>
                <h2>Bienvenue au letchat</h2>
            
            <div className='login-button google' onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                <AiOutlineGoogle size={30} /><span>Se connecter avec Google</span> 
            </div>
            <br /> <br />
            <div className='login-button facebook'  onClick={()=>auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
                <FiFacebook size={30} /><span >Se connecter avec Facebook</span> 
            </div>
            </div>
        </div>
    )
}

export default Login
