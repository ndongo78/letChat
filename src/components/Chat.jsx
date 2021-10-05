import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router'
import {ChatEngine} from 'react-chat-engine'
import { auth } from '../services/Firebase'
import { useAuth } from '../context/AuthContex'
import axios from 'axios'
import logo from "../images/logo.png"

const Chat = () => {
    const {user}=useAuth()
    const [loading, setloading] = useState(true)
   const history=useHistory()
   
   const getImage=async(url)=>{
     const response=await fetch(url)
     const data=await response.blob()
     return new File([data],"userImage.jpg",{type:'image/jpeg'})
   }

   useEffect(() => {
       if(!user){
           history.push('/')
           return
       }
       axios.get(process.env.REACT_APP_URL+'/users/me',{headers:{
             "project-id":process.env.REACT_APP_CHAT_ENGINE_KEY_ID,
             "user-name":user.email,
             "user-secret":user.uid
           }
       })
       .then(()=>{
        setloading(false)
    })
    .catch(()=>{
        let formData=new FormData()
        formData.append('email',user.email)
        formData.append('username',user.email)
        formData.append('secret',user.uid)
        getImage(user.photoURL)
         .then((avatar)=>{
             formData.append('avatar',avatar,avatar.name)

             axios.post(process.env.REACT_APP_URL+'/users',formData,{
                 headers:{
                     "private-key":process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY
                 }
             })
             .then(()=>setloading(false))
             .catch((error)=>console.log(error))
         })
    })
   }, [history,user])

    const logOut=async()=>{
            await auth.signOut()
            history.push('/')
    }

    if(!user || loading) return <div>Patience sa charge</div>

    return (
        <div className='chat-page'>
            <div className='nav-bar'>
                <div className='logo-tab'>
                    <img src={logo} alt='' className='logo-img'  /><span style={{marginTop: 15}}>Letchat</span>
                </div>
                <div onClick={logOut} className='logout-tab'>
                    se déconnecter
                </div>
            </div>
            <ChatEngine 
             heiht='calc(100vh-66)'
             projectID={process.env.REACT_APP_CHAT_ENGINE_KEY_ID}
             userName={user.email}
             userSecret={user.uid}
            
            />
        </div>
    )
}

export default Chat
