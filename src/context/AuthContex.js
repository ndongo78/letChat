import React,{useContext,useEffect,useState} from 'react';
import { useHistory } from 'react-router';
import { auth } from '../services/Firebase';

const AuthContext=React.createContext()

export const useAuth=()=>useContext(AuthContext)

export const AuthProvider=({children})=>{
    const [loading, setloading] = useState(true)
    const [user, setuser] = useState(null)
    const history=useHistory()

    useEffect(() => {
        auth.onAuthStateChanged((user)=>{
            setuser(user)
            setloading(false)
            if(user)history.push('/chat') 
               
          
            
            
        })
    }, [user,history])

    const value={user}

    return(
        <AuthContext.Provider value={value}>
            {
                !loading && children
            }
        </AuthContext.Provider>
    )

}
